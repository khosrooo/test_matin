import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// RAG knowledge base about the massage center
const massageKnowledge = `
# اطلاعات مرکز ماساژ آرامش و آسایش

## خدمات ما:
1. ماساژ سوئدی - ۶۰ دقیقه - ۴۵۰,۰۰۰ تومان
   - ساعات: ۱۰:۰۰، ۱۳:۰۰، ۱۶:۰۰
   - برای آرامش عمیق و کاهش استرس

2. ماساژ بافت عمیق - ۹۰ دقیقه - ۵۵۰,۰۰۰ تومان
   - ساعات: ۱۱:۰۰، ۱۵:۰۰
   - برای درمان گرفتگی عضلات و دردهای مزمن

3. ماساژ سنگ داغ - ۷۵ دقیقه - ۵۰۰,۰۰۰ تومان
   - ساعات: ۱۰:۳۰، ۱۴:۰۰، ۱۷:۰۰
   - ترکیب گرمای سنگ‌ها با فشار ملایم

4. آروماتراپی - ۴۵ دقیقه - ۳۵۰,۰۰۰ تومان
   - ساعات: ۹:۳۰، ۱۲:۰۰، ۱۵:۳۰، ۱۸:۰۰
   - استفاده از روغن‌های معطر برای تقویت روح و جسم

## فواید ماساژ:
- کاهش استرس و اضطراب
- بهبود گردش خون
- کاهش درد عضلانی
- بهبود کیفیت خواب
- افزایش انعطاف‌پذیری
- تقویت سیستم ایمنی

## آدرس:
خیابان ولیعصر، بالاتر از میدان ونک، کوچه آرامش، پلاک ۱۲

## ساعات کاری:
شنبه تا پنج‌شنبه: ۹ صبح تا ۹ شب
جمعه‌ها: ۱۰ صبح تا ۶ عصر

## تماس:
تلگرام: @aramesh_massage
تلفن: ۰۲۱-۱۲۳۴۵۶۷۸

## نکات مهم:
- رزرو از طریق تلگرام انجام می‌شود
- لطفاً ۱۵ دقیقه قبل از نوبت حضور داشته باشید
- لغو رزرو حداقل ۲۴ ساعت قبل امکان‌پذیر است
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const systemPrompt = `شما دستیار هوشمند مرکز ماساژ آرامش و آسایش هستید. با استفاده از اطلاعات زیر به سوالات کاربران پاسخ دهید.
    
همیشه به فارسی و مودبانه پاسخ دهید. اگر سوالی خارج از حوزه خدمات ماساژ باشد، کاربر را به تماس با مرکز از طریق تلگرام راهنمایی کنید.

${massageKnowledge}

نکات پاسخگویی:
- پاسخ‌ها را کوتاه و مفید نگه دارید
- برای رزرو، کاربر را به تلگرام راهنمایی کنید
- قیمت‌ها را به تومان ذکر کنید
- همیشه دوستانه و حرفه‌ای باشید`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "محدودیت درخواست. لطفاً کمی صبر کنید." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "اعتبار سرویس تمام شده است." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "خطا در پردازش درخواست" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");
    
    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
