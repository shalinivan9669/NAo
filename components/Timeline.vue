<template>
    <div class="relative wrap overflow-hidden p-4 md:p-10 h-full">
      <!-- Линия таймлайна -->
      <div class="absolute border-2 border-[#00ADC3] h-full left-4 md:left-1/2 transform md:-translate-x-1/2"></div>
  
      <!-- События -->
      <div
        v-for="(event, index) in events"
        :key="index"
        :class="[
          'mb-8 flex items-center w-full flex-col md:flex-row justify-between',
          index % 2 === 0 ? 'md:flex-row-reverse' : ''
        ]"
        data-aos="fade-up"
      >
        <!-- Пустой блок для выравнивания на десктопе, скрыт на мобильных -->
        <div class="hidden md:block w-5/12"></div>
  
        <!-- Круг и линия -->
        <div class="z-20 flex items-center justify-center bg-[#FFED29] shadow-xl w-8 h-8 rounded-full relative">
          <h1 class="text-black font-semibold text-lg">{{ index + 1 }}</h1>
        </div>
  
        <!-- Контент -->
        <div class="mt-4 md:mt-0 md:w-5/12 bg-[#00ADC3] rounded-lg shadow-xl px-6 py-4 text-white timeline-content w-full md:w-5/12">
          <h3 class="mb-3 font-bold text-xl">{{ event.date }}</h3>
          <h4 class="mb-2 font-semibold text-lg">{{ event.title }}</h4>
          <p class="text-sm leading-snug tracking-wide text-opacity-100">
            {{ event.description }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  const props = defineProps({
    events: {
      type: Array,
      required: true,
      // Можно добавить более подробную структуру, если требуется
      // Например:
      // validator: (events) => events.every(event => 'date' in event && 'title' in event && 'description' in event)
    },
  });
  
  onMounted(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  </script>
  
  <style scoped>
  .wrap {
    position: relative;
  }
  
  .timeline-content {
    transition: all 0.5s ease-in-out;
  }
  
  /* Дополнительные стили для улучшения отображения на мобильных */
  @media (max-width: 767px) {
    .wrap {
      padding-left: 2rem; /* Дополнительный отступ слева для линии */
    }
  
    .timeline-content {
      /* Можно добавить адаптивные стили, если необходимо */
    }
  }
  </style>
  