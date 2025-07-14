import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Star, Zap, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

export default function RoadmapSection() {
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

    const element = document.getElementById('roadmap-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const roadmapItems = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Q2 2025",
      description: "Incorporation & TruTrack prototype development",
      status: "current"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Q3 2025",
      description: "DPIIT registration, testing and validation phase",
      status: "upcoming"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Q4 2025",
      description: "TruTrack launch (beta), begin TruSense development",
      status: "upcoming"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Q1 2026",
      description: "TruConnect release and market expansion",
      status: "future"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Q2 2026+",
      description: "Scaling, AI features, and industry partnerships",
      status: "future"
    }
  ];

  return (
    <section id="roadmap-section" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
            What's Next?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Product <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More advanced products are in development and will be announced soon. Here's what's coming.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {roadmapItems.map((item, index) => (
              <Card 
                key={index}
                className={`card-hover bg-card border-border/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                } ${item.status === 'current' ? 'border-primary/50 bg-primary/5' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      item.status === 'current' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      {item.status === 'current' && (
                        <Badge className="mt-1 bg-primary text-primary-foreground">
                          Current Focus
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}