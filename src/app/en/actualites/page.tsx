import Link from "next/link";

export const metadata = {
  title: "Our News - Capex",
  description:
    "All Capex news: new ranges, international trade shows, storage capacity and innovations.",
};

type Article = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  hue: string;
};

const ARTICLES: Article[] = [
  {
    slug: "augmentation-de-notre-capacite-de-stockage",
    tag: "storage",
    title: "Increase of our storage capacity!",
    date: "Dec 28, 2025",
    hue: "#cfe9f6",
  },
  {
    slug: "capex-participe-au-sial-2026",
    tag: "sial 2026",
    title: "CAPEX is taking part in SIAL 2026!",
    date: "Dec 19, 2025",
    hue: "#fde2c2",
  },
  {
    slug: "capex-participe-au-gulfood-dubai-2026",
    tag: "Gulfood",
    title: "CAPEX is taking part in Gulfood Dubai 2026!",
    date: "Nov 10, 2025",
    hue: "#fcd4d4",
  },
  {
    slug: "creation-de-notre-lessive-en-poudre-8kg",
    tag: "detergent",
    title: "Launch of our 8kg powder detergent!",
    date: "Aug 20, 2025",
    hue: "#d8e9d2",
  },
  {
    slug: "creation-de-notre-nouveau-nettoyant-vaisselle-en-pate",
    tag: "dishwashing",
    title: "Launch of our new dishwashing paste cleaner!",
    date: "Aug 11, 2025",
    hue: "#e6d6ef",
  },
  {
    slug: "creation-de-notre-gamme-de-compotes-et-cocktails-de-fruits",
    tag: "compote",
    title: "Launch of our Compotes and Fruit Cocktails range!",
    date: "Mar 5, 2025",
    hue: "#ffe4b3",
  },
  {
    slug: "creation-de-notre-gamme-de-gels-douches-et-shampoing",
    tag: "shower gel",
    title: "Launch of our Shower Gels and Shampoo range!",
    date: "Dec 16, 2024",
    hue: "#cfe9f6",
  },
  {
    slug: "capex-participe-au-sial-2024",
    tag: "Inspire food business",
    title: "CAPEX took part in SIAL 2024!",
    date: "Aug 19, 2024",
    hue: "#fde2c2",
  },
  {
    slug: "creation-de-notre-gamme-de-terrines-pour-chiens-et-chats",
    tag: "paté",
    title: "Launch of our Terrine range for dogs and cats!",
    date: "Nov 30, 2023",
    hue: "#d8e9d2",
  },
  {
    slug: "creation-dune-nouvelle-gamme-de-capsule-de-cafe",
    tag: "coffee",
    title: "Launch of a new Coffee Capsule range!",
    date: "Feb 16, 2023",
    hue: "#e7d4c1",
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-bgblue mt-[100px] py-12 border-b">
        <div className="container-x">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            OUR NEWS
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/en" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">News</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x max-w-[1170px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((a) => (
              <article
                key={a.slug}
                className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition"
              >
                <Link
                  href={`/en/actualites/${a.slug}`}
                  className="block aspect-[16/10] relative"
                  style={{ backgroundColor: a.hue }}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      width="56" height="56" viewBox="0 0 24 24"
                      fill="none" stroke="#fff" strokeWidth="1"
                      strokeLinecap="round" strokeLinejoin="round"
                      opacity="0.7"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 9h18M8 5v14" />
                    </svg>
                  </span>
                  <span className="absolute left-3 top-3 bg-brand text-white text-[11px] font-medium uppercase tracking-wide px-2 py-0.5 rounded">
                    {a.tag}
                  </span>
                </Link>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-base md:text-lg font-semibold text-gray-900 leading-snug">
                    <Link
                      href={`/en/actualites/${a.slug}`}
                      className="hover:text-brand transition"
                    >
                      {a.title}
                    </Link>
                  </h3>

                  <div className="mt-auto pt-5 flex items-center gap-2 text-xs text-gray-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>{a.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
