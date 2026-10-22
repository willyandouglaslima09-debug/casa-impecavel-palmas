"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedContent } from "@/components/ui/AnimatedContent";

const faqData = [
  {
    question: "Como funciona o Check-in e Check-out?",
    answer: "O check-in é realizado a partir das 14h e o check-out até às 11h. Combinamos os detalhes diretamente via WhatsApp para garantir sua chegada com total praticidade e sem esperas.",
  },
  {
    question: "Quais ambientes da casa possuem ar-condicionado?",
    answer: "Os quartos são climatizados com aparelhos de ar-condicionado Split modernos e silenciosos, garantindo noites de sono frescas e confortáveis no clima de Palmas.",
  },
  {
    question: "Qual a capacidade máxima de hóspedes?",
    answer: "A Casa Impecável acomoda confortavelmente até 6 hóspedes, dispondo de suíte e quarto secundário equipados com enxoval completo de padrão hoteleiro.",
  },
  {
    question: "É seguro deixar o veículo na propriedade?",
    answer: "Totalmente seguro! A casa conta com garagem privativa e coberta para até 2 veículos grandes (incluindo caminhonetes) com portão privativo na Quadra 208 Norte.",
  },
  {
    question: "A cozinha possui utensílios para preparar refeições?",
    answer: "Sim, a cozinha gourmet é completa e equipada com frigorífico inox, fogão, micro-ondas, purificador de água, cafeteira, pratos, talheres e panelas de primeira linha.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-[#F8F6F2] text-[#2A2421] px-4 sm:px-8 border-t border-[#E5DFD5]">
      <div className="max-w-4xl mx-auto">
        <AnimatedContent distance={30} blur={4} duration={0.8} className="text-center mb-14">
          <span className="text-[#7A4B32] uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
            Esclareça Tudo
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-Luxury font-light">
            Perguntas <span className="wood-text-gradient italic">Frequentes</span>
          </h2>
        </AnimatedContent>

        <AnimatedContent distance={20} duration={0.8} className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E5DFD5] rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between font-semibold text-base sm:text-lg text-[#2A2421] hover:text-[#7A4B32] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7A4B32] transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#6B625D] font-light leading-relaxed border-t border-[#F8F6F2] pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </AnimatedContent>
      </div>
    </section>
  );
};