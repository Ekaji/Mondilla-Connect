import FeaturesSection from '@/components/FeaturesSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import PricingSection from '@/components/PricingSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
        <PricingSection />
      </main>
    </div>
  );
};

export default Index;