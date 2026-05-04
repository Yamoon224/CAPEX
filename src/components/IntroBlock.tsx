"use client";
import { usePathname } from "next/navigation";
import { getLocale } from "@/lib/i18n";

export default function IntroBlock() {
  const locale = getLocale(usePathname());
  if (locale === "en") {
    return (
      <section className="container-x py-12 md:py-16">
        <h2 className="text-center text-[28px] md:text-[38px] leading-[1.2] md:leading-[45px] text-gray-800">
          <strong className="font-bold">Capex</strong>, your buying group{" "}
          <strong className="font-bold">in France</strong>
        </h2>
        <h4 className="mt-6 text-center text-[20px] md:text-[30px] leading-[1.3] md:leading-[45px] text-gray-700">
          <strong className="font-bold">Buying group for the export</strong>{" "}
          Food and{" "}
          <strong className="font-bold">non-food products</strong>
        </h4>
        <p className="mt-8 max-w-4xl mx-auto text-center text-gray-700">
          From the sale of the goods to delivery in the destination country.{" "}
          <strong className="font-semibold">
            CAPEX supplies all types of customers, anywhere in the world
          </strong>
          .
          <br />
          Our products and services are dedicated to export only, and therefore
          to professionals based outside of France.
          <br />
          Full or mixed containers, groupage and logistics services,{" "}
          <strong className="font-semibold">
            CAPEX is your ideal partner
          </strong>
          .
        </p>
      </section>
    );
  }

  return (
    <section className="container-x py-12 md:py-16">
      <h2 className="text-center text-[28px] md:text-[38px] leading-[1.2] md:leading-[45px] text-gray-800">
        <strong className="font-bold">Capex</strong> votre centrale d&apos;achat{" "}
        <strong className="font-bold">en France</strong>
      </h2>
      <h4 className="mt-6 text-center text-[20px] md:text-[30px] leading-[1.3] md:leading-[45px] text-gray-700">
        <strong className="font-bold">Centrale d&apos;achat pour l&apos;export</strong>{" "}
        Produits alimentaires{" "}
        <strong className="font-bold">et non-alimentaires</strong>
      </h4>
      <p className="mt-8 max-w-4xl mx-auto text-center text-gray-700">
        De la vente de la marchandise à la livraison dans le pays de
        destination.{" "}
        <strong className="font-semibold">
          CAPEX approvisionne tout type de client, partout dans le monde
        </strong>
        .
        <br />
        Nos produits et services sont uniquement destinés à l&apos;export, et
        donc aux professionnels basés hors de France.
        <br />
        Conteneurs complets ou mixtes, groupage et prestation logistique,{" "}
        <strong className="font-semibold">
          CAPEX est votre partenaire idéal
        </strong>
        .
      </p>
    </section>
  );
}
