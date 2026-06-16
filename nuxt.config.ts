export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },

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
