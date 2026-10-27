export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Container do Vídeo de Fundo com Overlay Quente e Elegante */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-video-frame.jpg"
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/casa-impecavel.mp4" type="video/mp4" />
        </video>

        {/* Gradiente de alto contraste para destacar os textos */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-stone-950/95" />
      </div>

      {/* Conteúdo do Hero com Tipografia em Destaque */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center text-white">
        
        {/* Badges de Avaliação */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-stone-200">
            <span className="text-amber-400">★</span> Nota 9,7 no Booking <span className="text-stone-400">• Limpeza 9,9</span>
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-stone-200">
            <span className="text-amber-400">★</span> 5.0 no Airbnb <span className="text-stone-400">• Preferido dos Hóspedes</span>
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6 drop-shadow-md">
          Aconchego, sofisticação e <br className="hidden sm:inline" />
          <span className="italic font-normal text-amber-200/90">experiência impecável.</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-300 font-light mb-12 leading-relaxed">
          Sua casa de temporada na Quadra 208 Norte em Palmas. Quartos climatizados e o equilíbrio perfeito entre o conforto de casa e o padrão de hotelaria.
        </p>

        {/* Grid Simétrica de Destaques (Utilizando a classe customizada .hero-grid-simetrico) */}
        <div className="hero-grid-simetrico text-left">
          
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <span className="text-amber-300 text-xl block mb-2">🚗</span>
            <h3 className="text-sm font-semibold text-white">Garagem Privativa</h3>
            <p className="text-xs text-stone-300 mt-1">Para 2+ Veículos Grandes</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <span className="text-amber-300 text-xl block mb-2">❄️</span>
            <h3 className="text-sm font-semibold text-white">Quartos Climatizados</h3>
            <p className="text-xs text-stone-300 mt-1">Ar silencioso nos quartos</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <span className="text-amber-300 text-xl block mb-2">✨</span>
            <h3 className="text-sm font-semibold text-white">Limpeza Ouro 9,9</h3>
            <p className="text-xs text-stone-300 mt-1">Higienização rigorosa</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-amber-400/30 transition-all">
            <span className="text-amber-300 text-xl block mb-2">👥</span>
            <h3 className="text-sm font-semibold text-white">Até 6 Hóspedes</h3>
            <p className="text-xs text-stone-300 mt-1">Conforto para famílias</p>
          </div>

        </div>
      </div>
    </section>
  );
}
