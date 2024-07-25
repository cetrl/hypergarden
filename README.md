# Hypergarden

Hypergarden is a blog platform built with Nuxt.js, offering a browsing experience in the form of an interactive map.

## Features

- Interactive article map interface
- Intuitive navigation with zoom and pan
- Thematic grouping of articles
- Dynamic search and filtering
- Responsive design

## Technos

- Nuxt.js
- Vue.js
- D3.js
- Pinia
- Supabase

## Installation

```bash
git clone https://github.com/cetrl/hypergarden.git
cd hypergarden
npm install
npm run dev
```
## To-do

### Design map D3
branch ui
- map view affichée dès le départ
- ~ affichage de base (https://observablehq.com/@d3/radial-tree/2?intent=fork ?)
- contrôles de zoom et de déplacement
- node component ?
- ArticleNode.vue pour représenter chaque article
- clic pour ouvrir l'article, survol pour plus d'infos
- responsive
- / delete searchbar

## back
- install content.nuxt
- install nuxt.studio
branch back v1 supabase: utilisation bdd pas adapté au blog, go content.nuxt et nuxt.studio
- config store pinia
- / config db
- / appel db au lieu du json
- gestion authentification

### Finalisation et Optimisation
- searchbar
- filtrage par catégories
- Optimiser les performances (chargement progressif, rendu efficace)
- Finaliser le design responsive
- Tester l'ensemble de l'application sur différents appareils

## Docs
- DB https://supabase.com/ supabase.nuxtjs.org/
- blog https://content.nuxt.com/
- cms https://nuxt.studio/
- d3 https://d3js.org/getting-started
- pinia https://pinia.vuejs.org/
