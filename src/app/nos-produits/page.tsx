import Link from "next/link";

export const metadata = {
  title: "Nos Produits - Capex",
  description:
    "Découvrez nos gammes de produits : conserves, sauces, épicerie, produits laitiers, boissons, hygiène, entretien, huiles et vinaigres.",
};

type Category = {
  id: string;
  title: string;
  icon: string;
  items: { label: string; href: string }[];
};

const CATEGORIES: Category[] = [
  {
    id: "conserves",
    title: "Conserves",
    icon: "M9 3h6v2H9zM7 5h10l-1 16H8L7 5z",
    items: [
      { label: "Conserves de Légumes", href: "/nos-produits/conserves-de-legumes" },
      { label: "Fruits au sirop", href: "/nos-produits/fruits-au-sirop" },
      { label: "Conserves de Poisson", href: "/nos-produits/conserves-de-thon" },
      { label: "Conserves de Tomates", href: "/nos-produits/conserves-de-tomates" },
      { label: "Conserves de Viande", href: "/nos-produits/conserves-de-viande" },
    ],
  },
  {
    id: "sauces",
    title: "Sauces et condiments",
    icon: "M10 2h4v3l2 2v4l-1 11H9L8 11l2-2V2z",
    items: [
      { label: "Sauces", href: "/nos-produits/sauces" },
      { label: "Epices", href: "/nos-produits/epices" },
      { label: "Olives et cornichons", href: "/nos-produits/olives-et-cornichons" },
    ],
  },
  {
    id: "huiles-vinaigres",
    title: "Huiles et Vinaigres",
    icon: "M9 2h6v3l1 1v3l-1 1v11H9V10L8 9V6l1-1V2z",
    items: [
      { label: "Huiles", href: "/nos-produits/huiles" },
      { label: "Vinaigres", href: "/nos-produits/vinaigres" },
    ],
  },
  {
    id: "epices",
    title: "Epicerie",
    icon: "M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z",
    items: [
      { label: "Pâtes", href: "/nos-produits/pates" },
      { label: "Riz", href: "/nos-produits/riz" },
      { label: "Farine de blé", href: "/nos-produits/farine-de-ble" },
      { label: "Céréales", href: "/nos-produits/cereales" },
      { label: "Biscottes", href: "/nos-produits/biscottes" },
      { label: "Chips et biscuits salés", href: "/nos-produits/chips-biscuits-sale" },
      { label: "Biscuit sucrés et madeleines", href: "/nos-produits/biscuit-sucres-et-madeleines" },
      { label: "Biscuits", href: "/nos-produits/biscuits" },
      { label: "Bonbons", href: "/nos-produits/bonbons" },
      { label: "Glaces à l'eau", href: "/nos-produits/glaces-a-eau" },
      { label: "Confitures et pâte à tartiner", href: "/nos-produits/confitures-et-pate-a-tartiner" },
      { label: "Miel", href: "/nos-produits/miel-de-fleurs" },
      { label: "Thé", href: "/nos-produits/thes" },
      { label: "Graines et Fruits secs", href: "/nos-produits/graines-et-fruits-secs" },
    ],
  },
  {
    id: "laitier",
    title: "Produits laitiers",
    icon: "M8 2h8l-1 4h2v14H7V6h2L8 2z",
    items: [
      { label: "Lait", href: "/nos-produits/lait" },
      { label: "Lait aromatisé", href: "/nos-produits/lait-aromatise" },
    ],
  },
  {
    id: "boissons",
    title: "Boissons et alcools",
    icon: "M7 2h10l-2 6v12H9V8L7 2z",
    items: [{ label: "Boissons", href: "/nos-produits/boissons" }],
  },
  {
    id: "hygiene",
    title: "Hygiène et puériculture",
    icon: "M12 2a3 3 0 100 6 3 3 0 000-6zM6 22v-6a6 6 0 0112 0v6",
    items: [
      { label: "Savons Mains et Gel Mains", href: "/nos-produits/savons-mains-gel-mains" },
      { label: "Couches et Lingettes Bébé", href: "/nos-produits/couches-lingettes-bebe" },
    ],
  },
  {
    id: "chiens-chats",
    title: "Aliments chiens et chats",
    icon: "M5 9c0-2 1-3 2-3s2 1 2 3-1 3-2 3-2-1-2-3zm10 0c0-2 1-3 2-3s2 1 2 3-1 3-2 3-2-1-2-3zM7 14c0-3 2-5 5-5s5 2 5 5-2 6-5 6-5-3-5-6z",
    items: [
      { label: "Aliments chiens et chats", href: "/nos-produits/aliments-chiens-chats" },
    ],
  },
  {
    id: "entretien-droguerie",
    title: "Entretien et droguerie",
    icon: "M9 2h6l1 4-1 2v14H9V8L8 6l1-4z",
    items: [
      { label: "Désodorisants", href: "/nos-produits/desodorisants" },
      { label: "Insecticides", href: "/nos-produits/insecticides" },
      { label: "Papier toilette", href: "/nos-produits/papier-toilette" },
      { label: "Emballages alimentaire", href: "/nos-produits/emballages-alimentaires" },
      { label: "Boites à pizza et barquettes traiteur", href: "/nos-produits/boites-pizza-barquettes-traiteur" },
      { label: "Serpillères et chamoisines", href: "/nos-produits/serpilleres-et-chamoisines" },
      { label: "Sacs poubelle", href: "/nos-produits/sacs-poubelle" },
      { label: "Blocs WC", href: "/nos-produits/blocs-wc" },
      { label: "Lessives en poudre", href: "/nos-produits/lessives-en-poudre" },
      { label: "Lessives liquides", href: "/nos-produits/lessives-liquides" },
      { label: "Liquides vaisselle", href: "/nos-produits/liquides-vaisselle" },
      { label: "Produits sol", href: "/nos-produits/produits-sol" },
      { label: "Assouplissants", href: "/nos-produits/assouplissants" },
      { label: "Produits d'entretien", href: "/nos-produits/produits-entretiens" },
      { label: "Gants", href: "/nos-produits/gants" },
      { label: "Eponges", href: "/nos-produits/eponges" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* Page header */}
      <section className="bg-bgblue mt-[100px] py-12 border-b">
        <div className="container-x">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            NOS PRODUITS
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Nos produits</span>
          </nav>
        </div>
      </section>

      {/* Quick anchor nav */}
      <section className="bg-white border-b">
        <div className="container-x py-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-gray-600 hover:text-brand transition"
            >
              {c.title}
            </a>
          ))}
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-[1170px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((c) => (
              <article
                key={c.id}
                id={c.id}
                className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col scroll-mt-32"
              >
                <div className="bg-bgblue p-6 flex items-center gap-4 border-b border-gray-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <svg
                      width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="#bfaa8e" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d={c.icon} />
                    </svg>
                  </span>
                  <h3 className="font-display text-base md:text-lg font-semibold text-brand">
                    {c.title}
                  </h3>
                </div>

                <ul className="p-6 space-y-2 text-[14px] text-gray-700 flex-1">
                  {c.items.map((it) => (
                    <li key={it.href} className="flex gap-2">
                      <span className="text-brand mt-1 flex-shrink-0">•</span>
                      <Link
                        href={it.href}
                        className="hover:text-brand transition"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
