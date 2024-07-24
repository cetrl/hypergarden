<script setup lang="ts">
import { ref } from "vue";
import ArticleMap from "~/components/map/ArticleMap";
import SearchBar from "~/components/ui/SearchBar";
import ListView from "~/components/ui/ListView";

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
      <SearchBar />
      <button @click="toggleView">
        {{ currentView === "map" ? "List" : "Map" }} View
      </button>
    </div>
    <div v-if="currentView === 'map'">
      <ArticleMap />
    </div>
    <div v-else>
      <ListView />
    </div>
  </div>
</template>
