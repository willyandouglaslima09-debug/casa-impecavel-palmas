import React from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Marcio S.",
    score: "10.0",
    text: "A casa faz jus ao nome: LIMPEZA IMPECÁVEL! Ar-condicionado gela super rápido e a Simone é uma anfitriã fantástica.",
  },
  {
    name: "Juliana & Roberto",
    score: "10.0",
    text: "Localização perfeita na Quadra 208 Norte. Perto dos restaurantes do centro. Cozinha bem equipada e cama confortável.",
  },
  {
    name: "Carlos E. Oliveira",
    score: "9.8",
    text: "Garagem espaçosa para duas caminhonetes. Quartos climatizados e chuveiro forte e quente.",
  },
];

export const Reviews = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-[#0F0F0F] px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif-luxury text-3xl sm:text-5xl font-semibold text-white mb-4">Nota 9,7 "Excepcional" no Booking</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
          {REVIEWS.map((rev, idx) => (
            <div key={idx} className="bg-[#121212] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold text-white">{rev.name}</span>
                <span className="bg-[#C5A059]/20 text-[#C5A059] font-bold text-xs px-2 py-1 rounded">★ {rev.score}</span>
              </div>
              <p className="text-xs text-[#E0D2C3]/90 italic">"{rev.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};