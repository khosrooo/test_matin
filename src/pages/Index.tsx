import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background dark">
      <ParticleBackground />
      <Navigation />
      <FloatingTelegramButton />
      <ChatBot />
      <main className="relative z-10 bg-background">
        <HeroSection />
        <TestimonialsSection />
        <LocationSection />
        <BookingSection />
        
        <footer className="bg-background py-8 text-center border-t border-border/30">
          <p className="font-sans text-muted-foreground">
            © ۱۴۰۳ آرامش و آسایش. تمامی حقوق محفوظ است.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
