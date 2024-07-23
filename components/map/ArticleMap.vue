<template>
  <div>
    <div id="article-map"></div>
    <div v-if="selectedArticle" class="article-preview">
      <h3>{{ selectedArticle.title }}</h3>
      <img v-if="selectedArticle.image" :src="selectedArticle.image">
      <p class="summary">{{ selectedArticle.summary }}</p>
      <p>{{ selectedArticle.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useArticlesStore } from '../store/article.js'
import * as d3 from 'd3'

export default {
  setup() {
    const articlesStore = useArticlesStore()
    const selectedArticle = ref(null)
    return { articlesStore, selectedArticle }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      const svg = d3.select('#article-map')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '600px')

      svg.selectAll('circle')
        .data(this.articlesStore.articles)
        .enter()
        .append('circle')
        .attr('cx', d => d.coordinates.x)
        .attr('cy', d => d.coordinates.y)
        .attr('r', 10)
        .attr('fill', 'steelblue')
        .on('click', (event, d) => this.showArticlePreview(d))
    },
    showArticlePreview(article) {
      this.selectedArticle = article
    }
  }
}
</script>