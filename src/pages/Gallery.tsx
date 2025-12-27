import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  {
    src: gallery1,
    title: "اتاق درمان",
    category: "امکانات",
  },
  {
    src: gallery2,
    title: "منطقه پذیرش",
    category: "امکانات",
  },
  {
    src: gallery3,
    title: "فضای آرامش",
    category: "امکانات",
  },
  {
    src: gallery4,
    title: "ماساژ درمانی",
    category: "خدمات",
  },
  {
    src: gallery5,
    title: "سنگ درمانی گرم",
    category: "خدمات",
  },
  {
    src: gallery6,
    title: "جلسه رایحه‌درمانی",
    category: "خدمات",
  },
];

const Gallery = () => {
  return (
    <div className="relative min-h-screen bg-background dark">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10 pt-32 pb-24 bg-background">
        <section className="relative overflow-hidden bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-serif font-semibold text-5xl md:text-6xl text-foreground mb-6">
                پناهگاه ما
              </h1>
              <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
                وارد فضای آرام ما شوید که برای آرامش و نوسازی نهایی شما طراحی شده است.
                هر جزئیات برای بهبود سفر سلامتی شما ساخته شده است.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-500 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transform group-hover:scale-105 transition-transform duration-500">
                    <span className="font-sans text-xs uppercase tracking-wider text-primary mb-2 opacity-80">
                      {image.category}
                    </span>
                    <h3 className="font-serif font-semibold text-2xl text-foreground">
                      {image.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
