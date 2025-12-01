This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Améliorations d'Accessibilité

Ce document détaille toutes les améliorations d'accessibilité apportées au projet pour se conformer aux standards WCAG 2.1 (niveau AA).

## Résumé des changements

Tous les problèmes d'accessibilité identifiés ont été corrigés pour améliorer l'expérience utilisateur pour les personnes utilisant des technologies d'assistance (lecteurs d'écran, navigation au clavier, etc.).

## Changements détaillés

### 1. Langue et métadonnées

**Fichier modifié :** `app/layout.tsx`

- ✅ Changement de `lang="en"` à `lang="fr"` dans la balise `<html>` pour refléter le contenu français
- ✅ Mise à jour des métadonnées (title et description) pour être plus descriptives

**Avant :**
```tsx
<html lang="en">
```

**Après :**
```tsx
<html lang="fr">
```

### 2. Balises sémantiques HTML5

**Fichiers modifiés :** Tous les composants

- ✅ Ajout de balises sémantiques (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`) pour améliorer la structure et la navigation
- ✅ Remplacement des `<div>` génériques par des balises sémantiques appropriées

**Exemples :**
- Navigation principale : `<nav aria-label="Navigation principale">`
- Contenu principal : `<main>`
- Sections : `<section id="accueil">`, `<section id="fonctionnalites">`, etc.
- Articles dans les listes : `<article role="listitem">`

### 3. Éléments interactifs

**Fichiers modifiés :** Tous les composants

- ✅ Remplacement de tous les `<div>` avec `cursor-pointer` par des éléments sémantiques appropriés :
  - Boutons → `<button type="button">`
  - Liens → `<a href="...">`
- ✅ Ajout d'attributs `aria-label` pour tous les boutons iconiques
- ✅ Ajout de `aria-hidden="true"` aux icônes décoratives

**Exemples de corrections :**

**Avant :**
```tsx
<div className="cursor-pointer" onClick={...}>
  Commencer
</div>
```

**Après :**
```tsx
<button 
  type="button"
  className="..."
  onClick={...}
>
  Commencer
</button>
```

**Boutons iconiques :**
```tsx
<button
  type="button"
  aria-label="Fermer la modale"
  className="..."
>
  <X className="..." aria-hidden="true" />
</button>
```

### 4. Images et attributs alt

**Fichiers modifiés :** Tous les composants avec images

- ✅ Ajout d'attributs `alt` descriptifs à toutes les images
- ✅ Utilisation de `aria-hidden="true"` pour les images purement décoratives (logos, backgrounds)

**Exemples :**

**Avant :**
```tsx
<img src={item.image} alt="" />
```

**Après :**
```tsx
<img 
  src={item.image} 
  alt={item.title}
  className="..."
/>
```

**Images décoratives :**
```tsx
<div className="..." aria-hidden="true"></div>
```

### 5. Contrastes de couleurs (WCAG AA)

**Fichiers modifiés :** Tous les composants

- ✅ Remplacement des couleurs de texte avec faible contraste :
  - `text-[#C8C8C8]` → `text-slate-600` (contraste suffisant)
  - `text-[#D0D0D0]` → `text-slate-600` ou `text-slate-700`
  - `text-[#ABABAB]` → `text-slate-700`
- ✅ Tous les textes respectent maintenant le ratio de contraste WCAG AA (4.5:1 pour le texte normal)

**Exemples :**

**Avant :**
```tsx
<p className="text-[#C8C8C8]">Description</p>
```

**Après :**
```tsx
<p className="text-slate-600">Description</p>
```

### 6. Formulaires et labels

**Fichiers modifiés :** `DesktopLanding.tsx`, `MobileLanding.tsx`, `DesktopMockup.tsx`, `MobileMockup.tsx`

- ✅ Ajout de `<label>` pour tous les champs de formulaire (avec `sr-only` pour les labels visuellement cachés)
- ✅ Association des labels aux inputs via `htmlFor` et `id`
- ✅ Ajout de `aria-required="true"` pour les champs obligatoires
- ✅ Changement des inputs de type `text` en `date` pour les champs de date
- ✅ Transformation des divs de formulaire en `<form>` avec `aria-label`

**Exemples :**

**Avant :**
```tsx
<input type="text" placeholder="Nom" />
```

**Après :**
```tsx
<div>
  <label htmlFor="nom" className="sr-only">Nom</label>
  <input
    id="nom"
    name="nom"
    type="text"
    placeholder="Nom"
    required
    aria-required="true"
    className="..."
  />
</div>
```

### 7. Hiérarchie des titres

**Fichiers modifiés :** Tous les composants

- ✅ Correction de la hiérarchie des titres :
  - Titre principal de la page : `<h1>`
  - Sections principales : `<h2>`
  - Sous-sections : `<h3>`
- ✅ Remplacement des `<h4>` et `<p>` utilisés comme titres par les balises appropriées

**Exemples :**

**Avant :**
```tsx
<h4>Transformez votre façon de travailler</h4>
<p className="mb-2">{event.title}</p>
```

**Après :**
```tsx
<h1>Transformez votre façon de travailler</h1>
<h2 className="mb-2">{event.title}</h2>
```

### 8. Carrousel et composants dynamiques

**Fichiers modifiés :** `DesktopLanding.tsx`, `MobileLanding.tsx`

- ✅ Ajout de `aria-live="polite"` pour annoncer les changements de slide
- ✅ Ajout de `role="list"` et `role="listitem"` pour les listes
- ✅ Transformation des indicateurs de slide en boutons avec `role="tab"` et `aria-selected`
- ✅ Ajout d'un texte caché (`sr-only`) annonçant le slide actuel
- ✅ Ajout de `aria-label` aux boutons de navigation du carrousel

**Exemples :**

**Avant :**
```tsx
<div onClick={() => scrollToSlide(index)}></div>
```

**Après :**
```tsx
<div aria-live="polite" aria-atomic="true">
  <div role="list">
    {items.map((item) => (
      <article role="listitem">...</article>
    ))}
  </div>
  <button
    type="button"
    role="tab"
    aria-label={`Aller au slide ${index + 1}`}
    aria-selected={currentSlide === index}
    onClick={() => scrollToSlide(index)}
  ></button>
  <div className="sr-only" aria-live="polite">
    Slide {currentSlide + 1} sur {total}
  </div>
</div>
```

### 9. Modales et dialogues

**Fichiers modifiés :** `DesktopMockup.tsx`, `MobileMockup.tsx`

- ✅ Ajout de `role="dialog"` et `aria-modal="true"` aux modales
- ✅ Ajout de `aria-labelledby` pointant vers le titre de la modale
- ✅ Transformation des divs de fermeture en boutons avec `aria-label`
- ✅ Transformation des divs de formulaire en `<form>` avec `aria-label`

**Exemples :**

**Avant :**
```tsx
<div className="modal">
  <div>Ajouter un évènement</div>
  <div onClick={close}>X</div>
</div>
```

**Après :**
```tsx
<div 
  role="dialog" 
  aria-modal="true" 
  aria-labelledby="modal-title"
>
  <h2 id="modal-title">Ajouter un évènement</h2>
  <button
    type="button"
    aria-label="Fermer la modale"
    onClick={close}
  >
    <X aria-hidden="true" />
  </button>
</div>
```

### 10. Navigation et liens

**Fichiers modifiés :** Tous les composants

- ✅ Transformation des divs de navigation en liens (`<a>`) ou boutons appropriés
- ✅ Ajout d'attributs `rel="noopener noreferrer"` pour les liens externes
- ✅ Ajout de `target="_blank"` avec `aria-label` pour les liens externes
- ✅ Ajout de `aria-label` aux nav pour identifier leur rôle

**Exemples :**

**Avant :**
```tsx
<div className="cursor-pointer">Accueil</div>
<a href="..."><Facebook /></a>
```

**Après :**
```tsx
<nav aria-label="Navigation principale">
  <a href="#accueil" className="...">Accueil</a>
</nav>
<a
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
>
  <Facebook aria-hidden="true" />
</a>
```

### 11. Focus et navigation au clavier

**Fichiers modifiés :** Tous les composants

- ✅ Ajout de styles de focus visibles : `focus:outline-none focus:ring-2 focus:ring-{color} focus:ring-offset-2`
- ✅ Tous les éléments interactifs sont maintenant accessibles au clavier
- ✅ Ordre de tabulation logique préservé

**Exemple :**
```tsx
<button
  className="... focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
>
  Bouton
</button>
```

### 12. Améliorations supplémentaires

- ✅ Ajout de `aria-current="page"` pour indiquer la page active dans la navigation
- ✅ Utilisation de `type="search"` pour les champs de recherche
- ✅ Ajout de `aria-atomic="true"` pour les régions `aria-live`
- ✅ Utilisation de classes `sr-only` pour les textes accessibles mais non visibles

## Conformité WCAG 2.1

Les améliorations apportées permettent de respecter les critères suivants :

- ✅ **1.1.1 Contenu non textuel** : Toutes les images ont des alternatives textuelles
- ✅ **1.3.1 Info et relations** : Structure sémantique correcte
- ✅ **1.4.3 Contraste (minimum)** : Tous les textes respectent le ratio 4.5:1
- ✅ **2.1.1 Clavier** : Tous les éléments interactifs sont accessibles au clavier
- ✅ **2.4.1 Contourner les blocs** : Navigation claire avec balises sémantiques
- ✅ **2.4.2 Titre de page** : Titres descriptifs
- ✅ **2.4.6 En-têtes et étiquettes** : Labels appropriés pour tous les champs
- ✅ **3.2.1 Au focus** : Pas de changement de contexte au focus
- ✅ **4.1.2 Nom, rôle, valeur** : Tous les éléments ont des noms et rôles appropriés

## Tests recommandés

Pour vérifier l'accessibilité :

1. **Navigation au clavier** : Naviguer entièrement avec Tab, Shift+Tab, Entrée, Espace
2. **Lecteur d'écran** : Tester avec NVDA, JAWS, ou VoiceOver
3. **Outils automatiques** : Utiliser axe DevTools, WAVE, ou Lighthouse
4. **Contraste** : Vérifier avec WebAIM Contrast Checker

## Notes techniques

- Toutes les modifications sont rétrocompatibles
- Aucune dépendance supplémentaire n'a été ajoutée
- Les styles visuels restent identiques (seulement amélioration des contrastes)
- Compatible avec tous les navigateurs modernes
