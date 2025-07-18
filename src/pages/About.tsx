import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Satellite, Cpu, Wifi, Shield, Target, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing boundaries in tracking technology where others can't reach"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "Building trust through consistent, dependable solutions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality products and services"
    }
  ];

  const capabilities = [
    {
      icon: <Satellite className="h-6 w-6" />,
      title: "Satellite Communication",
      description: "Advanced GNSS and alternative positioning technologies"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "IMU-based Dead Reckoning",
      description: "Precise inertial navigation when satellite signals fail"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Wireless Telemetry",
      description: "Real-time data transmission and monitoring capabilities"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cloud IoT Platforms",
      description: "Secure, scalable cloud infrastructure for device management"
    }
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
            About Us
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="gradient-text">Truvibe Technology</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Pvt. Ltd.
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
              <p className="text-xl leading-relaxed">
                Truvibe Technology Pvt. Ltd. is a forward-thinking Indian startup focused on building 
                next-generation smart tracking and sensing solutions for real-world challenges. Founded by 
                a team of innovators and engineers, Truvibe aims to transform how location, safety, and 
                movement are monitored in both connected and disconnected environments.
              </p>
              <p className="text-lg leading-relaxed">
                At Truvibe, we specialize in creating intelligent hardware and software products that 
                integrate satellite communication, IMU-based dead reckoning, wireless telemetry, and 
                cloud IoT platforms. Our solutions are designed for applications in transportation, 
                mining, emergency response, industrial safety, and defense — wherever GPS is unreliable 
                or fails entirely.
              </p>
              <p className="text-lg leading-relaxed">
                Backed by deep research and a commitment to excellence, Truvibe is not just building 
                devices — we're building trust, reliability, and smarter ways to stay connected with 
                the world around us.
              </p>
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="card-hover bg-card border-border/50 text-center">
                    <CardHeader>
                      <div className="p-4 rounded-lg bg-primary/10 text-primary w-fit mx-auto">
                        {value.icon}
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Capabilities */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-12">Technical Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-lg bg-card border border-border/50">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{capability.title}</h4>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Where We Make a Difference</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our solutions serve critical industries where traditional tracking fails — from underground 
                mining operations to defense applications, emergency response, and industrial safety monitoring.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Transportation', 'Mining', 'Emergency Response', 'Industrial Safety', 'Defense', 'Asset Tracking'].map((industry, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how Truvibe Technology can transform your tracking and monitoring challenges into opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="button-glow bg-primary hover:bg-primary/90 px-8 py-4"
              onClick={() => navigate('/#contact-section')}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/')}
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}