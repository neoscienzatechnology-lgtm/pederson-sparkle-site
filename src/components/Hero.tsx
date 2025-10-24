import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
            Sparkling Clean Homes & Offices in Seattle
          </h1>
          <p className="mb-8 text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional cleaning services you can trust. We bring shine and freshness to every corner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary transition-all"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
