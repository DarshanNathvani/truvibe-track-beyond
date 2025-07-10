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
      description: "A compact, cloud-connected tracker that ensures reliable location awareness in harsh or GPS-denied environments",
      status: "Available Now",
      available: true,
      features: ["GPS-Free Tracking", "Cloud Connected", "Real-time Updates", "Rugged Design"],
      icon: <MapPin className="h-8 w-8" />
    },
    {
      name: "TruSense Pro",
      description: "Advanced IoT sensor fusion platform for comprehensive environmental monitoring",
      status: "Coming Soon",
      available: false,
      features: ["Multi-Sensor Array", "Edge AI", "Low Power", "Wireless"],
      icon: <Shield className="h-8 w-8" />
    },
    {
      name: "TruConnect",
      description: "Seamless communication hub for remote device management and control",
      status: "Coming Soon", 
      available: false,
      features: ["5G Ready", "Mesh Network", "Secure Protocol", "Auto-Config"],
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name}
              className={`card-hover bg-card border-border/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${!product.available ? 'opacity-70' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
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
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Zap className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                {product.available ? (
                  <Button className="w-full button-glow bg-primary hover:bg-primary/90 group">
                    View Product
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-6">
            Interested in custom solutions or partnerships?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}