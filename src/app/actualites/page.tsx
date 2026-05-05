import Link from "next/link";

export const metadata = {
  title: "Nos Actualités - Capex",
  description:
    "Toutes les actualités Capex : nouvelles gammes, salons internationaux, capacité de stockage et innovations.",
};

type Article = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  hue: string; // background color for thumbnail placeholder
};

const ARTICLES: Article[] = [
  {
    slug: "augmentation-de-notre-capacite-de-stockage",
    tag: "stockage",
    title: "Augmentation de notre capacité de stockage !",
    date: "28 déc 2025",
    hue: "#cfe9f6",
  },
  {
    slug: "capex-participe-au-sial-2026",
    tag: "sial 2026",
    title: "CAPEX participe au SIAL 2026 !",
    date: "19 déc 2025",
    hue: "#fde2c2",
  },
  {
    slug: "capex-participe-au-gulfood-dubai-2026",
    tag: "Gulfood",
    title: "CAPEX participe au Gulfood Dubaï 2026 !",
    date: "10 nov 2025",
    hue: "#fcd4d4",
  },
  {
    slug: "creation-de-notre-lessive-en-poudre-8kg",
    tag: "Lessive",
    title: "Création de notre lessive en poudre 8kg !",
    date: "20 août 2025",
    hue: "#d8e9d2",
  },
  {
    slug: "creation-de-notre-nouveau-nettoyant-vaisselle-en-pate",
    tag: "vaisselle",
    title: "Création de notre nouveau Nettoyant vaisselle en pâte !",
    date: "11 août 2025",
    hue: "#e6d6ef",
  },
  {
    slug: "creation-de-notre-gamme-de-compotes-et-cocktails-de-fruits",
    tag: "compote",
    title: "Création de notre gamme de Compotes et Cocktails de Fruits !",
    date: "5 mar 2025",
    hue: "#ffe4b3",
  },
  {
    slug: "creation-de-notre-gamme-de-gels-douches-et-shampoing",
    tag: "gel douche",
    title: "Création de notre gamme de Gels douches et Shampoing !",
    date: "16 déc 2024",
    hue: "#cfe9f6",
  },
  {
    slug: "capex-participe-au-sial-2024",
    tag: "Inspire food business",
    title: "CAPEX participe au SIAL 2024 !",
    date: "19 août 2024",
    hue: "#fde2c2",
  },
  {
    slug: "creation-de-notre-gamme-de-terrines-pour-chiens-et-chats",
    tag: "paté",
    title: "Création de notre gamme de Terrines pour chiens et chats !",
    date: "30 nov 2023",
    hue: "#d8e9d2",
  },
  {
    slug: "creation-dune-nouvelle-gamme-de-capsule-de-cafe",
    tag: "café",
    title: "Création d'une nouvelle gamme de Capsule de Café !",
    date: "16 fév 2023",
    hue: "#e7d4c1",
  },
];

export default function Page() {
  return (
    <>
      {/* Page header */}
      <section className="bg-bgblue mt-[100px] py-12 border-b">
        <div className="container-x">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            NOS ACTUALITÉS
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Actualités</span>
          </nav>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-[1170px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((a) => (
              <div key={a.slug} className="blog-post-column">
                <div className="blog-post-entry post type-post status-publish format-standard has-post-thumbnail hentry">
                  <div className="blog-post-image">
                    <Link href={`/actualites/${a.slug}`} className="">
                      <span
                        className="image-placeholder"
                        style={{ paddingBottom: "62.5%", backgroundColor: a.hue }}
                      >
                        {/* placeholder visuel — remplacer par <img src=... /> quand l'image sera dispo */}
                      </span>
                      <span className="hover-display">
                        <i className="icon-basic-link" aria-hidden="true">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                        </i>
                      </span>
                    </Link>
                  </div>
                  <div className="blog-post-content-container">
                    <h3 className="blog-post-title">
                      <Link href={`/actualites/${a.slug}`} className="">
                        {a.title}
                      </Link>
                    </h3>
                    <div className="blog-post-date">{a.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
