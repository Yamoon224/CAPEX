"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocale, localePath } from "@/lib/i18n";

const MAIN_LINKS_FR: [string, string][] = [
  ["La société", "/la-societe"],
  ["Marques", "/marques"],
  ["Nos produits", "/nos-produits"],
  ["Actualités", "/actualites"],
  ["Contact", "/contact"],
  ["Galerie", "/galerie"],
];
const MAIN_LINKS_EN: [string, string][] = [
  ["The company", "/la-societe"],
  ["Brands", "/marques"],
  ["Our products", "/nos-produits"],
  ["News", "/actualites"],
  ["Contact", "/contact"],
  ["Gallery", "/galerie"],
];

const PRODUCT_RANGES_FR: [string, string][] = [
  ["Conserves", "/nos-produits#conserves"],
  ["Sauces et condiments", "/nos-produits#sauces"],
  ["Entretien et droguerie", "/nos-produits#entretien-droguerie"],
  ["Epicerie", "/nos-produits#epices"],
  ["Produits laitiers", "/nos-produits#laitier"],
  ["Boissons et alcools", "/nos-produits#boissons"],
  ["Aliments chiens et chats", "/nos-produits#chiens-chats"],
  ["Hygiène et puériculture", "/nos-produits#hygiene"],
  ["Huiles et Vinaigres", "/nos-produits#huiles-vinaigres"],
];
const PRODUCT_RANGES_EN: [string, string][] = [
  ["Canned food", "/nos-produits#conserves"],
  ["Sauces & condiments", "/nos-produits#sauces"],
  ["Cleaning products", "/nos-produits#entretien-droguerie"],
  ["Grocery", "/nos-produits#epices"],
  ["Dairy products", "/nos-produits#laitier"],
  ["Drinks & alcohols", "/nos-produits#boissons"],
  ["Dog & cat food", "/nos-produits#chiens-chats"],
  ["Hygiene & baby care", "/nos-produits#hygiene"],
  ["Oils & Vinegars", "/nos-produits#huiles-vinaigres"],
];

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const isEN = locale === "en";

  const MAIN_LINKS = isEN ? MAIN_LINKS_EN : MAIN_LINKS_FR;
  const PRODUCT_RANGES = isEN ? PRODUCT_RANGES_EN : PRODUCT_RANGES_FR;
  const t = {
    productRanges: isEN ? "Our product ranges" : "Nos gammes de produits",
    contactUs: isEN ? "Contact us" : "Nous contacter",
    credits: isEN ? "Credits" : "Crédits",
    legal: isEN ? "Legal notice" : "Mentions Légales",
    sitemap: isEN ? "Sitemap" : "Plan du site",
    realisation: isEN ? "Made by" : "Réalisation",
    mapTitle: isEN ? "Capex location" : "Localisation Capex",
  };

  return (
    <footer className="mt-12">
      {/* Main area — white */}
      <div className="bg-white text-gray-700">
        <div className="container-x py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1 — Logo + menu */}
            <div>
              <p className="font-display text-[36px] font-bold tracking-[0.18em] text-gray-900 leading-none">
                CAP<span className="text-brand">EX</span>
              </p>
              <ul className="mt-6 space-y-1.5 text-sm">
                {MAIN_LINKS.map(([label, href]) => (
                  <li key={href}>
                    <Link href={localePath(locale, href)} className="text-gray-700 hover:text-brand transition">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 — Gammes */}
            <div>
              <h2 className="text-gray-900 text-[15px] font-semibold uppercase tracking-wide mb-5">
                {t.productRanges}
              </h2>
              <ul className="space-y-1.5 text-sm">
                {PRODUCT_RANGES.map(([label, href]) => {
                  const [base, hash] = href.split("#");
                  const target = `${localePath(locale, base)}#${hash}`;
                  return (
                    <li key={href}>
                      <a href={target} className="text-gray-700 hover:text-brand transition">
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h2 className="text-gray-900 text-[15px] font-semibold uppercase tracking-wide mb-5">
                {t.contactUs}
              </h2>
              <div className="space-y-4 text-sm">
                <p className="flex gap-3">
                  <svg className="mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008dd2" strokeWidth="2">
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <span>
                    10.bis Rue de Strasbourg
                    <br />
                    <span className="ml-7 inline-block">Z.I. Bordeaux Fret</span>
                    <br />
                    <span className="ml-7 inline-block">33520 BRUGES - FRANCE</span>
                  </span>
                </p>
                <p className="flex gap-3 items-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008dd2" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +33 (0)5 47 50 02 50
                </p>
                <p className="flex gap-3 items-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#008dd2" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <a href="mailto:info@capex-france.com" className="text-gray-700 hover:text-brand">
                    info@capex-france.com
                  </a>
                </p>
              </div>
            </div>

            {/* Col 4 — Map */}
            <div>
              <iframe
                title={t.mapTitle}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.2361900696037!2d-0.61131168417161!3d44.89819077905165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54d624fcda2789%3A0xbf49230eb99fe8cf!2sCapex+(Centrale+Achats+Pour+Export!5e0!3m2!1sfr!2sfr!4v1552051369181"
                width="280"
                height="260"
                className="w-full max-w-[280px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar — dark */}
      <div className="bg-[#333] text-[#bbb]">
        <div className="container-x py-4 text-xs">
          <Link href={localePath(locale, "/credits")} className="hover:text-white">{t.credits}</Link>
          <span className="mx-2">|</span>
          <Link href={localePath(locale, "/mentions-legales")} className="hover:text-white">{t.legal}</Link>
          <span className="mx-2">|</span>
          <Link href={localePath(locale, "/plan-du-site")} className="hover:text-white">{t.sitemap}</Link>
          <span className="mx-2">|</span>
          <span>{t.realisation} : <Link href={localePath(locale, "/")} className="hover:text-white">DEFINIMA</Link></span>
        </div>
      </div>
    </footer>
  );
}
