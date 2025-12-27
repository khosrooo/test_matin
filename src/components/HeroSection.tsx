import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background" />
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              تعادل خود را
              <span className="block font-semibold text-gold-accent">بازیابی کنید</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              هنر ماساژ درمانی را در پناهگاهی تجربه کنید که برای آرامش و نوسازی کامل شما طراحی شده است.
            </p>
            <Button 
              onClick={scrollToBooking}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-soft transition-all duration-300 hover:shadow-card hover:scale-105"
            >
              خدمات ما
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
