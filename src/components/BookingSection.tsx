import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const services = [
  { 
    name: "ماساژ سوئدی", 
    duration: "۶۰ دقیقه", 
    price: "۱,۲۰۰,۰۰۰ تومان",
    time: "۹ صبح - ۸ شب",
    description: "ماساژ ملایم و آرام‌بخش تمام بدن"
  },
  { 
    name: "ماساژ بافت عمقی", 
    duration: "۶۰ دقیقه", 
    price: "۱,۴۰۰,۰۰۰ تومان",
    time: "۹ صبح - ۸ شب",
    description: "درمان فشرده برای تنش عضلانی"
  },
  { 
    name: "سنگ درمانی گرم", 
    duration: "۹۰ دقیقه", 
    price: "۱,۸۰۰,۰۰۰ تومان",
    time: "۱۰ صبح - ۶ عصر",
    description: "سنگ‌های گرم برای آرامش عمیق"
  },
  { 
    name: "رایحه‌درمانی", 
    duration: "۷۵ دقیقه", 
    price: "۱,۵۰۰,۰۰۰ تومان",
    time: "۹ صبح - ۷ عصر",
    description: "روغن‌های اساسی برای ذهن و بدن"
  },
];

const BookingSection = () => {

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
            خدمات ما
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            ماساژ درمانی حرفه‌ای با برنامه‌ریزی انعطاف‌پذیر و قیمت‌گذاری رقابتی
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.name}
                className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {service.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-3xl text-primary mb-1">{service.price}</p>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground pt-4 border-t border-border/50">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">در دسترس: {service.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
