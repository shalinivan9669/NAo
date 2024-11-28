<!-- pages/login.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 rounded shadow">
      <h2 class="text-2xl font-bold mb-6 text-center">Вход в Админ-Панель</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700">Логин</label>
          <input
            v-model="username"
            type="text"
            class="w-full px-4 py-2 border rounded"
            placeholder="Введите логин"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700">Пароль</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 border rounded"
            placeholder="Введите пароль"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Войти
        </button>
        <div v-if="error" class="mt-4 text-red-500 text-center">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

console.log('Login.vue: Component loaded');

// Инициализация реактивных переменных
const username = ref('');
const password = ref('');
const error = ref('');

// Инициализация Vuex Store и Vue Router
const store = useStore();
const router = useRouter();

// Функция обработки логина
const handleLogin = async () => {
  console.log('Login.vue: handleLogin called');
  console.log(`Login.vue: Username entered: ${username.value}`);
  console.log(`Login.vue: Password entered: ${password.value}`);

  // Сброс сообщения об ошибке
  error.value = '';

  try {
    // Вызов действия Vuex для логина
    console.log('Login.vue: Dispatching login action');
    await store.dispatch('login', {
      username: username.value,
      password: password.value,
    });

    // Проверка аутентификации после логина
    if (store.getters.isAuthenticated) {
      console.log('Login.vue: Login successful');
      // Перенаправление на защищённую страницу
      router.push('/gosseditzakup');
      console.log('Login.vue: Navigating to /gosseditzakup');
    } else {
      console.log('Login.vue: Login failed - Not authenticated');
      error.value = 'Не удалось войти. Пожалуйста, попробуйте ещё раз.';
    }
  } catch (err: any) {
    console.error('Login.vue: Error during login:', err);
    // Обработка ошибок из API
    if (err.response && err.response.data && err.response.data.statusMessage) {
      error.value = err.response.data.statusMessage;
      console.log(`Login.vue: API Error - ${err.response.data.statusMessage}`);
    } else {
      error.value = 'Произошла ошибка при входе. Пожалуйста, попробуйте позже.';
      console.log('Login.vue: Unknown error during login');
    }
  }
};
</script>

<style scoped>
/* Стилизация формы логина */
.min-h-screen {
  min-height: 100vh;
}

.bg-gray-100 {
  background-color: #f7fafc;
}

.max-w-md {
  max-width: 28rem;
}

.bg-white {
  background-color: #ffffff;
}

.p-8 {
  padding: 2rem;
}

.rounded {
  border-radius: 0.5rem;
}

.shadow {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.text-2xl {
  font-size: 1.5rem;
}

.font-bold {
  font-weight: 700;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.text-center {
  text-align: center;
}

.w-full {
  width: 100%;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.border {
  border: 1px solid #e2e8f0;
}

.rounded {
  border-radius: 0.25rem;
}

.bg-blue-600 {
  background-color: #3182ce;
}

.text-white {
  color: #ffffff;
}

.hover\:bg-blue-700:hover {
  background-color: #2b6cb0;
}

.transition {
  transition: all 0.2s;
}

.duration-200 {
  transition-duration: 200ms;
}

.text-red-500 {
  color: #f56565;
}

.mt-4 {
  margin-top: 1rem;
}
</style>
