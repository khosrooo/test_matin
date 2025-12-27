import { MapPin, Instagram, Send, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const LocationSection = () => {
  // San Francisco coordinates - replace with actual salon location
  const salonLocation = "35.7340617,51.3774949";

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Send,
      label: "Telegram",
      href: "https://t.me",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me",
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section className="relative py-16  bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
            مکان ما
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            از پناهگاه ما بازدید کنید و با ما در ارتباط باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Map */}
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-card h-[400px]">
          <div className="relative h-[400px]">
          <iframe
              src={`https://www.google.com/maps?q=${salonLocation}&hl=fa&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            </div>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-2">
                    آدرس ما
                  </h3>
                  <p className="font-sans text-muted-foreground">
                    تهران، خیابان ولیعصر
                    <br />
                    پلاک ۱۲۳، طبقه دوم
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <h4 className="font-sans font-semibold text-foreground mb-2">ساعات کاری</h4>
                <p className="font-sans text-sm text-muted-foreground">
                  دوشنبه تا شنبه: ۹ صبح - ۸ شب
                  <br />
                  یکشنبه: ۱۰ صبح - ۶ عصر
                </p>
              </div>
            </Card>

            <div>
              <h3 className="font-serif font-semibold text-2xl text-foreground mb-6 text-center">
                با ما در ارتباط باشید
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="relative overflow-hidden rounded-2xl aspect-square">
                        <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`} />
                        <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-all duration-500" />
                        <div className="relative h-full flex flex-col items-center justify-center p-4 transform group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-8 h-8 md:w-10 md:h-10 text-white mb-2 group-hover:rotate-12 transition-transform duration-500" />
                          <span className="font-sans text-xs text-white/90 group-hover:text-white transition-colors duration-300">
                            {social.label}
                          </span>
                        </div>
                        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-500" />
                      </div>
                      <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 bg-gradient-to-br ${social.color} transition-opacity duration-500 -z-10" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
