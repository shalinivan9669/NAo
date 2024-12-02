<!-- pages/index.vue -->
<template>
  <div class="w-full">
    <!-- Hero Секция -->
    <section class="w-full">
      <Hero />
    </section>

    <!-- О нас -->
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('home.about.title') }}</h2>
          <p class="text-lg text-gray-700">{{ $t('home.about.subtitle') }}</p>
        </div>
        <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <!-- Здесь можно добавить изображение при необходимости -->
          <div class="w-full">
            <p class="text-gray-700 mb-4">{{ $t('home.about.paragraph1') }}</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>{{ $t('home.about.listItem1') }}</li>
              <li>{{ $t('home.about.listItem2') }}</li>
              <li>{{ $t('home.about.listItem3') }}</li>
              <li>{{ $t('home.about.listItem4') }}</li>
            </ul>
            <p class="text-gray-700">{{ $t('home.about.paragraph2') }}</p>
            <ol class="list-decimal list-inside text-gray-700 space-y-2 mt-4">
              <li>{{ $t('home.about.orderedItem1') }}</li>
              <li>{{ $t('home.about.orderedItem2') }}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Основные приоритетные направления -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-blue-800 mb-6 text-center">{{ $t('home.priorityDirections.title') }}</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>{{ $t('home.priorityDirections.item1') }}</li>
          <li>{{ $t('home.priorityDirections.item2') }}</li>
          <li>{{ $t('home.priorityDirections.item3') }}</li>
        </ul>
      </div>
    </section>

    <!-- Основные направления работы -->
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-blue-800 mb-6 text-center">{{ $t('home.mainActivities.title') }}</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>{{ $t('home.mainActivities.item1') }}</li>
          <li>{{ $t('home.mainActivities.item2') }}</li>
          <li>{{ $t('home.mainActivities.item3') }}</li>
          <li>{{ $t('home.mainActivities.item4') }}</li>
          <li>{{ $t('home.mainActivities.item5') }}</li>
          <li>{{ $t('home.mainActivities.item6') }}</li>
        </ul>
      </div>
    </section>

    <!-- Виды медицинских осмотров -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-blue-800 mb-6 text-center">{{ $t('home.medicalExaminations.title') }}</h2>
        <h3 class="text-2xl font-semibold text-blue-700 mb-4">{{ $t('home.medicalExaminations.preliminary.title') }}</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>{{ $t('home.medicalExaminations.preliminary.item1') }}</li>
          <li>{{ $t('home.medicalExaminations.preliminary.item2') }}</li>
        </ul>
        <h3 class="text-2xl font-semibold text-blue-700 mt-6 mb-4">{{ $t('home.medicalExaminations.periodic.title') }}</h3>
        <ul class="list-disc list-inside text-gray-700 space-y-2">
          <li>{{ $t('home.medicalExaminations.periodic.item1') }}</li>
          <li>{{ $t('home.medicalExaminations.periodic.item2') }}</li>
        </ul>
      </div>
    </section>

    <!-- Администрация Клиники -->
    <section class="bg-white py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-blue-800 mb-6 text-center">{{ $t('home.clinicAdministration.title') }}</h2>
        <div class="space-y-6">
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ $t('home.clinicAdministration.mainPathologist.title') }}</h3>
            <p class="text-gray-700 mb-1">{{ $t('home.clinicAdministration.mainPathologist.name') }}</p>
            <p class="text-gray-700">{{ $t('home.clinicAdministration.phone') }}: <a href="tel:+77212503930" class="text-blue-600 hover:underline">8 (7212) 50-39-30</a> {{ $t('home.clinicAdministration.extension') }}1492</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ $t('home.clinicAdministration.deputyDirector.title') }}</h3>
            <p class="text-gray-700 mb-1">{{ $t('home.clinicAdministration.deputyDirector.name') }}</p>
            <p class="text-gray-700">{{ $t('home.clinicAdministration.phone') }}: <a href="tel:+77212500645" class="text-blue-600 hover:underline">8 (7212) 50-06-45</a> {{ $t('home.clinicAdministration.extension') }}1545</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ $t('home.clinicAdministration.consultativeDepartmentHead.title') }}</h3>
            <p class="text-gray-700 mb-1">{{ $t('home.clinicAdministration.consultativeDepartmentHead.name') }}</p>
            <p class="text-gray-700">{{ $t('home.clinicAdministration.phone') }}: <a href="tel:+77212500645" class="text-blue-600 hover:underline">8 (7212) 50-06-45</a> {{ $t('home.clinicAdministration.extension') }}1755</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ $t('home.clinicAdministration.neurologyDepartmentHead.title') }}</h3>
            <p class="text-gray-700 mb-1">{{ $t('home.clinicAdministration.neurologyDepartmentHead.name') }}</p>
            <p class="text-gray-700">{{ $t('home.clinicAdministration.phone') }}: <a href="tel:+77212500645" class="text-blue-600 hover:underline">8 (7212) 50-06-45</a> {{ $t('home.clinicAdministration.extension') }}1543</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ $t('home.clinicAdministration.therapyDepartmentHead.title') }}</h3>
            <p class="text-gray-700 mb-1">{{ $t('home.clinicAdministration.therapyDepartmentHead.name') }}</p>
            <p class="text-gray-700">{{ $t('home.clinicAdministration.phone') }}: <a href="tel:+77212500645" class="text-blue-600 hover:underline">8 (7212) 50-06-45</a> {{ $t('home.clinicAdministration.extension') }}1542</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Контактная Информация -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-blue-800 mb-6 text-center">{{ $t('home.contactInfo.title') }}</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          {{ $t('home.contactInfo.address') }}<br>
          {{ $t('home.contactInfo.stop') }}<br>
          {{ $t('home.contactInfo.phone') }}: <a href="tel:+77212562111" class="text-blue-600 hover:underline">8 (7212) 56-21-11</a>, <a href="tel:+77212500645" class="text-blue-600 hover:underline">8 (7212) 50-06-45</a>
        </p>
      </div>
    </section>

    <!-- Социальные Сети -->
    <!-- Вы можете оставить существующий раздел социальных сетей, если это необходимо -->
  </div>
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue';
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
