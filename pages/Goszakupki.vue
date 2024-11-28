<!-- pages/goszakupki.vue -->
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Список Закупок</h1>
    
    <!-- Таблица закупок -->
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">№</th>
          <th class="py-2 px-4 border-b">Название</th>
          <th class="py-2 px-4 border-b">Описание</th>
          <th class="py-2 px-4 border-b">Дата Создания</th>
          <th class="py-2 px-4 border-b">Дата Окончания</th>
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
          <td class="py-2 px-4 border-b">{{ procurement.title }}</td>
          <td class="py-2 px-4 border-b truncate-description">{{ procurement.description }}</td>
          <td class="py-2 px-4 border-b">{{ formatDate(procurement.createdAt) }}</td>
          <td class="py-2 px-4 border-b">{{ formatDate(procurement.endDate) }}</td>
        </tr>
      </tbody>
    </table>

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
      <div class="bg-white p-6 rounded shadow-lg w-full max-w-2xl mx-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">{{ selectedProcurement.title }}</h2>
          <button @click="closeDetails()" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <p class="mb-4">{{ selectedProcurement.description }}</p>
        <div class="mb-4">
          <p><strong>Дата создания:</strong> {{ formatDate(selectedProcurement.createdAt) }}</p>
          <p><strong>Дата окончания:</strong> {{ formatDate(selectedProcurement.endDate) }}</p>
        </div>
        <div v-if="selectedProcurement.fileUrls && selectedProcurement.fileUrls.length > 0">
          <p class="font-semibold mb-2">Прикрепленные файлы:</p>
          <ul>
            <li v-for="(fileUrl, index) in selectedProcurement.fileUrls" :key="index">
              <a :href="fileUrl" target="_blank" class="text-blue-600 hover:underline">
                Файл {{ index + 1 }}
              </a>
            </li>
          </ul>
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

.max-w-2xl {
  max-width: 42rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.text-gray-500 {
  color: #6b7280;
}

.text-gray-700 {
  color: #374151;
}

.hover\:text-gray-700:hover {
  color: #374151;
}

.font-semibold {
  font-weight: 600;
}

.truncate-description {
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Показываем только одну строку */
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 90px;
}
</style>
