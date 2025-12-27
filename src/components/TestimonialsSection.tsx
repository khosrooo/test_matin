// import { Card, CardContent } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import avatarSarah from "@/assets/avatar-sarah.jpg";
// import avatarDavid from "@/assets/avatar-david.jpg";
// import avatarEmma from "@/assets/avatar-emma.jpg";
// import avatarMichael from "@/assets/avatar-michael.jpg";
// import avatarLisa from "@/assets/avatar-lisa.jpg";
// import avatarJames from "@/assets/avatar-james.jpg";

// const testimonials = [
//   {
//     name: "سارا محمدی",
//     initials: "س م",
//     role: "علاقه‌مند به سلامتی",
//     text: "تحول‌آفرین‌ترین تجربه ماساژی که تا به حال داشته‌ام. توجه به جزئیات و مراقبت واقعی از سلامتی من از لحظه ورودم مشهود بود.",
//     rating: 5,
//     avatar: avatarSarah,
//     darkCard: false,
//   },
//   {
//     name: "داود احمدی",
//     initials: "د ا",
//     role: "مربی ورزشی",
//     text: "بعد از سال‌ها درد مزمن کمر، بالاخره در اینجا تسکین پیدا کردم. رویکرد درمانی همراه با فضای آرام، هر بازدید را به سفری شفابخش تبدیل می‌کند.",
//     rating: 5,
//     avatar: avatarDavid,
//     darkCard: true,
//   },
//   {
//     name: "مریم رضایی",
//     initials: "م ر",
//     role: "مربی یوگا",
//     text: "پناهگاهی در شهر. درمانگران ماهر و محیط آرام‌بخش، این مکان را به آیین ماهانه من برای مراقبت از خود و کاهش استرس تبدیل کرده است.",
//     rating: 5,
//     avatar: avatarEmma,
//     darkCard: false,
//   },
//   {
//     name: "محمد کریمی",
//     initials: "م ک",
//     role: "مدیر اجرایی",
//     text: "حرفه‌ای، دانا و فوق‌العاده مؤثر. از هر جلسه با احساس نوسازی و بهبودی خارج می‌شوم. به شدت به هر کسی که به دنبال ماساژ درمانی با کیفیت است توصیه می‌کنم.",
//     rating: 5,
//     avatar: avatarMichael,
//     darkCard: true,
//   },
//   {
//     name: "لیلا حسینی",
//     initials: "ل ح",
//     role: "متخصص بهداشت",
//     text: "رویکرد شخصی‌سازی شده به هر جلسه چیزی است که این مکان را متمایز می‌کند. آن‌ها واقعاً گوش می‌دهند و درمان را متناسب با نیاز بدن شما تنظیم می‌کنند.",
//     rating: 5,
//     avatar: avatarLisa,
//     darkCard: false,
//   },
//   {
//     name: "علی نوری",
//     initials: "ع ن",
//     role: "دونده ماراتن",
//     text: "از فضای دلنشین گرفته تا تکنیک تخصصی، همه چیز در این تجربه فراتر از انتظار است. هر لحظه‌اش ارزش دارد.",
//     rating: 5,
//     avatar: avatarJames,
//     darkCard: true,
//   },
// ];

// const TestimonialsSection = () => {
//   const navigate = useNavigate();
  
//   return (
//     <section className="relative py-24 md:py-32 bg-background overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
//             نظرات مشتریان ما
//           </h2>
//           <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
//             تجربیات واقعی کسانی که قدرت شفابخش درمان ما را کشف کرده‌اند
//           </p>
//         </div>

//         <div className="relative">
//           <div className="flex gap-6 overflow-x-auto py-8 -my-8 snap-x snap-mandatory custom-scrollbar">
//           {testimonials.map((testimonial, index) => (
//             <Card 
//               key={index} 
//               className={`group flex-shrink-0 w-[350px] snap-center ${testimonial.darkCard ? 'bg-foreground/10' : 'bg-card/50'} backdrop-blur-sm border-border/50 shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-500 hover:scale-110 animate-fade-in-up cursor-pointer overflow-hidden`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardContent className="p-0 relative">
//                 {/* Main content area with hover background */}
//                 <div className={`p-8 pb-6 transition-all duration-500 ${
//                   testimonial.darkCard 
//                     ? 'group-hover:bg-foreground/15' 
//                     : 'group-hover:bg-card/70'
//                 }`}>
//                   {/* Stars at top */}
//                   <div className="flex gap-1 mb-6">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <span key={i} className="text-gold-accent text-lg group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>★</span>
//                     ))}
//                   </div>
                  
//                   {/* Quote text */}
//                   <p className="font-sans text-foreground leading-relaxed italic text-lg">
//                     "{testimonial.text}"
//                   </p>
//                 </div>
                
//                 {/* Footer with different hover background */}
//                 <div className={`flex items-center gap-4 px-8 py-6 transition-all duration-500 ${
//                   testimonial.darkCard 
//                     ? 'group-hover:bg-foreground/15' 
//                     : 'group-hover:bg-card/70'
//                 }`}>
//                   <Avatar className="h-14 w-14 bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
//                     <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
//                     <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg group-hover:bg-primary/20">
//                       {testimonial.initials}
//                     </AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <h4 className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
//                     <p className="font-sans text-sm text-muted-foreground">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//           </div>
//         </div>
        
//         {/* Share Your Experience Button */}
//         <div className="text-center mt-12 animate-fade-in-up">
//           <Button
//             onClick={() => navigate("/submit-testimonial")}
//             size="lg"
//             className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-soft"
//           >
//             تجربه خود را به اشتراک بگذارید
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;



import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarEmma from "@/assets/avatar-emma.jpg";
import avatarMichael from "@/assets/avatar-michael.jpg";
import avatarLisa from "@/assets/avatar-lisa.jpg";
import avatarJames from "@/assets/avatar-james.jpg";

const testimonials = [
  {
    name: "سارا محمدی",
    initials: "س م",
    role: "علاقه‌مند به سلامتی",
    text: "تحول‌آفرین‌ترین تجربه ماساژی که تا به حال داشته‌ام. توجه به جزئیات و مراقبت واقعی از سلامتی من از لحظه ورودم مشهود بود.",
    rating: 5,
    avatar: avatarSarah,
    darkCard: false,
  },
  {
    name: "داود احمدی",
    initials: "د ا",
    role: "مربی ورزشی",
    text: "بعد از سال‌ها درد مزمن کمر، بالاخره در اینجا تسکین پیدا کردم. رویکرد درمانی همراه با فضای آرام، هر بازدید را به سفری شفابخش تبدیل می‌کند.",
    rating: 5,
    avatar: avatarDavid,
    darkCard: true,
  },
  {
    name: "مریم رضایی",
    initials: "م ر",
    role: "مربی یوگا",
    text: "پناهگاهی در شهر. درمانگران ماهر و محیط آرام‌بخش، این مکان را به آیین ماهانه من برای مراقبت از خود و کاهش استرس تبدیل کرده است.",
    rating: 5,
    avatar: avatarEmma,
    darkCard: false,
  },
  {
    name: "محمد کریمی",
    initials: "م ک",
    role: "مدیر اجرایی",
    text: "حرفه‌ای، دانا و فوق‌العاده مؤثر. از هر جلسه با احساس نوسازی و بهبودی خارج می‌شوم. به شدت به هر کسی که به دنبال ماساژ درمانی با کیفیت است توصیه می‌کنم.",
    rating: 5,
    avatar: avatarMichael,
    darkCard: true,
  },
  {
    name: "لیلا حسینی",
    initials: "ل ح",
    role: "متخصص بهداشت",
    text: "رویکرد شخصی‌سازی شده به هر جلسه چیزی است که این مکان را متمایز می‌کند. آن‌ها واقعاً گوش می‌دهند و درمان را متناسب با نیاز بدن شما تنظیم می‌کنند.",
    rating: 5,
    avatar: avatarLisa,
    darkCard: false,
  },
  {
    name: "علی نوری",
    initials: "ع ن",
    role: "دونده ماراتن",
    text: "از فضای دلنشین گرفته تا تکنیک تخصصی، همه چیز در این تجربه فراتر از انتظار است. هر لحظه‌اش ارزش دارد.",
    rating: 5,
    avatar: avatarJames,
    darkCard: true,
  },
];

const TestimonialsSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-foreground mb-4">
            نظرات مشتریان ما
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            تجربیات واقعی کسانی که قدرت شفابخش درمان ما را کشف کرده‌اند
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto py-8 -my-8 snap-x snap-mandatory custom-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group flex-shrink-0 w-[350px] snap-center backdrop-blur-sm border-border/50 shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-500 hover:scale-110 animate-fade-in-up cursor-pointer overflow-hidden ${
                testimonial.darkCard 
                  ? 'bg-foreground/10 hover:bg-foreground/20' 
                  : 'bg-card/50 hover:bg-card/80'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 relative">
                {/* Main content area */}
                <div className="p-8 pb-6">
                  {/* Stars at top */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-gold-accent text-lg group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>★</span>
                    ))}
                  </div>
                  
                  {/* Quote text */}
                  <p className="font-sans text-foreground leading-relaxed italic text-lg">
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Footer */}
                <div className="flex items-center gap-4 px-8 py-6">
                  <Avatar className="h-14 w-14 bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg group-hover:bg-primary/20">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                    <p className="font-sans text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
        
        {/* Share Your Experience Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            onClick={() => navigate("/submit-testimonial")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-soft"
          >
            تجربه خود را به اشتراک بگذارید
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;