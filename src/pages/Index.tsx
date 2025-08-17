import FeaturesSection from '@/components/FeaturesSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Index;