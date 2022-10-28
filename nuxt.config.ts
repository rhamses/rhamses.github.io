// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Rhamsés Soares - Fullstack Developer",
      meta: [
        {
          "name":"description",
          "content":"Home of Rhamses Soares"
        },
        {
          "property":"og:url",
          "content":"https://rhams.es"
        },
        {
          "property":"og:type",
          "content":"website"
        },
        {
          "property":"og:title",
          "content":"Rhamsés Soares - Fullstack Developer"
        },
        {
          "property":"og:description",
          "content":"Home of Rhamses Soares"
        },
        {
          "property":"og:image",
          "content":""
        },
        {
          "name":"twitter:card",
          "content":"summary_large_image"
        },
        {
          "property":"twitter:domain",
          "content":"rhams.es"
        },
        {
          "property":"twitter:url",
          "content":"https://rhams.es"
        },
        {
          "name":"twitter:title",
          "content":"Rhamsés Soares - Fullstack Developer"
        },
        {
          "name":"twitter:description",
          "content":"Home of Rhamses Soares"
        },
        {
          "name":"twitter:image",
          "content":""
        },
      ]
    }
  },
  css: [
    "@/public/css/reset.css",
    "@/assets/global.scss"
  ]
})
