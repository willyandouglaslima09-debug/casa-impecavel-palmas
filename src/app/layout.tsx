import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "CASA IMPECÁVEL | Hospedagem de Alto Padrão em Palmas - TO",
  description:
    "Acomodação moderna, 100% climatizada e higienizada na Quadra 208 Norte em Palmas - Tocantins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#F8F6F2] text-[#2A2421] w-full min-h-screen font-sans antialiased selection:bg-[#7A4B32] selection:text-white overflow-x-hidden">
        <main className="w-full flex flex-col items-center overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}



