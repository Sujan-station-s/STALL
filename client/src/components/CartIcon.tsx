import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export default function CartIcon() {
  const { getTotalItems, openCart } = useCart();
  const itemCount = getTotalItems();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative border-primary/30 hover:border-primary/60 bg-card"
      onClick={openCart}
    >
      <ShoppingCart className="h-5 w-5 text-primary" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {itemCount}
        </span>
      )}
    </Button>
  );
}
