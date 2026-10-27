"use client";

import React, { useEffect, useRef, useState } from "react";

// Modal Fiel à Foto Enviada (Check-in, Check-out e Plataforma)
function BookingModal({
  isOpen,
  onClose,
  airbnbUrl = "https://www.airbnb.com",
  bookingUrl = "https://www.booking.com",
}: {
  isOpen: boolean;
  onClose: () => void;
  airbnbUrl?: string;
  bookingUrl?: string;
}) {
  const [platform, setPlatform] = useState<"airbnb" | "booking">("airbnb");
  const [checkIn, setCheckIn] = useState("2026-10-27");
  const [checkOut, setCheckOut] = useState("");

  if (!isOpen) return null;

  const handleRedirect = () => {
    const targetUrl = platform === "airbnb" ? airbnbUrl : bookingUrl;
    window.open(targetUrl, "_blank");
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-stone-900"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            Selecionar datas
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Adicione suas datas de viagem para ver os preços exatos
          </p>
        </div>

        {/* Caixa Dupla de Check-in / Checkout */}
        <div className="flex border border-stone-200 rounded-2xl overflow-hidden shadow-sm divide-x divide-stone-200 mb-6 bg-white">
          <div className="p-3.5 px-4 flex-1 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-wider text-stone-400 uppercase mb-0.5">
              CHECK-IN
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none cursor-pointer"
            />
          </div>
          <div className="p-3.5 px-4 flex-1 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-wider text-stone-400 uppercase mb-0.5">
              CHECKOUT
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Caixas Seleção de Plataforma (Airbnb / Booking) */}
        <div className="mb-8 p-4 rounded-2xl bg-stone-50 border border-stone-100">
          <label className="block text-xs font-semibold text-stone-700 mb-3">
            Escolha sua plataforma de reserva:
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setPlatform("airbnb")}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                platform === "airbnb"
                  ? "border-2 border-stone-900 bg-white text-stone-900 shadow-sm"
                  : "border border-stone-200 bg-stone-100/70 text-stone-600 hover:border-stone-300"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-stone-900 inline-block" />
              Airbnb
            </button>

            <button
              type="button"
              onClick={() => setPlatform("booking")}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                platform === "booking"
                  ? "border-2 border-stone-900 bg-white text-stone-900 shadow-sm"
                  : "border border-stone-200 bg-stone-100/70 text-stone-600 hover:border-stone-300"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-[#003580] text-white font-bold text-[9px] flex items-center justify-center">
                B.
              </span>
              Booking.com
            </button>
          </div>
        </div>

        {/* Rodapé de Ações */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <button
            type="button"
            onClick={() => {
              setCheckIn("");
              setCheckOut("");
            }}
            className="text-xs font-medium text-stone-600 underline hover:text-stone-900 cursor-pointer"
          >
            Limpar datas
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50 transition-all cursor-pointer"
            >
              Fechar
            </button>
            <button
              type="button"
              onClick={handleRedirect}
              className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-all shadow-md cursor-pointer"
            >
              Ver no {platform === "airbnb" ? "Airbnb" : "Booking"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.muted = true;
      video.play().catch(() => {});
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
      className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#1c140e] text-white"
    >
      {/* Background Video Com Contraste Otimizado */}
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
          className="absolute inset-0 w-full h-full object-cover scale-105 opacity-65 pointer-events-none"
        >
          <source src="/video/casa-impecavel.mp4" type="video/mp4" />
          <source src="/videos/casa-impecavel.mp4" type="video/mp4" />
        </video>

        {/* Gradiente Elegante Marrom Café */}
        <div 
          style={{
            background: 'linear-gradient(to bottom, rgba(28,20,14,0.85) 0%, rgba(28,20,14,0.55) 50%, rgba(22,17,13,0.95) 100%)'
          }}
          className="absolute inset-0 z-10 pointer-events-none" 
        />
      </div>

      {/* Conteúdo do Hero */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 lg:pt-48 pb-16 text-center text-white flex flex-col items-center w-full">
        
        {/* Título Principal Completo e Visível */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white mb-6 drop-shadow-2xl leading-tight text-center max-w-4xl mx-auto">
          Aconchego, sofisticação e <br className="hidden sm:inline" />
          <span className="italic font-normal text-amber-200/95">experiência impecável.</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-stone-200 font-light mb-10 sm:mb-12 leading-relaxed drop-shadow-lg text-center">
          Sua casa de temporada na Quadra 208 Norte em Palmas. Quartos climatizados e o equilíbrio perfeito entre o conforto de casa e o padrão de hotelaria.
        </p>

        {/* Grid de 4 Destaques em Glassmorphism */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full text-left mb-8 sm:mb-10">
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

        {/* Badges de Avaliação (Abrem o Modal ao Clicar) */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#2a1d15]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-stone-200 shadow-xl hover:border-amber-400/60 hover:bg-[#38271c] transition-all cursor-pointer"
          >
            <span className="text-amber-400">★</span> Nota 9,7 no Booking <span className="text-stone-400">• Limpeza 9,9</span>
          </button>
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#2a1d15]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-stone-200 shadow-xl hover:border-amber-400/60 hover:bg-[#38271c] transition-all cursor-pointer"
          >
            <span className="text-amber-400">★</span> 5.0 no Airbnb <span className="text-stone-400">• Preferido dos Hóspedes</span>
          </button>
        </div>

      </div>

      {/* Componente Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
