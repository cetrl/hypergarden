<!-- Test D3 -->

<template>
    <div ref="mapContainer"></div>
  </template>
  
  <script>
    import * as d3 from 'd3';

  export default {
    props: {
      articles: Array
    },
    mounted() {
      this.createMap()
    },
    methods: {
      createMap() {
        const width = 800
        const height = 600
  
        const svg = this.$d3.select(this.$refs.mapContainer)
          .append('svg')
          .attr('width', width)
          .attr('height', height)
  
        // Créez ici votre visualisation de carte avec D3
        // Utilisez this.articles pour accéder aux données des articles
  
        // Exemple simple : créer un cercle pour chaque article
        svg.selectAll('circle')
          .data(this.articles)
          .enter()
          .append('circle')
          .attr('cx', (d, i) => i * 50 + 50)
          .attr('cy', height / 2)
          .attr('r', 20)
          .attr('fill', 'red')
      }
    }
  }
  </script>