import Link from "next/link";

export const metadata = {
  title: "Our Products - Capex",
  description:
    "Discover our product ranges: canned food, sauces, grocery, dairy, drinks, hygiene, cleaning, oils and vinegars.",
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
    title: "Canned food",
    icon: "M9 3h6v2H9zM7 5h10l-1 16H8L7 5z",
    items: [
      { label: "Canned vegetables", href: "/en/nos-produits/conserves-de-legumes" },
      { label: "Fruits in syrup", href: "/en/nos-produits/fruits-au-sirop" },
      { label: "Canned fish", href: "/en/nos-produits/conserves-de-thon" },
      { label: "Canned tomatoes", href: "/en/nos-produits/conserves-de-tomates" },
      { label: "Canned meat", href: "/en/nos-produits/conserves-de-viande" },
    ],
  },
  {
    id: "sauces",
    title: "Sauces & condiments",
    icon: "M10 2h4v3l2 2v4l-1 11H9L8 11l2-2V2z",
    items: [
      { label: "Sauces", href: "/en/nos-produits/sauces" },
      { label: "Spices", href: "/en/nos-produits/epices" },
      { label: "Olives & pickles", href: "/en/nos-produits/olives-et-cornichons" },
    ],
  },
  {
    id: "huiles-vinaigres",
    title: "Oils & Vinegars",
    icon: "M9 2h6v3l1 1v3l-1 1v11H9V10L8 9V6l1-1V2z",
    items: [
      { label: "Oils", href: "/en/nos-produits/huiles" },
      { label: "Vinegars", href: "/en/nos-produits/vinaigres" },
    ],
  },
  {
    id: "epices",
    title: "Grocery",
    icon: "M4 4h16v4H4zM4 10h16v4H4zM4 16h16v4H4z",
    items: [
      { label: "Pasta", href: "/en/nos-produits/pates" },
      { label: "Rice", href: "/en/nos-produits/riz" },
      { label: "Wheat flour", href: "/en/nos-produits/farine-de-ble" },
      { label: "Cereals", href: "/en/nos-produits/cereales" },
      { label: "Rusks", href: "/en/nos-produits/biscottes" },
      { label: "Chips & savory biscuits", href: "/en/nos-produits/chips-biscuits-sale" },
      { label: "Sweet biscuits & madeleines", href: "/en/nos-produits/biscuit-sucres-et-madeleines" },
      { label: "Biscuits", href: "/en/nos-produits/biscuits" },
      { label: "Candies", href: "/en/nos-produits/bonbons" },
      { label: "Ice lollies", href: "/en/nos-produits/glaces-a-eau" },
      { label: "Jams & spreads", href: "/en/nos-produits/confitures-et-pate-a-tartiner" },
      { label: "Honey", href: "/en/nos-produits/miel-de-fleurs" },
      { label: "Tea", href: "/en/nos-produits/thes" },
      { label: "Seeds & dried fruits", href: "/en/nos-produits/graines-et-fruits-secs" },
    ],
  },
  {
    id: "laitier",
    title: "Dairy products",
    icon: "M8 2h8l-1 4h2v14H7V6h2L8 2z",
    items: [
      { label: "Milk", href: "/en/nos-produits/lait" },
      { label: "Flavored milk", href: "/en/nos-produits/lait-aromatise" },
    ],
  },
  {
    id: "boissons",
    title: "Drinks & alcohols",
    icon: "M7 2h10l-2 6v12H9V8L7 2z",
    items: [{ label: "Drinks", href: "/en/nos-produits/boissons" }],
  },
  {
    id: "hygiene",
    title: "Hygiene & baby care",
    icon: "M12 2a3 3 0 100 6 3 3 0 000-6zM6 22v-6a6 6 0 0112 0v6",
    items: [
      { label: "Hand soaps & gels", href: "/en/nos-produits/savons-mains-gel-mains" },
      { label: "Baby diapers & wipes", href: "/en/nos-produits/couches-lingettes-bebe" },
    ],
  },
  {
    id: "chiens-chats",
    title: "Dog & cat food",
    icon: "M5 9c0-2 1-3 2-3s2 1 2 3-1 3-2 3-2-1-2-3zm10 0c0-2 1-3 2-3s2 1 2 3-1 3-2 3-2-1-2-3zM7 14c0-3 2-5 5-5s5 2 5 5-2 6-5 6-5-3-5-6z",
    items: [
      { label: "Dog & cat food", href: "/en/nos-produits/aliments-chiens-chats" },
    ],
  },
  {
    id: "entretien-droguerie",
    title: "Cleaning & household",
    icon: "M9 2h6l1 4-1 2v14H9V8L8 6l1-4z",
    items: [
      { label: "Air fresheners", href: "/en/nos-produits/desodorisants" },
      { label: "Insecticides", href: "/en/nos-produits/insecticides" },
      { label: "Toilet paper", href: "/en/nos-produits/papier-toilette" },
      { label: "Food packaging", href: "/en/nos-produits/emballages-alimentaires" },
      { label: "Pizza boxes & catering trays", href: "/en/nos-produits/boites-pizza-barquettes-traiteur" },
      { label: "Mops & cloths", href: "/en/nos-produits/serpilleres-et-chamoisines" },
      { label: "Trash bags", href: "/en/nos-produits/sacs-poubelle" },
      { label: "Toilet blocks", href: "/en/nos-produits/blocs-wc" },
      { label: "Powder detergents", href: "/en/nos-produits/lessives-en-poudre" },
      { label: "Liquid detergents", href: "/en/nos-produits/lessives-liquides" },
      { label: "Dishwashing liquids", href: "/en/nos-produits/liquides-vaisselle" },
      { label: "Floor cleaners", href: "/en/nos-produits/produits-sol" },
      { label: "Fabric softeners", href: "/en/nos-produits/assouplissants" },
      { label: "Cleaning products", href: "/en/nos-produits/produits-entretiens" },
      { label: "Gloves", href: "/en/nos-produits/gants" },
      { label: "Sponges", href: "/en/nos-produits/eponges" },
    ],
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-bgblue mt-[100px] py-12 border-b">
        <div className="container-x">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            OUR PRODUCTS
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/en" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Our products</span>
          </nav>
        </div>
      </section>

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
                      fill="none" stroke="#008dd2" strokeWidth="1.5"
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
