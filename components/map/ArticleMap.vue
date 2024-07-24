<template>
  <div>
    <div id="article-map"></div>
    <ArticlePreview :article="selectedArticle" />
  </div>
</template>

<script>
import { ref } from "vue";
import * as d3 from "d3";
import { useArticlesStore } from "../store/article.js";
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
    const width = 70 * window.innerWidth / 100;  // 60vw en pixels
    const height = 70 * window.innerHeight / 100;  // 70vh en pixels
    const margin = 90;  // marge pour éviter que le texte ne touche les bords

    const svg = d3
      .select("#article-map")
      .append("svg")
      .attr("class", "article-map-svg");

    const articleGroups = svg
      .selectAll("g")
      .data(this.articlesStore.articles)
      .enter()
      .append("g")
      .attr("class", "article-group")
      .attr("transform", () => {
        const x = margin + Math.random() * (width - 2 * margin);
        const y = margin + Math.random() * (height - 2 * margin);
        return `translate(${x}, ${y})`;
      })
      .on("click", (event, d) => this.showArticlePreview(d));

    articleGroups
      .append("text")
      .text((d) => d.title)
      .attr("class", "article-title")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
  },

    showArticlePreview(article) {
      this.selectedArticle = article;
    },
  },
};
</script>
