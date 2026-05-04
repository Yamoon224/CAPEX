import Link from "next/link";

export const metadata = {
  title: "La société - Capex",
  description:
    "Capex est une centrale d'achat pour l'export créée en 2010, spécialisée dans la fourniture de produits alimentaires et non-alimentaires.",
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
      {/* Page header */}
      <section className="bg-bgblue mt-[100px] py-12 border-b">
        <div className="container-x">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            LA SOCIÉTÉ CAPEX
          </h1>
          <nav className="mt-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">La société</span>
          </nav>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="container-x max-w-[960px]">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand text-center">
            Capex est une centrale d&rsquo;achat pour l&rsquo;export créée en 2010
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />

          <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-gray-700">
            <p>
              En tant que société familiale, notre priorité est la satisfaction de
              nos clients, et pour cela nous appliquons une politique constante
              d&rsquo;investissements, non seulement dans notre matériel, notre base
              logistique, nos moyens humains, mais aussi dans le développement de
              nos gammes de produit.
            </p>
            <p>
              Nous nous efforçons d&rsquo;être réactifs, flexibles et attentifs aux
              demandes de nos clients basés à l&rsquo;étranger en proposant des
              produits adaptés aux marchés export notamment au niveau des prix, du
              conditionnement, des DLC et de la qualité.
            </p>
            <p>
              Notre service va de la vente de la marchandise à la livraison dans le
              port de destination.
            </p>
            <p>
              Nous approvisionnons des supermarchés et chaines de magasins, des
              grossistes, des collectivités dans le monde et principalement en
              Afrique, dans les Caraïbes, l&rsquo;Océan Indien et le Pacifique.
            </p>
          </div>

          {/* Norme et qualité */}
          <div className="mt-12">
            <h3 className="font-display text-lg font-semibold text-gray-900">
              Norme et qualité :
            </h3>
            <ul className="mt-4 space-y-2 text-[15px] text-gray-700">
              {[
                "Produits de qualité et prix compétitifs",
                "Réapprovisionnement continuel et stock assuré",
                "Produits majoritairement d'origine U.E",
                "Packaging attrayants et adaptés au transport et à la manutention",
                "Cahier des charges établi selon les normes européennes",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clients */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "Chaînes de magasins", icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h2M9 13h2M13 9h2M13 13h2" },
              { label: "Supermarchés indépendants", icon: "M3 9h18l-1 11H4L3 9zM7 9V6a5 5 0 0110 0v3" },
              { label: "Distributeurs / grossistes", icon: "M3 7h13l3 4v6h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V7z" },
            ].map((c) => (
              <div key={c.label} className="p-6 border rounded">
                <svg
                  className="mx-auto"
                  width="48" height="48" viewBox="0 0 24 24"
                  fill="none" stroke="#008dd2" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d={c.icon} />
                </svg>
                <p className="mt-3 text-sm font-medium text-gray-800">{c.label}</p>
              </div>
            ))}
          </div>

          {/* Stockage */}
          <div className="mt-12 space-y-6 text-[15px] leading-relaxed text-gray-700">
            <p>
              Grâce à nos propres marques, nous vous offrons la possibilité
              d&rsquo;avoir accès à des produits de qualité, à un prix compétitif et
              nous vous garantissons un stock permanent grâce à notre entrepôt
              d&rsquo;une capacité de 6000 palettes avec une chambre froide
              industrielle négative.
            </p>
            <p>
              De même avec notre expérience et notre personnel qualifié nous
              assurons des chargements de conteneurs mono ou multi produits
              sécurisés et optimisés afin que vos commandes arrivent dans les
              meilleures conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Gammes + marques */}
      <section className="py-16 bg-bgblue">
        <div className="container-x max-w-[960px]">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand text-center">
            Nos différentes gammes de produits :
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 bg-brand" />

          <ul className="mt-8 space-y-2 text-[15px] text-gray-700 max-w-xl mx-auto">
            {[
              "Produits alimentaires secs et surgelés",
              "Produits alimentaires pour animaux",
              "Produits d'hygiène et soins",
              "Produits d'entretien et droguerie",
            ].map((g) => (
              <li key={g} className="flex gap-3">
                <span className="text-brand mt-1">•</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-[15px] text-gray-700 max-w-2xl mx-auto">
            Afin d&rsquo;obtenir un véritable rapport qualité-prix CAPEX a créé ses
            propres marques :
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
            <Link href="/marques" className="btn-blue">
              Découvrez nos marques
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
