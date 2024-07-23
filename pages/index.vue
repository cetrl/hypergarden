<script setup lang="ts">
import { ref } from 'vue'
import ArticleMap from '~/components/map/ArticleMap.vue'

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <h1>Hypergarden</h1>
    <ArticleMap />
  </div>
</template>