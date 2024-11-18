<template>
    <footer class="bg-gray-900 text-white py-10">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <li><NuxtLink to="/about">{{ $t('menu.about') }}</NuxtLink></li>
            <li><NuxtLink to="/science">{{ $t('menu.science') }}</NuxtLink></li>
            <li><NuxtLink to="/clinics">{{ $t('menu.clinics') }}</NuxtLink></li>
            <li><NuxtLink to="/education">{{ $t('menu.education') }}</NuxtLink></li>
            <li><NuxtLink to="/contacts">{{ $t('menu.contacts') }}</NuxtLink></li>
          </ul>
        </div>
  
        <!-- Контактная информация -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t('footer.contact_info') }}</h3>
          <ul class="space-y-2">
            <li>{{ $t('footer.address') }}: ул. Абая, 123, Астана, Казахстан</li>
            <li>{{ $t('footer.phone') }}: +7 (7172) 123-456</li>
            <li>{{ $t('footer.email') }}: info@hygiene.kz</li>
          </ul>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="hover:text-blue-500"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-blue-500"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-blue-500"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="text-center text-sm mt-10">
        © 2024 НАО "Центр гигиены". Все права защищены.
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
  </style>
  