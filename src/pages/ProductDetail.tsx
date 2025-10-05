import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { silverProducts } from "@/data/products";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = silverProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Hello Parshwanath Ornaments, I'm interested in "${product.name}" (${product.price}). Please share more details.`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12 mt-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Collection
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-[var(--shadow-luxury)]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                {product.category.replace('-', ' ')}
              </span>
              <h1 className="text-4xl font-bold text-foreground mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary mb-6">
                {product.price}
              </p>
            </div>

            <div className="border-t border-b border-border py-6">
              <h3 className="font-semibold text-lg mb-4">Product Details</h3>
              <div className="space-y-2">
                {product.height && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Height:</span>
                    <span className="font-medium">{product.height}</span>
                  </div>
                )}
                {product.weight && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weight:</span>
                    <span className="font-medium">{product.weight}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <Button 
                variant="luxury" 
                size="lg" 
                className="flex-1"
                onClick={handleWhatsApp}
              >
                Contact on WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="bg-muted p-6 rounded-lg mt-4">
              <h4 className="font-semibold mb-2">Need Customization?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                We offer custom designs and modifications. Contact us to discuss your requirements.
              </p>
              <a 
                href="mailto:parshwanath.ornaments.1008@gmail.com?subject=Custom%20Design%20Inquiry"
                className="text-primary hover:underline text-sm font-medium"
              >
                Email us for custom orders
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
