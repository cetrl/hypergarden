<script setup lang="ts">
import { ref } from "vue";
import ArticleMap from "~/components/map/ArticleMap.vue";
import ListView from "~/components/ui/ListView.vue";

definePageMeta({
  layout: "default",
});

const currentView = ref<"map" | "list">("map");

const toggleView = () => {
  currentView.value = currentView.value === "map" ? "list" : "map";
};
</script>

<template>
  <div>
    <div>
    </div>
    <div v-if="currentView === 'map'">
      <ArticleMap />
    </div>
    <div v-else>
      <ListView />
    </div>
    <button @click="toggleView">
      {{ currentView === "map" ? "List" : "Map" }} View
    </button>
  </div>
</template>
