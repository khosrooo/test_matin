import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingTelegramButton = () => {
  const handleTelegramClick = () => {
    // Replace 'yourusername' with your actual Telegram username or channel
    window.open('https://t.me/yourusername', '_blank');
  };

  return (
    <Button
      onClick={handleTelegramClick}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-110 animate-pulse-shadow"
      aria-label="تماس با ما در تلگرام"
    >
      <Send className="h-6 w-6 animate-spin-slow" />
    </Button>
  );
};

export default FloatingTelegramButton;
