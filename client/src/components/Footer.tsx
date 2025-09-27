import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const handleVisitStall = () => {
    console.log('Visit stall button clicked');
  };

  const handleContact = () => {
    console.log('Contact button clicked');
  };

  return (
    <footer className="bg-black text-white py-16 px-6 relative overflow-hidden">
      {/* Festive background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-8 text-6xl">🎆</div>
        <div className="absolute top-12 right-12 text-4xl">🪔</div>
        <div className="absolute bottom-8 left-16 text-5xl">✨</div>
        <div className="absolute bottom-4 right-8 text-6xl">🎆</div>
      </div>
      
      {/* Marigold border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-2 to-primary"></div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Main call-to-action */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join us for a taste of <span className="text-primary">India's favorite</span> street flavors at <span className="text-chart-2">Dussehra!</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience authentic street food made with premium ingredients. Every bite tells a story of tradition and taste.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-black font-bold px-8"
              onClick={handleVisitStall}
              data-testid="button-visit-stall"
            >
              🎪 Visit Our Stall
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 font-bold px-8"
              onClick={handleContact}
              data-testid="button-contact"
            >
              📞 Contact Us
            </Button>
          </div>
        </div>
        
        {/* Stall info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Dussehra Festival Ground</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Clock className="w-4 h-4 text-primary" />
            <span>9 AM - 10 PM Daily</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Phone className="w-4 h-4 text-primary" />
            <span>Fresh Made to Order</span>
          </div>
        </div>
        
        {/* Brand signature */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-2xl font-bold text-primary mb-2">SNACKY & JUICY</p>
          <p className="text-gray-400">Premium Quality – Only Fresh Product</p>
          <p className="text-primary font-semibold mt-2">Pure crunch, zero guilt!!</p>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="text-primary text-xl">🪔</span>
            <span className="text-chart-2 text-xl">✨</span>
            <span className="text-primary text-xl">🪔</span>
          </div>
        </div>
      </div>
    </footer>
  );
}