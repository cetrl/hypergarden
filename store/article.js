import { defineStore } from 'pinia'

export const useArticlesStore = () =>{
  const innerStore = defineStore("articles", {
    state: () => ({
      articles: [],
    }),

    getters: {
      reactiveData() {
        return this.articles;
      },
    },
    
    actions: {
      async fetchData() {

      const url = "_nuxt/assets/articles.json";
        return fetch(url).then(res => res.json()).then((result) => {
          this.articles = result.articles;
        });
      },
    },
  });
  
  const store = innerStore();
  
  if (store.articles.length === 0) {
    store.fetchData();
  }
  return store;
};