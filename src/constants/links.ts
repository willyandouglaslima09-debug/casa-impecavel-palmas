export const BOOKING_URL = "https://www.booking.com/hotel/br/casa-impecavel-palmas.pt-br.html";
export const AIRBNB_URL = "https://www.airbnb.com.br/rooms/1095822054194722704";
export const WHATSAPP_NUMBER = "5563984225897";
export const WHATSAPP_URL = "https://wa.me/5563984225897?text=Ol%C3%A1!%20Gostaria%20de%20verificar%20a%20disponibilidade%20de%20reserva%20da%20Casa%20Impec%C3%A1vel%20em%20Palmas.";

export const getWhatsAppLink = (checkin = "", checkout = "", nights = 0, guests = 2) => {
  let msg = `Olá, Simone! Gostaria de consultar a disponibilidade da *CASA IMPECÁVEL* em Palmas - TO.`;
  if (nights > 0) {
    msg += `\n\n📅 Entrada: ${checkin}\n📅 Saída: ${checkout}\n🌙 Noites: ${nights}\n👥 Hóspedes: ${guests} pessoas`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};