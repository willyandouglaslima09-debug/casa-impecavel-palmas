"use client";

import React from "react";
import { Car, Snowflake, Sparkles, Users } from "lucide-react";

const badges = [
  {
    icon: <Car className="w-5 h-5 text-[#7A4B32]" />,
    title: "Garagem Privativa",
    desc: "Para 2+ Veículos Grandes",
  },
  {
    icon: <Snowflake className="w-5 h-5 text-[#7A4B32]" />,
    title: "Quartos Climatizados",
    desc: "Ar silencioso nos quartos",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#7A4B32]" />,
    title: "Limpeza Ouro 9,9",
    desc: "Higienização rigorosa",
  },
  {
    icon: <Users className="w-5 h-5 text-[#7A4B32]" />,
    title: "Até 6 Hóspedes",
    desc: "Conforto para famílias",
  },
];

export const HeroBadges = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto w-full">
      {badges.map((b, i) => (
        <div
          key={i}
          className="bg-white/80 backdrop-blur-md border border-[#E5DFD5] p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center space-y-1.5"
        >
          <div className="p-2.5 bg-[#F8F6F2] rounded-xl">{b.icon}</div>
          <h4 className="text-xs sm:text-sm font-semibold text-[#2A2421]">{b.title}</h4>
          <p className="text-[11px] sm:text-xs text-[#6B625D] font-light">{b.desc}</p>
        </div>
      ))}
    </div>
  );
};







    

