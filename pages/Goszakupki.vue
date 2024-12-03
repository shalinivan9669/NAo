<!-- pages/goszakupki.vue -->
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Список Закупок</h1>

    <!-- Загрузчик -->
    <div v-if="loading" class="flex justify-center items-center">
      <svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
    </div>

    <!-- Сообщение об ошибке -->
    <div v-if="error" class="text-red-600 text-center">
      Произошла ошибка при загрузке данных. Пожалуйста, попробуйте позже.
    </div>

    <!-- Сообщение при отсутствии данных -->
    <div v-if="!loading && procurements.length === 0 && !error" class="text-center text-gray-600">
      Закупки отсутствуют.
    </div>

    <!-- Список закупок -->
    <div v-else class="space-y-4">
      <article
        v-for="(procurement, index) in procurements"
        :key="procurement.id"
        class="bg-white p-4 rounded shadow hover:bg-gray-100 cursor-pointer"
        @click="openDetails(procurement)"
      >
        <p class="text-gray-700">{{ procurement.description }}</p>
        <p class="text-gray-600 mt-2">Дата создания: {{ formatDate(procurement.createdAt) }}</p>
        <p class="text-gray-600">Дата окончания: {{ formatDate(procurement.endDate) }}</p>
      </article>
    </div>

    <!-- Пагинация -->
    <nav class="flex justify-center mt-6" aria-label="Pagination">
      <button
        :disabled="currentPage === 1"
        @click="fetchProcurements(currentPage - 1)"
        class="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Предыдущая
      </button>
      <span class="px-4 py-2 mx-1">{{ currentPage }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="fetchProcurements(currentPage + 1)"
        class="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Следующая
      </button>
    </nav>

    <!-- Модальное окно для детального просмотра -->
    <transition name="fade">
      <div
        v-if="selectedProcurement"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        @keydown.esc="closeDetails"
        tabindex="-1"
        ref="modal"
        role="dialog"
        aria-modal="true"
      >
        <div class="bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-4 max-h-screen overflow-y-auto"
             @click.self="closeDetails">
          <div class="flex justify-end mb-4">
            <button @click="closeDetails()" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" aria-label="Закрыть модальное окно">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="space-y-4">
            <div>
              <p class="text-gray-700 whitespace-pre-line">{{ selectedProcurement.description }}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p class="font-semibold">Дата создания:</p>
                <p>{{ formatDate(selectedProcurement.createdAt) }}</p>
              </div>
              <div>
                <p class="font-semibold">Дата окончания:</p>
                <p>{{ formatDate(selectedProcurement.endDate) }}</p>
              </div>
            </div>
            <div v-if="selectedProcurement.fileUrls && selectedProcurement.fileUrls.length > 0">
              <p class="font-semibold">Прикрепленные файлы:</p>
              <ul class="list-disc list-inside">
                <li v-for="(fileUrl, index) in selectedProcurement.fileUrls" :key="index">
                  <a :href="fileUrl" target="_blank" class="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600">
                    Файл {{ index + 1 }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <button @click="closeDetails()" class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition focus:outline-none focus:ring-2 focus:ring-blue-600">
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import axios from 'axios';
import type { Procurement } from '~/types/types';

const procurements = ref<Procurement[]>([]);
const currentPage = ref(1);
const limit = 10;
const total = ref(0);
const totalPages = ref(1);

const selectedProcurement = ref<Procurement | null>(null);
const loading = ref(false);
const error = ref(false);

const modal = ref<HTMLDivElement | null>(null);

// Форматирование даты
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Загрузка закупок
const fetchProcurements = async (page: number = 1) => {
  console.log(`goszakupki.vue: Fetching procurements for page ${page}`);
  loading.value = true;
  error.value = false;
  try {
    const response = await axios.get('/api/procurements', {
      params: { page, limit },
    });

    procurements.value = response.data.data;
    total.value = response.data.total;
    currentPage.value = response.data.page;
    totalPages.value = Math.ceil(total.value / limit);

    console.log('goszakupki.vue: Procurements fetched:', procurements.value);
  } catch (err: any) {
    console.error('goszakupki.vue: Error fetching procurements:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

const openDetails = async (procurement: Procurement) => {
  selectedProcurement.value = procurement;
  await nextTick();
  if (modal.value) {
    modal.value.focus();
  }
};

const closeDetails = () => {
  selectedProcurement.value = null;
};

// Загрузка закупок при монтировании компонента
onMounted(() => {
  fetchProcurements();
});
</script>

<style scoped>
/* Стилизация списка закупок */
.space-y-4 > * + * {
  margin-top: 1rem;
}

.bg-white {
  background-color: #ffffff;
}

.p-4 {
  padding: 1rem;
}

.rounded {
  border-radius: 0.25rem;
}

.shadow {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.hover\:bg-gray-100:hover {
  background-color: #f7fafc;
}

.cursor-pointer {
  cursor: pointer;
}

.text-gray-700 {
  color: #4a5568;
}

.text-gray-600 {
  color: #718096;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.disabled\:opacity-50:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.focus\:outline-none:focus {
  outline: none;
}

.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
}

.focus\:ring-blue-600:focus {
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.6);
}

/* Стилизация модального окна */
.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.z-50 {
  z-index: 50;
}

.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.max-w-3xl {
  max-width: 48rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.max-h-screen {
  max-height: 100vh;
}

.overflow-y-auto {
  overflow-y: auto;
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 640px) {
  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.gap-4 {
  gap: 1rem;
}

.list-disc {
  list-style-type: disc;
}

.list-inside {
  list-style-position: inside;
}

.text-gray-500 {
  color: #a0aec0;
}

.hover\:text-gray-700:hover {
  color: #4a5568;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Анимация модального окна */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.focus\:outline-none:focus {
  outline: none;
}
</style>
