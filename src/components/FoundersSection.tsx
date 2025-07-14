import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code } from "lucide-react";
import { useEffect, useState } from "react";

export default function FoundersSection() {
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

    const element = document.getElementById('founders-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const founders = [
    {
      name: "Dr. Shweta Shah",
      designation: "Co-founder & Director",
      icon: <GraduationCap className="h-8 w-8" />,
      description: "Leading strategic vision and business development with deep expertise in technology innovation."
    },
    {
      name: "Darshan Nathvani",
      designation: "Co-founder & Tech Lead",
      icon: <Code className="h-8 w-8" />,
      description: "Driving technical development and engineering excellence in embedded systems and IoT solutions."
    }
  ];

  return (
    <section id="founders-section" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
            Leadership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate innovators building the future of mobility technology
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card 
              key={founder.name}
              className={`card-hover bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  {founder.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{founder.name}</h3>
                <p className="text-primary font-medium mb-4">{founder.designation}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}