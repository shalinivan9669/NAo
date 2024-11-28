<!-- pages/gosseditzakup.vue -->
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Админ-Панель Госзакупок</h1>
    <button @click="openCreateModal" class="bg-green-600 text-white px-4 py-2 rounded mb-4 hover:bg-green-700 transition">
      Добавить Закупку
    </button>
    
    <!-- Таблица закупок -->
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">№</th>
          <th class="py-2 px-4 border-b">Название</th>
          <th class="py-2 px-4 border-b">Описание</th>
          <th class="py-2 px-4 border-b">Дата Создания</th>
          <th class="py-2 px-4 border-b">Дата Окончания</th>
          <th class="py-2 px-4 border-b">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(procurement, index) in procurements" :key="procurement.id" class="hover:bg-gray-100">
          <td class="py-2 px-4 border-b">{{ (currentPage - 1) * limit + index + 1 }}</td>
          <td class="py-2 px-4 border-b">{{ procurement.title }}</td>
          <td class="py-2 px-4 border-b">{{ procurement.description }}</td>
          <td class="py-2 px-4 border-b">{{ formatDate(procurement.createdAt) }}</td>
          <td class="py-2 px-4 border-b">{{ formatDate(procurement.endDate) }}</td>
          <td class="py-2 px-4 border-b">
            <button @click="openEditModal(procurement)" class="text-blue-600 hover:underline mr-2">Редактировать</button>
            <button @click="confirmDelete(procurement.id)" class="text-red-600 hover:underline">Удалить</button>
          </td>
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

    <!-- Модальное окно для создания и редактирования закупки -->
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-lg w-full max-w-lg mx-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">{{ isEditing ? 'Редактировать Закупку' : 'Добавить Закупку' }}</h2>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <form @submit.prevent="isEditing ? handleUpdate() : handleCreate()">
          <div class="mb-4">
            <label class="block text-gray-700">Название</label>
            <input
              v-model="form.title"
              type="text"
              class="w-full px-4 py-2 border rounded"
              placeholder="Введите название"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Описание</label>
            <textarea
              v-model="form.description"
              class="w-full px-4 py-2 border rounded"
              placeholder="Введите описание"
              required
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Дата создания</label>
            <input
              v-model="form.createdAt"
              type="datetime-local"
              class="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Дата окончания</label>
            <input
              v-model="form.endDate"
              type="datetime-local"
              class="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Файлы PDF</label>
            <input
              @change="handleFileUpload"
              type="file"
              accept="application/pdf"
              multiple
              class="w-full px-4 py-2 border rounded"
            />
            <div v-if="form.fileUrls && form.fileUrls.length > 0" class="mt-2">
              <p>Текущие файлы:</p>
              <ul>
                <li v-for="(fileUrl, index) in form.fileUrls" :key="index">
                  <a :href="fileUrl" target="_blank" class="text-blue-600 hover:underline">
                    Файл {{ index + 1 }}
                  </a>
                  <button @click="removeFile(index)" class="text-red-600 hover:underline ml-2">
                    Удалить
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="mr-2 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition">
              Отмена
            </button>
            <button type="submit" class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              {{ isEditing ? 'Сохранить' : 'Добавить' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Подтверждение удаления -->
    <div v-if="isDeleteConfirmOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded shadow-lg w-80">
        <h2 class="text-xl font-bold mb-4">Подтверждение удаления</h2>
        <p class="mb-6">Вы уверены, что хотите удалить эту закупку?</p>
        <div class="flex justify-end">
          <button @click="closeDeleteConfirm" class="mr-2 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition">
            Отмена
          </button>
          <button @click="handleDelete" class="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import type { Procurement } from '~/types/types';

const store = useStore();

const procurements = ref<Procurement[]>([]);
const currentPage = ref(1);
const limit = 10;
const total = ref(0);
const totalPages = ref(1);

// Форматирование даты
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Модальное окно для создания и редактирования
const isModalOpen = ref(false);
const isEditing = ref(false);
const form = ref<{
  id?: string;
  title: string;
  description: string;
  createdAt: string;
  endDate: string;
  files?: File[];
  fileUrls?: string[];
}>({
  id: '',
  title: '',
  description: '',
  createdAt: '',
  endDate: '',
  files: [],
  fileUrls: [],
});

// Модальное окно подтверждения удаления
const isDeleteConfirmOpen = ref(false);
const deleteId = ref<string>('');

const fetchProcurements = async (page: number = 1) => {
  console.log(`gosseditzakup.vue: Fetching procurements for page ${page}`);
  try {
    await store.dispatch('fetchProcurements', page);
    procurements.value = store.getters.procurements;
    currentPage.value = store.getters.page;
    total.value = store.getters.total;
    totalPages.value = Math.ceil(total.value / limit);
    console.log('gosseditzakup.vue: Procurements fetched:', procurements.value);
  } catch (error: any) {
    console.error('gosseditzakup.vue: Error fetching procurements:', error);
  }
};

const openCreateModal = () => {
  isEditing.value = false;
  form.value = {
    id: '',
    title: '',
    description: '',
    createdAt: new Date().toISOString().slice(0,16),
    endDate: new Date().toISOString().slice(0,16),
    files: [],
    fileUrls: [],
  };
  isModalOpen.value = true;
  console.log('gosseditzakup.vue: Opened create modal');
};

const openEditModal = (procurement: Procurement) => {
  isEditing.value = true;
  form.value = {
    id: procurement.id,
    title: procurement.title,
    description: procurement.description,
    createdAt: procurement.createdAt.slice(0,16),
    endDate: procurement.endDate.slice(0,16),
    files: [],
    fileUrls: procurement.fileUrls || [],
  };
  isModalOpen.value = true;
  console.log('gosseditzakup.vue: Opened edit modal for procurement:', procurement.id);
};

const closeModal = () => {
  isModalOpen.value = false;
  console.log('gosseditzakup.vue: Closed modal');
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    form.value.files = Array.from(target.files);
  }
};

const removeFile = (index: number) => {
  form.value.fileUrls?.splice(index, 1);
};

const handleCreate = async () => {
  console.log('gosseditzakup.vue: handleCreate called with data:', form.value);
  try {
    await store.dispatch('createProcurement', {
      title: form.value.title,
      description: form.value.description,
      createdAt: form.value.createdAt,
      endDate: form.value.endDate,
      files: form.value.files,
    });
    console.log('gosseditzakup.vue: Procurement created successfully');
    closeModal();
    fetchProcurements(currentPage.value); // Обновить список закупок
  } catch (error: any) {
    console.error('gosseditzakup.vue: Error creating procurement:', error);
  }
};

const handleUpdate = async () => {
  console.log('gosseditzakup.vue: handleUpdate called with data:', form.value);
  try {
    await store.dispatch('updateProcurement', {
      id: form.value.id!,
      title: form.value.title,
      description: form.value.description,
      createdAt: form.value.createdAt,
      endDate: form.value.endDate,
      files: form.value.files,
      fileUrls: form.value.fileUrls,
    });
    console.log('gosseditzakup.vue: Procurement updated successfully');
    closeModal();
    fetchProcurements(currentPage.value); // Обновить список закупок
  } catch (error: any) {
    console.error('gosseditzakup.vue: Error updating procurement:', error);
  }
};

const confirmDelete = (id: string) => {
  deleteId.value = id;
  isDeleteConfirmOpen.value = true;
  console.log(`gosseditzakup.vue: Opened delete confirmation for procurement: ${id}`);
};

const closeDeleteConfirm = () => {
  isDeleteConfirmOpen.value = false;
  deleteId.value = '';
  console.log('gosseditzakup.vue: Closed delete confirmation');
};

const handleDelete = async () => {
  console.log(`gosseditzakup.vue: handleDelete called for id: ${deleteId.value}`);
  try {
    await store.dispatch('deleteProcurement', deleteId.value);
    console.log('gosseditzakup.vue: Procurement deleted successfully');
    closeDeleteConfirm();
    fetchProcurements(currentPage.value); // Обновить список закупок
  } catch (error: any) {
    console.error('gosseditzakup.vue: Error deleting procurement:', error);
  }
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

.bg-green-600 {
  background-color: #38a169;
}

.bg-green-700:hover {
  background-color: #2f855a;
}

.bg-red-600 {
  background-color: #e53e3e;
}

.bg-red-700:hover {
  background-color: #c53030;
}

.transition {
  transition: all 0.2s;
}

.duration-200 {
  transition-duration: 200ms;
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

.max-w-lg {
  max-width: 32rem;
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
</style>
