import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import SilverCollection from "@/components/SilverCollection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <SilverCollection />
      <AboutSection />
      <TeamSection />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
