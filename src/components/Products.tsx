const PRODUCTS = [
  {
    name: "Conserves",
    image:
      "https://images.unsplash.com/photo-1584473457409-ce95a9c00bbf?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sauces et condiments",
    image:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Entretien et droguerie",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Épicerie",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Produits laitiers",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Boissons et alcools",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aliments chiens et chats",
    image:
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hygiène et puériculture",
    image:
      "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Huiles et vinaigres",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Products() {
  return (
    <section id="produits" className="py-20">
      <div className="container-x">
        <h2 className="section-title mb-16">Nos gammes de produits</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={`/nos-produits#${p.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative aspect-[4/3] overflow-hidden block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition group-hover:from-brand/90" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="font-display text-xl md:text-2xl font-black uppercase text-white tracking-wider">
                  {p.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
