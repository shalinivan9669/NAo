<!-- pages/history.vue -->
<template>
  <section class="history-section py-12 bg-gray-100">
    <!-- Введение -->
    <div class="container mx-auto px-6 mb-12">
      <h1 class="text-4xl font-bold text-blue-900 mb-6">{{ $t('history.title') }}</h1>
      <p class="text-lg text-gray-700 mb-8">
        {{ $t('history.introduction') }}
      </p>
    </div>

    <!-- История Создания и Развития -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.creationDevelopment.title') }}</h2>
      <p class="text-gray-700 mb-6">
        {{ $t('history.creationDevelopment.paragraph1') }}
      </p>
      <p class="text-gray-700 mb-6">
        {{ $t('history.creationDevelopment.paragraph2') }}
      </p>
      <!-- Компонент Timeline -->
      <div class="min-h-screen bg-gray-100 py-12">
        <div class="container mx-auto px-6">
          <h1 class="text-4xl font-bold text-center text-blue-900 mb-12">{{ $t('history.timelineTitle') }}</h1>
          <Timeline :events="events" />
        </div>
      </div>
      <!-- Фотогалерея -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
        <img src="/images/create.jpg" :alt="$t('history.gallery.image1.alt')" class="w-full h-96 object-cover rounded-lg shadow-md">
        <img src="/images/senat.jpg" :alt="$t('history.gallery.image2.alt')" class="w-full h-96 object-cover rounded-lg shadow-md">
      </div>

      <p class="text-gray-700 mb-6">
        {{ $t('history.dissertationCouncil') }}
      </p>

      <!-- Руководители -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-gray-800 mb-6">{{ $t('history.leadership.title') }}</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div
            v-for="(leader, index) in leaders"
            :key="index"
            class="flex flex-col items-center text-center"
          >
            <img
              :src="leader.image"
              :alt="leader.name"
              class="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
            />
            <p class="text-center mt-4 font-semibold text-lg">{{ leader.name }}</p>
            <p class="text-center mt-1 text-sm text-gray-600">{{ leader.period }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Структура Центра -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.structure.title') }}</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b text-left">{{ $t('history.structure.department') }}</th>
              <th class="py-2 px-4 border-b text-left">{{ $t('history.structure.description') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in structure" :key="index">
              <td class="py-2 px-4 border-b">{{ item.department }}</td>
              <td class="py-2 px-4 border-b">{{ item.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Клиника и Медицинские Услуги -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.clinic.title') }}</h2>
      <p class="text-gray-700 mb-6">
        {{ $t('history.clinic.paragraph1') }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="" :alt="$t('history.clinic.image1.alt')" class="w-full h-80 object-cover rounded-lg shadow-md">
        <img src="" :alt="$t('history.clinic.image2.alt')" class="w-full h-80 object-cover rounded-lg shadow-md">
      </div>
      <p class="text-gray-800 mt-6">
        {{ $t('history.clinic.paragraph2') }}
      </p>
    </div>

    <!-- Филиалы Центра -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.branches.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(branch, index) in branches" :key="index" class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">{{ branch.title }}</h3>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="(item, idx) in branch.items" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Научные Достижения и Исследования -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.scientificAchievements.title') }}</h2>
      <p class="text-gray-700 mb-6">
        {{ $t('history.scientificAchievements.paragraph1') }}
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li v-for="(achievement, index) in achievements" :key="index">{{ achievement }}</li>
      </ul>
      <!-- Инфографика -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="" :alt="$t('history.scientificAchievements.image1.alt')" class="w-full h-60 object-cover rounded-lg shadow-md">
        <img src="" :alt="$t('history.scientificAchievements.image2.alt')" class="w-full h-60 object-cover rounded-lg shadow-md">
      </div>
    </div>

    <!-- Международное Сотрудничество -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.internationalCooperation.title') }}</h2>
      <p class="text-gray-700 mb-6">
        {{ $t('history.internationalCooperation.paragraph1') }}
      </p>
      <div class="flex flex-wrap gap-1">
        <img src="/images/fr.jpg" :alt="$t('history.internationalCooperation.image1.alt')" class="w-80 h-80 object-contain">
        <img src="/images/bg.jpg" :alt="$t('history.internationalCooperation.image2.alt')" class="w-80 h-80 object-contain">
        <img src="/images/usa.jpg" :alt="$t('history.internationalCooperation.image3.alt')" class="w-80 h-80 object-contain">
        <!-- Добавьте логотипы других партнеров аналогично -->
      </div>
      <p class="text-gray-700 mt-6">
        {{ $t('history.internationalCooperation.paragraph2') }}
      </p>
    </div>

    <!-- Награды и Признание -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.awards.title') }}</h2>
      <p class="text-gray-700 mb-6">
        {{ $t('history.awards.paragraph1') }}
      </p>
      <div class="flex flex-wrap gap-6">
        <div class="w-1/2 md:w-1/4" v-for="(award, index) in awards" :key="index">
          <img :src="award.image" :alt="award.title" class="w-full h-40 object-contain rounded-lg shadow-md">
          <p class="text-center mt-2 font-semibold">{{ award.title }}</p>
        </div>
      </div>
      <h3 class="text-2xl font-semibold text-gray-800 mt-6 mb-4">{{ $t('history.awards.scientificProductionTitle') }}</h3>
      <ul class="list-disc list-inside text-gray-700">
        <li v-for="(item, index) in scientificProduction" :key="index">{{ item }}</li>
      </ul>
    </div>

    <!-- Заключение -->
    <div class="container mx-auto px-6 mb-12">
      <h2 class="text-3xl font-semibold text-blue-800 mb-6">{{ $t('history.conclusion.title') }}</h2>
      <p class="text-gray-700 mb-6">
        {{ $t('history.conclusion.paragraph') }}
      </p>
      <a href="/contacts" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">{{ $t('history.conclusion.contactUs') }}</a>
    </div>
  </section>
</template>

<script setup lang="ts">
import Timeline from '~/components/Timeline.vue';
import { events } from '~/data/events.js';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Данные руководителей
const leaders = computed(() => [
  {
    name: 'З.К. Тулегенов',
    period: '1958–1970 гг.',
    image: '/images/tylegenov.jpg',
  },
  {
    name: 'А.П. Филин',
    period: '1970–1974 гг.',
    image: '/images/filin.jpg',
  },
  {
    name: 'Б.Е. Алтынбеков',
    period: '1974–1991 гг.',
    image: '/images/altynbekov.jpg',
  },
  {
    name: 'Г.А. Кулкыбаев',
    period: '1991–2006 гг.',
    image: '/images/kulkyaev.jpg',
  },
  {
    name: 'С.А. Ибраев',
    period: '2006–2007 гг.',
    image: '/images/ibraev.jpg',
  },
  {
    name: 'Е.Н. Сраубаев',
    period: '2007-2009 гг.',
    image: '/images/sraubayev.jpg',
  },
  {
    name: 'Ж.Е. Баттакова',
    period: '2009г.-2011г.',
    image: '/images/battakova.jpg',
  },
  {
    name: 'И.А. Аманжол',
    period: '2011-2013 гг.',
    image: '/images/amanzhol.jpg',
  },
  {
    name: 'К.З.Сакиев',
    period: '2013-2017гг.',
    image: '/images/sakiyev.jpg',
  },
  {
    name: 'Хамитов Т.Н.',
    period: '2017-2018гг.',
    image: '/images/leaders/khamitov.jpg',
  },
]);

// Данные структуры
const structure = computed(() => [
  {
    department: t('history.structure.departments.researchManagement'),
    description: t('history.structure.descriptions.researchManagement'),
  },
  {
    department: t('history.structure.departments.hygieneDepartment'),
    description: t('history.structure.descriptions.hygieneDepartment'),
  },
  {
    department: t('history.structure.departments.clinicalDepartment'),
    description: t('history.structure.descriptions.clinicalDepartment'),
  },
  {
    department: t('history.structure.departments.medicalEcologyDepartment'),
    description: t('history.structure.descriptions.medicalEcologyDepartment'),
  },
]);

// Данные филиалов
const branches = computed(() => [
  {
    title: t('history.branches.eastBranch.title'),
    items: [
      t('history.branches.eastBranch.item1'),
      t('history.branches.eastBranch.item2'),
      t('history.branches.eastBranch.item3'),
    ],
  },
  {
    title: t('history.branches.southBranch.title'),
    items: [
      t('history.branches.southBranch.item1'),
      t('history.branches.southBranch.item2'),
    ],
  },
  {
    title: t('history.branches.westBranch.title'),
    items: [
      t('history.branches.westBranch.item1'),
      t('history.branches.westBranch.item2'),
    ],
  },
]);

// Научные достижения
const achievements = computed(() => [
  t('history.scientificAchievements.achievement1'),
  t('history.scientificAchievements.achievement2'),
  t('history.scientificAchievements.achievement3'),
  t('history.scientificAchievements.achievement4'),
  t('history.scientificAchievements.achievement5'),
]);

// Награды
const awards = computed(() => [
  {
    image: '',
    title: t('history.awards.award1.title'),
  },
  {
    image: '',
    title: t('history.awards.award2.title'),
  },
  // Добавьте другие награды аналогично
]);

// Научная продукция
const scientificProduction = computed(() => [
  t('history.awards.scientificProduction.item1'),
  t('history.awards.scientificProduction.item2'),
  t('history.awards.scientificProduction.item3'),
  t('history.awards.scientificProduction.item4'),
  t('history.awards.scientificProduction.item5'),
]);
</script>

<style scoped>
.history-section {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
}

.text-blue-900 {
  color: #1e3a8a;
}

.text-blue-800 {
  color: #1e40af;
}

.text-gray-700 {
  color: #4b5563;
}

.text-gray-800 {
  color: #374151;
}

.bg-white {
  background-color: #ffffff;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-12 {
  padding: 3rem;
}

.container {
  max-width: 1200px;
}

.object-cover {
  object-fit: cover;
}

.object-contain {
  object-fit: contain;
}

.transition-opacity {
  transition: opacity 1s ease-in-out;
}

.inline-block {
  display: inline-block;
}

.bg-blue-600 {
  background-color: #2563eb;
}

.hover\:bg-blue-700:hover {
  background-color: #1d4ed8;
}

.transition {
  transition: all 0.3s ease;
}

.duration-300 {
  transition-duration: 300ms;
}

@media (max-width: 768px) {
  .h-60 {
    height: 15rem;
  }
}
</style>
