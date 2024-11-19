<!-- pages/госс-закупки.vue -->
<template>
    <section class="container mx-auto px-6 py-12">
      <h1 class="text-3xl font-bold text-center text-blue-800 mb-8">{{ $t('stateProcurements.title') }}</h1>
      
      <!-- Общая информация -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.generalInfoTitle') }}</h2>
        <p class="text-gray-700 mb-4">
          {{ $t('stateProcurements.generalInfoParagraph1') }}
        </p>
        <p class="text-gray-700">
          {{ $t('stateProcurements.generalInfoParagraph2') }}
        </p>
        <ul class="list-disc list-inside text-gray-700 mt-2">
          <li>
            <a href="https://zakup.gov.kz/" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              {{ $t('stateProcurements.generalInfoLink1') }}
            </a>
          </li>
          <li>{{ $t('stateProcurements.generalInfoItem2') }}</li>
          <li>{{ $t('stateProcurements.generalInfoItem3') }}</li>
        </ul>
      </div>
  
      <!-- Планы закупок -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.plansTitle') }}</h2>
        <p class="text-gray-700 mb-4">
          {{ $t('stateProcurements.plansParagraph') }}
        </p>
        <a href="#" class="text-blue-600 hover:underline">{{ $t('stateProcurements.plansLink') }}</a>
      </div>
  
      <!-- Объявления о закупках -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.tendersTitle') }}</h2>
        <p class="text-gray-700 mb-6">
          {{ $t('stateProcurements.tendersParagraph') }}
        </p>
        
        <!-- Таблица тендеров -->
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white">
            <thead>
              <tr>
                <th class="py-2 px-4 border-b text-left">{{ $t('stateProcurements.table.number') }}</th>
                <th class="py-2 px-4 border-b text-left">{{ $t('stateProcurements.table.name') }}</th>
                <th class="py-2 px-4 border-b text-left">{{ $t('stateProcurements.table.startDate') }}</th>
                <th class="py-2 px-4 border-b text-left">{{ $t('stateProcurements.table.endDate') }}</th>
                <th class="py-2 px-4 border-b text-left">{{ $t('stateProcurements.table.status') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tender, index) in tenders" :key="index" class="hover:bg-gray-100">
                <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
                <td class="py-2 px-4 border-b">
                  <a :href="tender.link" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    {{ tender.name }}
                  </a>
                </td>
                <td class="py-2 px-4 border-b">{{ tender.startDate }}</td>
                <td class="py-2 px-4 border-b">{{ tender.endDate }}</td>
                <td class="py-2 px-4 border-b">
                  <span :class="statusClass(tender.status)" class="px-2 py-1 rounded-full text-white text-sm">
                    {{ tender.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Документация -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.documentationTitle') }}</h2>
        <p class="text-gray-700 mb-4">
          {{ $t('stateProcurements.documentationParagraph') }}
        </p>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            <a href="#" class="text-blue-600 hover:underline">{{ $t('stateProcurements.documentationLink1') }}</a>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline">{{ $t('stateProcurements.documentationLink2') }}</a>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline">{{ $t('stateProcurements.documentationLink3') }}</a>
          </li>
        </ul>
      </div>
  
      <!-- Реестр поставщиков -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.registryTitle') }}</h2>
        <p class="text-gray-700 mb-4">
          {{ $t('stateProcurements.registryParagraph') }}
        </p>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            <a href="#" class="text-blue-600 hover:underline">{{ $t('stateProcurements.registryLink1') }}</a>
          </li>
          <li>{{ $t('stateProcurements.registryItem2') }}</li>
          <li>{{ $t('stateProcurements.registryItem3') }}</li>
        </ul>
      </div>
  
      <!-- Контактная информация -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.contactInfoTitle') }}</h2>
        <p class="text-gray-700 mb-4">
          {{ $t('stateProcurements.contactInfoParagraph') }}
        </p>
        <ul class="list-disc list-inside text-gray-700">
          <li>{{ $t('stateProcurements.contactInfoName') }}: Иван Иванов</li>
          <li>{{ $t('stateProcurements.contactInfoPosition') }}: Руководитель отдела закупок</li>
          <li>{{ $t('stateProcurements.contactInfoEmail') }}: <a href="mailto:ivan.ivanov@example.com" class="text-blue-600 hover:underline">ivan.ivanov@example.com</a></li>
          <li>{{ $t('stateProcurements.contactInfoPhone') }}: <a href="tel:+77271234567" class="text-blue-600 hover:underline">+7 (727) 123-45-67</a></li>
        </ul>
        <form class="mt-4 hidden">
          <label for="email" class="block text-gray-700">{{ $t('stateProcurements.contactFormEmailLabel') }}</label>
          <input type="email" id="email" class="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4" placeholder="example@domain.com" />
  
          <label for="message" class="block text-gray-700">{{ $t('stateProcurements.contactFormMessageLabel') }}</label>
          <textarea id="message" rows="4" class="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4" placeholder="{{ $t('stateProcurements.contactFormMessagePlaceholder') }}"></textarea>
  
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            {{ $t('stateProcurements.contactFormSubmit') }}
          </button>
        </form>
      </div>
  
      <!-- Часто задаваемые вопросы (FAQ) -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.faqTitle') }}</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-medium text-gray-700">{{ $t('stateProcurements.faqQuestion1') }}</h3>
            <p class="text-gray-600">
              {{ $t('stateProcurements.faqAnswer1') }}
            </p>
          </div>
          <div>
            <h3 class="text-xl font-medium text-gray-700">{{ $t('stateProcurements.faqQuestion2') }}</h3>
            <p class="text-gray-600">
              {{ $t('stateProcurements.faqAnswer2') }}
            </p>
          </div>
          <!-- Добавьте дополнительные вопросы по необходимости -->
        </div>
      </div>
  
      <!-- Новости и обновления -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.newsTitle') }}</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-xl font-medium text-gray-700">{{ $t('stateProcurements.newsItem1Title') }}</h3>
            <p class="text-gray-600">
              {{ $t('stateProcurements.newsItem1Description') }}
            </p>
          </div>
          <div>
            <h3 class="text-xl font-medium text-gray-700">{{ $t('stateProcurements.newsItem2Title') }}</h3>
            <p class="text-gray-600">
              {{ $t('stateProcurements.newsItem2Description') }}
            </p>
          </div>
          <!-- Добавьте дополнительные новости по необходимости -->
        </div>
      </div>
  
      <!-- Обратная связь и жалобы -->
      <div class="mb-8 hidden">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.feedbackTitle') }}</h2>
        <p class="text-gray-700 mb-4">
          {{ $t('stateProcurements.feedbackParagraph') }}
        </p>
        <form class="mt-4">
          <label for="name" class="block text-gray-700">{{ $t('stateProcurements.feedbackFormNameLabel') }}</label>
          <input type="text" id="name" class="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4" placeholder="{{ $t('stateProcurements.feedbackFormNamePlaceholder') }}" />
  
          <label for="email" class="block text-gray-700">{{ $t('stateProcurements.feedbackFormEmailLabel') }}</label>
          <input type="email" id="email" class="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4" placeholder="example@domain.com" />
  
          <label for="complaint" class="block text-gray-700">{{ $t('stateProcurements.feedbackFormMessageLabel') }}</label>
          <textarea id="complaint" rows="4" class="w-full border border-gray-300 rounded px-3 py-2 mt-1 mb-4" placeholder="{{ $t('stateProcurements.feedbackFormMessagePlaceholder') }}"></textarea>
  
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
            {{ $t('stateProcurements.feedbackFormSubmit') }}
          </button>
        </form>
      </div>
  
      <!-- Дополнительные ресурсы -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('stateProcurements.additionalResourcesTitle') }}</h2>
        <ul class="list-disc list-inside text-gray-700">
          <li>
            <a href="https://zakup.gov.kz/" target="_blank" class="text-blue-600 hover:underline" rel="noopener noreferrer">
              {{ $t('stateProcurements.additionalResource1') }}
            </a>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline">{{ $t('stateProcurements.additionalResource2') }}</a>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline">{{ $t('stateProcurements.additionalResource3') }}</a>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // Использование локализации
  const { t } = useI18n();
  
  // Массив тендеров
  const tenders = ref([
    {
      name: 'Поставка медицинского оборудования',
      startDate: '01.04.2024',
      endDate: '15.04.2024',
      status: 'Открыт',
      link: '#',
    },
    {
      name: 'Закупка лабораторных реагентов',
      startDate: '05.04.2024',
      endDate: '20.04.2024',
      status: 'В процессе',
      link: '#',
    },
    {
      name: 'Поставка расходных материалов для клиник',
      startDate: '10.04.2024',
      endDate: '25.04.2024',
      status: 'Закрыт',
      link: '#',
    },
    {
      name: 'Обновление информационной системы',
      startDate: '15.04.2024',
      endDate: '30.04.2024',
      status: 'Открыт',
      link: '#',
    },
    {
      name: 'Поставка защитных средств для персонала',
      startDate: '20.04.2024',
      endDate: '05.05.2024',
      status: 'В процессе',
      link: '#',
    },
    {
      name: 'Закупка мобильных лабораторий',
      startDate: '25.04.2024',
      endDate: '10.05.2024',
      status: 'Открыт',
      link: '#',
    },
    {
      name: 'Поставка специализированного оборудования для исследований',
      startDate: '30.04.2024',
      endDate: '15.05.2024',
      status: 'Закрыт',
      link: '#',
    },
    {
      name: 'Обслуживание медицинских учреждений',
      startDate: '05.05.2024',
      endDate: '20.05.2024',
      status: 'Открыт',
      link: '#',
    },
  ]);
  
  // Функция для определения класса статуса
  function statusClass(status: string) {
    const classes: Record<string, string> = {
      'Открыт': 'bg-green-500',
      'В процессе': 'bg-yellow-500',
      'Закрыт': 'bg-red-500',
    };
    return classes[status] || 'bg-gray-500';
  }
  </script>
  
  <style scoped>
  /* Общие стили */
  a {
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Адаптивность таблицы */
  @media (max-width: 768px) {
    table {
      min-width: 600px;
    }
  }
  
  /* Дополнительные стили, если необходимо */
  </style>
  