import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 animate-fade-in">
          Crafting Elegance,
          <br />
          <span className="text-primary">Celebrating You</span>
        </h1>
        <p className="text-xl md:text-2xl text-background/90 mb-8 animate-fade-in">
          Where tradition meets timeless beauty
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            variant="luxury"
            size="lg"
            onClick={() => scrollToSection("products")}
            className="text-lg"
          >
            View Collection
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-lg border-background text-background hover:bg-background hover:text-secondary"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
