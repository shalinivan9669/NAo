<!-- pages/nao-lab.vue -->
<template>
    <div class="w-full">
      <!-- Заголовок -->
      <section class="bg-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl font-bold text-blue-800 mb-4">{{ t('lab.header.title') }}</h1>
          <p class="text-lg text-gray-700">{{ t('lab.header.subtitle') }}</p>
        </div>
      </section>
  
      <!-- Основной контент -->
      <section class="bg-gray-100 py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Описание лаборатории -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ t('lab.about.title') }}</h2>
            <p class="text-gray-700 mb-4">{{ t('lab.about.paragraph1') }}</p>
            <!-- Фото 1 -->
            <div class="flex justify-center my-8">
              <img src="/lab/1.jpg" :alt="t('lab.about.photo1Alt')" class="w-full max-w-3xl">
            </div>
            <p class="text-gray-700 mb-4">{{ t('lab.about.paragraph2') }}</p>
            <p class="text-gray-700">{{ t('lab.about.paragraph3') }}</p>
          </div>
  
          <!-- Основное назначение -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ t('lab.purpose.title') }}</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>{{ t('lab.purpose.item1') }}</li>
              <li>{{ t('lab.purpose.item2') }}</li>
              <li>{{ t('lab.purpose.item3') }}</li>
              <li>{{ t('lab.purpose.item4') }}</li>
              <li>{{ t('lab.purpose.item5') }}</li>
            </ul>
          </div>
  
          <!-- Основные направления деятельности -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ t('lab.activities.title') }}</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>{{ t('lab.activities.item1') }}</li>
              <li>{{ t('lab.activities.item2') }}</li>
              <li>{{ t('lab.activities.item3') }}</li>
              <li>{{ t('lab.activities.item4') }}</li>
              <li>{{ t('lab.activities.item5') }}</li>
              <li>{{ t('lab.activities.item6') }}</li>
            </ul>
          </div>
  
          <!-- Оборудование и сотрудничество -->
          <div class="mb-12">
            <!-- Фото 2 -->
            <div class="flex justify-center my-8">
              <img src="/lab/2.jpg " :alt="t('lab.equipment.photo2Alt')" class="w-full max-w-3xl">
            </div>
            <p class="text-gray-700 mb-4">{{ t('lab.equipment.description') }}</p>
            <p class="text-gray-700 mb-4">{{ t('lab.cooperation.intro') }}</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li v-for="company in companies" :key="company">{{ company }}</li>
            </ul>
            <p class="text-gray-700 mt-4">{{ t('lab.cooperation.conclusion') }}</p>
          </div>
  
          <!-- Кадровый состав -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ t('lab.staff.title') }}</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li v-for="staffMember in staff" :key="staffMember.name">
                {{ staffMember.name }}, {{ staffMember.position }}
              </li>
            </ul>
          </div>
  
          <!-- Дополнительная информация -->
          <div class="mb-12">
            <p class="text-gray-700 mb-4">{{ t('lab.additionalInfo.paragraph1') }}</p>
            <p class="text-gray-700">{{ t('lab.additionalInfo.paragraph2') }}</p>
          </div>
  
          <!-- Контактная информация -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ t('lab.contact.title') }}</h2>
            <p class="text-gray-700">
              {{ t('lab.contact.head') }}<br>
              {{ t('lab.contact.address') }}<br>
              {{ t('lab.contact.phone') }}<br>
    
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  // Список компаний
  const companies = computed(() => [
    t('lab.cooperation.companies.company1'),
    t('lab.cooperation.companies.company2'),
    t('lab.cooperation.companies.company3'),
    t('lab.cooperation.companies.company4'),
    t('lab.cooperation.companies.company5'),
    t('lab.cooperation.companies.company6'),
    t('lab.cooperation.companies.company7'),
    t('lab.cooperation.companies.company8'),
  ]);
  
  // Список сотрудников
  const staff = computed(() => [
    { name: t('lab.staff.members.member1.name'), position: t('lab.staff.members.member1.position') },
    { name: t('lab.staff.members.member2.name'), position: t('lab.staff.members.member2.position') },
    { name: t('lab.staff.members.member3.name'), position: t('lab.staff.members.member3.position') },
    { name: t('lab.staff.members.member4.name'), position: t('lab.staff.members.member4.position') },
    { name: t('lab.staff.members.member5.name'), position: t('lab.staff.members.member5.position') },
    { name: t('lab.staff.members.member6.name'), position: t('lab.staff.members.member6.position') },
    { name: t('lab.staff.members.member7.name'), position: t('lab.staff.members.member7.position') },
    { name: t('lab.staff.members.member8.name'), position: t('lab.staff.members.member8.position') },
  ]);
  </script>
  
  <style scoped>
  /* Общие стили */
  section {
    transition: background-color 0.3s ease;
  }
  
  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
  
  h1 {
    color: #003366;
  }
  
  h2 {
    color: #003366;
  }
  
  h3 {
    color: #555555;
  }
  
  p {
    color: #555555;
    line-height: 1.8;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  button:hover {
    cursor: pointer;
  }
  </style>
  