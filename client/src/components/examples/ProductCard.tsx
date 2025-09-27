import ProductCard from '../ProductCard';
import lemonadeImage from '@assets/generated_images/masala_lemonade_with_mint_ff4f3751.png';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard 
        name="masala lemonade"
        description="Refreshing blend with fresh mint garnish and lemon slices"
        price={15}
        image={lemonadeImage}
        isPopular={true}
      />
    </div>
  );
}