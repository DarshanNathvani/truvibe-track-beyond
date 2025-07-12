import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Package, Clock, MapPin, MessageCircle } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  icon: React.ComponentType<any>;
}

function Counter({ end, suffix, label, icon: Icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const step = end / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, label, hasAnimated]);

  return (
    <div id={`counter-${label}`} className="text-center">
      <div className="flex items-center justify-center mb-2">
        <Icon className="h-5 w-5 text-primary mr-2" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-24 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
              About TruVibe
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Embedded Tech <span className="gradient-text">Innovation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              TruVibe Technology is an Indian embedded tech startup delivering reliable tracking, 
              sensing, and communication solutions for modern mobility. We create robust systems 
              that perform where conventional GPS fails — built with precision, security, and intelligence.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full glow-effect"></div>
                <span className="text-foreground">✅ Advanced embedded system design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full glow-effect"></div>
                <span className="text-foreground">✅ Real-world tested solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full glow-effect"></div>
                <span className="text-foreground">✅ Built for Indian conditions</span>
              </div>
            </div>
          </div>

          {/* Visual/Stats */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Abstract visual element */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              
              <div className="relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <Counter end={2} suffix="+" label="Products" icon={Package} />
                  <Counter end={1000} suffix="K+" label="Locations Tracked" icon={MapPin} />
                  <Counter end={99} suffix=".9%" label="Uptime" icon={Clock} />
                  <Counter end={24} suffix="/7" label="Support" icon={MessageCircle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}