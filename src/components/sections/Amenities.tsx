import React from "react";
import { Wifi, Tv, Shirt, Utensils, ShieldCheck, Flame } from "lucide-react";
import { AnimatedContent } from "@/components/ui/AnimatedContent";

const amenities = [
  {
    icon: <Wifi className="w-6 h-6 text-[#7A4B32]" />,
    title: "Wi-Fi de Alta Velocidade",
    desc: "Ideal para home office e streaming em 4K.",
  },
  {
    icon: <Tv className="w-6 h-6 text-[#7A4B32]" />,
    title: "Smart TV de Tela Plana",
    desc: "Instalada na sala com painel ripado acolhedor.",
  },
  {
    icon: <Shirt className="w-6 h-6 text-[#7A4B32]" />,
    title: "Lavanderia Privativa",
    desc: "Máquina de lavar roupas para estadias curtas ou longas.",
  },
  {
    icon: <Utensils className="w-6 h-6 text-[#7A4B32]" />,
    title: "Cozinha Completa",
    desc: "Frigorífico inox, fogão e utensílios gourmet.",
  },
  {
    icon: <Flame className="w-6 h-6 text-[#7A4B32]" />,
    title: "Pequenos Eletros",
    desc: "Cafeteira, tostadeira e acessórios práticos.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#7A4B32]" />,
    title: "Segurança & Privacidade",
    desc: "Garagem coberta e portão privativo na Quadra 208 Norte.",
  },
];

export const Amenities = () => {
  return (
    <section id="comodidades" className="py-24 bg-[#EFECE6] text-[#2A2421] px-4 sm:px-8">
      <div className="max-w-7xl lg:max-w-[1360px] mx-auto">
        <AnimatedContent distance={30} blur={4} duration={0.8} className="text-center mb-16">
          <span className="text-[#7A4B32] uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
            Tudo o que Precisa
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-Luxury font-light">
            Comodidades <span className="wood-text-gradient italic">Inclusas</span>
          </h2>
        </AnimatedContent>

        <AnimatedContent
          distance={30}
          stagger={0.08}
          duration={0.8}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {amenities.map((item, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 bg-white/90 border border-[#E5DFD5] rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start space-x-4"
            >
              <div className="p-3 bg-[#F8F6F2] rounded-xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-[#2A2421]">{item.title}</h3>
                <p className="text-sm text-[#6B625D] font-light mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </AnimatedContent>
      </div>
    </section>
  );
};