import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { silverProducts, categories } from "@/data/products";

const SilverCollection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(12);

  const filteredProducts = useMemo(() => {
    let products = silverProducts;

    if (selectedCategory !== 'all') {
      products = products.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      products = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  }, [selectedCategory, searchQuery]);

  const displayedProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section id="silver-collection" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Silver Jewelry Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exquisite range of pure silver ornaments, idols, and utensils crafted with traditional artistry
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-[var(--transition-smooth)]"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {displayedProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-border hover:shadow-[var(--shadow-luxury)] transition-[var(--transition-smooth)] bg-card cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-[var(--transition-smooth)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)] flex items-end justify-center pb-4">
                  <Button variant="luxury" size="sm">
                    Quick View
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-card-foreground line-clamp-2 min-h-[3.5rem]">
                  {product.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See More Button */}
        {hasMore && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setDisplayCount(prev => prev + 12)}
              className="min-w-[200px]"
            >
              See More Products
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No products found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SilverCollection;
