"use client";

import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.muted = true;
      video.play().catch(() => {
        // Trata restrição de autoplay no Safari/iOS
      });
    };

    playVideo();

    const handleInteraction = () => {
      playVideo();
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <section 
      style={{ backgroundColor: '#1c140e' }}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#1c140e] text-white"
    >
      {/* Background Video + Fundo Marrom Café Elegante */}
      <div 
        style={{ backgroundColor: '#1c140e' }}
        className="absolute inset-0 z-0 overflow-hidden bg-[#1c140e] pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60 pointer-events-none"
        >
          <source src="/video/casa-impecavel.mp4" type="video/mp4" />
          <source src="/videos/casa-impecavel.mp4" type="video/mp4" />
        </video>

        {/* Gradiente Marrom Quente */}
        <div 
          style={{
            background: 'linear-gradient(to bottom, rgba(28,20,14,0.92) 0%, rgba(28,20,14,0.70) 50%, rgba(22,17,13,0.98) 100%)'
          }}
          className="absolute inset-0 z-10 pointer-events-none" 
        />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 text-center text-white flex flex-col items-center w-full my-auto">
        
        {/* Título Principal */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6 drop-shadow-2xl leading-tight text-center max-w-4xl mx-auto">
          Aconchego, sofisticação e <br className="hidden sm:inline" />
          <span className="italic font-normal text-amber-200/95">experiência impecável.</span>
        </h1>

        {/* Subtítulo (com espaçamento ampliado) */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-stone-200 font-light mb-12 sm:mb-16 leading-relaxed drop-shadow-lg text-center">
          Sua casa de temporada na Quadra 208 Norte em Palmas. Quartos climatizados e o equilíbrio perfeito entre o conforto de casa e o padrão de hotelaria.
        </p>

        {/* Grid de Destaques em Glassmorphism */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full text-left hero-grid-simetrico mb-10 sm:mb-12">
          
          <div className="p-4 sm:p-5 rounded-2xl bg-[#2a1d15]/85 backdrop-blur-md border border-white/20 hover:border-amber-400/40 transition-all shadow-2xl">
            <span className="text-amber-300 text-xl block mb-1.5">🚗</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Garagem Privativa</h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Para 2+ Veículos Grandes</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#2a1d15]/85 backdrop-blur-md border border-white/20 hover:border-amber-400/40 transition-all shadow-2xl">
            <span className="text-amber-300 text-xl block mb-1.5">❄️</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Quartos Climatizados</h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Ar silencioso nos quartos</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#2a1d15]/85 backdrop-blur-md border border-white/20 hover:border-amber-400/40 transition-all shadow-2xl">
            <span className="text-amber-300 text-xl block mb-1.5">✨</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Limpeza Ouro 9,9</h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Higienização rigorosa</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#2a1d15]/85 backdrop-blur-md border border-white/20 hover:border-amber-400/40 transition-all shadow-2xl">
            <span className="text-amber-300 text-xl block mb-1.5">👥</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Até 6 Hóspedes</h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Conforto para famílias</p>
          </div>

        </div>

        {/* Badges de Avaliação (Movidas para abaixo dos cartões) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#2a1d15]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-stone-200 shadow-xl">
            <span className="text-amber-400">★</span> Nota 9,7 no Booking <span className="text-stone-400">• Limpeza 9,9</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#2a1d15]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-stone-200 shadow-xl">
            <span className="text-amber-400">★</span> 5.0 no Airbnb <span className="text-stone-400">• Preferido dos Hóspedes</span>
          </span>
        </div>

      </div>
    </section>
  );
}
