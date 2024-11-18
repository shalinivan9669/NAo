// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts', // Путь к файлу конфигурации
    locales: ['kk', 'ru', 'en'],
    defaultLocale: 'ru',
    strategy: 'no_prefix', // Используем стратегию без префиксов в URL
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
});