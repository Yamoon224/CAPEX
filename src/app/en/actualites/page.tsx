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
              <div key={a.slug} className="blog-post-column">
                <div className="blog-post-entry post type-post status-publish format-standard has-post-thumbnail hentry">
                  <div className="blog-post-image">
                    <Link href={`/en/actualites/${a.slug}`} className="">
                      <span
                        className="image-placeholder"
                        style={{ paddingBottom: "62.5%", backgroundColor: a.hue }}
                      />
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
                      <Link href={`/en/actualites/${a.slug}`} className="">
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
