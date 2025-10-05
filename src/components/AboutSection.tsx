import { Heart, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to Parshwanath Ornaments, where tradition meets timeless beauty. For over a
            decade, we&apos;ve been crafting exquisite jewelry that celebrates life&apos;s most cherished
            moments. From delicate daily wear to regal wedding pieces, each creation reflects our
            commitment to quality, authenticity, and emotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Crafted with Love</h3>
            <p className="text-muted-foreground">
              Every piece is handcrafted by skilled artisans who pour their heart into each design
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assured</h3>
            <p className="text-muted-foreground">
              We use only the finest materials and maintain the highest standards of craftsmanship
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Customer First</h3>
            <p className="text-muted-foreground">
              Your satisfaction and trust are the foundation of our lasting relationships
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
            &quot;Our team of skilled artisans pours heart and soul into every design, ensuring that
            every ornament tells a story—your story. We believe jewelry is more than adornment;
            it&apos;s a memory, a promise, a legacy.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
