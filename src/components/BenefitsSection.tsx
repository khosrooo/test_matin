import { Heart, Brain, Zap, Shield, Moon, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Heart,
    title: "Stress Relief",
    description: "Reduce cortisol levels and promote deep relaxation through therapeutic touch and calming techniques.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Improve focus, reduce anxiety, and enhance overall mental wellbeing with regular massage therapy.",
  },
  {
    icon: Zap,
    title: "Pain Management",
    description: "Alleviate chronic pain, muscle tension, and joint stiffness through targeted therapeutic techniques.",
  },
  {
    icon: Shield,
    title: "Immune Boost",
    description: "Strengthen your immune system by increasing lymphatic circulation and reducing stress hormones.",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    description: "Experience improved sleep quality through relaxation of the nervous system and reduced tension.",
  },
  {
    icon: Sparkles,
    title: "Skin Renewal",
    description: "Enhance circulation and promote healthy, glowing skin through improved blood flow and nourishment.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
            The Power of Touch
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the profound healing benefits that await you with every session
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
  );
};

export default BenefitsSection;
