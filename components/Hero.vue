<!-- components/Hero.vue -->
<template>
    <section class="relative w-full h-full md:h-[90vh] overflow-hidden">
      <!-- Фоновое Видео -->
      <video
        class="absolute top-0 left-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster=" "
      >
        <source src=" " />
        <source src="/videos/background.mov" type="video/mp4" />
        Ваш браузер не поддерживает воспроизведение видео.
      </video>
  
      <!-- Наложенный Контент -->
      <div class="relative z-10 flex items-center justify-start h-full px-6 md:px-12 lg:px-24">
        <div class="max-w-xl">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            {{ $t('hero.title') }}
          </h1>
          <!-- Дополнительный Контент (подзаголовок, кнопка и т.д.) -->
          <p class="text-lg md:text-xl lg:text-2xl text-white mb-6">
            {{ $t('hero.subtitle') }}
          </p>
        
        </div>
      </div>
  
      <!-- Наложение для затемнения видео (опционально) -->
      <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  </script>
  
  <style scoped>
  /* Дополнительные стили, если необходимо */
  
  /* Обеспечение плавного перехода при загрузке видео */
  video {
    transition: opacity 1s ease-in-out;
  }
  
  video:not([autoplay]) {
    opacity: 0;
  }
  
  video[autoplay] {
    opacity: 1;
  }
  </style>
  