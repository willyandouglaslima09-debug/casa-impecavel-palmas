"use client";

import React, { useState } from "react";
import { Calendar, Users, ExternalLink, MessageCircle } from "lucide-react";
import { BOOKING_URL, AIRBNB_URL, WHATSAPP_URL } from "@/constants/links";

export const BookingSearchWidget = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  // Gerador de link dinâmico para o Booking
  const getBookingLink = () => {
    if (!checkIn || !checkOut) return BOOKING_URL;
    return `${BOOKING_URL}?checkin=${checkIn};checkout=${checkOut};group_adults=${guests}`;
  };

  // Gerador de link dinâmico para o Airbnb
  const getAirbnbLink = () => {
    if (!checkIn || !checkOut) return AIRBNB_URL;
    return `${AIRBNB_URL}?check_in=${checkIn}&check_out=${checkOut}&adults=${guests}`;
  };

  // Gerador de mensagem formatada para o WhatsApp
  const getWhatsAppLink = () => {
    const formattedCheckIn = checkIn ? checkIn.split("-").reverse().join("/") : "a definir";
    const formattedCheckOut = checkOut ? checkOut.split("-").reverse().join("/") : "a definir";
    const text = encodeURIComponent(
      `Olá, Simone! Gostaria de verificar a disponibilidade da Casa Impecável:\n\n📅 Check-in: ${formattedCheckIn}\n📅 Check-out: ${formattedCheckOut}\n👥 Hóspedes: ${guests} pessoa(s)`
    );
    return `https://wa.me/5563984225897?text=${text}`;
  };

  return (
    <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md border border-[#E5DFD5] p-5 sm:p-6 rounded-3xl shadow-lg transition-all text-left">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {/* Campo Check-in */}
        <div className="flex flex-col space-y-1">
          <label className="text-[11px] font-bold text-[#7A4B32] uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Check-in</span>
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-[#F8F6F2] border border-[#E5DFD5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#2A2421] font-medium focus:outline-none focus:border-[#7A4B32] transition-colors"
          />
        </div>

        {/* Campo Check-out */}
        <div className="flex flex-col space-y-1">
          <label className="text-[11px] font-bold text-[#7A4B32] uppercase tracking-wider flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Check-out</span>
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-[#F8F6F2] border border-[#E5DFD5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#2A2421] font-medium focus:outline-none focus:border-[#7A4B32] transition-colors"
          />
        </div>

        {/* Campo Hóspedes */}
        <div className="flex flex-col space-y-1">
          <label className="text-[11px] font-bold text-[#7A4B32] uppercase tracking-wider flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>Hóspedes</span>
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-[#F8F6F2] border border-[#E5DFD5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#2A2421] font-medium focus:outline-none focus:border-[#7A4B32] transition-colors"
          >
            <option value="1">1 Hóspede</option>
            <option value="2">2 Hóspedes</option>
            <option value="3">3 Hóspedes</option>
            <option value="4">4 Hóspedes</option>
            <option value="5">5 Hóspedes</option>
            <option value="6">6 Hóspedes (Máx)</option>
          </select>
        </div>
      </div>

      {/* Botões de Ação Dinâmicos */}
      <div className="pt-3 border-t border-[#E5DFD5]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-[#6B625D] font-light italic text-center sm:text-left">
          Selecione as datas para consultar com estimativa direta.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto">
          <a
            href={getBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-warm-button text-white text-xs font-semibold px-5 py-3 rounded-full uppercase tracking-wider hover:scale-105 transition-all inline-flex items-center gap-1.5 shadow-sm"
          >
            <span>Booking</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
          </a>

          <a
            href={getAirbnbLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#2A2421] border border-[#E5DFD5] hover:border-[#7A4B32] text-xs font-semibold px-5 py-3 rounded-full uppercase tracking-wider hover:scale-105 transition-all inline-flex items-center gap-1.5 shadow-sm"
          >
            <span>Airbnb</span>
            <ExternalLink className="w-3.5 h-3.5 text-rose-500" />
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-5 py-3 rounded-full uppercase tracking-wider hover:scale-105 transition-all inline-flex items-center gap-1.5 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};