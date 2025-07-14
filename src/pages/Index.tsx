import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyTruVibeSection from "@/components/WhyTruVibeSection";
import ServicesSection from "@/components/ServicesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import RoadmapSection from "@/components/RoadmapSection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyTruVibeSection />
      <ServicesSection />
      <VisionMissionSection />
      <RoadmapSection />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
