"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  airbnbUrl?: string;
  bookingUrl?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  airbnbUrl = "https://www.airbnb.com", // Adicione o link real da Casa Impecável no Airbnb
  bookingUrl = "https://www.booking.com", // Adicione o link real no Booking
}: BookingModalProps) {
  const [platform, setPlatform] = useState<"airbnb" | "booking">("airbnb");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  if (!isOpen) return null;

  const handleRedirect = () => {
    const targetUrl = platform === "airbnb" ? airbnbUrl : bookingUrl;
    window.open(targetUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 text-stone-900 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-900">
              Selecionar datas
            </h2>
            <p className="text-sm text-stone-500 mt-1">
              Adicione suas datas de viagem para ver os preços exatos
            </p>
          </div>

          {/* Inputs de Check-in / Check-out */}
          <div className="flex border border-stone-300 rounded-xl overflow-hidden shadow-sm divide-x divide-stone-300">
            <div className="p-2.5 px-4 bg-stone-50/50 flex flex-col min-w-[120px]">
              <span className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">
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
            <div className="p-2.5 px-4 bg-stone-50/50 flex flex-col min-w-[120px]">
              <span className="text-[10px] font-bold tracking-wider text-stone-400 uppercase">
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

        {/* Seletor de Plataforma (Airbnb vs Booking) */}
        <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
          <label className="block text-xs font-semibold text-stone-700 mb-2.5">
            Escolha sua plataforma de reserva:
          </label>
          <div className="grid grid-cols-2 gap-3">
            {/* Opção Airbnb */}
            <button
              type="button"
              onClick={() => setPlatform("airbnb")}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                platform === "airbnb"
                  ? "border-stone-900 bg-white text-stone-900 shadow-md scale-[1.01]"
                  : "border-stone-200 bg-stone-100/70 text-stone-500 hover:border-stone-300"
              }`}
            >
              <svg className="w-5 h-5 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              Airbnb
            </button>

            {/* Opção Booking.com */}
            <button
              type="button"
              onClick={() => setPlatform("booking")}
              className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${
                platform === "booking"
                  ? "border-stone-900 bg-white text-stone-900 shadow-md scale-[1.01]"
                  : "border-stone-200 bg-stone-100/70 text-stone-500 hover:border-stone-300"
              }`}
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#003580] text-white font-bold text-[11px]">
                B.
              </span>
              Booking.com
            </button>
          </div>
        </div>

        {/* Placeholder do Calendário de Datas */}
        <div className="border-t border-stone-200 pt-4 mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-stone-500 mb-4 px-2">
            <span>outubro de 2026</span>
            <span>novembro de 2026</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs text-stone-400 py-2">
            <div>D</div><div>S</div><div>T</div><div>Q</div><div>Q</div><div>S</div><div>S</div>
          </div>
          {/* Grade simples demonstrativa */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs py-1">
            <span className="text-stone-300 line-through">25</span>
            <span className="text-stone-300 line-through">26</span>
            <span className="font-semibold text-stone-800">27</span>
            <span className="font-semibold text-stone-800">28</span>
            <span className="font-semibold text-stone-800">29</span>
            <span className="font-semibold text-stone-800">30</span>
            <span className="font-semibold text-stone-800">31</span>
          </div>
        </div>

        {/* Rodapé com Ações */}
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
              className="px-4 py-2.5 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100"
            >
              Fechar
            </button>
            <button
              type="button"
              onClick={handleRedirect}
              className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-all shadow-md"
            >
              Ver no {platform === "airbnb" ? "Airbnb" : "Booking"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
