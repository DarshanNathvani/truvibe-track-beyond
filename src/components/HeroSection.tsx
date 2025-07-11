import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center hero-glow relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-3 h-3 bg-primary/10 rounded-full animate-pulse" style={{ top: '40%', left: '90%', animationDelay: '2s' }}></div>
        <div className="absolute w-2 h-2 bg-primary/25 rounded-full animate-pulse" style={{ top: '80%', left: '20%', animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* TruVibe Logo */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 logo-container">
            <img 
              src="/lovable-uploads/2f49ae61-a35f-4479-bfe7-5558a317f936.png" 
              alt="TruVibe Technology Logo" 
              className="h-32 w-auto mx-auto logo-glow animate-logo-entrance"
            />
          </div>
        </div>

        {/* Main headline */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-inter font-bold mb-6 leading-tight">
            Track Beyond <span className="gradient-text">Limits</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
            Smart. Reliable. Always Connected.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            size="lg" 
            className="button-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium group"
          >
            Explore TruTrack
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-medium group"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}