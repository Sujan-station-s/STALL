import Header from '@/components/Header';
import TaglineSection from '@/components/TaglineSection';
import MenuGrid from '@/components/MenuGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Durga silhouette background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      </div>
      
      <Header />
      <TaglineSection />
      <MenuGrid />
      <Footer />
    </div>
  );
}