"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/links";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 bg-[#F8F6F2]/95 backdrop-blur-md border-b border-[#E5DFD5] ${
        scrolled ? "py-3 shadow-md" : "py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl lg:max-w-[1360px] mx-auto flex items-center justify-between">
        {/* Logótipo */}
        <a href="#a-casa" className="flex flex-col group">
          <span className="font-serif-Luxury text-xl sm:text-2xl font-bold text-[#2A2421] tracking-wider group-hover:text-[#7A4B32] transition-colors">
            CASA IMPECÁVEL
          </span>
          <span className="text-[10px] tracking-[0.2em] text-[#7A4B32] uppercase font-medium">
            Palmas • Tocantins
          </span>
        </a>

        {/* Menu de Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider text-[#6B625D]">
          <a href="#a-casa" className="hover:text-[#7A4B32] transition-colors">
            A Casa
          </a>
          <a href="#galeria" className="hover:text-[#7A4B32] transition-colors">
            Interiores
          </a>
          <a href="#comodidades" className="hover:text-[#7A4B32] transition-colors">
            Comodidades
          </a>
          <a href="#localizacao" className="hover:text-[#7A4B32] transition-colors">
            Localização
          </a>
        </nav>

        {/* Botão VER DISPONIBILIDADE com direcionamento para WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-warm-button text-white px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:scale-105 transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
          <span>Ver Disponibilidade</span>
        </a>
      </div>
    </header>
  );
};
    


