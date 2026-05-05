export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero/capex-warehouse.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-x text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Buying group for the export
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight">
            <span className="text-brand">CAPEX</span>, votre
            <br />
            <span className="text-brand-accent">centrale d&apos;achat</span>
            <br />
            en France
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            De la vente de la marchandise à la livraison dans le pays de
            destination, nous approvisionnons tout type de client, partout dans
            le monde.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#produits" className="btn-primary">
              Découvrir nos produits
            </a>
            <a href="#contact" className="btn-outline">
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
