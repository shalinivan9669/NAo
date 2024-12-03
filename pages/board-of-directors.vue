<!-- pages/board-of-directors/board-of-directors.vue -->
<template>
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-8">{{ $t('boardOfDirectors.title') }}</h1>
  
      <!-- Главный директор -->
      <section class="mb-12">
        <div class="flex flex-col items-center">
          <img
            :src="mainMember.photo"
            :alt="$t(mainMember.fullNameKey)"
            class="w-48 h-48 rounded-full object-cover mb-4"
            loading="lazy"
          />
          <h2 class="text-2xl font-semibold">{{ $t(mainMember.fullNameKey) }}</h2>
          <p class="text-gray-600 mt-2">{{ $t(mainMember.activityKey) }}</p>
          <p class="text-center text-gray-700 mt-4 max-w-2xl">
            {{ $t(mainMember.descriptionKey) }}
          </p>
        </div>
      </section>
  
      <!-- Члены совета директоров -->
      <section>
        <h3 class="text-xl font-semibold mb-6">{{ $t('boardOfDirectors.membersTitle') }}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <!-- Первый член совета директоров -->
          <article class="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img
              :src="member1.photo"
              :alt="$t(member1.fullNameKey)"
              class="w-32 h-32 rounded-full object-cover mb-4"
              loading="lazy"
            />
            <h4 class="text-lg font-semibold">{{ $t(member1.fullNameKey) }}</h4>
            <p class="text-gray-600 mt-1">{{ $t(member1.activityKey) }}</p>
            <p class="text-center text-gray-700 mt-3">{{ $t(member1.descriptionKey) }}</p>
          </article>
  
          <!-- Второй член совета директоров -->
          <article class="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img
              :src="member2.photo"
              :alt="$t(member2.fullNameKey)"
              class="w-32 h-32 rounded-full object-cover mb-4"
              loading="lazy"
            />
            <h4 class="text-lg font-semibold">{{ $t(member2.fullNameKey) }}</h4>
            <p class="text-gray-600 mt-1">{{ $t(member2.activityKey) }}</p>
            <p class="text-center text-gray-700 mt-3">{{ $t(member2.descriptionKey) }}</p>
          </article>
  
          <!-- Третий член совета директоров -->
          <article class="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <img
              :src="member3.photo"
              :alt="$t(member3.fullNameKey)"
              class="w-32 h-32 rounded-full object-cover mb-4"
              loading="lazy"
            />
            <h4 class="text-lg font-semibold">{{ $t(member3.fullNameKey) }}</h4>
            <p class="text-gray-600 mt-1">{{ $t(member3.activityKey) }}</p>
            <p class="text-center text-gray-700 mt-3">{{ $t(member3.descriptionKey) }}</p>
          </article>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // Инициализация i18n
  const { t } = useI18n();
  
  // Главный директор
  const mainMember = ref({
    fullNameKey: 'boardOfDirectors.mainMember.fullName',
    activityKey: 'boardOfDirectors.mainMember.activity',
    descriptionKey: 'boardOfDirectors.mainMember.description',
    photo: '/images/board-of-directors/main.jpg',
  });
  
  // Первый член совета директоров
  const member1 = ref({
    fullNameKey: 'boardOfDirectors.members.member1.fullName',
    activityKey: 'boardOfDirectors.members.member1.activity',
    descriptionKey: 'boardOfDirectors.members.member1.description',
    photo: '/images/board-of-directors/member1.jpg',
  });
  
  // Второй член совета директоров
  const member2 = ref({
    fullNameKey: 'boardOfDirectors.members.member2.fullName',
    activityKey: 'boardOfDirectors.members.member2.activity',
    descriptionKey: 'boardOfDirectors.members.member2.description',
    photo: '/images/board-of-directors/member2.jpg',
  });
  
  // Третий член совета директоров
  const member3 = ref({
    fullNameKey: 'boardOfDirectors.members.member3.fullName',
    activityKey: 'boardOfDirectors.members.member3.activity',
    descriptionKey: 'boardOfDirectors.members.member3.description',
    photo: '/images/board-of-directors/member3.jpg',
  });
  </script>
  
  <style scoped>
  /* Анимация плавного появления карточек */
  .transition-shadow {
    transition: box-shadow 0.3s ease;
  }
  
  .hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Адаптивные размеры изображений */
  @media (min-width: 640px) {
    .w-48 {
      width: 12rem;
      height: 12rem;
    }
  
    .w-32 {
      width: 8rem;
      height: 8rem;
    }
  }
  
  /* Стилизация заголовков */
  h1, h2, h3, h4 {
    font-family: 'Arial', sans-serif;
  }
  
  /* Дополнительные стили */
  .container {
    max-width: 1200px;
  }
  
  .bg-white {
    background-color: #ffffff;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .shadow {
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .text-gray-600 {
    color: #718096;
  }
  
  .text-gray-700 {
    color: #4a5568;
  }
  
  .text-center {
    text-align: center;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .font-semibold {
    font-weight: 600;
  }
  
  .mb-8 {
    margin-bottom: 2rem;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .mt-1 {
    margin-top: 0.25rem;
  }
  
  .mt-2 {
    margin-top: 0.5rem;
  }
  
  .mt-3 {
    margin-top: 0.75rem;
  }
  
  .mt-4 {
    margin-top: 1rem;
  }
  
  .mt-6 {
    margin-top: 1.5rem;
  }
  
  .grid {
    display: grid;
  }
  
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .sm\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  .gap-8 {
    gap: 2rem;
  }
  
  /* Обеспечение адаптивности текста */
  @media (max-width: 639px) {
    .text-3xl {
      font-size: 2rem;
    }
  
    .text-2xl {
      font-size: 1.5rem;
    }
  
    .text-lg {
      font-size: 1.125rem;
    }
  }
  </style>
  