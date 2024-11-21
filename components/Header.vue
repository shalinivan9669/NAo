<!-- components/Header.vue -->
<template>
  <header class="bg-white shadow-md border-b border-gray-200 relative z-20">
    <nav class="container mx-auto px-6 py-4">
      <!-- Верхняя часть навигации: Логотип и название -->
      <div class="flex flex-col md:flex-row md:justify-between md:items-center">
        <!-- Логотип и название -->
        <div class="flex items-center space-x-2 mb-4 md:mb-0">
          <img src=" " alt="Логотип" class="h-10 w-10" />
          <h1 class="text-2xl font-semibold text-gray-800">{{ $t('title') }}</h1>
        </div>

        <!-- Языковая панель -->
        <div class="flex space-x-4 mb-4 md:mb-0">
          <button @click="setLocale('kk')" class="text-gray-600 hover:text-blue-600">Қаз</button>
          <button @click="setLocale('ru')" class="text-gray-600 hover:text-blue-600">Рус</button>
          <button @click="setLocale('en')" class="text-gray-600 hover:text-blue-600">Eng</button>
        </div>

        <!-- Кнопка для мобильного меню -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Навигационное меню для десктопа -->
      <ul class="hidden md:flex space-x-6 mt-9 text-lg font-medium">
        <li v-for="item in menu" :key="item.title" class="relative group">
          <template v-if="item.submenu">
            <!-- Пункт меню с подменю -->
            <button class="text-gray-700 hover:text-blue-600 transition duration-200 capitalize">
              {{ $t(`menu.${item.title}`) }}
            </button>
            <!-- Подменю -->
            <ul class="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li v-for="subItem in item.submenu" :key="subItem.title" class="px-4 py-2 hover:bg-blue-50 text-gray-700 transition duration-200 capitalize">
                <router-link :to="subItem.url" class="block">
                  {{ $t(`menu.${subItem.title}`) }}
                </router-link>
              </li>
            </ul>
          </template>
          <template v-else>
            <!-- Пункт меню без подменю -->
            <router-link :to="item.url" class="text-gray-700 hover:text-blue-600 transition duration-200 capitalize">
              {{ $t(`menu.${item.title}`) }}
            </router-link>
          </template>
        </li>
      </ul>

      <!-- Навигационное меню для мобильных устройств -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow-md border-t border-gray-200">
        <ul class="px-6 py-4 space-y-4">
          <li v-for="item in menu" :key="item.title" class="relative">
            <template v-if="item.submenu">
              <!-- Пункт меню с подменю -->
              <button
                @click="toggleSubmenu(item.title)"
                class="w-full text-left text-gray-700 hover:text-blue-600 transition duration-200 flex justify-between items-center capitalize"
              >
                {{ $t(`menu.${item.title}`) }}
                <svg
                  v-if="item.submenu"
                  class="w-4 h-4 transform transition-transform duration-200"
                  :class="{'rotate-180': activeMobileSubmenu === item.title}"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <!-- Подменю -->
              <ul v-if="activeMobileSubmenu === item.title" class="mt-2 pl-4 space-y-2">
                <li v-for="subItem in item.submenu" :key="subItem.title" class="text-gray-600 hover:text-blue-600 transition duration-200 capitalize">
                  <router-link :to="subItem.url" class="block">
                    {{ $t(`menu.${subItem.title}`) }}
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <!-- Пункт меню без подменю -->
              <router-link :to="item.url" class="block text-gray-700 hover:text-blue-600 transition duration-200 capitalize">
                {{ $t(`menu.${item.title}`) }}
              </router-link>
            </template>
          </li>
          <!-- Языковая панель в мобильном меню -->
          <li class="flex space-x-4">
            <button @click="setLocale('kk')" class="text-gray-600 hover:text-blue-600">Қаз</button>
            <button @click="setLocale('ru')" class="text-gray-600 hover:text-blue-600">Рус</button>
            <button @click="setLocale('en')" class="text-gray-600 hover:text-blue-600">Eng</button>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { setLocale } = useI18n();

  const menu = ref([
    {
      title: 'about',
      submenu: [
        { title: 'history', url: '/history' },
        { title: 'values', url: '/values' },
        { title: 'elders_council', url: '/elders-council' },
        { title: 'management', url: '/management' },
        { title: 'partners', url: '/partners' },
      ],
    },
    {
      title: 'science',
      submenu: [
        { title: 'research', url: '/research' },
        { title: 'publications', url: '/publications' },
        { title: 'conferences', url: '/conferences' },
        { title: 'young_scientists', url: '/young-scientists' },
      ],
    },
    {
      title: 'clinics',
      submenu: [
        { title: 'main_clinic', url: '/clinics/main' },
      ],
    },
    {
      title: 'education',
      submenu: [
        { title: 'programs', url: '/education/programs' },

      ],
    },
    {
      title: 'contacts',
      submenu: [
        { title: 'contact_us', url: '/contacts/contact-us' },
        { title: 'location', url: '/contacts/location' },
      ],
    },
    {
      title: 'goszakupki',
      url: '/goszakupki',
    },
    {
      title: 'biblioteka',
      url: '/biblioteka',
    },
  ]);

  const isMobileMenuOpen = ref<boolean>(false);
  const activeMobileSubmenu = ref<string | null>(null);

  // Функции для мобильного меню
  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    if (!isMobileMenuOpen.value) {
      activeMobileSubmenu.value = null;
    }
  }

  function toggleSubmenu(title: string) {
    if (activeMobileSubmenu.value === title) {
      activeMobileSubmenu.value = null;
    } else {
      activeMobileSubmenu.value = title;
    }
  }
  </script>

  <style scoped>
  /* Основные стили */
  header {
    background-color: #f9fafb;
  }

  button {
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.5px;
  }

  button:hover {
    border-bottom: 2px solid #007bff;
  }

  .shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .hover\:bg-blue-50:hover {
    background-color: #e0f2fe;
  }

  .rotate-180 {
    transform: rotate(180deg);
  }

  /* Стили для выпадающего меню */
  .group:hover > ul {
    opacity: 1;
    visibility: visible;
  }

  .group > ul {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  /* Переходы для плавного появления меню */
  .group > ul {
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  /* Дополнительные стили для ссылок */
  router-link {
    text-decoration: none;
    color: inherit;
  }

  router-link:hover {
    text-decoration: underline;
  }
  </style>
