import workshop from "@/assets/workshop-1.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const galleryImages = [
  { src: workshop, alt: "Jewelry crafting workshop" },
  { src: shopInterior, alt: "Our elegant store interior" },
  { src: product1, alt: "Bridal necklace showcase" },
  { src: product2, alt: "Traditional earrings" },
  { src: product3, alt: "Gold bangles collection" },
  { src: product4, alt: "Diamond ring display" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our world of craftsmanship and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-luxury)] transition-[var(--transition-smooth)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)] flex items-end justify-center p-4">
                <p className="text-background text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
