import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Benefits from "./pages/Benefits";
import Gallery from "./pages/Gallery";
import SubmitTestimonial from "./pages/SubmitTestimonial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/submit-testimonial" element={<SubmitTestimonial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
