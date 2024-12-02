<!-- pages/education/price.vue -->
<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Header -->
      <header class="bg-blue-800 text-white py-6">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">
            Прайс-лист на услуги обучения
          </h1>
          <p class="mt-2 text-lg">Обучение достойное Вашего доверия!</p>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="container mx-auto py-10 px-4">
        <!-- Price List -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Прайс-лист на платные услуги по обучению</h2>
          <table class="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <tr class="bg-gray-200">
                <th class="px-4 py-2 text-left">№</th>
                <th class="px-4 py-2 text-left">Наименование услуг</th>
                <th class="px-4 py-2 text-left">Ед. изм.</th>
                <th class="px-4 py-2 text-left">Стоимость (тенге)</th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr v-for="(item, index) in priceList" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : ''">
                <td class="border-t px-4 py-2">{{ index + 1 }}</td>
                <td class="border-t px-4 py-2">{{ item.service }}</td>
                <td class="border-t px-4 py-2">{{ item.unit }}</td>
                <td class="border-t px-4 py-2">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </section>
  
        <!-- Additional Information -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Дополнительная информация</h2>
          <p class="text-gray-700 leading-relaxed">
            Сроки проведения сертификационных курсов, циклов повышения квалификации, семинаров, мастер-классов, тренингов, стажировок могут быть изменены в связи с заявками организаций.
          </p>
          <p class="text-gray-700 leading-relaxed mt-4">
            К обучению на сертификационном курсе для межпрофильной специализации допускаются работники с высшим образованием, после резидентуры, согласно приказу №218.
          </p>
        </section>
  
        <!-- Contact Information -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">Контактная информация</h2>
          <p class="text-gray-700 leading-relaxed">
            Мы находимся по адресу:<br>
            г. Караганда, ул. Мустафина, 15<br>
            Телефон: +7 (7212) 56-52-63<br>
            Электронная почта: <a href="mailto:m_otarbaeva@mail.ru" class="text-blue-600 hover:underline">m_otarbaeva@mail.ru</a>, <a href="mailto:aigerabekmur@mail.ru" class="text-blue-600 hover:underline">aigerabekmur@mail.ru</a>
          </p>
        </section>
      </main>
  
      <!-- Footer -->
      <footer class="bg-blue-800 text-white py-4">
        <div class="container mx-auto text-center">
          &copy; 2024 НАО "Национальный центр гигиены труда и профессиональных заболеваний"
        </div>
      </footer>
    </div>
  </template> 
<script setup lang="ts">
import { ref } from 'vue'

const priceList = ref([
  {
    service: 'Сертификационные курсы очная форма обучения (30 кредитов, 900 часов/15 недель)',
    unit: '1 чел.',
    price: '525 000'
  },
  {
    service: 'Циклы повышения квалификации для врачей (2 кредита, 60 часов/1 неделя)',
    unit: '1 чел.',
    price: '35 000'
  },
  {
    service: 'Циклы повышения квалификации для врачей (4 кредита, 120 часов/2 недели)',
    unit: '1 чел.',
    price: '70 000'
  },
  {
    service: 'Циклы повышения квалификации для врачей (6 кредитов, 180 часов/3 недели)',
    unit: '1 чел.',
    price: '105 000'
  },
  {
    service: 'Циклы повышения квалификации для врачей (8 кредитов, 240 часов/4 недели)',
    unit: '1 чел.',
    price: '140 000'
  },
  {
    service: 'Выездные циклы повышения квалификации для врачей (2 кредита, 60 часов/1 неделя)',
    unit: '1 час',
    price: '80 000'
  },
  {
    service: 'Обучающий семинар, мастер-класс на базе НЦГТиПЗ (6 часов/1 день)',
    unit: '1 чел.',
    price: '6 000'
  },
  {
    service: 'Выездной обучающий семинар, мастер-класс (6 часов/1 день)',
    unit: '1 чел.',
    price: '30 000'
  }
])
</script>
