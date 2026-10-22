"use client";

import React, { useState } from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { BOOKING_URL, AIRBNB_URL, WHATSAPP_URL } from "@/constants/links";

export const Footer = () => {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer className="w-full bg-[#2A2421] text-[#F8F6F2] py-16 px-4 border-t border-[#3B2E2A]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        <h3 className="font-serif-Luxury text-3xl text-white tracking-wide">
          CASA IMPECÁVEL
        </h3>
        <p className="text-sm text-[#E5DFD5]/80 max-w-md font-light">
          Quadra 208 Norte, Alameda 02 • Palmas, Tocantins.
          <br />
          Sua casa de temporada de alto padrão no coração da cidade.
        </p>

        {/* Links Principais */}
        <div className="flex flex-wrap items-center justify-center gap-3 my-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7A4B32] text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#A66844] transition-all shadow-md"
          >
            Booking.com
          </a>
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2A2421] px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#EFECE6] transition-all shadow-md"
          >
            Airbnb
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-emerald-800 transition-all shadow-md"
          >
            WhatsApp Direct
          </a>
        </div>

        {/* Rodapé Legal com Links de Privacidade e Termos */}
        <div className="pt-6 border-t border-[#3B2E2A] w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#E5DFD5]/60 gap-4">
          <p>© {new Date().getFullYear()} Casa Impecável Palmas. Todos os direitos reservados.</p>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Privacidade
            </button>
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* Modal / Dialog de Privacidade ou Termos */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setModalType(null)}
        >
          <div
            className="bg-white text-[#2A2421] max-w-2xl w-full p-8 rounded-3xl shadow-2xl relative cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalType(null)}
              className="absolute top-6 right-6 text-[#6B625D] hover:text-[#2A2421] p-2 rounded-full bg-[#F8F6F2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === "privacy" ? (
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3 text-[#7A4B32] mb-2">
                  <ShieldCheck className="w-7 h-7" />
                  <h3 className="font-serif-Luxury text-2xl font-bold">Política de Privacidade</h3>
                </div>
                <p className="text-sm text-[#6B625D] font-light leading-relaxed">
                  Respeitamos integralmente a sua privacidade. As informações fornecidas durante consultas de disponibilidade (como datas e número de hóspedes) são utilizadas exclusivamente para o atendimento personalizado e direcionamento seguro às plataformas oficiais de reserva (Booking.com e Airbnb).
                </p>
                <p className="text-sm text-[#6B625D] font-light leading-relaxed">
                  Nenhum dado pessoal é comercializado ou compartilhado com terceiros.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3 text-[#7A4B32] mb-2">
                  <FileText className="w-7 h-7" />
                  <h3 className="font-serif-Luxury text-2xl font-bold">Termos de Uso</h3>
                </div>
                <p className="text-sm text-[#6B625D] font-light leading-relaxed">
                  As regras da acomodação seguem os padrões exigidos pelas plataformas Booking.com e Airbnb.
                </p>
                <ul className="text-sm text-[#6B625D] font-light space-y-2 list-disc list-inside">
                  <li>Check-in a partir das 14h e Check-out até às 11h.</li>
                  <li>Capacidade máxima permitida: até 6 hóspedes.</li>
                  <li>Proibido festas ou eventos sem prévia autorização da anfitriã.</li>
                  <li>Garagem privativa disponível para até 2 veículos grandes.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};