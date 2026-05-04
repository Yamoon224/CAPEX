# CAPEX — Site bilingue (FR / EN)

Site vitrine pour **CAPEX**, centrale d'achat pour l'export de produits alimentaires et non-alimentaires basée à Bordeaux (France). Réplique fidèle du site [capex-france.com](https://www.capex-france.com), construite avec Next.js 14 (App Router) et entièrement bilingue Français / Anglais.

---

## ✨ Fonctionnalités

- **Bilingue FR / EN** avec routes miroirs (`/` et `/en/*`)
- **Sélecteur de langue** avec drapeaux 🇫🇷 / 🇬🇧
- **6 pages internes** : La société, Marques, Nos produits, Actualités, Contact, Galerie
- **Header fixe** avec navigation, recherche et lien de téléchargement du catalogue
- **Footer riche** : menu, gammes produits, coordonnées avec icônes, carte Google Maps intégrée
- **Page d'accueil** : bannière, intro, 4 services, dernières actualités, pictos d'information
- **Page Marques** : 6 marques propres (Blondor, MilaFood, Dan&Mila, AlbaFood, AlbaNet, Goulux) avec listes détaillées
- **Page Produits** : 9 catégories avec navigation par ancres et liens vers sous-produits
- **Page Actualités** : 10 articles avec vignettes colorées, badges et dates
- **Formulaire de contact** fonctionnel avec validation
- **Design responsive** mobile / tablette / desktop
- **SEO** : metadata localisées par page

---

## 🛠️ Stack technique

| Outil | Version |
|------|---------|
| **Next.js** | 14.2.18 (App Router) |
| **React** | 18.3.1 |
| **TypeScript** | 5.6 |
| **Tailwind CSS** | 3.4.14 |
| **Polices** | Raleway + Montserrat (Google Fonts) |

**Couleurs de marque** : `#008dd2` (cyan CAPEX), `#f2f9fd` (bleu clair).

---

## 🚀 Démarrage rapide

### Pré-requis

- Node.js ≥ 18.17
- npm

### Installation

```bash
git clone <url-du-repo>
cd ivoire-market-IV
npm install
```

### Lancer en développement

```bash
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).
Version anglaise : [http://localhost:3000/en](http://localhost:3000/en).

### Build de production

```bash
npm run build
npm start
```

---

## 📁 Structure du projet

```
src/
├── app/
│   ├── layout.tsx              # Layout racine (FR par défaut)
│   ├── page.tsx                # Accueil FR
│   ├── la-societe/             # Page société FR
│   ├── marques/                # Page marques FR
│   ├── nos-produits/           # Page produits FR
│   ├── actualites/             # Page actualités FR
│   ├── contact/                # Page contact FR
│   ├── galerie/                # Page galerie FR
│   ├── globals.css             # Styles globaux + Tailwind
│   └── en/                     # Miroir anglais
│       ├── page.tsx
│       ├── la-societe/
│       ├── marques/
│       ├── nos-produits/
│       ├── actualites/
│       ├── contact/
│       └── galerie/
├── components/
│   ├── Header.tsx              # Header fixe (locale-aware)
│   ├── Footer.tsx              # Footer 4 colonnes (locale-aware)
│   ├── PageBanner.tsx          # Bannière d'accueil
│   ├── IntroBlock.tsx          # Bloc d'introduction bilingue
│   ├── Services.tsx            # 4 services
│   ├── News.tsx                # Aperçu 3 actualités
│   ├── InfoPictos.tsx          # 3 pictos info
│   └── Contact.tsx             # Formulaire de contact bilingue
└── lib/
    └── i18n.ts                 # Helpers locale (getLocale, localePath)
```

---

## 🌍 Internationalisation

Le système d'i18n est volontairement simple, sans dépendance externe :

- **Détection** : `usePathname()` → si le chemin commence par `/en` → locale anglaise.
- **Helpers** dans `src/lib/i18n.ts` :
  - `getLocale(pathname)` retourne `"fr"` ou `"en"`
  - `localePath(locale, path)` préfixe les chemins avec `/en` si nécessaire
- **Composants partagés** (Header, Footer, IntroBlock, Services, News, InfoPictos, Contact) lisent la locale et basculent leurs textes en interne.
- **Pages** : chaque route FR a son équivalent dans `src/app/en/<route>/page.tsx`.

### Ajouter une nouvelle langue

1. Étendre le type `Locale` dans `src/lib/i18n.ts`.
2. Ajouter le segment correspondant dans `localePath()`.
3. Dupliquer les composants partagés et y ajouter les chaînes traduites.
4. Créer le dossier `src/app/<locale>/` avec les pages traduites.

---

## 📜 Scripts npm

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de développement (hot reload) |
| `npm run build` | Build de production |
| `npm start` | Lance le build de production |
| `npm run lint` | Lint ESLint |

---

## 📝 Licence

Projet à usage privé / démonstration. Tous les textes, marques et visuels CAPEX appartiennent à leurs propriétaires respectifs.
# CAPEX
