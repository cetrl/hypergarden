<template>
    <div v-if="article" class="article-preview">
      <h3>{{ article.title }}</h3>
      <img v-if="article.image" :src="article.image" :alt="article.title" />
      <p class="summary">{{ article.summary }}</p>
      <p>{{ article.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    }
  }
  </script>
