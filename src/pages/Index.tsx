import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import IndustrySection from "@/components/IndustrySection";
import RequirementsSection from "@/components/RequirementsSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import AirworthinessSection from "@/components/AirworthinessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfoSection />
      <IndustrySection />
      <RequirementsSection />
      <SupplyChainSection />
      <AirworthinessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
};

export default Index;
