import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Battery, Wifi, Shield, Cloud, Activity, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TruTrackDetails() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "GPS-Free Tracking",
      description: "Advanced positioning algorithms work where GPS fails"
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Long Battery Life",
      description: "Optimized power management for extended operation"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Real-time Connectivity",
      description: "LTE and Wi-Fi connectivity for instant data sync"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Rugged Design",
      description: "Industrial-grade protection for harsh environments"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Analytics",
      description: "Secure, centralized monitoring and insights"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Updates",
      description: "Continuous tracking with instant notifications"
    }
  ];

  const applications = [
    "Logistics & Fleet Management",
    "Defense & Security Operations", 
    "Mining & Underground Assets",
    "Emergency Response Teams",
    "Personal Safety Monitoring",
    "Asset Tracking in GPS-denied zones"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-primary hover:text-primary hover:bg-primary/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/2f49ae61-a35f-4479-bfe7-5558a317f936.png" 
                alt="TruVibe Technology Logo" 
                className="h-8 w-auto"
              />
              <span className="font-semibold">TruVibe Technology</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
            Product Details
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Introducing <span className="gradient-text">TruTrack</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Advanced Tracking for GPS-Denied Environments
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            TruTrack is the flagship product developed by Truvibe Technology Pvt. Ltd., designed to redefine 
            location tracking in critical and GPS-challenged environments. Unlike conventional GPS-based trackers, 
            TruTrack is engineered to offer seamless positioning even in tunnels, underground locations, remote 
            terrains, or urban canyons where GNSS signals are weak or unavailable.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover bg-card border-border/50">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Product Overview</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Built with a rugged, compact design and embedded with advanced proprietary technology, 
                TruTrack ensures accurate and uninterrupted location tracking for logistics, defense, 
                mining, asset tracking, and personal safety applications.
              </p>
              <p>
                The device is equipped with long-lasting battery life, real-time data sync capabilities 
                via LTE and Wi-Fi, and cloud-based analytics for secure, centralized monitoring. 
                Whether you're tracking vehicles, assets, or individuals, TruTrack delivers trusted 
                location insights when GPS fails — making it a game-changer for modern smart tracking solutions.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
                <p className="text-sm italic">
                  <strong>Note:</strong> Due to the confidential nature of our core technology, specifics 
                  related to our tracking methodology are not publicly disclosed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Applications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border/50">
                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Tracking?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn more about TruTrack and how it can solve your tracking challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="button-glow bg-primary hover:bg-primary/90 px-8 py-4"
              onClick={() => navigate('/#contact-section')}
            >
              Contact Our Team
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/919925458497?text=Hi, I\'m interested in TruTrack!', '_blank')}
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}