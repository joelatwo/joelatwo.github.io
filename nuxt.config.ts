// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url))
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
