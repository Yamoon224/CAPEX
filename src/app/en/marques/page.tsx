import Link from "next/link";

export const metadata = {
  title: "Our Brands - Capex",
  description:
    "Discover Capex own brands: Blondor, MilaFood, Dan&Mila, AlbaFood, AlbaNet and Goulux.",
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
    title: "Full range of dry food products",
    cols: [
      [
        "Canned vegetables, fish, meat",
        "Fruits in syrup and compotes",
        "Pâté",
        "Sauces",
        "Olives",
        "Pickles",
        "Vinegars",
        "Oils",
        "Stock cubes",
        "Rice",
        "Chips",
        "Seeds and dried fruits",
      ],
      [
        "Flour and yeast",
        "Honey",
        "Spreads",
        "Jam",
        "Milk and yoghurt",
        "Teas and infusions",
        "Biscuits (dry and madeleines)",
        "Candies",
        "Ice cream",
        "Drinks (nectars and syrups)",
        "Frozen products",
      ],
    ],
  },
  {
    name: "MilaFood",
    color: "#e30613",
    title: "Food products",
    cols: [
      ["Canned tomatoes", "Spices"],
      ["Sunflower oil"],
    ],
  },
  {
    name: "Dan&Mila",
    color: "#005ca9",
    title: "Food products",
    cols: [
      ["Vanilla flavoring", "Coffee capsules", "Rusks", "Cereals"],
      ["Pasta", "Oils", "Frozen butter"],
    ],
  },
  {
    name: "AlbaFood",
    color: "#f39200",
    title: "Baby products, Hygiene and Care",
    cols: [
      [
        "Shower gel and shampoo",
        "Hand soaps",
        "Body soaps",
        "Toothpaste and toothbrushes",
      ],
      [
        "Baby diapers",
        "Baby wipes",
        "Cotton",
        "Hand sanitizer gel",
      ],
    ],
  },
  {
    name: "AlbaNet",
    color: "#00a651",
    title: "Full range of cleaning products",
    cols: [
      [
        "Brushes",
        "Air fresheners",
        "Insecticides",
        "Toilet paper and tissue",
        "Food packaging",
        "Toothpicks and skewers",
        "Hand stretch film",
        "Mops and cloths",
        "Trash bags",
        "Toilet blocks",
        "Powder detergent",
        "Liquid detergent",
      ],
      [
        "Dishwashing liquid",
        "Floor cleaner",
        "Fabric softener",
        "Bleach",
        "Window cleaner",
        "Degreaser",
        "Multi-purpose disinfectant",
        "Toilet gel, drain unblocker",
        "Scouring cream and powder",
        "Sponges",
        "Gloves",
      ],
    ],
  },
  {
    name: "Goulux",
    color: "#7a2e8e",
    title: "Dog and cat food",
    cols: [
      ["Bites", "Terrines"],
      ["Kibble"],
    ],
  },
];

export default function Page() {
  return (
    <>
      <section className="bg-bgblue mt-[100px] py-12 border-b">
        <div className="container-x">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            OUR BRANDS
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/en" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Brands</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-8">
            {BRANDS.map((b) => (
              <article
                key={b.name}
                className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden flex flex-col"
              >
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

      <section className="py-16 bg-bgblue">
        <div className="container-x max-w-[800px]">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand text-center">
            The advantages of our brands:
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />

          <ul className="mt-8 space-y-2 text-[15px] text-gray-700 max-w-xl mx-auto">
            {[
              "Quality products accessible to everyone",
              "Continuous restocking and permanent inventory",
              "Controlled distribution channel",
              "Attractive packaging suited to transport and handling",
              "Specifications established according to European standards",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <Link href="/en/nos-produits" className="btn-blue">
              View our products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
