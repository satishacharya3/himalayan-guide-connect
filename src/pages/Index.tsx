import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutNepal from "@/components/AboutNepal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <AboutNepal />
      <Footer />
    </div>
  );
};

export default Index;
