<!-- pages/clinics/main.vue -->
<template>
    <div class="w-full">
      <!-- Hero Секция -->
      <section class="w-full">
 
      </section>
  
      <!-- О нас -->
      <section class="bg-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('clinics.main.aboutUs.title') }}</h2>
            <p class="text-lg text-gray-700">{{ $t('clinics.main.aboutUs.description') }}</p>
          </div>
          <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <img
              src=""
              :alt="$t('clinics.main.aboutUs.altText')"
              class="w-full md:w-1/2 rounded-lg shadow-md"
            />
            <div class="w-full md:w-1/2">
              <p class="text-gray-700 mb-4">{{ $t('clinics.main.aboutUs.paragraph1') }}</p>
              <p class="text-gray-700 mb-4">{{ $t('clinics.main.aboutUs.paragraph2') }}</p>
              <p class="text-gray-700">{{ $t('clinics.main.aboutUs.paragraph3') }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Наши Отделения -->
      <section class="bg-gray-100 py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('clinics.main.departments.title') }}</h2>
            <p class="text-lg text-gray-700">{{ $t('clinics.main.departments.subtitle') }}</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="department in departments"
              :key="department.key"
              class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div class="mb-4">
                <img :src="`/icons/${department.key}.svg`" :alt="department.title" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-blue-700 mb-2">{{ department.title }}</h3>
              <p class="text-gray-700 mb-2">{{ department.description }}</p>
              <p class="text-gray-700">
                <strong>{{ $t('clinics.main.departments.phone') }}:</strong>
                <a :href="`tel:${department.phone}`" class="text-blue-600 hover:underline">{{ department.phone }}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Филиалы -->
      <section class="bg-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('clinics.main.branches.title') }}</h2>
            <p class="text-lg text-gray-700">{{ $t('clinics.main.branches.subtitle') }}</p>
          </div>
          <div class="space-y-8">
            <!-- Филиал Восточно-Казахстанский -->
            <div class="flex flex-col md:flex-row items-center">
              <img
                src=""
                :alt="branches.east.title"
                class="w-full md:w-1/3 rounded-lg shadow-md"
              />
              <div class="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
                <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ branches.east.title }}</h3>
                <p class="text-gray-700 mb-2">
                  <strong>{{ $t('clinics.main.branches.address') }}:</strong> {{ branches.east.address }}
                </p>
                <p class="text-gray-700 mb-2">
                  <strong>{{ $t('clinics.main.branches.phone') }}:</strong>
                  <a :href="`tel:${branches.east.phone}`" class="text-blue-600 hover:underline">{{ branches.east.phone }}</a>
                </p>
                <p class="text-gray-700">
                  <strong>{{ $t('clinics.main.branches.workingHours') }}:</strong> {{ branches.east.workingHours }}
                </p>
              </div>
            </div>
  
            <!-- Филиал Южно-Казахстанский -->
            <div class="flex flex-col md:flex-row items-center">
              <img
                src=""
                :alt="branches.south.title"
                class="w-full md:w-1/3 rounded-lg shadow-md"
              />
              <div class="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
                <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ branches.south.title }}</h3>
                <p class="text-gray-700 mb-2">
                  <strong>{{ $t('clinics.main.branches.address') }}:</strong> {{ branches.south.address }}
                </p>
                <p class="text-gray-700 mb-2">
                  <strong>{{ $t('clinics.main.branches.phone') }}:</strong>
                  <a :href="`tel:${branches.south.phone}`" class="text-blue-600 hover:underline">{{ branches.south.phone }}</a>
                </p>
                <p class="text-gray-700">
                  <strong>{{ $t('clinics.main.branches.workingHours') }}:</strong> {{ branches.south.workingHours }}
                </p>
              </div>
            </div>
  
            <!-- Филиал Западно-Казахстанский -->
            <div class="flex flex-col md:flex-row items-center">
              <img
                src=""
                :alt="branches.west.title"
                class="w-full md:w-1/3 rounded-lg shadow-md"
              />
              <div class="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
                <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ branches.west.title }}</h3>
                <p class="text-gray-700 mb-2">
                  <strong>{{ $t('clinics.main.branches.address') }}:</strong> {{ branches.west.address }}
                </p>
                <p class="text-gray-700 mb-2">
                  <strong>{{ $t('clinics.main.branches.phone') }}:</strong>
                  <a :href="`tel:${branches.west.phone}`" class="text-blue-600 hover:underline">{{ branches.west.phone }}</a>
                </p>
                <p class="text-gray-700">
                  <strong>{{ $t('clinics.main.branches.workingHours') }}:</strong> {{ branches.west.workingHours }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Отзывы -->
      <section class="bg-gray-100 py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('clinics.main.testimonials.title') }}</h2>
            <p class="text-lg text-gray-700">{{ $t('clinics.main.testimonials.subtitle') }}</p>
          </div>
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <p class="italic text-gray-700">"{{ $t('clinics.main.testimonials.review1.text') }}"</p>
              <p class="mt-2 font-semibold text-gray-800">— {{ $t('clinics.main.testimonials.review1.author') }}</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <p class="italic text-gray-700">"{{ $t('clinics.main.testimonials.review2.text') }}"</p>
              <p class="mt-2 font-semibold text-gray-800">— {{ $t('clinics.main.testimonials.review2.author') }}</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <p class="italic text-gray-700">"{{ $t('clinics.main.testimonials.review3.text') }}"</p>
              <p class="mt-2 font-semibold text-gray-800">— {{ $t('clinics.main.testimonials.review3.author') }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Контактная Информация -->
      <section class="bg-white py-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('clinics.main.contactInfo.title') }}</h2>
            <p class="text-lg text-gray-700">{{ $t('clinics.main.contactInfo.subtitle') }}</p>
          </div>
          <div class="flex justify-center">
            <a href="/contacts/contact-us" class="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              {{ $t('clinics.main.contactInfo.cta') }}
            </a>
          </div>
        </div>
      </section>
  
      <!-- Социальные Сети -->
      <!-- Здесь можно оставить ваш раздел социальных сетей -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import Hero from '~/components/Hero.vue';
  
  const { t } = useI18n();
  
  // Данные для отделений
  const departments = computed(() => [
    {
      key: 'professionalTherapy',
      title: t('clinics.main.departments.professionalTherapy.title'),
      description: t('clinics.main.departments.professionalTherapy.description'),
      phone: '+7 (7212) 56 52 63',
    },
    {
      key: 'consultativeDiagnostic',
      title: t('clinics.main.departments.consultativeDiagnostic.title'),
      description: t('clinics.main.departments.consultativeDiagnostic.description'),
      phone: '+7 (7212) 56 53 10',
    },
    {
      key: 'clinicoBiochemical',
      title: t('clinics.main.departments.clinicoBiochemical.title'),
      description: t('clinics.main.departments.clinicoBiochemical.description'),
      phone: '+7 (7212) 56 52 63',
    },
    {
      key: 'physiotherapy',
      title: t('clinics.main.departments.physiotherapy.title'),
      description: t('clinics.main.departments.physiotherapy.description'),
      phone: '+7 (7212) 56 53 10',
    },
    {
      key: 'fitnessMassage',
      title: t('clinics.main.departments.fitnessMassage.title'),
      description: t('clinics.main.departments.fitnessMassage.description'),
      phone: '+7 (7212) 56 52 63',
    },
    {
      key: 'xray',
      title: t('clinics.main.departments.xray.title'),
      description: t('clinics.main.departments.xray.description'),
      phone: '+7 (7212) 56 53 10',
    },
    {
      key: 'functionalDiagnosis',
      title: t('clinics.main.departments.functionalDiagnosis.title'),
      description: t('clinics.main.departments.functionalDiagnosis.description'),
      phone: '+7 (7212) 56 52 63',
    },
    {
      key: 'allergology',
      title: t('clinics.main.departments.allergology.title'),
      description: t('clinics.main.departments.allergology.description'),
      phone: '+7 (7212) 56 53 10',
    },
    {
      key: 'dayHospital',
      title: t('clinics.main.departments.dayHospital.title'),
      description: t('clinics.main.departments.dayHospital.description'),
      phone: '+7 (7212) 56 52 63',
    },
  ]);
  
  // Данные для филиалов
  const branches = computed(() => ({
    east: {
      title: t('clinics.main.branches.east.title'),
      address: t('clinics.main.branches.east.address'),
      phone: '+7 (7232) 26 74 00',
      workingHours: t('clinics.main.branches.east.workingHours'),
    },
    south: {
      title: t('clinics.main.branches.south.title'),
      address: t('clinics.main.branches.south.address'),
      phone: '+7 (7252) 53 00 00',
      workingHours: t('clinics.main.branches.south.workingHours'),
    },
    west: {
      title: t('clinics.main.branches.west.title'),
      address: t('clinics.main.branches.west.address'),
      phone: '+7 (7132) 54 00 00',
      workingHours: t('clinics.main.branches.west.workingHours'),
    },
  }));
  </script>
  
  <style scoped>
  /* Общие стили */
  section {
    transition: background-color 0.3s ease;
  }
  
  h2, h3 {
    font-family: 'Montserrat', sans-serif;
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
  