<template>
  <div class="w-full bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-inner">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-extrabold text-blue-900 mb-6">{{ $t('page.title') }}</h1>
        <p class="text-gray-700 whitespace-pre-line mb-8 leading-relaxed max-w-3xl mx-auto">{{ $t('page.intro') }}</p>
      </div>
    </section>

    <!-- Контейнер для контента -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <!-- Миссия -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <!-- Icon (пример) -->
            <svg class="h-8 w-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 2l.01 20M9 2a1 1 0 011-1h9a1 1 0 011 1v12a1 1 0 01-1 1h-9l-.01-20zm0 20l5-5"></path>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.missionTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.mission') }}</p>
        </div>

        <!-- Видение -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.visionTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.vision') }}</p>
        </div>

        <!-- Ценности и этические принципы -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.317a1 1 0 00.95.69h4.533c.969 0 1.371 1.24.588 1.81l-3.668 2.665a1 1 0 00-.364 1.118l1.4 4.317c.3.921-.757 1.688-1.54 1.118l-3.668-2.665a1 1 0 00-1.176 0l-3.668 2.665c-.782.57-1.84-.197-1.54-1.118l1.4-4.317a1 1 0 00-.364-1.118L2.98 9.744c-.783-.57-.38-1.81.588-1.81h4.533a1 1 0 00.95-.69l1.4-4.317z"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.valuesTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.values') }}</p>
        </div>

        <!-- Цель -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 11l3 3L22 4M2 20h.01"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.goalTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.goal') }}</p>
        </div>

        <!-- Предмет деятельности -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 11h16M4 15h16M4 19h16"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.subjectTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.subject') }}</p>
        </div>

        <!-- Виды деятельности -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .843-3 2 0 1.157 1.343 2 3 2s3-.843 3-2c0-1.157-1.343-2-3-2zM5 16h14M5 8h14"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.activitiesTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.activities') }}</p>
        </div>

        <!-- Функции -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8h4l2 2H3z M7 8v2h2V8zm4 0v2h10V8zM3 12h4l2 2H3z m4 0v2h2v-2zm4 0v2h10v-2zM3 16h4l2 2H3z m4 0v2h2v-2zm4 0v2h10v-2z"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.functionsTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.functions') }}</p>
        </div>

        <!-- Клиника -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 2C7.58 2 4 5.58 4 10v10c0 1.1.9 2 2 2h4v-6h4v6h4c1.1 0 2-.9 2-2V10c0-4.42-3.58-8-8-8z"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('page.clinicTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.clinicIntro') }}</p>
        </div>

        <!-- Отделение профессиональной терапии -->
        <div class="bg-white p-8 rounded-lg hover:shadow-lg transition border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-blue-700 mb-4">{{ $t('page.proTherapyDeptTitle') }}</h3>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.proTherapyDept') }}</p>
        </div>

        <!-- Отделение профессиональной неврологии -->
        <div class="bg-white p-8 rounded-lg hover:shadow-lg transition border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-blue-700 mb-4">{{ $t('page.proNeurologyDeptTitle') }}</h3>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.proNeurologyDept') }}</p>
        </div>

        <!-- Консультативно-диагностическое отделение -->
        <div class="bg-white p-8 rounded-lg hover:shadow-lg transition border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-blue-700 mb-4">{{ $t('page.consultDiagDeptTitle') }}</h3>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.consultDiagDept') }}</p>
        </div>

        <!-- Блок рентген-функциональной диагностики -->
        <div class="bg-white p-8 rounded-lg hover:shadow-lg transition border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-blue-700 mb-4">{{ $t('page.blockDiagnosticsTitle') }}</h3>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.blockDiagnostics') }}</p>
        </div>

        <!-- Лабораторная диагностика -->
        <div class="bg-white p-8 rounded-lg hover:shadow-lg transition border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-blue-700 mb-4">{{ $t('page.laboratoryBlockTitle') }}</h3>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.laboratoryBlock') }}</p>
        </div>

        <!-- Восстановительное лечение и реабилитация -->
        <div class="bg-white p-8 rounded-lg hover:shadow-lg transition border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-blue-700 mb-4">{{ $t('page.rehabBlockTitle') }}</h3>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.rehabBlock') }}</p>
        </div>

        <!-- Медицинский осмотр -->
        <div class="bg-white p-8 rounded-lg hover:shadow-lg transition border-l-4 border-blue-500">
          <h3 class="text-2xl font-bold text-blue-700 mb-4">{{ $t('page.medExaminationTitle') }}</h3>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">{{ $t('page.medExamination') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Логика не требуется. Ключи и текст остаются прежними.
</script>

<style scoped>
section {
  transition: background-color 0.3s ease;
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
}

p {
  color: #555555;
  line-height: 1.8;
  white-space: pre-line;
}

a:hover {
  text-decoration: underline;
}

button:hover {
  cursor: pointer;
}
</style>
