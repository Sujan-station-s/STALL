import { Sparkles } from "lucide-react";
import CartIcon from "./CartIcon";
import CartDrawer from "./CartDrawer";

export default function Header() {
  return (
    <>
      <header className="relative bg-black text-white py-16 px-6 overflow-hidden">
        {/* Cart Icon - Fixed Position */}
        <div className="fixed top-6 right-6 z-50">
          <CartIcon />
        </div>

        {/* Festive background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 text-primary text-2xl">✨</div>
          <div className="absolute top-12 right-8 text-primary text-3xl">🪔</div>
          <div className="absolute bottom-8 left-12 text-primary text-2xl">✨</div>
          <div className="absolute bottom-4 right-4 text-primary text-3xl">🪔</div>
        </div>
        
        {/* Marigold border pattern */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-chart-2 to-primary"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-chart-2 to-primary"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Sparkles className="text-primary w-8 h-8" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              SNACKY & JUICY
            </h1>
            <Sparkles className="text-primary w-8 h-8" />
          </div>
          
          <div className="relative">
            <p className="text-xl md:text-2xl text-primary font-semibold tracking-wider">
              Premium Quality – Only Fresh Product
            </p>
            <div className="mt-2 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </header>
      
      {/* Cart Drawer */}
      <CartDrawer />
    </>
  );
}