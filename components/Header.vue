<template>
    <header class="bg-white shadow-md border-b border-gray-200">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Логотип и название -->
        <div class="flex items-center space-x-2">
          <img src="" alt="Логотип" class="h-10 w-10" />
          <h1 class="text-2xl font-semibold text-gray-800">{{ $t('title') }}</h1>
        </div>
        <!-- Навигационное меню -->
        <ul class="flex space-x-6 text-lg font-medium">
          <li
            v-for="item in menu"
            :key="item.title"
            class="relative group"
            @mouseenter="openDropdown(item.title)"
            @mouseleave="closeDropdown(item.title)"
          >
            <button class="text-gray-700 hover:text-blue-600 transition duration-200">
              {{ $t(`menu.${item.title}`) }}
            </button>
            <ul
              v-if="item.submenu && activeDropdown === item.title"
              class="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 z-10"
            >
              <li
                v-for="subItem in item.submenu"
                :key="subItem.title"
                class="px-4 py-2 hover:bg-blue-50 text-gray-700 transition duration-200"
              >
                <a href="#" class="block">{{ $t(`menu.${subItem.title}`) }}</a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- Языковая панель -->
        <div class="flex items-center space-x-4">
          <button @click="setLocale('kk')" class="text-gray-600 hover:text-blue-600">Қаз</button>
          <button @click="setLocale('ru')" class="text-gray-600 hover:text-blue-600">Рус</button>
          <button @click="setLocale('en')" class="text-gray-600 hover:text-blue-600">Eng</button>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { setLocale } = useI18n();
  
  const menu = ref([
    {
      title: 'about',
      submenu: [
        { title: 'history' },
        { title: 'values' },
        { title: 'elders_council' },
        { title: 'management' },
        { title: 'partners' },
  
      ],
    },
    {
      title: 'science',
      submenu: [
        { title: 'research' },
        { title: 'publications' },
        { title: 'conferences' },
        { title: 'young_scientists' },
      ],
    },
    {
      title: 'clinics',
      submenu: [
        { title: 'main_clinic' },
        { title: 'dental_clinic' },
      ],
    },
    {
      title: 'education',
      submenu: [
        { title: 'programs' },
        { title: 'library' },
        { title: 'scholarships' },
      ],
    },
    {
      title: 'contacts',
      submenu: [
        { title: 'contact_us' },
        { title: 'location' },
      ],
    },
  ]);
  
  const activeDropdown = ref(null);
  let closeTimeout = null;
  
  function openDropdown(title) {
    clearTimeout(closeTimeout);
    activeDropdown.value = title;
  }
  
  function closeDropdown(title) {
    closeTimeout = setTimeout(() => {
      if (activeDropdown.value === title) {
        activeDropdown.value = null;
      }
    }, 200);
  }
  
  function cancelCloseDropdown() {
    clearTimeout(closeTimeout);
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
  </style>
  