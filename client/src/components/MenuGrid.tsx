import ProductCard from './ProductCard';
import { Badge } from "@/components/ui/badge";
import lemonadeImage from '@assets/generated_images/masala_lemonade_with_mint_ff4f3751.png';
import bhelPuriImage from '@assets/generated_images/bhel_puri_street_food_7d9dd51b.png';
import rawMangoImage from '@assets/generated_images/raw_mango_with_chili_8740f3c4.png';
import peanutMasalaImage from '@assets/generated_images/peanut_masala_snack_a8feffd1.png';

//todo: remove mock functionality - replace with real menu data
const menuItems = [
  {
    id: 1,
    name: "masala lemonade",
    description: "Refreshing blend with fresh mint garnish and lemon slices, perfect thirst quencher",
    price: 15,
    image: lemonadeImage,
    isPopular: true
  },
  {
    id: 2,
    name: "bhel puri",
    description: "Classic street mix with onions, chilies, fresh coriander and tangy chutneys",
    price: 20,
    image: bhelPuriImage,
    isPopular: true
  },
  {
    id: 3,
    name: "raw mango slices",
    description: "Tangy green mango pieces with spicy chili powder and traditional spices",
    price: 15,
    image: rawMangoImage
  },
  {
    id: 4,
    name: "peanut masala",
    description: "Crunchy roasted peanuts with onions, tomatoes and fresh coriander leaves",
    price: 20,
    image: peanutMasalaImage
  }
];

export default function MenuGrid() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Festival</span> Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentic street flavors crafted with love for the Dussehra celebration
          </p>
          
          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent to-primary w-20"></div>
            <span className="text-primary text-2xl">🌟</span>
            <div className="h-px bg-gradient-to-r from-primary to-transparent w-20"></div>
          </div>
        </div>
        
        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuItems.map((item) => (
            <div key={item.id} data-testid={`card-product-${item.id}`}>
              <ProductCard 
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                isPopular={item.isPopular}
              />
            </div>
          ))}
        </div>
        
        {/* Combo offers section */}
        <div className="bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-lg p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">
            🎁 Festival Combo Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-card rounded-lg border border-primary/20">
              <p className="font-semibold text-foreground">Bhel + Lemonade</p>
              <p className="text-2xl font-bold text-primary">₹30</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-primary/20">
              <p className="font-semibold text-foreground">Peanut + Lemonade</p>
              <p className="text-2xl font-bold text-primary">₹30</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-primary/20">
              <p className="font-semibold text-foreground">Bhel + Mango</p>
              <p className="text-2xl font-bold text-primary">₹30</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-chart-2/40">
              <p className="font-semibold text-foreground">All 4 Items</p>
              <p className="text-3xl font-bold text-chart-2">₹60</p>
              <Badge className="bg-chart-2 text-white text-xs">Best Deal</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}