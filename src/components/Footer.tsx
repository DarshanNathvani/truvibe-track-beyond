import { Linkedin, Mail, MapPin, Twitter, Instagram, Phone, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-16 px-6">
      <div className="container mx-auto">
        {/* Achievements Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-2xl font-semibold">Achievements & Recognition</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              Applied for DPIIT Recognition
            </Badge>
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              AICTE Productization Grant - Applied
            </Badge>
            <Badge variant="outline" className="border-primary text-primary px-4 py-2">
              NavIC Challenge 2025 - Applied
            </Badge>
          </div>
          
          {/* Logo Carousel */}
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">Make in India</div>
              <div className="text-xs text-muted-foreground">Supporting Initiative</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">Startup India</div>
              <div className="text-xs text-muted-foreground">Recognized Program</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">TV</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">TruVibe Technology</h3>
                <p className="text-sm text-muted-foreground">Trustworthy Vibes in Technology</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Delivering reliable tracking, sensing, and communication solutions 
              for modern mobility. Built with precision, security, and intelligence.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-300">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products-section" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#services-section" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact-section" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:truvibetechnology@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Investor Queries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:truvibetechnology@gmail.com" className="text-sm hover:text-primary transition-colors">
                    truvibetechnology@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Dr. Shweta Shah</p>
                  <a href="https://wa.me/919925458497" className="text-sm hover:text-primary transition-colors">
                    +91 99254 58497
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Darshan Nathvani</p>
                  <a href="https://wa.me/917600421900" className="text-sm hover:text-primary transition-colors">
                    +91 76004 21900
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm">India</p>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h5 className="text-sm font-semibold mb-3">Stay Updated</h5>
              <p className="text-xs text-muted-foreground mb-3">
                Stay updated on our latest tech solutions.
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="text-sm bg-background/50"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TruVibe Technology Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}