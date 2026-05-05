"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getLocale, localePath } from "@/lib/i18n";

const NAV_FR = [
  { label: "La société", path: "/la-societe" },
  { label: "Marques", path: "/marques" },
  { label: "Nos produits", path: "/nos-produits" },
  { label: "Actualités", path: "/actualites" },
  { label: "Contact", path: "/contact" },
];

const NAV_EN = [
  { label: "The company", path: "/la-societe" },
  { label: "Brands", path: "/marques" },
  { label: "Our products", path: "/nos-produits" },
  { label: "News", path: "/actualites" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const NAV = locale === "en" ? NAV_EN : NAV_FR;
  const catalogueLabel =
    locale === "en" ? "Download our catalog" : "Télécharger notre catalogue";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
      <div className="container-x flex h-[100px] items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href={localePath(locale, "/")}
          className="flex items-center"
          itemScope
          itemType="http://schema.org/Organization"
        >
          <img
            src="/logo.png"
            alt="CAPEX - Centrale d'Achat Pour l'Export"
            className="h-[70px] w-auto md:h-[80px]"
          />
        </Link>

        {/* Right side */}
        <div className="flex flex-col items-end gap-3">
          {/* Catalogue link */}
          <a
            href="/catalogue.pdf"
            download
            className="hidden lg:flex items-center gap-2.5 text-[16px] font-semibold text-gray-800 hover:text-brand transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {catalogueLabel}
          </a>

          {/* Main nav */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center justify-center gap-9">
              {NAV.map((item) => (
                <Link
                  key={item.path}
                  href={localePath(locale, item.path)}
                  className="text-[15px] font-semibold uppercase tracking-wide text-gray-800 hover:text-brand transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Search + lang */}
            <div className="hidden lg:flex items-center gap-4">
              <button aria-label={locale === "en" ? "Search" : "Rechercher"} className="text-gray-700 hover:text-brand transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
              </button>
              <div className="flex items-center gap-2 text-xs">
                <Link
                  href="/"
                  aria-label="Français"
                  title="Français"
                  className={`text-lg leading-none rounded-sm overflow-hidden transition ${
                    locale === "fr"
                      ? "ring-2 ring-brand"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <span role="img" aria-hidden>🇫🇷</span>
                </Link>
                <span className="text-gray-300">|</span>
                <Link
                  href="/en"
                  aria-label="English"
                  title="English"
                  className={`text-lg leading-none rounded-sm overflow-hidden transition ${
                    locale === "en"
                      ? "ring-2 ring-brand"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <span role="img" aria-hidden>🇬🇧</span>
                </Link>
              </div>
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-gray-800"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden bg-white border-t shadow-lg">
          <div className="container-x flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.path}
                href={localePath(locale, item.path)}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-gray-800 hover:text-brand border-b last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/catalogue.pdf"
              className="mt-3 py-3 text-sm font-medium text-gray-800 hover:text-brand"
            >
              {catalogueLabel}
            </a>
            <div className="mt-2 flex gap-3 text-base">
              <Link href="/" title="Français" className={locale === "fr" ? "" : "opacity-60"}>🇫🇷</Link>
              <Link href="/en" title="English" className={locale === "en" ? "" : "opacity-60"}>🇬🇧</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
