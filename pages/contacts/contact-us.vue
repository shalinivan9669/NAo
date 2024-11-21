<!-- pages/contacts.vue -->
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
          <!-- Иконки для адреса, телефона и часов работы -->
          <div class="mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
          </div>
          <div>
            <p class="text-gray-700"><strong>{{ $t('contacts.headOffice.address') }}:</strong> {{ $t('contacts.headOffice.addressValue') }}</p>
          </div>
        </div>
        <div class="flex items-start space-x-4 mt-4">
          <div class="mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6.5a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 6.5v11A1.5 1.5 0 0 0 4.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-11zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
            </svg>
          </div>
          <div>
            <p class="text-gray-700"><strong>{{ $t('contacts.headOffice.registration') }}:</strong> <a href="tel:+77212565263" class="text-blue-600 hover:underline">+7 (7212) 56 52 63</a></p>
            <p class="text-gray-700"><strong>{{ $t('contacts.headOffice.reception') }}:</strong> <a href="tel:+7721255310" class="text-blue-600 hover:underline">+7 (7212) 56 53 10</a></p>
          </div>
        </div>
        <div class="flex items-start space-x-4 mt-4">
          <div class="mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-6a6 6 0 0 1 5.657 2.343A6 6 0 0 1 12 4a6 6 0 0 1-5.657-2.343A6 6 0 0 1 12 2z"/>
            </svg>
          </div>
          <div>
            <p class="text-gray-700"><strong>{{ $t('contacts.headOffice.workingHours') }}:</strong> {{ $t('contacts.headOffice.workingHoursValue') }}</p>
          </div>
        </div>
  
        <!-- Добавьте иконку карты или другую графику, если необходимо -->
      </div>
  
      <!-- Филиалы -->
      <div class="max-w-6xl mx-auto mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('contacts.branches.title') }}</h2>
        <div class="space-y-8">
          <!-- Восточно-Казахстанский филиал -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.branches.east.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.branches.east.address') }}:</strong> {{ $t('contacts.branches.east.addressValue') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.branches.east.phone') }}:</strong> <a href="tel:+7723267400" class="text-blue-600 hover:underline">+7 (7232) 26 74 00</a></p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.branches.east.workingHours') }}:</strong> {{ $t('contacts.branches.east.workingHoursValue') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Южно-Казахстанский филиал -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.branches.south.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.branches.south.address') }}:</strong> {{ $t('contacts.branches.south.addressValue') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.branches.south.phone') }}:</strong> <a href="tel:+77252530000" class="text-blue-600 hover:underline">+7 (7252) 53 00 00</a></p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.branches.south.workingHours') }}:</strong> {{ $t('contacts.branches.south.workingHoursValue') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Западно-Казахстанский филиал -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.branches.west.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.branches.west.address') }}:</strong> {{ $t('contacts.branches.west.addressValue') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.branches.west.phone') }}:</strong> <a href="tel:+77132540000" class="text-blue-600 hover:underline">+7 (7132) 54 00 00</a></p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.branches.west.workingHours') }}:</strong> {{ $t('contacts.branches.west.workingHoursValue') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Отделения -->
      <div class="max-w-6xl mx-auto mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('contacts.departments.title') }}</h2>
        <div class="space-y-8">
          <!-- Отделение профессиональной терапии -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.professionalTherapy.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.professionalTherapy.leader') }}:</strong> {{ $t('contacts.departments.professionalTherapy.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.professionalTherapy.phone') }}:</strong> <a href="tel:+77212565263" class="text-blue-600 hover:underline">+7 (7212) 56 52 63</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.professionalTherapy.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Консультативно-диагностическое отделение -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.consultativeDiagnostic.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.consultativeDiagnostic.leader') }}:</strong> {{ $t('contacts.departments.consultativeDiagnostic.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.consultativeDiagnostic.phone') }}:</strong> <a href="tel:+7721255310" class="text-blue-600 hover:underline">+7 (7212) 56 53 10</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.consultativeDiagnostic.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Клинико-биохимическая лаборатория -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.clinicoBiochemical.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.clinicoBiochemical.leader') }}:</strong> {{ $t('contacts.departments.clinicoBiochemical.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.clinicoBiochemical.phone') }}:</strong> <a href="tel:+77212565263" class="text-blue-600 hover:underline">+7 (7212) 56 52 63</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.clinicoBiochemical.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Физиотерапевтическое отделение -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.physiotherapy.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.physiotherapy.leader') }}:</strong> {{ $t('contacts.departments.physiotherapy.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.physiotherapy.phone') }}:</strong> <a href="tel:+7721255310" class="text-blue-600 hover:underline">+7 (7212) 56 53 10</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.physiotherapy.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Кабинеты лечебной физкультуры, массажа и гидромассажа -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.fitnessMassage.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.fitnessMassage.leader') }}:</strong> {{ $t('contacts.departments.fitnessMassage.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.fitnessMassage.phone') }}:</strong> <a href="tel:+77212565263" class="text-blue-600 hover:underline">+7 (7212) 56 52 63</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.fitnessMassage.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Рентген-кабинет -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.xray.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 4h-6.586l-2-2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-2 16H5V6h14v14z"/>
                  <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 6c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.xray.leader') }}:</strong> {{ $t('contacts.departments.xray.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.xray.phone') }}:</strong> <a href="tel:+7721255310" class="text-blue-600 hover:underline">+7 (7212) 56 53 10</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.xray.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Отделение функциональной диагностики -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.functionalDiagnosis.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.functionalDiagnosis.leader') }}:</strong> {{ $t('contacts.departments.functionalDiagnosis.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.functionalDiagnosis.phone') }}:</strong> <a href="tel:+77212565263" class="text-blue-600 hover:underline">+7 (7212) 56 52 63</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.functionalDiagnosis.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Аллергологический центр -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.allergology.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.allergology.leader') }}:</strong> {{ $t('contacts.departments.allergology.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.allergology.phone') }}:</strong> <a href="tel:+7721255310" class="text-blue-600 hover:underline">+7 (7212) 56 53 10</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.allergology.description') }}</p>
              </div>
            </div>
          </div>
  
          <!-- Дневной стационар -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-gray-700 mb-2">{{ $t('contacts.departments.dayHospital.title') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <p class="text-gray-700"><strong>{{ $t('contacts.departments.dayHospital.leader') }}:</strong> {{ $t('contacts.departments.dayHospital.leaderName') }}</p>
                <p class="text-gray-700 mt-2"><strong>{{ $t('contacts.departments.dayHospital.phone') }}:</strong> <a href="tel:+77212565263" class="text-blue-600 hover:underline">+7 (7212) 56 52 63</a></p>
                <p class="text-gray-700 mt-2">{{ $t('contacts.departments.dayHospital.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Социальные Сети -->
       
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // Инициализация локализации
  const { t } = useI18n();
  
  // Данные для филиалов и отделений
  const branches = {
    east: {
      title: 'Восточно-Казахстанский филиал (г. Усть-Каменогорск)',
      address: 'Адрес',
      addressValue: 'г. Усть-Каменогорск, ул. Серикбаева, д. 47',
      phone: 'Телефон',
      phoneValue: '+7 (7232) 26 74 00',
      workingHours: 'Часы работы',
      workingHoursValue: 'пн-пт: 08:30-17:30',
      latitude: 51.7649, // Пример координат
      longitude: 107.4840,
    },
    south: {
      title: 'Южно-Казахстанский филиал (г. Шымкент)',
      address: 'Адрес',
      addressValue: 'г. Шымкент, ул. Тауке хана, д. 162',
      phone: 'Телефон',
      phoneValue: '+7 (7252) 53 00 00',
      workingHours: 'Часы работы',
      workingHoursValue: 'пн-пт: 09:00-18:00',
      latitude: 42.3417, // Пример координат
      longitude: 69.5881,
    },
    west: {
      title: 'Западно-Казахстанский филиал (г. Актобе)',
      address: 'Адрес',
      addressValue: 'г. Актобе, ул. Марат Оспанова, д. 68',
      phone: 'Телефон',
      phoneValue: '+7 (7132) 54 00 00',
      workingHours: 'Часы работы',
      workingHoursValue: 'пн-пт: 09:00-18:00',
      latitude: 50.2830, // Пример координат
      longitude: 57.1678,
    },
  };
  
  const departments = [
    {
      key: 'professionalTherapy',
      title: 'Отделение профессиональной терапии',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 52 63',
      description: 'Специализируется на диагностике и лечении заболеваний, связанных с профессиональной деятельностью.',
    },
    {
      key: 'consultativeDiagnostic',
      title: 'Консультативно-диагностическое отделение',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 53 10',
      description: 'Предоставляет консультации узких специалистов и проводит необходимые диагностические исследования.',
    },
    {
      key: 'clinicoBiochemical',
      title: 'Клинико-биохимическая лаборатория',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 52 63',
      description: 'Выполняет широкий спектр лабораторных анализов для оценки состояния здоровья пациентов.',
    },
    {
      key: 'physiotherapy',
      title: 'Физиотерапевтическое отделение',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 53 10',
      description: 'Предлагает различные методы физиотерапии для реабилитации и лечения пациентов.',
    },
    {
      key: 'massageHydromassage',
      title: 'Кабинеты лечебной физкультуры, массажа и гидромассажа',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 52 63',
      description: 'Направлены на восстановление и поддержание физического здоровья пациентов.',
    },
    {
      key: 'xray',
      title: 'Рентген-кабинет',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 53 10',
      description: 'Оснащен современным оборудованием для проведения рентгенологических исследований.',
    },
    {
      key: 'functionalDiagnosis',
      title: 'Отделение функциональной диагностики',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 52 63',
      description: 'Проводит исследования функционального состояния различных систем организма.',
    },
    {
      key: 'allergology',
      title: 'Аллергологический центр',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 53 10',
      description: 'Занимается диагностикой и лечением аллергических заболеваний, связанных с профессиональной деятельностью.',
    },
    {
      key: 'dayHospital',
      title: 'Дневной стационар',
      leader: 'Должность и имя руководителя уточняются.',
      phone: '+7 (7212) 56 52 63',
      description: 'Предоставляет возможность прохождения лечения без необходимости круглосуточного пребывания в стационаре.',
    },
  ];
  </script>
  
  <style scoped>
  /* Дополнительные стили, если необходимо */
  a:hover {
    text-decoration: underline;
  }
  </style>
  