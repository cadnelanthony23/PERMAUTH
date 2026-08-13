# PermAuth Belgique — Site React

Site web professionnel pour l'agence de permis de conduire belge, développé avec **React 18** + **Vite**.

---

## 🗂️ Structure du projet

```
permauth-be/
├── index.html                  # Point d'entrée HTML
├── vite.config.js              # Configuration Vite
├── package.json
└── src/
    ├── main.jsx                # Montage React
    ├── App.jsx                 # Composition des sections
    ├── index.css               # Variables CSS + styles globaux
    └── components/
        ├── Navbar.jsx          # Navigation sticky (menu hamburger mobile)
        ├── Hero.jsx            # Section hero avec carte de stats
        ├── TrustBar.jsx        # Barre de confiance dorée
        ├── Categories.jsx      # Grille des catégories de permis
        ├── Process.jsx         # Les 5 étapes du processus
        ├── Pricing.jsx         # Cartes tarifaires + politique acompte
        ├── Dossier.jsx         # Documents requis + CTA WhatsApp
        ├── Reviews.jsx         # Avis clients
        ├── OffreSpeciale.jsx   # Bandeau offre -10%
        ├── Footer.jsx          # Pied de page complet
        └── WhatsAppFloat.jsx   # Bouton flottant WhatsApp
```

---

## 🚀 Installation et lancement

### Prérequis
- **Node.js** v18 ou supérieur
- **npm** v9 ou supérieur

### Étapes

```bash
# 1. Aller dans le dossier du projet
cd permauth-be

# 2. Installer les dépendances
npm install

# 3. Lancer en mode développement
npm run dev
```

Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.

### Build de production

```bash
npm run build
# Les fichiers optimisés sont générés dans /dist
```

---

## 🎨 Palette de couleurs (drapeau belge)

| Variable CSS      | Valeur      | Usage                     |
|-------------------|-------------|---------------------------|
| `--black`         | `#1A1A1A`   | Fond principal, texte     |
| `--gold`          | `#F2A900`   | Accent principal (or)     |
| `--red`           | `#CC0000`   | Accent secondaire (rouge) |
| `--white`         | `#FFFFFF`   | Fond clair, textes        |
| `--gray-light`    | `#F7F6F2`   | Sections alternées        |

---

## 📱 Responsive

- **Desktop** (> 900px) : layout complet, navigation horizontale
- **Tablette / Mobile** (< 900px) : menu hamburger, colonnes empilées
- **Petit mobile** (< 600px) : bouton WhatsApp réduit (icône seule)

---

## ✏️ Personnalisation rapide

### Changer le numéro WhatsApp
Dans chaque composant, remplacez `33780863154` par votre numéro (format international sans `+`).

Ou centralisez-le dans un fichier `src/constants.js` :

```js
// src/constants.js
export const WA_NUMBER = '33780863154';
export const WA_BASE   = `https://wa.me/${WA_NUMBER}`;
```

### Modifier les tarifs
Éditez le tableau `PLANS` dans `src/components/Pricing.jsx`.

### Ajouter un avis client
Ajoutez une entrée dans le tableau `REVIEWS` dans `src/components/Reviews.jsx`.

### Modifier les catégories
Éditez le tableau `CATEGORIES` dans `src/components/Categories.jsx`.

---

## 🔗 Liens sociaux

| Réseau     | Lien                                          |
|------------|-----------------------------------------------|
| WhatsApp   | https://wa.me/33780863154                     |
| Instagram  | https://instagram.com/permis_authentique_be.fr/ |

---

## 📦 Déploiement recommandé

- **Vercel** : `vercel deploy` (zéro configuration)
- **Netlify** : glisser-déposer le dossier `/dist` après `npm run build`
- **GitHub Pages** : avec le plugin `vite-plugin-gh-pages`
