import { Header } from "@/components/layout/Header";
import { HeroCanvas } from "@/components/hero/HeroCanvas";
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
      
      {/* Hero com entrada suave ao carregar a página */}
      <AnimatedContent trigger="mount" distance={20} blur={6} duration={1}>
        <HeroCanvas />
      </AnimatedContent>

      {/* Galeria 3D surgindo na rolagem */}
      <AnimatedContent distance={40} blur={4} duration={0.9}>
        <PropertyGallery />
      </AnimatedContent>

      {/* Comodidades com efeito suave */}
      <AnimatedContent distance={30} blur={4} duration={0.8}>
        <Amenities />
      </AnimatedContent>

      {/* Localização e Distâncias */}
      <AnimatedContent distance={30} blur={4} duration={0.8}>
        <Location />
      </AnimatedContent>

      {/* Avaliações Booking e Airbnb */}
      <AnimatedContent distance={30} blur={4} duration={0.8}>
        <BookingReviews />
      </AnimatedContent>

      {/* FAQ Sanfonado */}
      <AnimatedContent distance={30} blur={4} duration={0.8}>
        <FAQ />
      </AnimatedContent>

      {/* Rodapé */}
      <AnimatedContent distance={20} blur={2} duration={0.6}>
        <Footer />
      </AnimatedContent>
    </main>
  );
}