"use client";

import React, { useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { AnimatedContent } from "@/components/ui/AnimatedContent";
import { BOOKING_URL, AIRBNB_URL } from "@/constants/links";

const reviewsBooking = [
  {
    author: "Marcio S.",
    rating: "10.0",
    text: '"A casa faz jus ao nome: LIMPEZA IMPECÁVEL! Ar-condicionado dos quartos gela super rápido e a Simone é uma anfitriã fantástica."',
    platform: "Booking.com",
  },
  {
    author: "Juliana & Roberto",
    rating: "10.0",
    text: '"Localização perfeita na Quadra 208 Norte. Perto dos restaurantes do centro. Cozinha bem equipada e cama super confortável."',
    platform: "Booking.com",
  },
  {
    author: "Carlos E. Oliveira",
    rating: "9.8",
    text: '"Garagem espaçosa para duas caminhonetes. Quartos climatizados e chuveiro forte e quente. Voltaremos com certeza."',
    platform: "Booking.com",
  },
];

const reviewsAirbnb = [
  {
    author: "Fernanda M.",
    rating: "5.0",
    text: '"Estadia maravilhosa! A casa é exatamente como nas fotos, extremamente limpa e organizada. Os quartos com ar-condicionado garantiram noites perfeitas de sono."',
    platform: "Airbnb",
  },
  {
    author: "Lucas Andrade",
    rating: "5.0",
    text: '"Excelente espaço em Palmas. Bairro tranquilo na 208 Norte, garagem privativa muito boa e atendimento rápido da anfitriã."',
    platform: "Airbnb",
  },
  {
    author: "Patricia & Família",
    rating: "5.0",
    text: '"Sinta-se em casa! Enxoval cheiroso, cozinha com tudo o que precisamos e ótima localização. Recomendo de olhos fechados."',
    platform: "Airbnb",
  },
];

export const BookingReviews = () => {
  const [activeTab, setActiveTab] = useState<"booking" | "airbnb">("booking");
  const currentReviews = activeTab === "booking" ? reviewsBooking : reviewsAirbnb;

  return (
    <section className="w-full py-24 bg-[#EFECE6] text-[#2A2421] px-4 sm:px-8 border-t border-[#E5DFD5]">
      <div className="max-w-7xl lg:max-w-[1360px] mx-auto">
        <AnimatedContent distance={30} blur={4} duration={0.8} className="text-center mb-12">
          <span className="text-[#7A4B32] uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
            Experiência dos Hóspedes
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-Luxury font-light mb-6">
            Avaliações <span className="wood-text-gradient italic">Reais</span>
          </h2>

          <div className="inline-flex p-1 bg-white border border-[#E5DFD5] rounded-full shadow-sm">
            <button
              onClick={() => setActiveTab("booking")}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "booking"
                  ? "bg-warm-button text-white shadow-md"
                  : "text-[#6B625D] hover:text-[#2A2421]"
              }`}
            >
              Booking.com (9.7)
            </button>
            <button
              onClick={() => setActiveTab("airbnb")}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "airbnb"
                  ? "bg-rose-600 text-white shadow-md"
                  : "text-[#6B625D] hover:text-[#2A2421]"
              }`}
            >
              Airbnb (5.0 ★)
            </button>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={30} stagger={0.1} duration={0.8} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {currentReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-[#E5DFD5] p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base text-[#6B625D] italic font-light leading-relaxed mb-6">
                {rev.text}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#E5DFD5]/60">
                <div>
                  <span className="font-semibold text-sm text-[#2A2421] block">{rev.author}</span>
                  <span className="text-[10px] text-[#7A4B32] uppercase font-bold tracking-wider">{rev.platform}</span>
                </div>
                <div className="flex items-center space-x-1 bg-[#F8F6F2] border border-[#E5DFD5] px-2.5 py-1 rounded-md">
                  <Star className={`w-3.5 h-3.5 fill-current ${activeTab === 'booking' ? 'text-amber-500' : 'text-rose-500'}`} />
                  <span className="text-xs font-bold text-[#7A4B32]">{rev.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </AnimatedContent>

        <div className="text-center mt-12">
          <a
            href={activeTab === "booking" ? BOOKING_URL : AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#7A4B32] hover:underline"
          >
            <span>Ver todas as avaliações no {activeTab === "booking" ? "Booking.com" : "Airbnb"}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};