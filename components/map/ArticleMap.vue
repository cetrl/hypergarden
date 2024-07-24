<template>
  <div>
    <div id="article-map"></div>
    <ArticlePreview :article="selectedArticle" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useArticlesStore } from "../store/article.js";
import * as d3 from "d3";
import ArticlePreview from '../ui/ArticlePreview.vue';

export default {
  components: {
    ArticlePreview
  },
  setup() {
    const articlesStore = useArticlesStore();
    const selectedArticle = ref(null);
    return { articlesStore, selectedArticle };
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap() {
      const svg = d3
        .select("#article-map")
        .append("svg")
        .attr("width", "60vw")
        .attr("height", "70vh");

      const articleGroups = svg
        .selectAll("g")
        .data(this.articlesStore.articles)
        .enter()
        .append("g")
        .on("click", (event, d) => this.showArticlePreview(d));

      articleGroups
        .append("text")
        .text((d) => d.title)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("class", "article-title");
    },
    showArticlePreview(article) {
      this.selectedArticle = article;
    },
  },
};
</script>