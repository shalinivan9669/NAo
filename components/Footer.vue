<!-- components/Footer.vue -->
<template>
  <footer class="bg-gray-900 text-white py-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Логотип и краткая информация -->
        <div>
          <img src="" alt="Логотип" class="h-12 mb-4" />
          <p class="text-sm">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Быстрая навигация -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.quick_links') }}</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="hover:underline">{{ $t('menu.about') }}</NuxtLink></li>
            <li><NuxtLink to="/science" class="hover:underline">{{ $t('menu.science') }}</NuxtLink></li>
            <li><NuxtLink to="/clinics" class="hover:underline">{{ $t('menu.clinics') }}</NuxtLink></li>
            <li><NuxtLink to="/education" class="hover:underline">{{ $t('menu.education') }}</NuxtLink></li>
            <li><NuxtLink to="/contacts" class="hover:underline">{{ $t('menu.contacts') }}</NuxtLink></li>
            <li><NuxtLink to="/goszakupki" class="hover:underline">{{ $t('menu.goszakupki') }}</NuxtLink></li>
            <li><NuxtLink to="/biblioteka" class="hover:underline">{{ $t('menu.biblioteka') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Контактная информация и социальные сети -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact_info') }}</h3>
          <ul class="space-y-2">
            <li>{{ $t('footer.address') }}: ул. Абая, 123, Астана, Казахстан</li>
            <li>{{ $t('footer.phone') }}: +7 (7172) 123-456</li>
            <li>{{ $t('footer.email') }}: info@hygiene.kz</li>
          </ul>
          <div class="flex space-x-4 mt-4">
            <!-- Facebook -->
            <a href="https://facebook.com" target="_blank" rel="noopener" class="hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691V11.03h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.676h-3.123V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z"/>
              </svg>
            </a>
            <!-- Twitter -->
            <a href="https://twitter.com" target="_blank" rel="noopener" class="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.097v.062a4.916 4.916 0 0 0 3.946 4.814 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
              </svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.07-1.872-3.07-1.872 0-2.158 1.46-2.158 2.97v5.703h-3v-10h2.881v1.367h.041c.401-.76 1.381-1.562 2.839-1.562 3.037 0 3.6 2 3.6 4.6v5.603z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Дополнительные ссылки и информация -->
      <div class="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm">
          © 2024 НАО "Центр гигиены". Все права защищены.
        </p>
        <ul class="flex space-x-4 mt-4 md:mt-0">
          <li><NuxtLink to="/privacy-policy" class="hover:underline">{{ $t('footer.privacy_policy') }}</NuxtLink></li>
          <li><NuxtLink to="/terms-of-service" class="hover:underline">{{ $t('footer.terms_of_service') }}</NuxtLink></li>
          <li><NuxtLink to="/sitemap" class="hover:underline">{{ $t('footer.sitemap') }}</NuxtLink></li>
        </ul>
      </div>
    </div>
    </footer>
  </template>

  <script setup>
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
  </script>

  <style scoped>
  footer {
    background-color: #1f2937; /* Тёмно-серый фон */
  }

  a {
    color: #e0e7ff; /* Светлый текст для ссылок */
  }

  a:hover {
    color: #3b82f6; /* Голубой акцент при наведении */
  }

  .hover\:underline:hover {
    text-decoration: underline;
  }
  </style>
