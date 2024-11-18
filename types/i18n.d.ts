// types/i18n.d.ts
import '@nuxtjs/i18n';

declare module '@nuxtjs/i18n' {
  interface VueI18nOptions {
    legacy?: boolean;
    locale?: string;
    fallbackLocale?: string;
    [key: string]: any;
  }
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    i18n?: {
      vueI18n?: string;
      [key: string]: any;
    };
  }
}
