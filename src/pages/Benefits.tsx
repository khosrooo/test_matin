import { Heart, Brain, Zap, Shield, Moon, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";

const benefits = [
  {
    icon: Heart,
    title: "کاهش استرس",
    description: "کاهش سطح کورتیزول و ایجاد آرامش عمیق از طریق لمس درمانی و تکنیک‌های آرام‌بخش.",
  },
  {
    icon: Brain,
    title: "شفافیت ذهنی",
    description: "بهبود تمرکز، کاهش اضطراب و افزایش سلامت روانی کلی با ماساژ درمانی منظم.",
  },
  {
    icon: Zap,
    title: "مدیریت درد",
    description: "تسکین درد مزمن، تنش عضلانی و سفتی مفاصل از طریق تکنیک‌های درمانی هدفمند.",
  },
  {
    icon: Shield,
    title: "تقویت ایمنی",
    description: "تقویت سیستم ایمنی بدن با افزایش گردش لنفاوی و کاهش هورمون‌های استرس.",
  },
  {
    icon: Moon,
    title: "خواب بهتر",
    description: "بهبود کیفیت خواب از طریق آرامش سیستم عصبی و کاهش تنش.",
  },
  {
    icon: Sparkles,
    title: "نوسازی پوست",
    description: "افزایش گردش خون و ایجاد پوستی سالم و درخشان از طریق بهبود جریان خون و تغذیه.",
  },
];

const Benefits = () => {
  return (
    <div className="relative min-h-screen bg-background dark">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10 pt-32 pb-24 bg-background">
        <section className="relative overflow-hidden bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-serif font-semibold text-5xl md:text-6xl text-foreground mb-6">
                قدرت لمس
              </h1>
              <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
                فواید عمیق شفابخشی را که در هر جلسه در انتظار شماست، کشف کنید.
                ماساژ درمانی اثرات تحول‌آفرینی بر بدن و ذهن دارد.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index}
                    className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-card hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="mb-6 relative">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="w-8 h-8 text-primary group-hover:text-primary transition-all duration-500" />
                        </div>
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      </div>
                      <h3 className="font-serif font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Benefits;
