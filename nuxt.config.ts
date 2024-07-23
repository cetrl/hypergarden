// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: [
    '/plugins/d3.js'
  ],
  modules: [
    '@pinia/nuxt'
  ],
})