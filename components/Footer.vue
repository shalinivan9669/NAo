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
            <li><NuxtLink to="/education/programs" class="hover:underline">{{ $t('menu.education') }}</NuxtLink></li>
            <li><NuxtLink to="/contacts/contact-us" class="hover:underline">{{ $t('menu.contacts') }}</NuxtLink></li>
            <li><NuxtLink to="/goszakupki" class="hover:underline">{{ $t('menu.goszakupki') }}</NuxtLink></li>
            <li><NuxtLink to="/biblioteka" class="hover:underline">{{ $t('menu.biblioteka') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Контактная информация и социальные сети -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact_info') }}</h3>
          <ul class="space-y-2">
            <li>{{ $t('footer.address') }}: Караганда,  ул. Мустафина 15, Казахстан</li>
            <li>{{ $t('footer.phone') }}: +7 (7212) 56 52 63; +7 (7212) 56 53 10</li>
            <li>{{ $t('footer.email') }}: info@hygiene.kz</li>
          </ul>
          <div class="flex space-x-4 mt-4">
  
  <!-- Facebook -->
  <a href="https://www.facebook.com/ncgtpz" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500" aria-label="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691V11.03h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.676h-3.123V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z"/>
    </svg>
  </a>
  
  <!-- Twitter -->
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400" aria-label="Twitter">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.097v.062a4.916 4.916 0 0 0 3.946 4.814 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
    </svg>
  </a>
  
  <!-- LinkedIn -->
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-blue-700" aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zM19 19h-3v-5.604c0-1.337-.025-3.07-1.872-3.07-1.872 0-2.158 1.46-2.158 2.97v5.703h-3v-10h2.881v1.367h.041c.401-.76 1.381-1.562 2.839-1.562 3.037 0 3.6 2 3.6 4.6v5.603z"/>
    </svg>
  </a>
  
  <!-- Instagram -->
  <a href="https://www.instagram.com/ncgtpz_kz/#" target="_blank" rel="noopener noreferrer" class="hover:text-pink-500" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.004.247 2.467.416a4.92 4.92 0 0 1 1.675 1.09 4.92 4.92 0 0 1 1.09 1.675c.169.463.36 1.261.416 2.467.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.247 2.004-.416 2.467a4.92 4.92 0 0 1-1.09 1.675 4.92 4.92 0 0 1-1.675 1.09c-.463.169-1.261.36-2.467.416-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.004-.247-2.467-.416a4.92 4.92 0 0 1-1.675-1.09 4.92 4.92 0 0 1-1.09-1.675c-.169-.463-.36-1.261-.416-2.467C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.247-2.004.416-2.467a4.92 4.92 0 0 1 1.09-1.675A4.92 4.92 0 0 1 4.668 2.63c.463-.169 1.261-.36 2.467-.416C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.128 4.832.32 4.006.596a6.85 6.85 0 0 0-2.47 1.601A6.85 6.85 0 0 0 .596 4.006c-.276.826-.468 1.776-.526 3.046C0 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.058 1.27.25 2.22.526 3.046a6.85 6.85 0 0 0 1.601 2.47 6.85 6.85 0 0 0 2.47 1.601c.826.276 1.776.468 3.046.526C8.332 24 8.741 24 12 24s3.668-.012 4.948-.07c1.27-.058 2.22-.25 3.046-.526a6.85 6.85 0 0 0 2.47-1.601 6.85 6.85 0 0 0 1.601-2.47c.276-.826.468-1.776.526-3.046.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.27-.25-2.22-.526-3.046a6.85 6.85 0 0 0-1.601-2.47A6.85 6.85 0 0 0 19.994.596c-.826-.276-1.776-.468-3.046-.526C15.668.012 15.259 0 12 0z"/>
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
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
