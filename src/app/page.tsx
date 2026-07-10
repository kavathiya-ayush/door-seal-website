import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery";
import ProductGrid from "@/components/ProductGrid";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import MapFloatingButton from "@/components/MapFloatingButton";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ImageGallery />
      <ProductGrid />
      <ContactFooter />
      <WhatsAppButton />
      <MapFloatingButton />
    </main>
  );
}
