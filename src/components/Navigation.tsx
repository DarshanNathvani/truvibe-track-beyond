import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img 
              src="/lovable-uploads/2f49ae61-a35f-4479-bfe7-5558a317f936.png" 
              alt="TruVibe Technology Logo" 
              className="h-8 w-auto"
            />
            <span className="font-semibold">TruVibe Technology</span>
          </div>
          <div className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-foreground hover:text-primary"
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/about')}
              className="text-foreground hover:text-primary"
            >
              About Us
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/#products-section')}
              className="text-foreground hover:text-primary"
            >
              Products
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/#contact-section')}
              className="text-foreground hover:text-primary"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}