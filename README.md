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
- fetch
- config store pinia
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

article.js

// async function getData() {
//   const url = "@/assets/articles.json";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// export const useArticlesStore = defineStore('articles', {
//   state: () => ({
//     articles: articlesData.articles
//   }),
//   getters: {
//     getArticleById: (state) => (id) => state.articles.find(article => article.id === id),
//     getFilteredArticles: (state) => (category) => state.articles.filter(article => article.category === category)
//   },
//   actions: {
//   }
// })