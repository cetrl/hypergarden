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
- D3.js -> https://d3js.org/getting-started
- Pinia -> https://pinia.vuejs.org/

## Installation

```bash
git clone https://github.com/cetrl/hypergarden.git
cd hypergarden
npm install
npm run dev
```
## To-do
- config store pinia
- / fetch
- / liste pour l'access

### Design map D3
- nouvelle branche
- ~ affichage de base (https://observablehq.com/@d3/radial-tree/2?intent=fork ?)
- contrôles de zoom et de déplacement
- node component ?
- ArticleNode.vue pour représenter chaque article
- clic pour ouvrir l'article, survol pour plus d'infos
- responsive

### Finalisation et Optimisation
- searchbar
- filtrage par catégories
- Optimiser les performances (chargement progressif, rendu efficace)
- Finaliser le design responsive
- Tester l'ensemble de l'application sur différents appareils