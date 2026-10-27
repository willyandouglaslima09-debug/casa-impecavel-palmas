"use client";

import React, { useEffect, useRef, useState } from "react";

// Modal de Reserva / Plataformas
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 text-stone-900"
      onClick={onClose}
    >
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
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-transparent text-xs font-semibold text-stone-800 focus:outline-none cursor-pointer"
              />
            </div>
            <div className="p-2 px-3 bg-stone-50/50 flex flex-col min-w-[100px]">
              <span className="text-[9px] font-bold tracking-wider text-stone-400 uppercase">
                CHECKOUT
              </span>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-transparent text-xs font-semibold text-stone-800 focus:outline-none cursor-pointer"
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
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [platform, setPlatform] = useState<"airbnb" | "booking">("airbnb");

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

  const handleSearchAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section 
      style={{ backgroundColor: '#1c140e' }}
      className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#1c140e] text-white"
    >
      {/* Background Video */}
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

        <div 
          style={{
            background: 'linear-gradient(to bottom, rgba(28,20,14,0.95) 0%, rgba(28,20,14,0.72) 50%, rgba(22,17,13,0.98) 100%)'
          }}
          className="absolute inset-0 z-10 pointer-events-none" 
        />
      </div>

      {/* Conteúdo com recuo superior de 200px para livrar totalmente o cabeçalho */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-[200px] sm:pt-[220px] pb-20 text-center text-white flex flex-col items-center w-full">
        
        {/* Título Principal Completo e Visível */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight text-white mb-6 drop-shadow-2xl leading-tight text-center max-w-4xl mx-auto">
          Aconchego, sofisticação e <br className="hidden sm:inline" />
          <span className="italic font-normal text-amber-200/95">experiência impecável.</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-stone-200 font-light mb-8 sm:mb-10 leading-relaxed drop-shadow-lg text-center">
          Sua casa de temporada na Quadra 208 Norte em Palmas. Quartos climatizados e o equilíbrio perfeito entre o conforto de casa e o padrão de hotelaria.
        </p>

        {/* BARRA VISÍVEL DE CHECK-IN / CHECK-OUT E PLATAFORMA */}
        <form 
          onSubmit={handleSearchAvailability}
          className="w-full max-w-4xl bg-[#2a1d15]/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 mb-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-3 text-left"
        >
          {/* Check-in */}
          <div className="flex flex-col w-full md:w-auto flex-1 px-3 py-2 bg-stone-900/40 rounded-xl border border-white/10">
            <label className="text-[10px] font-bold tracking-wider text-amber-300 uppercase mb-1">
              📅 Check-in
            </label>
            <input 
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none cursor-pointer"
            />
          </div>

          {/* Check-out */}
          <div className="flex flex-col w-full md:w-auto flex-1 px-3 py-2 bg-stone-900/40 rounded-xl border border-white/10">
            <label className="text-[10px] font-bold tracking-wider text-amber-300 uppercase mb-1">
              📅 Check-out
            </label>
            <input 
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none cursor-pointer"
            />
          </div>

          {/* Seletor de Plataforma */}
          <div className="flex flex-col w-full md:w-auto flex-1 px-3 py-2 bg-stone-900/40 rounded-xl border border-white/10">
            <label className="text-[10px] font-bold tracking-wider text-amber-300 uppercase mb-1">
              🏡 Plataforma
            </label>
            <select 
              value={platform}
              onChange={(e) => setPlatform(e.target.value as "airbnb" | "booking")}
              className="bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none cursor-pointer"
            >
              <option value="airbnb" className="bg-[#1c140e] text-white">Airbnb</option>
              <option value="booking" className="bg-[#1c140e] text-white">Booking.com</option>
            </select>
          </div>

          {/* Botão de Ação */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Ver Disponibilidade</span>
            <span>→</span>
          </button>
        </form>

        {/* Grid de Destaques */}
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

        {/* Badges de Avaliação */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2a1d15]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-stone-200 shadow-xl hover:border-amber-400/50 hover:bg-[#38271c] transition-all cursor-pointer"
          >
            <span className="text-amber-400">★</span> Nota 9,7 no Booking <span className="text-stone-400">• Limpeza 9,9</span>
          </button>
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2a1d15]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-stone-200 shadow-xl hover:border-amber-400/50 hover:bg-[#38271c] transition-all cursor-pointer"
          >
            <span className="text-amber-400">★</span> 5.0 no Airbnb <span className="text-stone-400">• Preferido dos Hóspedes</span>
          </button>
        </div>

      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
