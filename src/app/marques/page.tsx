import Link from "next/link";

export const metadata = {
  title: "Nos Marques - Capex",
  description:
    "Découvrez les marques propres Capex : Blondor, MilaFood, Dan&Mila, AlbaFood, AlbaNet et Goulux.",
};

type Brand = {
  name: string;
  color: string;
  title: string;
  cols: string[][];
};

const BRANDS: Brand[] = [
  {
    name: "Blondor",
    color: "#f5c518",
    title: "Gamme complète de produits alimentaires secs",
    cols: [
      [
        "Conserves de Légumes, Poisson, Viande",
        "Fruits au sirop et compotes",
        "Pâté",
        "Sauces",
        "Olives",
        "Cornichons",
        "Vinaigres",
        "Huiles",
        "Bouillons",
        "Riz",
        "Chips",
        "Graines et Fruits secs",
      ],
      [
        "Farine et levure",
        "Miel",
        "Pâte à tartiner",
        "Confiture",
        "Lait et yaourt",
        "Thés et infusions",
        "Biscuits (secs et madeleines)",
        "Bonbons",
        "Crèmes glacées",
        "Boissons (Nectars et sirops)",
        "Produits surgelés",
      ],
    ],
  },
  {
    name: "MilaFood",
    color: "#e30613",
    title: "Produits alimentaires",
    cols: [
      ["Conserves de tomates", "Épices"],
      ["Huile de tournesol"],
    ],
  },
  {
    name: "Dan&Mila",
    color: "#005ca9",
    title: "Produits alimentaires",
    cols: [
      ["Arôme vanille", "Capsules de café", "Biscottes", "Céréales"],
      ["Pâtes", "Huiles", "Beurres surgelés"],
    ],
  },
  {
    name: "AlbaFood",
    color: "#f39200",
    title: "Produits bébé, Hygiène et Soins",
    cols: [
      [
        "Gel Douche et Shampooing",
        "Savons mains",
        "Savons pour le corps",
        "Dentifrices et brosses à dents",
      ],
      [
        "Couches bébé",
        "Lingettes bébé",
        "Coton",
        "Gel hydroalcoolique",
      ],
    ],
  },
  {
    name: "AlbaNet",
    color: "#00a651",
    title: "Gamme complète de produits d'entretien",
    cols: [
      [
        "Brosserie",
        "Désodorisants",
        "Insecticides",
        "Papier hygiénique et ouate",
        "Emballages alimentaires",
        "Cure dents et piques brochettes",
        "Film palette manuel",
        "Serpillères et chamoisines",
        "Sacs poubelle",
        "Blocs WC",
        "Lessive en poudre",
        "Lessive liquide",
      ],
      [
        "Liquide vaisselle",
        "Produit sol",
        "Assouplissant",
        "Javel",
        "Lave vitres",
        "Dégraissant",
        "Désinfectant multi usages",
        "Gel WC, Déboucheur",
        "Crème et poudre à récurer",
        "Éponges",
        "Gants",
      ],
    ],
  },
  {
    name: "Goulux",
    color: "#7a2e8e",
    title: "Aliments pour chiens et chats",
    cols: [
      ["Bouchées", "Terrines"],
      ["Croquettes"],
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
            NOS MARQUES
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Marques</span>
          </nav>
        </div>
      </section>

      {/* Brand sections */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-8">
            {BRANDS.map((b) => (
              <article
                key={b.name}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col"
              >
                {/* Brand logo block */}
                <div
                  className="flex items-center justify-center p-8"
                  style={{ backgroundColor: `${b.color}15` }}
                >
                  <div
                    className="w-full max-w-[260px] h-28 rounded flex items-center justify-center bg-white shadow-sm"
                    style={{ border: `2px solid ${b.color}` }}
                  >
                    <span
                      className="font-display text-2xl font-bold tracking-wide"
                      style={{ color: b.color }}
                    >
                      {b.name}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="p-7 flex-1">
                  <h2 className="font-display text-lg md:text-xl font-semibold text-brand">
                    {b.title}
                  </h2>
                  <div
                    className="mt-2 h-[3px] w-12"
                    style={{ backgroundColor: b.color }}
                  />

                  <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-gray-700">
                    {b.cols.map((col, i) => (
                      <ul key={i} className="space-y-1.5">
                        {col.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span
                              className="mt-1 flex-shrink-0"
                              style={{ color: b.color }}
                            >
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-bgblue">
        <div className="container-x max-w-[800px]">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand text-center">
            Les avantages de nos marques :
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />

          <ul className="mt-8 space-y-2 text-[15px] text-gray-700 max-w-xl mx-auto">
            {[
              "Produits de qualité accessibles à tous",
              "Réapprovisionnement et stock permanent",
              "Circuit de distribution maîtrisé",
              "Packaging attrayants, adaptés au transport et à la manutention",
              "Cahier des charges établi selon les normes européennes",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link href="/nos-produits" className="btn-blue">
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
