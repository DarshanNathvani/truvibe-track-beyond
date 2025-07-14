import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Shield, Zap, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductsSection() {
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

    const element = document.getElementById('products-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      name: "TruTrack",
      description: "Smart tracking solution for GPS-denied zones with advanced positioning algorithms",
      useCase: "Smart tracking in GPS-denied zones",
      status: "Launching Soon",
      available: true,
      features: ["GPS-Free Tracking", "Cloud Connected", "Real-time Updates", "Rugged Design"],
      icon: <MapPin className="h-8 w-8" />
    },
    {
      name: "TruSense Pro",
      description: "Advanced multi-sensor fusion system for industrial and transport applications",
      useCase: "Sensor fusion system for industrial/transport use",
      status: "In Development",
      available: true,
      features: ["Multi-Sensor Fusion", "AI-Powered Analytics", "Industrial Grade", "Edge Computing"],
      icon: <Zap className="h-8 w-8" />
    },
    {
      name: "TruConnect",
      description: "IoT communication module for seamless device connectivity and control",
      useCase: "IoT communication module",
      status: "Coming Soon",
      available: false,
      features: ["5G/4G Connectivity", "Edge-to-Cloud", "Ultra-Low Power", "Secure Protocol"],
      icon: <Wifi className="h-8 w-8" />
    }
  ];

  return (
    <section id="products-section" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
            Our Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation in <span className="gradient-text">Motion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge tracking and sensing solutions designed for the real world
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className={`card-hover bg-card border-border/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${!product.available ? 'opacity-50 grayscale' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${product.available ? 'bg-primary/10 text-primary' : 'bg-muted/50 text-muted-foreground'}`}>
                    {product.icon}
                  </div>
                  <Badge 
                    variant={product.available ? "default" : "secondary"}
                    className={product.available ? "bg-primary text-primary-foreground" : ""}
                  >
                    {product.status}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
                <p className="text-sm text-muted-foreground/80 mt-3 italic">
                  {product.useCase}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Zap className={`h-4 w-4 ${product.available ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                {product.available ? (
                  <Button 
                    className="w-full button-glow bg-primary hover:bg-primary/90 group"
                    onClick={() => {
                      // For now, scroll to contact section. Later can be replaced with modal/detailed page
                      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full opacity-60">
                    Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 mb-4">
              Join Waitlist for Upcoming Products
            </Button>
            <p className="text-sm text-muted-foreground">
              Be the first to know when TruSense Pro and TruConnect launch
            </p>
          </div>
          
          <div className="border-t border-border/50 pt-8">
            <p className="text-muted-foreground mb-6">
              Interested in custom solutions or partnerships?
            </p>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}