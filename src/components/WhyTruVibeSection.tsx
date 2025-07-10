import { Badge } from "@/components/ui/badge";
import { Rocket, Shield, Satellite, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhyTruVibeSection() {
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

    const element = document.getElementById('why-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Rocket className="h-12 w-12" />,
      title: "Embedded Innovation",
      description: "Cutting-edge embedded systems designed for performance and reliability in challenging environments."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for mission-critical applications."
    },
    {
      icon: <Satellite className="h-12 w-12" />,
      title: "Real-world Tested",
      description: "Extensively tested in harsh Indian conditions - from urban chaos to remote terrains."
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Smart Design",
      description: "Intelligent systems that adapt and learn, providing optimal performance with minimal intervention."
    }
  ];

  return (
    <section id="why-section" className="py-24 px-6 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto relative">
        {/* Sticky Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
            Why Choose TruVibe
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four pillars that make TruVibe the trusted choice for embedded solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-primary">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect decoration */}
              <div className="mt-6 h-1 bg-gradient-to-r from-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}