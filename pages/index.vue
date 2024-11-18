<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <HeroSection />
      
    </div>
  </template>
  
  <script setup>
  const { setLocale } = useI18n();
  import HeroSection from '~/components/HeroSection.vue';
  </script>
  