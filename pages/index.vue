<script setup lang="ts">
import { ref } from 'vue'
import ArticleMap from '~/components/map/ArticleMap.vue'
import SearchBar from '~/components/ui/SearchBar.vue'

definePageMeta({
  layout: "default",
});

</script>

<template>
  <div>
    <SearchBar />
    <ArticleMap />
  </div>
</template>