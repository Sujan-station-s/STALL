export default function TaglineSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="hidden md:block text-primary text-4xl">🎆</div>
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Refresh</span>, 
              <span className="text-chart-2 mx-2">Crunch</span>, 
              <span className="text-primary">Tang</span> & 
              <span className="text-chart-2 mx-2">Spice</span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              All in One Bite!
            </p>
          </div>
          <div className="hidden md:block text-primary text-4xl">🎆</div>
        </div>
        
        <div className="relative">
          <p className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary/20 to-chart-2/20 px-8 py-4 rounded-lg border border-primary/30">
            Pure crunch, zero guilt!!
          </p>
          
          {/* Decorative rangoli pattern */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-primary"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-primary"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary"></div>
        </div>
      </div>
    </section>
  );
}