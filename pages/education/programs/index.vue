<!-- pages/education/programs.vue -->
<template>
  <div class="w-full bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-inner">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-extrabold text-blue-900 mb-6">{{ $t('education.programs.header.title') }}</h1>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">{{ $t('education.programs.header.subtitle') }}</p>
      </div>
    </section>

    <!-- Основной контент -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <!-- О нас -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c5.523 0 10 4.477 10 10v6c0 1.105-.895 2-2 2h-4v-4h-4v4H4c-1.105 0-2-.895-2-2v-6C2 6.477 6.477 2 12 2z" />
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('education.programs.about.title') }}</h2>
          </div>
          <p class="text-gray-700 mb-4 whitespace-pre-line">{{ $t('education.programs.about.paragraph1') }}</p>
          <p class="text-gray-700 whitespace-pre-line">{{ $t('education.programs.about.paragraph2') }}</p>
          <div class="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p class="text-gray-700 whitespace-pre-line">{{ $t('education.programs.about.extraInfo') }}</p>
          </div>
        </div>

        <!-- ПОВЫШЕНИЕ КВАЛИФИКАЦИИ -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422M12 14l-6.16-3.422M3 9v6m18-6v6" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('education.programs.additionalEducation.title') }}</h2>
          </div>
          <p class="text-gray-700 mb-4 whitespace-pre-line">{{ $t('education.programs.additionalEducation.description') }}</p>
          <p class="text-gray-700 mb-4 whitespace-pre-line">{{ $t('education.programs.additionalEducation.programsIntroduction') }}</p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{{ $t('education.programs.additionalEducation.programs.qualificationsEnhancement') }}</li>
            <li>{{ $t('education.programs.additionalEducation.programs.certificationCourse') }}</li>
          </ul>
          <div class="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-2">
            <p class="text-gray-700 whitespace-pre-line">{{ $t('education.programs.additionalEducation.extraPoint1') }}</p>
            <p class="text-gray-700 whitespace-pre-line">{{ $t('education.programs.additionalEducation.extraPoint2') }}</p>
          </div>
        </div>

        <!-- Миссия отдела -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .843-3 2 0 1.157 1.343 2 3 2s3-.843 3-2c0-1.157-1.343-2-3-2zM5 16h14M5 8h14"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('education.programs.mission.title') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line">{{ $t('education.programs.mission.description') }}</p>
        </div>

        <!-- Цель и задачи -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 11l3 3L22 4M2 20h.01"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('education.programs.goals.title') }}</h2>
          </div>
          <p class="text-gray-700 mb-4 whitespace-pre-line">{{ $t('education.programs.goals.goal') }}</p>
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">{{ $t('education.programs.goals.objectives.title') }}</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{{ $t('education.programs.goals.objectives.objective1') }}</li>
            <li>{{ $t('education.programs.goals.objectives.objective2') }}</li>
          </ul>
        </div>

        <!-- Дополнительное образование по медицинским и фармацевтическим специальностям -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 11h16M4 15h16"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('education.programs.programDefinition.title') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line">{{ $t('education.programs.programDefinition.description') }}</p>
        </div>

        <!-- Формы дополнительного образования -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5 5-5m6 10l5-5-5-5"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('education.programs.educationTypes.title') }}</h2>
          </div>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{{ $t('education.programs.educationTypes.types.qualificationEnhancement') }}</li>
            <li>{{ $t('education.programs.educationTypes.types.certificationCourse') }}</li>
          </ul>
        </div>

        <!-- Дополнительный текст о предложениях и условиях обучения -->
        <div class="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <div class="flex items-center space-x-4 mb-4 border-b border-gray-300 pb-4">
            <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m0 0L5 6m3-3l3 3M16 17v4m0 0l3-3m-3 3l-3-3M4 9l16 6m0 0l-8 4m8-4L12 9"/>
            </svg>
            <h2 class="text-3xl font-bold text-blue-800">{{ $t('education.programs.coursesTitle') }}</h2>
          </div>
          <p class="text-gray-700 whitespace-pre-line mb-4">{{ $t('education.programs.coursesIntro') }}</p>
          <p class="text-gray-700 whitespace-pre-line mb-4">{{ $t('education.programs.coursesList') }}</p>
          <p class="text-gray-700 whitespace-pre-line mb-4">{{ $t('education.programs.coursesFormat') }}</p>
          <p class="text-gray-700 whitespace-pre-line mb-4">{{ $t('education.programs.coursesStaff') }}</p>
          <p class="text-gray-700 whitespace-pre-line mb-4">{{ $t('education.programs.clinicalBase') }}</p>
          <p class="text-gray-700 whitespace-pre-line mb-4">{{ $t('education.programs.hygieneBase') }}</p>
          <p class="text-gray-700 whitespace-pre-line mb-4">{{ $t('education.programs.conditions') }}</p>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Дополнительная логика не нужна
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
