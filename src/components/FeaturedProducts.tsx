import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    name: "The Saanvi Bridal Necklace",
    price: "₹45,000",
    image: product1,
    height: "8cm",
    weight: "35g",
  },
  {
    name: "Royal Heritage Earrings",
    price: "₹18,500",
    image: product2,
    height: "5cm",
    weight: "12g",
  },
  {
    name: "Golden Elegance Bangles",
    price: "₹32,000",
    image: product3,
    weight: "45g",
  },
  {
    name: "Diamond Touch Ring",
    price: "₹25,000",
    image: product4,
    weight: "8g",
  },
  {
    name: "Traditional Gold Necklace",
    price: "₹52,000",
    image: product1,
    height: "9cm",
    weight: "42g",
  },
  {
    name: "Antique Jhumkas",
    price: "₹15,500",
    image: product2,
    height: "6cm",
    weight: "15g",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of exquisite jewelry pieces, crafted with love and precision
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              height={product.height}
              weight={product.weight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
