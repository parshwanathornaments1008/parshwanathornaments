import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  height?: string;
  weight?: string;
}

const ProductCard = ({ name, price, image, height, weight }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-luxury)] transition-[var(--transition-smooth)] bg-card">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)] flex items-end justify-center pb-4">
          <Button variant="luxury" size="sm">
            Quick View
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-card-foreground mb-2">{name}</h3>
        <div className="flex flex-col gap-1 mb-3">
          {height && <p className="text-sm text-muted-foreground">Height: {height}</p>}
          {weight && <p className="text-sm text-muted-foreground">Weight: {weight}</p>}
        </div>
        <p className="text-xl font-bold text-primary">{price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
