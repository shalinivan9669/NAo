<!-- pages/библиотека.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-black">
      <div class="w-full max-w-md bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-center text-white mb-6">{{ $t('library.loginTitle') }}</h2>
        
        <!-- Форма входа -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <!-- Поле логина -->
          <div>
            <label for="username" class="block text-white mb-2">{{ $t('library.username') }}</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="{{ $t('library.usernamePlaceholder') }}"
              required
            />
          </div>
          
          <!-- Поле пароля -->
          <div>
            <label for="password" class="block text-white mb-2">{{ $t('library.password') }}</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="{{ $t('library.passwordPlaceholder') }}"
              required
            />
          </div>
          
          <!-- Кнопка отправки -->
          <div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              {{ $t('library.loginButton') }}
            </button>
          </div>
          
          <!-- Сообщение об ошибке -->
          <div v-if="errorMessage" class="text-red-500 text-center">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // Инициализация локализации
  const { t } = useI18n();
  
  // Реактивные переменные
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  // Функция обработки входа
  function handleLogin() {
    // Простая проверка: если поля заполнены, всегда выдаем ошибку
    if (username.value && password.value) {
      errorMessage.value = t('library.invalidCredentials');
    } else {
      errorMessage.value = t('library.fillAllFields');
    }
  }
  </script>
  
  <style scoped>
  /* Стилизация страницы */
  
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .min-h-screen {
    min-height: 100vh;
  }
  
  .bg-black {
    background-color: #000;
  }
  
  .bg-gray-800 {
    background-color: #2d3748;
  }
  
  .bg-opacity-90 {
    background-opacity: 0.9;
  }
  
  .text-white {
    color: #fff;
  }
  
  .text-red-500 {
    color: #f56565;
  }
  
  .text-blue-600 {
    color: #3182ce;
  }
  
  .hover\:bg-blue-700:hover {
    background-color: #2b6cb0;
  }
  
  .focus\:ring-blue-600:focus {
    ring-color: #3182ce;
  }
  
  .transition {
    transition: all 0.3s ease;
  }
  
  .rounded {
    border-radius: 0.5rem;
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .w-full {
    width: 100%;
  }
  
  .max-w-md {
    max-width: 28rem;
  }
  
  .p-8 {
    padding: 2rem;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .space-y-4 > * + * {
    margin-top: 1rem;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  