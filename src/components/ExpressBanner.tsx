const ITEMS = [
  {
    title: "Nous traitons votre commande en express",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 36h16l4-8h28l4 8h8" />
        <circle cx="20" cy="48" r="6" />
        <circle cx="48" cy="48" r="6" />
        <path d="M14 20h12M10 28h16" />
      </svg>
    ),
  },
  {
    title: "Expédition maritime ou aérienne",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 44c4 4 8 4 12 0s8-4 12 0 8 4 12 0 8-4 12 0 8 4 12 0" />
        <path d="M10 38l8-22h28l8 22" />
        <path d="M32 16V6" />
      </svg>
    ),
  },
  {
    title: "Couverture mondiale",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="32" cy="32" r="26" />
        <ellipse cx="32" cy="32" rx="14" ry="26" />
        <path d="M6 32h52" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ExpressBanner() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-brand/90" />

      <div className="container-x relative">
        <div className="grid md:grid-cols-3 gap-10">
          {ITEMS.map((it) => (
            <div key={it.title} className="text-center">
              <div className="mx-auto h-20 w-20 text-brand-accent">{it.icon}</div>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wider">
                {it.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
