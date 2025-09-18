import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import IndustrySection from "@/components/IndustrySection";
import RequirementsSection from "@/components/RequirementsSection";
import SupplyChainSection from "@/components/SupplyChainSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfoSection />
      <IndustrySection />
      <RequirementsSection />
      <SupplyChainSection />
      <CTASection />
    </main>
  );
};

export default Index;
