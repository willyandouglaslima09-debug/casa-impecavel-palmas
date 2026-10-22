"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { Star } from "lucide-react";
import { HeroBadges } from "./HeroBadges";
import { BookingSearchWidget } from "./BookingSearchWidget";
import { AnimatedContent } from "@/components/ui/AnimatedContent";

export const HeroCanvas = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !bgRef.current) return;

    gsap.to(bgRef.current, {
      scale: 1.08,
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      id="a-casa"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden px-4 pt-28 pb-16 bg-[#F8F6F2]"
    >
      <div ref={bgRef} className="absolute inset-0 z-0 w-full h-full opacity-35">
        <Image
          src="/images/hero-fachada.jpg"
          alt="Fachada Casa Impecável Palmas"
          fill
          priority
          className="object-cover filter brightness-105 contrast-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F2] via-[#F8F6F2]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        <AnimatedContent
          trigger="mount"
          distance={30}
          blur={6}
          stagger={0.12}
          duration={1}
          className="flex flex-col items-center space-y-6 w-full"
        >
          {/* Badges Duplos Booking & Airbnb */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-[#E5DFD5] px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-xs sm:text-sm font-semibold text-[#2A2421]">Nota 9,7 no Booking</span>
              <span className="text-xs text-[#6B625D]">• Limpeza 9,9</span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-[#E5DFD5] px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span className="text-xs sm:text-sm font-semibold text-[#2A2421]">5.0 no Airbnb</span>
              <span className="text-xs text-[#6B625D]">• Preferido dos Hóspedes</span>
            </div>
          </div>

          <h1 className="font-serif-Luxury text-4xl sm:text-6xl md:text-7xl font-normal text-[#2A2421] tracking-wide leading-tight">
            Aconchego, sofisticação e <br className="hidden sm:inline" />
            <span className="wood-text-gradient italic font-normal">experiência impecável.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#6B625D] max-w-2xl font-light leading-relaxed">
            Sua casa de temporada na Quadra 208 Norte em Palmas. Quartos climatizados e o equilíbrio perfeito entre o conforto de casa e o padrão de hotelaria.
          </p>

          <div className="w-full pt-2">
            <HeroBadges />
          </div>

          {/* Widget Interativo de Busca por Datas */}
          <div className="w-full pt-4">
            <BookingSearchWidget />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};