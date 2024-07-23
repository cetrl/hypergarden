<template>
    <div v-if="article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.summary }}</p>
      <div v-html="article.content"></div>
      <!-- Affichez ici les liens et les images si présents -->
    </div>
  </template>
  
  <script>
  import { useArticlesStore } from '@/store/articles'
  
  export default {
    setup() {
      const articlesStore = useArticlesStore()
      return { articlesStore }
    },
    computed: {
      article() {
        return this.articlesStore.getArticleById(parseInt(this.$route.params.id))
      }
    }
  }
  </script>