"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Se o iOS bloquear o autoplay (ex: Poupança de Bateria), oculta controlos nativos
      });
    }
  }, []);

  return (
    <section 
      style={{ backgroundColor: '#0f0d0b' }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0d0b] text-white"
    >
      {/* Background Video + Overlay Escuro Blindado */}
      <div 
        style={{ backgroundColor: '#0f0d0b' }}
        className="absolute inset-0 z-0 overflow-hidden bg-[#0f0d0b]"
      >
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60 pointer-events-none"
          >
            <source src="/video/casa-impecavel.mp4" type="video/mp4" />
            <source src="/videos/casa-impecavel.mp4" type="video/mp4" />
          </video>
        )}

        {/* Gradiente Escuro Forçado via Style Inline */}
        <div 
          style={{
            background: 'linear-gradient(to bottom, rgba(15,13,11,0.92) 0%, rgba(15,13,11,0.75) 50%, rgba(15,13,11,0.98) 100%)'
          }}
          className="absolute inset-0 z-10 pointer-events-none" 
        />
      </div>

      {/* Conteúdo do Hero com pt-44 no Mobile para Espaçamento Perfeito */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 sm:pt-48 pb-16 text-center text-white">
        
        {/* Badges de Avaliação */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/90 backdrop-blur-md border border-white/20 text-xs font-medium text-stone-200 shadow-xl">
            <span className="text-amber-400">★</span> Nota 9,7 no Booking <span className="text-stone-400">• Limpeza 9,9</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/90 backdrop-blur-md border border-white/20 text-xs font-medium text-stone-200 shadow-xl">
            <span className="text-amber-400">★</span> 5.0 no Airbnb <span className="text-stone-400">• Preferido dos Hóspedes</span>
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb
