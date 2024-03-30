// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss'],

 app: {
  head: {
    // Other head properties...
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
  exposeConfig: true
},
  devtools: { enabled: true },
  vite: {
    

  build: {
    target: "es2015"
  },
    server: {
      
      
      hmr: {
        overlay: true
      },
      
    }
    
  }
  
})
