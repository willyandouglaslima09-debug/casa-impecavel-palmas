"use client";

import React, { useEffect, useRef, useState } from "react";

// Modal de Escolha de Plataforma (Airbnb / Booking)
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
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  if (!isOpen) return null;

  const handleRedirect = () => {
    const targetUrl = platform === "airbnb" ? airbnbUrl : bookingUrl;
    window.open(targetUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 text-stone-900">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
              Selecionar datas
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Adicione suas datas de viagem para ver os preços exatos
            </p>
          </div>

          <div className="flex border border-stone-300 rounded-xl overflow-hidden shadow-sm divide-x divide-stone-300">
            <div className="p-2 px-3 bg-stone-50/50 flex flex-col min-w-[100px]">
              <span className="text-[9px] font-bold tracking-wider text-stone-500 uppercase">
                CHECK-IN
              </span>
              <input
                type="text"
                placeholder="DD/MM/AAAA"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent text-xs font-semibold text-stone-800 focus:outline-none"
              />
            </div>
            <div className="p-2 px-3 bg-stone-50/50 flex flex-col min-w-[100px]">
              <span className="text-[9px] font-bold tracking-wider text-stone-400 uppercase">
                CHECKOUT
              </span>
              <input
                type="text"
                placeholder="Adicionar data"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent text-xs font-semibold text-stone-800 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
          <label className="block text-xs font-semibold text-stone-700 mb-2.5">
            Escolha sua plataforma de reserva:
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setPlatform("airbnb")}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border-2 font-semibold text-xs sm:text-sm transition-all ${
                platform === "airbnb"
                  ? "border-stone-900 bg-white text-stone-900 shadow-md scale-[1.01]"
                  : "border-stone-200 bg-stone-100/70 text-stone-500 hover:border-stone-300"
              }`}
            >
              <span className="text-red-500 font-bold">●</span> Airbnb
            </button>

            <button
              type="button"
              onClick={() => setPlatform("booking")}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border-2 font-semibold text-xs sm:text-sm transition-all ${
                platform === "booking"
                  ? "border-stone-900 bg-white text-stone-900 shadow-md scale-[1.01]"
                  : "border-stone-200 bg-stone-100/70 text-stone-500 hover:border-stone-300"
              }`}
            >
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#003580] text-white font-bold text-[9px]">
                B.
              </span>
              Booking.com
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-stone-200 pt-4">
          <button
            type="button"
            onClick={() => {
              setCheckIn("");
              setCheckOut("");
            }}
            className="text-xs font-semibold text-stone-600 underline hover:text-stone-900"
          >
            Limpar datas
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100"
            >
              Fechar
            </button>
            <button
              type="button"
              onClick={handleRedirect}
              className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-all shadow-md"
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
            background: 'linear-gradient(to bottom, rgba(28,20,14,0.95) 0%, rgba(28,20,14,0.72) 50%, rgba(22,17,13,0.98) 100%)'
          }}
          className="absolute inset-0 z-10 pointer-events-none" 
        />
      </div>

      {/* Conteúdo com fluxo vertical natural sem colisões */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 text-center text-white flex flex-col items-center w-full">
        
        {/* Título Principal */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white mb-6 drop-shadow-2xl leading-tight text-center max-w-4xl mx-auto">
          Aconchego, sofisticação e <br className="hidden sm:inline" />
          <span className="italic font-normal text-amber-200/95">experiência impecável.</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-stone-200 font-light mb-10 sm:mb-12 leading-relaxed drop-shadow-lg text-center">
          Sua casa de temporada na Quadra 208 Norte em Palmas. Quartos climatizados e o equilíbrio perfeito entre o conforto de casa e o padrão de hotelaria.
        </p>

        {/* Grid de Destaques em Tailwind nativo */}
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

          <div className="p-4 sm:p-5 rounded-2xl bg-[#2a1d15]/85 backdrop-blur-md border border-white/20 hover:border-amber-400/40 transition-all shadow-2xl
