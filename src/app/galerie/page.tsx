const IMAGES = [
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
];

export default function Page() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-x">
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-brand">
          Galerie
        </h1>
        <div className="mt-4 h-1 w-16 bg-brand-accent" />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {IMAGES.map((src) => (
            <div
              key={src}
              className="aspect-square bg-cover bg-center cursor-pointer hover:opacity-80 transition"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
