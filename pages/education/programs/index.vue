<!-- pages/education/programs.vue -->
<template>
  <div class="w-full">
    <!-- Заголовок -->
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-blue-800 mb-4">{{ $t('education.programs.header.title') }}</h1>
        <p class="text-lg text-gray-700">{{ $t('education.programs.header.subtitle') }}</p>
      </div>
    </section>

    <!-- Основной контент -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- О нас -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ $t('education.programs.about.title') }}</h2>
          <p class="text-gray-700 mb-4">{{ $t('education.programs.about.paragraph1') }}</p>
          <p class="text-gray-700">{{ $t('education.programs.about.paragraph2') }}</p>
        </div>

        <!-- ПОВЫШЕНИЕ КВАЛИФИКАЦИИ -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ $t('education.programs.additionalEducation.title') }}</h2>
          <p class="text-gray-700 mb-4">{{ $t('education.programs.additionalEducation.description') }}</p>
          <p class="text-gray-700 mb-4">{{ $t('education.programs.additionalEducation.programsIntroduction') }}</p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{{ $t('education.programs.additionalEducation.programs.qualificationsEnhancement') }}</li>
            <li>{{ $t('education.programs.additionalEducation.programs.certificationCourse') }}</li>
          </ul>
        </div>

        <!-- Миссия отдела -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ $t('education.programs.mission.title') }}</h2>
          <p class="text-gray-700">{{ $t('education.programs.mission.description') }}</p>
        </div>

        <!-- Цель и задачи -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ $t('education.programs.goals.title') }}</h2>
          <p class="text-gray-700 mb-4">{{ $t('education.programs.goals.goal') }}</p>
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">{{ $t('education.programs.goals.objectives.title') }}</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{{ $t('education.programs.goals.objectives.objective1') }}</li>
            <li>{{ $t('education.programs.goals.objectives.objective2') }}</li>
          </ul>
        </div>

        <!-- Дополнительное образование по медицинским и фармацевтическим специальностям -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ $t('education.programs.programDefinition.title') }}</h2>
          <p class="text-gray-700">{{ $t('education.programs.programDefinition.description') }}</p>
        </div>

        <!-- Формы дополнительного образования -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-6">{{ $t('education.programs.educationTypes.title') }}</h2>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>{{ $t('education.programs.educationTypes.types.qualificationEnhancement') }}</li>
            <li>{{ $t('education.programs.educationTypes.types.certificationCourse') }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
/* Если есть дополнительные скрипты или логика, добавьте их здесь */
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
