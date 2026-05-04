"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getLocale } from "@/lib/i18n";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const isEN = getLocale(usePathname()) === "en";

  const t = isEN
    ? {
        kicker: "Let's stay in touch",
        title: "Contact us",
        intro:
          "A question, a quote, an export project? Our team will get back to you as soon as possible.",
        address: "Address",
        phone: "Phone",
        email: "Email",
        sendTitle: "Send us a message",
        success:
          "Thank you, your message has been sent. We will get back to you shortly.",
        name: "Name *",
        emailPh: "Email *",
        company: "Company",
        country: "Country",
        message: "Your message *",
        consent:
          "I agree that my data may be processed in the context of my request.",
        submit: "Send message",
      }
    : {
        kicker: "Restons en contact",
        title: "Nous contacter",
        intro:
          "Une question, un devis, un projet d'export ? Notre équipe vous répond dans les plus brefs délais.",
        address: "Adresse",
        phone: "Téléphone",
        email: "Email",
        sendTitle: "Envoyez-nous un message",
        success:
          "Merci, votre message a bien été envoyé. Nous vous recontacterons rapidement.",
        name: "Nom *",
        emailPh: "Email *",
        company: "Société",
        country: "Pays",
        message: "Votre message *",
        consent:
          "J'accepte que mes données soient traitées dans le cadre de ma demande.",
        submit: "Envoyer le message",
      };

  return (
    <section id="contact" className="bg-brand text-white">
      <div className="grid lg:grid-cols-2">
        <div className="p-10 lg:p-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand-accent">
            {t.kicker}
          </p>
          <h2 className="font-display text-3xl md:text-4xl uppercase font-black leading-tight">
            {t.title}
          </h2>
          <div className="mt-4 h-1 w-16 bg-brand-accent" />

          <p className="mt-6 text-white/80 leading-relaxed max-w-md">{t.intro}</p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-accent">{t.address}</p>
                <p className="mt-1">10 bis Rue de Strasbourg<br />Z.I. Bordeaux Fret<br />33520 BRUGES — FRANCE</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-accent">{t.phone}</p>
                <a href="tel:+33547500250" className="mt-1 block hover:text-brand-accent">+33 (0)5 47 50 02 50</a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-accent">{t.email}</p>
                <a href="mailto:info@capex-france.com" className="mt-1 block hover:text-brand-accent">info@capex-france.com</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white text-gray-800 p-10 lg:p-16">
          <h3 className="font-display text-2xl font-black uppercase text-brand">
            {t.sendTitle}
          </h3>
          {submitted ? (
            <div className="mt-8 rounded border border-green-200 bg-green-50 p-6 text-green-800">
              {t.success}
            </div>
          ) : (
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input required placeholder={t.name} className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-brand-accent" />
                <input required type="email" placeholder={t.emailPh} className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-brand-accent" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input placeholder={t.company} className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-brand-accent" />
                <input placeholder={t.country} className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-brand-accent" />
              </div>
              <textarea required rows={5} placeholder={t.message} className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-brand-accent resize-none" />
              <label className="flex items-start gap-3 text-xs text-gray-600">
                <input type="checkbox" required className="mt-1" />
                {t.consent}
              </label>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {t.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
