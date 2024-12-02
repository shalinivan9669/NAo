<!-- pages/contacts/contact-us.vue -->
<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Заголовок страницы -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-blue-800">{{ $t('contacts.title') }}</h1>
      <p class="mt-4 text-lg text-gray-600">{{ $t('contacts.subtitle') }}</p>
    </div>

    <!-- Головной офис -->
    <div class="max-w-6xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('contacts.headOffice.title') }}</h2>
      <div class="flex items-start space-x-4">
        <!-- Иконка адреса -->
        <div class="mt-1">
          <!-- SVG иконка адреса -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>
        </div>
        <div>
          <p class="text-gray-700">
            <strong>{{ $t('contacts.headOffice.address') }}:</strong> {{ $t('contacts.headOffice.addressValue') }}
          </p>
        </div>
      </div>
      <div class="flex items-start space-x-4 mt-4">
        <!-- Иконка телефона -->
        <div class="mt-1">
          <!-- SVG иконка телефона -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 4.27v4.33c0 .36.19.69.5.86l3.27 1.91a1 1 0 0 0 1 0l3.27-1.91a1 1 0 0 0 .5-.86V4.27a1 1 0 0 0-.5-.86L7.77 1.5a1 1 0 0 0-1 0L3.5 3.41a1 1 0 0 0-.5.86z"/>
            <path d="M3 14.27v4.33c0 .36.19.69.5.86l3.27 1.91a1 1 0 0 0 1 0l3.27-1.91a1 1 0 0 0 .5-.86v-4.33a1 1 0 0 0-.5-.86l-3.27-1.91a1 1 0 0 0-1 0l-3.27 1.91a1 1 0 0 0-.5.86z"/>
          </svg>
        </div>
        <div>
          <p class="text-gray-700">
            <strong>{{ $t('contacts.headOffice.registration') }}:</strong>
            <a href="tel:+77212565263" class="text-blue-600 hover:underline">+7 (7212) 56 52 63</a>
          </p>
          <p class="text-gray-700">
            <strong>{{ $t('contacts.headOffice.reception') }}:</strong>
            <a href="tel:+77212565310" class="text-blue-600 hover:underline">+7 (7212) 56 53 10</a>
          </p>
        </div>
      </div>
      <div class="flex items-start space-x-4 mt-4">
        <!-- Иконка часов работы -->
        <div class="mt-1">
          <!-- SVG иконка часов работы -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0-6a6 6 0 0 1 5.657 2.343A6 6 0 0 1 12 4a6 6 0 0 1-5.657-2.343A6 6 0 0 1 12 2z"/>
          </svg>
        </div>
        <div>
          <p class="text-gray-700">
            <strong>{{ $t('contacts.headOffice.workingHours') }}:</strong> {{ $t('contacts.headOffice.workingHoursValue') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Филиалы -->
    <div class="max-w-6xl mx-auto mb-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('contacts.branches.title') }}</h2>
      <div class="space-y-8">
        <!-- Филиалы динамически выводятся из данных -->
        <div
          v-for="branch in branches"
          :key="branch.key"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ branch.title }}</h3>
          <div class="flex items-start space-x-4">
            <div class="mt-1">
              <!-- SVG иконка адреса -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
            </div>
            <div>
              <p class="text-gray-700">
                <strong>{{ $t('contacts.branches.address') }}:</strong> {{ branch.address }}
              </p>
              <p class="text-gray-700 mt-2">
                <strong>{{ $t('contacts.branches.phone') }}:</strong>
                <a :href="`tel:${branch.phoneNumber}`" class="text-blue-600 hover:underline">{{ branch.phone }}</a>
              </p>
              <p class="text-gray-700 mt-2">
                <strong>{{ $t('contacts.branches.workingHours') }}:</strong> {{ branch.workingHours }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Отделения -->
    <div class="max-w-6xl mx-auto mb-12">
      <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('contacts.departments.title') }}</h2>
      <div class="space-y-8">
        <!-- Отделения динамически выводятся из данных -->
        <div
          v-for="department in departments"
          :key="department.key"
          class="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ department.title }}</h3>
          <div class="flex items-start space-x-4">
            <div class="mt-1">
              <!-- SVG иконка отделения -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 16H6V9h12v11z"/>
                <path d="M8 11h2v2H8zm0 4h2v2H8zm4-4h2v2h-2zm0 4h2v2h-2z"/>
              </svg>
            </div>
            <div>
              <p class="text-gray-700">
                <strong>{{ $t('contacts.departments.leader') }}:</strong> {{ department.leader }}
              </p>
              <p class="text-gray-700 mt-2">
                <strong>{{ $t('contacts.departments.phone') }}:</strong>
                <a :href="`tel:${department.phoneNumber}`" class="text-blue-600 hover:underline">{{ department.phone }}</a>
              </p>
              <p class="text-gray-700 mt-2">{{ department.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Социальные Сети -->
    <!-- Если необходимо, добавьте раздел социальных сетей -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Инициализация локализации
const { t } = useI18n();

// Данные для филиалов
const branches = computed(() => [
  {
    key: 'east',
    title: t('contacts.branches.east.title'),
    address: t('contacts.branches.east.addressValue'),
    phone: t('contacts.branches.east.phoneValue'),
    phoneNumber: '+7723267400',
    workingHours: t('contacts.branches.east.workingHoursValue'),
  },
  {
    key: 'south',
    title: t('contacts.branches.south.title'),
    address: t('contacts.branches.south.addressValue'),
    phone: t('contacts.branches.south.phoneValue'),
    phoneNumber: '+77252530000',
    workingHours: t('contacts.branches.south.workingHoursValue'),
  },
  {
    key: 'west',
    title: t('contacts.branches.west.title'),
    address: t('contacts.branches.west.addressValue'),
    phone: t('contacts.branches.west.phoneValue'),
    phoneNumber: '+77132540000',
    workingHours: t('contacts.branches.west.workingHoursValue'),
  },
]);

// Данные для отделений
const departments = computed(() => [
  {
    key: 'professionalTherapy',
    title: t('contacts.departments.professionalTherapy.title'),
    leader: t('contacts.departments.professionalTherapy.leaderName'),
    phone: t('contacts.departments.professionalTherapy.phoneValue'),
    phoneNumber: '+77212565263',
    description: t('contacts.departments.professionalTherapy.description'),
  },
  {
    key: 'consultativeDiagnostic',
    title: t('contacts.departments.consultativeDiagnostic.title'),
    leader: t('contacts.departments.consultativeDiagnostic.leaderName'),
    phone: t('contacts.departments.consultativeDiagnostic.phoneValue'),
    phoneNumber: '+77212565310',
    description: t('contacts.departments.consultativeDiagnostic.description'),
  },
  {
    key: 'clinicoBiochemical',
    title: t('contacts.departments.clinicoBiochemical.title'),
    leader: t('contacts.departments.clinicoBiochemical.leaderName'),
    phone: t('contacts.departments.clinicoBiochemical.phoneValue'),
    phoneNumber: '+77212565263',
    description: t('contacts.departments.clinicoBiochemical.description'),
  },
  {
    key: 'physiotherapy',
    title: t('contacts.departments.physiotherapy.title'),
    leader: t('contacts.departments.physiotherapy.leaderName'),
    phone: t('contacts.departments.physiotherapy.phoneValue'),
    phoneNumber: '+77212565310',
    description: t('contacts.departments.physiotherapy.description'),
  },
  {
    key: 'fitnessMassage',
    title: t('contacts.departments.fitnessMassage.title'),
    leader: t('contacts.departments.fitnessMassage.leaderName'),
    phone: t('contacts.departments.fitnessMassage.phoneValue'),
    phoneNumber: '+77212565263',
    description: t('contacts.departments.fitnessMassage.description'),
  },
  {
    key: 'xray',
    title: t('contacts.departments.xray.title'),
    leader: t('contacts.departments.xray.leaderName'),
    phone: t('contacts.departments.xray.phoneValue'),
    phoneNumber: '+77212565310',
    description: t('contacts.departments.xray.description'),
  },
  {
    key: 'functionalDiagnosis',
    title: t('contacts.departments.functionalDiagnosis.title'),
    leader: t('contacts.departments.functionalDiagnosis.leaderName'),
    phone: t('contacts.departments.functionalDiagnosis.phoneValue'),
    phoneNumber: '+77212565263',
    description: t('contacts.departments.functionalDiagnosis.description'),
  },
  {
    key: 'allergology',
    title: t('contacts.departments.allergology.title'),
    leader: t('contacts.departments.allergology.leaderName'),
    phone: t('contacts.departments.allergology.phoneValue'),
    phoneNumber: '+77212565310',
    description: t('contacts.departments.allergology.description'),
  },
  {
    key: 'dayHospital',
    title: t('contacts.departments.dayHospital.title'),
    leader: t('contacts.departments.dayHospital.leaderName'),
    phone: t('contacts.departments.dayHospital.phoneValue'),
    phoneNumber: '+77212565263',
    description: t('contacts.departments.dayHospital.description'),
  },
]);
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
a:hover {
  text-decoration: underline;
}
</style>
