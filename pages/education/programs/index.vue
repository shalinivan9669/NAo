<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Header -->
      <header class="bg-blue-800 text-white py-6">
        <div class="container mx-auto px-4">
          <h1 class="text-3xl font-bold">
            НАО "Национальный центр гигиены труда и профессиональных заболеваний"
          </h1>
          <p class="mt-2 text-lg">Обучение достойное Вашего доверия!</p>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="container mx-auto py-10 px-4">
        <!-- About Section -->
        <section class="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-2xl font-semibold mb-4">О нас</h2>
            <p class="text-gray-700 leading-relaxed">
              НАО "Национальный центр гигиены труда и профессиональных заболеваний" - организация со 100% казахстанским содержанием, на рынке гигиенических, медицинских и экологических услуг работает более 65 лет.
            </p>
          </div>
          <!-- Pie Chart -->
          <div class="mt-8 md:mt-0">
            <h3 class="text-xl font-semibold mb-4 text-center">Распределение услуг</h3>
            <div class="h-32">
              <PieChart v-if="servicesPieChartData" :chart-data="servicesPieChartData" :chart-options="chartOptions" />
            </div>
          </div>
        </section>
  
        <!-- Advantages Section -->
        <section class="mb-12 w-1/2">
          <h2 class="text-2xl font-semibold mb-4">Наши преимущества</h2>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Экспертная организация Министерства здравоохранения Республики Казахстан в сфере гигиены.
            </li>
            <li>
              Специализированная организация в области проведения образовательных сертификационных курсов, повышения квалификации и др.
            </li>
          </ul>
        </section>
  
        <!-- Services Offered -->
        <section class="mb-12 w-1/2">
          <h2 class="text-2xl font-semibold mb-4">Предлагаемые услуги</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Мы предлагаем услуги по проведению сертификационных курсов и курсов повышения квалификации по следующим специальностям:
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Гигиена труда</li>
            <li>Промышленная гигиена</li>
            <li>Радиационная гигиена</li>
            <li>Лабораторное дело в санитарно-гигиенической лаборатории</li>
            <li>Лабораторно-инструментальные методы исследования факторов производственной среды</li>
            <li>Аттестация производственных объектов по условиям труда</li>
            <li>Оценка профессиональных рисков</li>
            <li>Безопасность и охрана труда</li>
            <li>Производственная токсикология</li>
            <li>Медицина труда (профессиональная патология)</li>
          </ul>
        </section>
  
        <!-- Price List and Bar Chart -->
        <section class="mb-36 grid md:grid-cols-2 gap-8 items-start ">
          <!-- Price Table -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Прайс-лист</h2>
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
          </div>
          <!-- Bar Chart -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-center">Стоимость услуг</h3>
            <div class="h-33">
              <BarChart v-if="priceBarChartData" :chart-data="priceBarChartData" :chart-options="chartOptions" />
            </div>
          </div>
        </section>
  
        <!-- Course Duration and Line Chart -->
        <section class="mb-64 mt-14 grid md:grid-cols-2 gap-8 items-center">
          <!-- Text Description -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Продолжительность курсов</h2>
            <p class="text-gray-700 leading-relaxed">
              Продолжительность наших курсов варьируется в зависимости от количества кредитов. Вы можете выбрать наиболее подходящий для вас вариант обучения.
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>2 кредита - 60 часов / 1 неделя</li>
              <li>4 кредита - 120 часов / 2 недели</li>
              <li>6 кредитов - 180 часов / 3 недели</li>
              <li>8 кредитов - 240 часов / 4 недели</li>
              <li>30 кредитов - 900 часов / 15 недель</li>
            </ul>
          </div>
          <!-- Line Chart -->
          <div>
            <h3 class="text-xl font-semibold mb-4 text-center">Продолжительность курсов</h3>
            <div class="h-32">
              <LineChart v-if="durationLineChartData" :chart-data="durationLineChartData" :chart-options="chartOptions" />
            </div>
          </div>
        </section>
  
        <!-- Additional Information -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-4">Дополнительная информация</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Сроки проведения курсов могут быть изменены в связи с заявками организаций.
          </p>
          <p class="text-gray-700 leading-relaxed">
            К обучению допускаются работники с высшим образованием после резидентуры, согласно приказу №218.
          </p>
        </section>
  
        <!-- Contact Information -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">Контакты</h2>
          <p class="text-gray-700 leading-relaxed">
            Адрес: г. Нур-Султан, ул. Примерная, д. 123<br>
            Телефон: +7 (7172) 123-456<br>
            Email: info@nctrpz.kz
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
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import BarChart from '~/components/BarChart.vue'
  import PieChart from '~/components/PieChart.vue'
  import LineChart from '~/components/LineChart.vue'
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 0,
          autoSkip: false
        }
      }
    }
  }
  
  const priceList = [
    {
      service: 'Сертификационные курсы (30 кредитов, 900 часов/15 недель)',
      unit: '1 чел.',
      price: '525 000'
    },
    {
      service: 'Циклы повышения квалификации (2 кредита, 60 часов/1 неделя)',
      unit: '1 чел.',
      price: '35 000'
    },
    {
      service: 'Циклы повышения квалификации (4 кредита, 120 часов/2 недели)',
      unit: '1 чел.',
      price: '70 000'
    },
    {
      service: 'Циклы повышения квалификации (6 кредитов, 180 часов/3 недели)',
      unit: '1 чел.',
      price: '105 000'
    },
    {
      service: 'Циклы повышения квалификации (8 кредитов, 240 часов/4 недели)',
      unit: '1 чел.',
      price: '140 000'
    },
    {
      service: 'Выездные циклы повышения квалификации (2 кредита, 60 часов/1 неделя)',
      unit: '1 час',
      price: '80 000'
    },
    {
      service: 'Обучающий семинар на базе Центра (6 часов/1 день)',
      unit: '1 чел.',
      price: '6 000'
    },
    {
      service: 'Выездной обучающий семинар (6 часов/1 день)',
      unit: '1 чел.',
      price: '30 000'
    }
  ]
  
  // Reactive data for charts, initialized with empty objects
  const priceBarChartData = ref({
    labels: [],
    datasets: []
  })
  const servicesPieChartData = ref({
    labels: [],
    datasets: []
  })
  const durationLineChartData = ref({
    labels: [],
    datasets: []
  })
  
  // Methods to set chart data
  function setPriceBarChartData() {
    const services = priceList.map(item => item.service)
    const prices = priceList.map(item => parseInt(item.price.replace(/\s/g, '')))
  
    priceBarChartData.value = {
      labels: services,
      datasets: [
        {
          label: 'Стоимость (тенге)',
          backgroundColor: '#3b82f6',
          data: prices
        }
      ]
    }
  }
  
  function setServicesPieChartData() {
    // Используем реальные услуги из списка
    const services = [
      'Гигиена труда',
      'Промышленная гигиена',
      'Радиационная гигиена',
      'Лабораторное дело',
      'Лабораторно-инструментальные методы',
      'Аттестация производственных объектов',
      'Оценка профессиональных рисков',
      'Безопасность и охрана труда',
      'Производственная токсикология',
      'Медицина труда'
    ]
    // Примерные данные для иллюстрации
    const data = [12, 10, 8, 15, 7, 5, 10, 8, 15, 10]
  
    servicesPieChartData.value = {
      labels: services,
      datasets: [
        {
          label: 'Услуги',
          backgroundColor: [
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#6366f1',
            '#eab308',
            '#8b5cf6',
            '#ec4899',
            '#f43f5e',
            '#14b8a6'
          ],
          data: data
        }
      ]
    }
  }
  
  function setDurationLineChartData() {
    const credits = [2, 4, 6, 8, 30]
    const hours = [60, 120, 180, 240, 900]
  
    durationLineChartData.value = {
      labels: credits.map(c => c + ' кредита'),
      datasets: [
        {
          label: 'Продолжительность (часы)',
          backgroundColor: '#10b981',
          borderColor: '#10b981',
          fill: false,
          data: hours
        }
      ]
    }
  }
  
  // Initialize chart data on mounted
  onMounted(() => {
    setPriceBarChartData()
    setServicesPieChartData()
    setDurationLineChartData()
  })
  </script>
  
  <style>
  /* Дополнительные стили */
  </style>
  