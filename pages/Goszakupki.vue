<!-- pages/goszakupki.vue -->
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Список Закупок</h1>
    
    <!-- Таблица закупок -->
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b text-left">№</th>
            <th class="py-2 px-4 border-b text-left">Название</th>
            <th class="py-2 px-4 border-b text-left">Описание</th>
            <th class="py-2 px-4 border-b text-left">Дата Создания</th>
            <th class="py-2 px-4 border-b text-left">Дата Окончания</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(procurement, index) in procurements"
            :key="procurement.id"
            class="hover:bg-gray-100 cursor-pointer"
            @click="openDetails(procurement)"
          >
            <td class="py-2 px-4 border-b">{{ (currentPage - 1) * limit + index + 1 }}</td>
            <td
              class="py-2 px-4 border-b max-w-xs truncate-with-ellipsis"
              :title="procurement.title"
            >
              {{ procurement.title }}
            </td>
            <td
              class="py-2 px-4 border-b max-w-md truncate-with-ellipsis"
              :title="procurement.description"
            >
              {{ procurement.description }}
            </td>
            <td class="py-2 px-4 border-b">{{ formatDate(procurement.createdAt) }}</td>
            <td class="py-2 px-4 border-b">{{ formatDate(procurement.endDate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Пагинация -->
    <div class="flex justify-center mt-6">
      <button
        :disabled="currentPage === 1"
        @click="fetchProcurements(currentPage - 1)"
        class="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Предыдущая
      </button>
      <span class="px-4 py-2 mx-1">{{ currentPage }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="fetchProcurements(currentPage + 1)"
        class="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Следующая
      </button>
    </div>

    <!-- Модальное окно для детального просмотра -->
    <div v-if="selectedProcurement" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded shadow-lg w-full max-w-3xl mx-4 max-h-screen overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold main-title">{{ selectedProcurement.title }}</h2>
          <button @click="closeDetails()" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="space-y-4">
          <div>
            <p class="text-gray-700">{{ selectedProcurement.description }}</p>
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
                <a :href="fileUrl" target="_blank" class="text-blue-600 hover:underline">
                  Файл {{ index + 1 }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-6 flex justify-end">
          <button @click="closeDetails()" class="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition">
            Закрыть
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import type { Procurement } from '~/types/types';

const procurements = ref<Procurement[]>([]);
const currentPage = ref(1);
const limit = 10;
const total = ref(0);
const totalPages = ref(1);

const selectedProcurement = ref<Procurement | null>(null);

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
  try {
    const response = await axios.get('/api/procurements', {
      params: { page, limit },
    });

    procurements.value = response.data.data;
    total.value = response.data.total;
    currentPage.value = response.data.page;
    totalPages.value = Math.ceil(total.value / limit);

    console.log('goszakupki.vue: Procurements fetched:', procurements.value);
  } catch (error: any) {
    console.error('goszakupki.vue: Error fetching procurements:', error);
  }
};

const openDetails = (procurement: Procurement) => {
  selectedProcurement.value = procurement;
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
/* Стилизация таблицы и пагинации */
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.hover\:bg-gray-100:hover {
  background-color: #f7fafc;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.mt-6 {
  margin-top: 1.5rem;
}

.bg-blue-500 {
  background-color: #4299e1;
}

.text-white {
  color: #ffffff;
}

.rounded {
  border-radius: 0.25rem;
}

.disabled\:opacity-50:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cursor-pointer {
  cursor: pointer;
}

/* Новые стили для управления текстом и столбцами */
.truncate-with-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.max-w-xs {
  max-width: 10rem; /* Максимальная ширина для столбца "Название" */
}

.max-w-md {
  max-width: 20rem; /* Максимальная ширина для столбца "Описание" */
}

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

.space-y-4 > :not(:last-child) {
  margin-bottom: 1rem;
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

.text-gray-700 {
  color: #4a5568;
}

.text-gray-500 {
  color: #a0aec0;
}

.hover\:text-gray-700:hover {
  color: #4a5568;
}

.font-semibold {
  font-weight: 600;
}
.main-title{
  width: 99%;
  white-space: pre-line;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
