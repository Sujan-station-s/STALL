import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
}

export default function ProductCard({ id, name, description, price, image, isPopular }: ProductCardProps) {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
    });
    
    toast({
      title: "Added to cart! 🛒",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group hover-elevate overflow-hidden border-2 border-primary/20 bg-card">
      <CardContent className="p-6">
        <div className="relative mb-6">
          {/* Circular image container */}
          <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-colors">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Festive border decoration */}
            <div className="absolute inset-0 rounded-full border-2 border-chart-2/20"></div>
          </div>
          
          {isPopular && (
            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-chart-2 text-white">
              Popular
            </Badge>
          )}
          
          {/* Decorative elements */}
          <div className="absolute top-2 -left-2 text-primary text-lg opacity-60">🪔</div>
          <div className="absolute top-2 -right-2 text-primary text-lg opacity-60">🪔</div>
        </div>
        
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold text-foreground capitalize">{name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl font-bold text-primary">₹{price}</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group-hover:scale-105 transition-transform duration-200"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}