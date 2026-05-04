export default function About() {
  return (
    <section className="py-20" id="societe">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div
            className="aspect-[4/3] w-full rounded-sm bg-cover bg-center shadow-xl"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-brand-accent text-white p-6 max-w-xs shadow-2xl">
            <p className="font-display text-4xl font-black">25+</p>
            <p className="text-xs uppercase tracking-wider mt-1">
              Années d&apos;expertise à l&apos;export
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Qui sommes-nous
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase font-black text-brand leading-tight">
            CAPEX votre centrale
            <br />
            d&apos;achat en France
          </h2>
          <div className="mt-4 h-1 w-16 bg-brand-accent" />

          <p className="mt-6 text-gray-700 leading-relaxed">
            <strong>Centrale d&apos;achat pour l&apos;export</strong> de
            produits alimentaires et non-alimentaires. De la vente de la
            marchandise à la livraison dans le pays de destination, nous
            approvisionnons tout type de client, partout dans le monde.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Nos produits et services sont uniquement destinés à
            l&apos;<strong>export</strong>, et donc aux professionnels basés
            hors de France. Conteneurs complets ou mixtes, groupage et
            prestation logistique : nous sommes votre partenaire idéal.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Conteneurs complets ou mixtes",
              "Groupage et prestation logistique",
              "Couverture mondiale, traitement express",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <svg className="mt-1 h-5 w-5 flex-shrink-0 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <a href="/la-societe" className="btn-primary mt-8">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
