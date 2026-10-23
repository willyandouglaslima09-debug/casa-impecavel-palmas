import { Header } from "@/components/layout/Header";
import HeroSection from "@/sections/Hero"; // <-- IMPORTAÇÃO CORRIGIDA
import { PropertyGallery } from "@/components/sections/PropertyGallery";
import { Amenities } from "@/components/sections/Amenities";
import { Location } from "@/components/sections/Location";
import { BookingReviews } from "@/components/sections/BookingReviews";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { AnimatedContent } from "@/components/ui/AnimatedContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] text-[#2A2421] w-full overflow-x-hidden">
      <Header />
      
      {/* Novo Hero com contraste, foto real, cards simétricos e leveza mobile */}
      <HeroSection />

      {/* Galeria de Fotos */}
      <AnimatedContent distance={30} duration={0.8}>
        <PropertyGallery />
      </AnimatedContent>

      {/* Comodidades */}
      <AnimatedContent distance={20} duration={0.8}>
        <Amenities />
      </AnimatedContent>

      {/* Localização e Distâncias */}
      <AnimatedContent distance={20} duration={0.8}>
        <Location />
      </AnimatedContent>

      {/* Avaliações Booking e Airbnb */}
      <AnimatedContent distance={20} duration={0.8}>
        <BookingReviews />
      </AnimatedContent>

      {/* FAQ */}
      <AnimatedContent distance={20} duration={0.8}>
        <FAQ />
      </AnimatedContent>

      {/* Rodapé */}
      <Footer />
    </main>
  );
}