import { defineStore } from 'pinia'
import articlesData from '@/assets/articles.json'

async function getData() {
  const url = "@/assets/articles.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: articlesData.articles
  }),
  getters: {
    getArticleById: (state) => (id) => state.articles.find(article => article.id === id),
    getFilteredArticles: (state) => (category) => state.articles.filter(article => article.category === category)
  },
  actions: {
  }
})

