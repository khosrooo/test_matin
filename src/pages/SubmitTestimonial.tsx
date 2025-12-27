import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SubmitTestimonial = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    message: "",
    rating: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    toast({
      title: "از بازخورد شما متشکریم!",
      description: "نظر شما ثبت شد و به زودی بررسی خواهد شد.",
    });
    
    // Reset form
    setFormData({
      name: "",
      role: "",
      email: "",
      message: "",
      rating: 5,
    });
    
    // Redirect to home after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
              تجربه خود را به اشتراک بگذارید
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              ما دوست داریم درباره بازدید شما بشنویم. بازخورد شما به ما کمک می‌کند تا بهتر به شما خدمت کنیم.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 shadow-soft animate-fade-in-up"
          >
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  نام شما *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role" className="text-foreground font-semibold">
                  شغل/حرفه شما
                </Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="مثلاً: مربی یوگا، مدیر کسب‌وکار"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  آدرس ایمیل *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <Label className="text-foreground font-semibold">
                  امتیاز شما *
                </Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="text-3xl transition-all duration-200 hover:scale-110"
                    >
                      <span className={star <= formData.rating ? "text-gold-accent" : "text-muted-foreground/30"}>
                        ★
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  تجربه شما *
                </Label>
                <Textarea
                  id="message"
                  placeholder="درباره تجربه خود در آرامش و آسایش بگویید..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  ارسال نظر
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="px-8 py-6 border-border/50 hover:bg-background/50"
                >
                  انصراف
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SubmitTestimonial;
