import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with pre-filled message
    const message = `Hi, I'm interested in your tracking products.`;
    const whatsappUrl = `https://wa.me/919925458497?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "You'll be connected with our team shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-section" className="py-24 px-6 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="border-primary text-primary mb-6 px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className={`card-hover bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                Tell us about your project and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full button-glow bg-primary hover:bg-primary/90 group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get in touch with us</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a custom tracking solution, embedded system design, or IoT integration, 
                our team is here to help bring your vision to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">truvibetechnology@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-4 p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Dr. Shweta Shah</div>
                    <div className="text-sm text-muted-foreground">+91 99254 58497</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://wa.me/919925458497', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>

              <div className="flex items-center justify-between space-x-4 p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Darshan Nathvani</div>
                    <div className="text-sm text-muted-foreground">+91 76004 21900</div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://wa.me/917600421900', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/30 border border-border/50">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Connect with us professionally</div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within 24 hours. For urgent matters, 
                reach out via phone for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}