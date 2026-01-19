import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import ReviewsSection from "@/components/ReviewsSection";
import WhySection from "@/components/WhySection";
import CurriculumSection from "@/components/CurriculumSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileSticky from "@/components/MobileSticky";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <HeroSection />
      <InstructorSection />
      <ReviewsSection />
      <WhySection />
      <CurriculumSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <MobileSticky />
    </main>
  );
};

export default Index;
