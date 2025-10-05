import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Master Craftsman",
    image: "/placeholder.svg",
    bio: "With 25 years of experience in silver jewelry making, Rajesh leads our artisan team with passion and precision."
  },
  {
    name: "Priya Sharma",
    role: "Design Director",
    image: "/placeholder.svg",
    bio: "Priya brings contemporary aesthetics to traditional designs, creating pieces that honor heritage while embracing modernity."
  },
  {
    name: "Amit Patel",
    role: "Quality Assurance",
    image: "/placeholder.svg",
    bio: "Ensuring every piece meets our exacting standards, Amit's keen eye guarantees superior craftsmanship."
  },
  {
    name: "Sunita Verma",
    role: "Customer Relations",
    image: "/placeholder.svg",
    bio: "Sunita connects our creations with our customers, understanding their stories and helping them find the perfect piece."
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented artisans and professionals behind every exquisite piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border hover:shadow-[var(--shadow-luxury)] transition-[var(--transition-smooth)] bg-card"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate artisans and professionals who share our commitment to excellence. 
              If you have a love for traditional craftsmanship and want to be part of our growing family, we'd love to hear from you.
            </p>
            <a 
              href="mailto:parshwanath.ornaments.1008@gmail.com?subject=Career%20Inquiry"
              className="inline-block text-primary hover:underline font-semibold"
            >
              careers@parshwanath.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
