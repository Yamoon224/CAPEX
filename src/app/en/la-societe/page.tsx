import Link from "next/link";

export const metadata = {
  title: "The company - Capex",
  description:
    "Capex is a buying group for export, founded in 2010, specializing in the supply of food and non-food products.",
};

const BRANDS = [
  { name: "Blondor", color: "#f5d100" },
  { name: "MilaFood", color: "#e30613" },
  { name: "Dan&Mila", color: "#005ca9" },
  { name: "AlbaNet", color: "#00a651" },
  { name: "AlbaFood", color: "#f39200" },
  { name: "Goulux", color: "#7a2e8e" },
];

export default function Page() {
  return (
    <>
      <section className="bg-bgblue mt-[100px] py-12 border-b">
        <div className="container-x">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            CAPEX, THE COMPANY
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/en" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">The company</span>
          </nav>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x max-w-[960px]">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand text-center">
            Capex is a buying group for export, founded in 2010
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />

          <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-gray-700">
            <p>
              As a family-owned company, our priority is customer satisfaction.
              To achieve this we maintain a constant investment policy, not only
              in our equipment, our logistics base and our human resources, but
              also in the development of our product ranges.
            </p>
            <p>
              We strive to be responsive, flexible and attentive to the demands
              of our customers based abroad, by offering products tailored to
              export markets — particularly in terms of pricing, packaging,
              shelf life and quality.
            </p>
            <p>
              Our service covers everything from the sale of the goods to
              delivery in the destination port.
            </p>
            <p>
              We supply supermarkets and retail chains, wholesalers and
              communities around the world, primarily in Africa, the Caribbean,
              the Indian Ocean and the Pacific.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="font-display text-lg font-semibold text-gray-900">
              Standards and quality:
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] text-gray-700">
              {[
                "Quality products at competitive prices",
                "Continuous restocking and guaranteed inventory",
                "Products mainly of E.U. origin",
                "Attractive packaging suited to transport and handling",
                "Specifications established according to European standards",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "Retail chains", icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h2M9 13h2M13 9h2M13 13h2" },
              { label: "Independent supermarkets", icon: "M3 9h18l-1 11H4L3 9zM7 9V6a5 5 0 0110 0v3" },
              { label: "Distributors / wholesalers", icon: "M3 7h13l3 4v6h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V7z" },
            ].map((c) => (
              <div key={c.label} className="p-6 border rounded">
                <svg
                  className="mx-auto"
                  width="48" height="48" viewBox="0 0 24 24"
                  fill="none" stroke="#bfaa8e" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d={c.icon} />
                </svg>
                <p className="mt-3 text-sm font-medium text-gray-800">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-6 text-[15px] leading-relaxed text-gray-700">
            <p>
              Thanks to our own brands, we offer you access to high-quality
              products at competitive prices, while guaranteeing permanent stock
              through our 6,000-pallet warehouse, equipped with an industrial
              negative cold room.
            </p>
            <p>
              Likewise, with our experience and qualified staff, we ensure
              secure and optimized loading of single- or multi-product
              containers so that your orders arrive in the best possible
              conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bgblue">
        <div className="container-x max-w-[960px]">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand text-center">
            Our different product ranges:
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />

          <ul className="mt-8 space-y-2 text-[15px] text-gray-700 max-w-xl mx-auto">
            {[
              "Dry and frozen food products",
              "Pet food",
              "Hygiene and personal care products",
              "Cleaning products and household goods",
            ].map((g) => (
              <li key={g} className="flex gap-3">
                <span className="text-brand mt-1">•</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-[15px] text-gray-700 max-w-2xl mx-auto">
            To deliver true value for money, CAPEX has created its own brands:
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {BRANDS.map((b) => (
              <div
                key={b.name}
                className="bg-white rounded shadow-sm h-24 flex items-center justify-center"
              >
                <span
                  className="font-display text-xl font-bold tracking-wide"
                  style={{ color: b.color }}
                >
                  {b.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/en/marques" className="btn-blue">
              Discover our brands
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
