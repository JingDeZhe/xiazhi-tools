// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  devServer: {
    port: 8020,
  },
  modules: ['@unocss/nuxt', '@nuxt/icon', 'nuxt-lodash', '@element-plus/nuxt'],
})
