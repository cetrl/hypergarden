<template>
    <div>
      <div id="article-list">
        <ul>
          <li v-for="article in articlesStore.articles" :key="article.id" @click="selectArticle(article)">
            {{ article.title }}
          </li>
        </ul>
      </div>
      <ArticlePreview :article="selectedArticle" />
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useArticlesStore } from "../store/article.js";
  import ArticlePreview from '../ui/ArticlePreview.vue';
  
  export default {
    components: {
      ArticlePreview
    },
    setup() {
      const articlesStore = useArticlesStore();
      const selectedArticle = ref(null);
  
      const selectArticle = (article) => {
        selectedArticle.value = article;
      };
  
      return { articlesStore, selectedArticle, selectArticle };
    }
  };
  </script>
  