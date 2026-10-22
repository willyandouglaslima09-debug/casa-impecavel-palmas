"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatedContent } from "@/components/ui/AnimatedContent";
import { FlexCarousel, CarouselItem } from "@/components/ui/FlexCarousel";

const galleryImages: CarouselItem[] = [
  {
    src: "/images/hero-fachada.jpg",
    alt: "Fachada & Garagem Privativa",
    title: "Fachada & Garagem Privativa",
    subtitle: "Garagem espaçosa para até 2 veículos grandes na Quadra 208 Norte.",
  },
  {
    src: "/images/sala-estar.jpg",
    alt: "Sala de Estar de Alto Padrão",
    title: "Sala de Estar de Alto Padrão",
    subtitle: "Ambiente moderno com painel ripado, iluminação acolhedora e sofá amplo.",
  },
  {
    src: "/images/área_de_jantar.jpg",
    alt: "Área de Jantar Elegante",
    title: "Área de Jantar Elegante",
    subtitle: "Mesa aconchegante de 4 lugares com luminária pendente e acabamento em mármore.",
  },
  {
    src: "/images/cozinha.jpg",
    alt: "Cozinha Gourmet Completa",
    title: "Cozinha Gourmet Completa",
    subtitle: "Eletrodomésticos modernos e utensílios completos para refeições práticas.",
  },
  {
    src: "/images/quarto.jpg",
    alt: "Suíte Principal Climatizada",
    title: "Suíte Principal Climatizada",
    subtitle: "Enxoval macio de hotelaria, iluminação em LED e ar-condicionado silencioso.",
  },
  {
    src: "/images/Suite principal.jpg",
    alt: "Segundo Quarto Climatizado",
    title: "Segundo Quarto Climatizado",
    subtitle: "Espaço aconchegante totalmente equipado e ideal para famílias ou grupos.",
  },
  {
    src: "/images/banheiro.jpg",
    alt: "Banheiro Impecável",
    title: "Banheiro Impecável",
    subtitle: "Chuveiro de alta pressão e limpeza rigorosa nota 9,9 no Booking.",
  },
  {
    src: "/images/lavanderia.jpg",
    alt: "Área de Serviço & Lavanderia",
    title: "Área de Serviço & Lavanderia",
    subtitle: "Praticidade completa com máquina de lavar para estadias longas.",
  },
];

export const PropertyGallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-24 bg-[#F8F6F2] text-[#2A2421] px-4 max-w-7xl mx-auto overflow-hidden">
      <AnimatedContent distance={30} blur={4} duration={0.8} className="text-center mb-12">
        <span className="text-[#7A4B32] uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
          Acomodação Exclusiva
        </span>
        <h2 className="text-3xl md:text-5xl font-serif-Luxury font-light">
          Conheça cada detalhe da <span className="wood-text-gradient italic">Casa Impecável</span>
        </h2>
      </AnimatedContent>

      {/* Carrossel 3D WebGL com suporte a clique */}
      <AnimatedContent distance={40} duration={1}>
        <FlexCarousel items={galleryImages} onSelect={(item) => setSelectedImg(item.src)} />
      </AnimatedContent>

      {/* Modal / Lightbox para Imagem Ampliada */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
            onClick={() => setSelectedImg(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={selectedImg}
              alt="Foto Ampliada"
              fill
              className="object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};