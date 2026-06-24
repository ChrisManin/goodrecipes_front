import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

  modules: ['@nuxtjs/device', '@pinia/nuxt', '@nuxt/fonts', '@nuxt/image'],

  fonts: {
    families: [
      { name: 'Nunito', provider: 'google', weights: [300, 400, 600, 700, 800], styles: ['normal', 'italic'] },
      { name: 'Open Sans', provider: 'google', weights: [300, 400, 600, 700], styles: ['normal', 'italic'] },
    ],
  },

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  runtimeConfig: {
    public: {
      // Surcharger via BASE_URL_BACK_LOCAL dans .env
      drupalBaseUrl: process.env.BASE_URL_BACK_LOCAL || 'http://localhost',
    },
  },
})