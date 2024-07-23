# Hypergarden

Hypergarden is a blog platform built with Nuxt.js, offering a browsing experience in the form of an interactive map.

## Features

- Interactive article map interface
- Intuitive navigation with zoom and pan
- Thematic grouping of articles
- Dynamic search and filtering
- Responsive design

## Technologies

- Nuxt.js
- Vue.js
- D3.js (for visualization)
? Vuex (state management)

## Installation

```bash
git clone https://github.com/cetrl/hypergarden.git
cd hypergarden
npm install
npm run dev

# To-do
## J-1 : Configuration et Structure de Base

/ Initialiser le projet Nuxt
/ Configurer le projet (nuxt.config.js)
/ Structure des dossiers
- Installer et configurer D3.js
/ Créer le composant ArticleMap.vue de base
- Implémenter un store Vuex pour gérer les données des articles
- Créer un jeu de données d'articles factices pour le développement

## J-2 : Développement de la Carte d'Articles

- Développer la logique de base pour afficher les articles sur la carte
- Implémenter les contrôles de zoom et de déplacement
- Créer le composant ArticleNode.vue pour représenter chaque article
- Ajouter des interactions de base (clic pour ouvrir l'article, survol pour plus d'infos)
- Implémenter le regroupement des articles par catégories
- Ajouter des animations de transition entre les états de la carte
- Commencer l'implémentation du design responsive

## J-3 : Finalisation et Optimisation

- Ajouter une fonction de recherche sur la carte
- Implémenter le filtrage par catégories
- Optimiser les performances (chargement progressif, rendu efficace)
- Finaliser le design responsive
- Créer une page détaillée pour chaque article
- Ajouter des métadonnées SEO de base
- Tester l'ensemble de l'application sur différents appareils
- Préparer le projet pour le déploiement

## Bonus

- Ajouter un mode sombre
- Implémenter une fonctionnalité de partage sur les réseaux sociaux
- Créer une animation d'introduction pour la carte d'articles
- Ajouter des statistiques de lecture pour chaque article
