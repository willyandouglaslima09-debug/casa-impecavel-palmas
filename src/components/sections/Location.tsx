"use client";

import React from "react";
import { MapPin, Navigation, ExternalLink, Clock } from "lucide-react";
import { AnimatedContent } from "@/components/ui/AnimatedContent";

const nearbyPlaces = [
  {
    title: "Praça dos Girassóis & Centro Executivo",
    time: "3 min de carro",
    desc: "Maior praça da América Latina e centro dos órgãos governamentais de Palmas.",
  },
  {
    title: "Restaurantes & Farmácias na 208 Norte",
    time: "1 min a pé",
    desc: "Pizzarias, restaurantes de comida regional, mercados e farmácias na quadra.",
  },
  {
    title: "Praia da Graciosa",
    time: "8 min de carro",
    desc: "A orla mais famosa da cidade com calçadão, bares e passeios de barco no lago.",
  },
  {
    title: "Praia do Prata & Ilha Canela",
    time: "12 min de carro",
    desc: "Acesso rápido aos melhores pontos de banho e gastronomia no Lago de Palmas.",
  },
];

export const Location = () => {
  return (
    <section id="localizacao" className="w-full py-24 bg-[#F8F6F2] text-[#2A2421] px-4 sm:px-8">
      <div className="max-w-7xl lg:max-w-[1360px] mx-auto">
        <AnimatedContent distance={30} blur={4} duration={0.8} className="text-center mb-14">
          <span className="text-[#7A4B32] uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
            Localização Privilegiada
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-Luxury font-light">
            Quadra 208 Norte • <span className="wood-text-gradient italic">O Coração de Palmas</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B625D] max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Localizada em uma das quadras mais valorizadas, tranquilas e estratégicas da capital tocantinense.
          </p>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Card Principal do Mapa */}
          <AnimatedContent distance={30} duration={0.9} className="lg:col-span-5 h-full">
            <div className="p-8 sm:p-10 bg-white border border-[#E5DFD5] rounded-3xl shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-between h-full">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-[#F8F6F2] rounded-full mb-4">
                  <MapPin className="w-10 h-10 text-[#7A4B32]" />
                </div>
                <h3 className="text-2xl font-serif-Luxury text-[#2A2421] mb-2">CASA IMPECÁVEL</h3>
                <p className="text-sm text-[#6B625D] font-light mb-6">
                  Quadra 208 Norte, Alameda 02 • Palmas, TO
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Quadra+208+Norte+Palmas+TO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-3 bg-warm-button text-white py-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <Navigation className="w-4 h-4 text-amber-200" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-4 h-4 text-amber-200" />
              </a>
            </div>
          </AnimatedContent>

          {/* Lista de Distâncias e Pontos de Interesse */}
          <AnimatedContent distance={30} stagger={0.1} duration={0.9} className="lg:col-span-7 space-y-4">
            {nearbyPlaces.map((place, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-[#E5DFD5] rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h4 className="font-semibold text-base text-[#2A2421]">{place.title}</h4>
                  <p className="text-xs sm:text-sm text-[#6B625D] font-light mt-1">{place.desc}</p>
                </div>
                <div className="inline-flex items-center space-x-1.5 bg-[#F8F6F2] border border-[#E5DFD5] px-3.5 py-1.5 rounded-full shrink-0 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-[#7A4B32]" />
                  <span className="text-xs font-semibold text-[#7A4B32]">{place.time}</span>
                </div>
              </div>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
