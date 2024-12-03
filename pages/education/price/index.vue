<!-- pages/education/price.vue -->
<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <header class="bg-blue-800 text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">
          {{ t('price.header.title') }}
        </h1>
        <p class="mt-2 text-lg">{{ t('price.header.subtitle') }}</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto py-10 px-4">
      <!-- Price List -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">{{ t('price.priceList.title') }}</h2>
        <div class="overflow-x-auto">
          <table class="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <tr>
                <th colspan="4" class="bg-gray-200 text-left px-4 py-2 text-lg">
                  {{ t('price.table.section1.title') }}
                </th>
              </tr>
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ t('price.table.section1.subsection1.title') }}
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr class="border-t">
                <td class="px-4 py-2">{{ t('price.table.section1.subsection1.row1.number') }}</td>
                <td class="px-4 py-2">{{ t('price.table.section1.subsection1.row1.description') }}</td>
                <td class="px-4 py-2">{{ t('price.table.section1.subsection1.row1.unit') }}</td>
                <td class="px-4 py-2">{{ t('price.table.section1.subsection1.row1.price') }}</td>
              </tr>
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ t('price.table.section1.subsection2.title') }}
                </th>
              </tr>
              <tr v-for="(item, index) in section1Subsection2Rows" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : ''">
                <td class="border-t px-4 py-2">{{ item.number }}</td>
                <td class="border-t px-4 py-2">{{ item.description }}</td>
                <td class="border-t px-4 py-2">{{ item.unit }}</td>
                <td class="border-t px-4 py-2">{{ item.price }}</td>
              </tr>
              <!-- Section 2 -->
              <tr>
                <th colspan="4" class="bg-gray-200 text-left px-4 py-2 text-lg">
                  {{ t('price.table.section2.title') }}
                </th>
              </tr>
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ t('price.table.section2.subsection1.title') }}
                </th>
              </tr>
              <tr v-for="(item, index) in section2Subsection1Rows" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : ''">
                <td class="border-t px-4 py-2">{{ item.number }}</td>
                <td class="border-t px-4 py-2">{{ item.description }}</td>
                <td class="border-t px-4 py-2">{{ item.unit }}</td>
                <td class="border-t px-4 py-2">{{ item.price }}</td>
              </tr>
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ t('price.table.section2.subsection2.title') }}
                </th>
              </tr>
              <tr v-for="(item, index) in section2Subsection2Rows" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : ''">
                <td class="border-t px-4 py-2">{{ item.number }}</td>
                <td class="border-t px-4 py-2">{{ item.description }}</td>
                <td class="border-t px-4 py-2">{{ item.unit }}</td>
                <td class="border-t px-4 py-2">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Additional Information -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">{{ t('price.additionalInfo.title') }}</h2>
        <p class="text-gray-700 leading-relaxed" v-html="t('price.additionalInfo.paragraph1')"></p>
        <p class="text-gray-700 leading-relaxed mt-4" v-html="t('price.additionalInfo.paragraph2')"></p>
      </section>

      <!-- Contact Information -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">{{ t('price.contact.title') }}</h2>
        <p class="text-gray-700 leading-relaxed">
          {{ t('price.contact.address') }}<br>
          {{ t('price.contact.phone') }}<br>
          {{ t('price.contact.email') }}
        </p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white py-4">
      <div class="container mx-auto text-center">
        &copy; {{ new Date().getFullYear() }} {{ t('price.footer') }}
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Данные для таблицы
const section1Subsection2Rows = computed(() => [
  {
    number: '1',
    description: t('price.table.section1.subsection2.row1.description'),
    unit: t('price.table.section1.subsection2.row1.unit'),
    price: t('price.table.section1.subsection2.row1.price'),
  },
  {
    number: '2',
    description: t('price.table.section1.subsection2.row2.description'),
    unit: t('price.table.section1.subsection2.row2.unit'),
    price: t('price.table.section1.subsection2.row2.price'),
  },
  {
    number: '3',
    description: t('price.table.section1.subsection2.row3.description'),
    unit: t('price.table.section1.subsection2.row3.unit'),
    price: t('price.table.section1.subsection2.row3.price'),
  },
  {
    number: '4',
    description: t('price.table.section1.subsection2.row4.description'),
    unit: t('price.table.section1.subsection2.row4.unit'),
    price: t('price.table.section1.subsection2.row4.price'),
  },
]);

const section2Subsection1Rows = computed(() => [
  {
    number: '1',
    description: t('price.table.section2.subsection1.row1.description'),
    unit: t('price.table.section2.subsection1.row1.unit'),
    price: t('price.table.section2.subsection1.row1.price'),
  },
]);

const section2Subsection2Rows = computed(() => [
  {
    number: '1',
    description: t('price.table.section2.subsection2.row1.description'),
    unit: t('price.table.section2.subsection2.row1.unit'),
    price: t('price.table.section2.subsection2.row1.price'),
  },
  {
    number: '2',
    description: t('price.table.section2.subsection2.row2.description'),
    unit: t('price.table.section2.subsection2.row2.unit'),
    price: t('price.table.section2.subsection2.row2.price'),
  },
]);
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
.table-container {
  overflow-x: auto;
}
</style>
