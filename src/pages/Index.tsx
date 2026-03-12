import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ServiceCards from "@/components/ServiceCards";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />
      <ServiceCards />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Index;
