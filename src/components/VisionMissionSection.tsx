import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function VisionMissionSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('vision-mission-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision-mission-section" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
            Our Purpose
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vision & <span className="gradient-text">Mission</span>
          </h2>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className={`card-hover bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize mobility tracking with intelligent, secure solutions that work beyond traditional GPS limitations.
              </p>
            </CardContent>
          </Card>

          <Card className={`card-hover bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                TruVibe builds secure, intelligent tracking solutions for modern mobility — designed for situations where conventional GPS fails.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}