// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      // Other head properties...
      // script: [
      //   {
      //     src: "https://cdn.tailwindcss.com"
      //   }
      // ],
      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favic.png',
      },
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favic.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/x-icon',
        href: '/favic.png',
      },
        {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap',
      },
      // {
      //   rel: 'canonical',
      
      //   href: 'https://www.henryikoh.com',
      // }
    ],
    },
   },
  tailwindcss: {
    
  }
})
