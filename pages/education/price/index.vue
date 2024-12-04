<!-- pages/education/price.vue -->
<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Header -->
    <header class="bg-blue-800 text-white py-6">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold">
          {{ $t('price.header.title') }}
        </h1>
        <p class="mt-2 text-lg">{{ $t('price.header.subtitle') }}</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto py-10 px-4">
      <!-- Price List -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('price.priceList.title') }}</h2>
        <div class="overflow-x-auto">
          <table class="w-full table-auto bg-white shadow-md rounded">
            <thead>
              <!-- Section 1 Title -->
              <tr>
                <th colspan="4" class="bg-gray-200 text-left px-4 py-2 text-lg">
                  {{ $t('price.table.section1.title') }}
                </th>
              </tr>
              <!-- Subsection 1 Title -->
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ $t('price.table.section1.subsection1.title') }}
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <!-- Section 1 Subsection 1 Row -->
              <tr class="border-t">
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection1.row1.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection1.row1.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection1.row1.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection1.row1.price') }}</td>
              </tr>
              <!-- Subsection 2 Title -->
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ $t('price.table.section1.subsection2.title') }}
                </th>
              </tr>
              <!-- Section 1 Subsection 2 Rows -->
              <!-- Row 1 -->
              <tr class="border-t bg-gray-50">
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row1.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row1.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row1.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row1.price') }}</td>
              </tr>
              <!-- Row 2 -->
              <tr class="border-t">
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row2.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row2.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row2.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row2.price') }}</td>
              </tr>
              <!-- Row 3 -->
              <tr class="border-t bg-gray-50">
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row3.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row3.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row3.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row3.price') }}</td>
              </tr>
              <!-- Row 4 -->
              <tr class="border-t">
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row4.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row4.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row4.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section1.subsection2.row4.price') }}</td>
              </tr>
              <!-- Section 2 Title -->
              <tr>
                <th colspan="4" class="bg-gray-200 text-left px-4 py-2 text-lg">
                  {{ $t('price.table.section2.title') }}
                </th>
              </tr>
              <!-- Subsection 1 Title -->
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ $t('price.table.section2.subsection1.title') }}
                </th>
              </tr>
              <!-- Section 2 Subsection 1 Row -->
              <tr class="border-t bg-gray-50">
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection1.row1.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection1.row1.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection1.row1.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection1.row1.price') }}</td>
              </tr>
              <!-- Subsection 2 Title -->
              <tr>
                <th colspan="4" class="bg-gray-100 text-left px-4 py-2">
                  {{ $t('price.table.section2.subsection2.title') }}
                </th>
              </tr>
              <!-- Section 2 Subsection 2 Rows -->
              <!-- Row 1 -->
              <tr class="border-t">
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row1.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row1.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row1.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row1.price') }}</td>
              </tr>
              <!-- Row 2 -->
              <tr class="border-t bg-gray-50">
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row2.number') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row2.description') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row2.unit') }}</td>
                <td class="px-4 py-2">{{ $t('price.table.section2.subsection2.row2.price') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Additional Information -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">{{ $t('price.additionalInfo.title') }}</h2>
        <p class="text-gray-700 leading-relaxed">{{ $t('price.additionalInfo.paragraph1') }}</p>
        <p class="text-gray-700 leading-relaxed mt-4">{{ $t('price.additionalInfo.paragraph2') }}</p>
      </section>

      <!-- Contact Information -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">{{ $t('price.contact.title') }}</h2>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('price.contact.address') }}<br>
          {{ $t('price.contact.phone') }}<br>
          {{ $t('price.contact.email') }}
        </p>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-blue-800 text-white py-4">
      <div class="container mx-auto text-center">
        &copy; {{ new Date().getFullYear() }} {{ $t('price.footer') }}
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
/* Нет необходимости в дополнительных скриптах */
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
