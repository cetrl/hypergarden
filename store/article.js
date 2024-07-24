import { defineStore } from 'pinia'
import articlesData from '@/assets/articles.json'

// adapter pour faire un fetch articles.json
export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: articlesData.articles
  }),
  getters: {
    getArticleById: (state) => (id) => state.articles.find(article => article.id === id),
    getFilteredArticles: (state) => (category) => state.articles.filter(article => article.category === category)
  },
  actions: {
    // Vous pouvez ajouter des actions ici si nécessaire
  }
})