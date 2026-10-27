export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Background Video + Overlay Escuro de Alto Contraste */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-stone-950">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 opacity-80"
        >
          <source src="/video/casa-impecavel.mp4" type="video/mp4" />
        </video>

        {/* Gradiente Escuro Reforçado para Leitura Perfeita no Mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/70 to-stone-950/95" />
      </div>

      {/* Conteúdo do Hero - pt-44 (176px) para afastar completamente do Header Fixo no Mobile */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-16 sm:pt-48 text-center text-white">
        
        {/* Badges de Avaliação com Espaçamento Corrigido */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-xs font-medium text-stone-200 shadow-lg">
            <span className="text-amber-400">★</span> Nota 9,7 no Booking <span className="text-stone-400">• Limpeza 9,9</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-xs font-medium text-stone-200 shadow-lg">
            <span className="text-amber-400">★</span> 5.0 no Airbnb <span className="text-stone-400">• Preferido dos Hóspedes</span>
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6 drop-shadow-xl leading-tight">
          Aconchego, sofisticação e <br className="hidden sm:inline" />
          <span className="italic font-normal text-amber-200/90">experiência impecável.</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-stone-200 font-light mb-10 leading-relaxed drop-shadow-md">
          Sua casa de temporada na Quadra 208 Norte em Palmas. Quartos climatizados e o equilíbrio perfeito entre o conforto de casa e o padrão de hotelaria.
        </p>

        {/* Grid Simétrica de Destaques */}
        <div className="hero-grid-simetrico text-left">
          
          <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/70 backdrop-blur-md border border-white/20 hover:border-amber-400/30 transition-all shadow-xl">
            <span className="text-amber-300 text-xl block mb-1.5">🚗</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Garagem Privativa</h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Para 2+ Veículos Grandes</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/70 backdrop-blur-md border border-white/20 hover:border-amber-400/30 transition-all shadow-xl">
            <span className="text-amber-300 text-xl block mb-1.5">❄️</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Quartos Climatizados</h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-0.5">Ar silencioso nos quartos</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/70 backdrop-blur-md border border-white/20 hover:border-amber-400/30 transition-all shadow-xl">
            <span className="text-amber-300 text-xl block mb-1.5">✨</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Limpeza Ouro 9,9</h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Higienização rigorosa</p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/70 backdrop-blur-md border border-white/20 hover:border-amber-400/30 transition-all shadow-xl">
            <span className="text-amber-300 text-xl block mb-1.5">👥</span>
            <h3 className="text-xs sm:text-sm font-semibold text-white">Até 6 Hóspedes</h3>
            <p className="text-[11px] sm:text-xs text-stone-300 mt-0.5">Conforto para famílias</p>
          </div>

        </div>
      </div>
    </section>
  );
}
