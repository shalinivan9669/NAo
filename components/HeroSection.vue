<!-- pages/index.vue -->
<template>
  <div class="w-full">
    <!-- Hero Секция -->
    <section class="w-full">
      <Hero />
    </section>

    <!-- О нас -->
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('home.aboutUs.title') }}</h2>
          <p class="text-lg text-gray-700">{{ $t('home.aboutUs.description') }}</p>
        </div>
        <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <img
            src="
            "
            alt="О нас"
            class="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div class="w-full md:w-1/2">
            <p class="text-gray-700 mb-4">{{ $t('home.aboutUs.paragraph1') }}</p>
            <p class="text-gray-700 mb-4">{{ $t('home.aboutUs.paragraph2') }}</p>
            <p class="text-gray-700">{{ $t('home.aboutUs.paragraph3') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Наши Отделения -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('home.departments.title') }}</h2>
          <p class="text-lg text-gray-700">{{ $t('home.departments.subtitle') }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="department in departments"
            :key="department.key"
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div class="mb-4">
              <img :src="`/icons/${department.key}.svg`" :alt="department.title" class="w-16 h-16" />
            </div>
            <h3 class="text-xl font-semibold text-blue-700 mb-2">{{ department.title }}</h3>
            <p class="text-gray-700 mb-2">{{ department.description }}</p>
            <p class="text-gray-700"><strong>{{ $t('home.departments.phone') }}:</strong> <a :href="`tel:${department.phone}`" class="text-blue-600 hover:underline">{{ department.phone }}</a></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Филиалы -->
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('home.branches.title') }}</h2>
          <p class="text-lg text-gray-700">{{ $t('home.branches.subtitle') }}</p>
        </div>
        <div class="space-y-8">
          <!-- Филиал Восточно-Казахстанский -->
          <div class="flex flex-col md:flex-row items-center">
            <img
              src=""
              alt="Восточно-Казахстанский филиал"
              class="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div class="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ branches.east.title }}</h3>
              <p class="text-gray-700 mb-2"><strong>{{ $t('home.branches.address') }}:</strong> {{ branches.east.address }}</p>
              <p class="text-gray-700 mb-2"><strong>{{ $t('home.branches.phone') }}:</strong> <a :href="`tel:${branches.east.phone}`" class="text-blue-600 hover:underline">{{ branches.east.phone }}</a></p>
              <p class="text-gray-700"><strong>{{ $t('home.branches.workingHours') }}:</strong> {{ branches.east.workingHours }}</p>
            </div>
          </div>

          <!-- Филиал Южно-Казахстанский -->
          <div class="flex flex-col md:flex-row items-center">
            <img
              src=""
              alt="Южно-Казахстанский филиал"
              class="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div class="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ branches.south.title }}</h3>
              <p class="text-gray-700 mb-2"><strong>{{ $t('home.branches.address') }}:</strong> {{ branches.south.address }}</p>
              <p class="text-gray-700 mb-2"><strong>{{ $t('home.branches.phone') }}:</strong> <a :href="`tel:${branches.south.phone}`" class="text-blue-600 hover:underline">{{ branches.south.phone }}</a></p>
              <p class="text-gray-700"><strong>{{ $t('home.branches.workingHours') }}:</strong> {{ branches.south.workingHours }}</p>
            </div>
          </div>

          <!-- Филиал Западно-Казахстанский -->
          <div class="flex flex-col md:flex-row items-center">
            <img
              src=" "
              alt="Западно-Казахстанский филиал"
              class="w-full md:w-1/3 rounded-lg shadow-md"
            />
            <div class="w-full md:w-2/3 md:pl-8 mt-4 md:mt-0">
              <h3 class="text-2xl font-semibold text-blue-700 mb-2">{{ branches.west.title }}</h3>
              <p class="text-gray-700 mb-2"><strong>{{ $t('home.branches.address') }}:</strong> {{ branches.west.address }}</p>
              <p class="text-gray-700 mb-2"><strong>{{ $t('home.branches.phone') }}:</strong> <a :href="`tel:${branches.west.phone}`" class="text-blue-600 hover:underline">{{ branches.west.phone }}</a></p>
              <p class="text-gray-700"><strong>{{ $t('home.branches.workingHours') }}:</strong> {{ branches.west.workingHours }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Отзывы -->
    <section class="bg-gray-100 py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('home.testimonials.title') }}</h2>
          <p class="text-lg text-gray-700">{{ $t('home.testimonials.subtitle') }}</p>
        </div>
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="italic text-gray-700">"Керемет қызмет көрсету және кәсіби тәсіл. Орталық менің жұмыс орнымдағы еңбек жағдайларын жақсартуға көмектесті."</p>
            <p class="mt-2 font-semibold text-gray-800">— Иван Петров</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="italic text-gray-700">"Орталықтың арқасында мен еңбек гигиенасы мәселелерінде қажетті қолдау мен кеңес алдым."</p>
            <p class="mt-2 font-semibold text-gray-800">— Мария Сидорова</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="italic text-gray-700">"Өте пайдалы кеңестер мен жоғары сапалы медициналық қызметтер. Мен өте ризамын."</p>
            <p class="mt-2 font-semibold text-gray-800">— Айнұр Ахметова</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Контактная Информация -->
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-blue-800 mb-4">{{ $t('home.contactInfo.title') }}</h2>
          <p class="text-lg text-gray-700">{{ $t('home.contactInfo.subtitle') }}</p>
        </div>
        <div class="flex justify-center">
          <a href="/contacts/contact-us" class="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            {{ $t('home.contactInfo.cta') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Социальные Сети -->
    <section class="bg-gray-100 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center space-x-6">
          <!-- Facebook -->
          <a href="https://www.facebook.com/ncgtpz" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691V11.03h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.676h-3.123V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z"/>
            </svg>
          </a>
          
          <!-- Twitter -->
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.097v.062a4.916 4.916 0 0 0 3.946 4.814 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
            </svg>
          </a>
          
          <!-- LinkedIn -->
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-blue-700" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zM19 19h-3v-5.604c0-1.337-.025-3.07-1.872-3.07-1.872 0-2.158 1.46-2.158 2.97v5.703h-3v-10h2.881v1.367h.041c.401-.76 1.381-1.562 2.839-1.562 3.037 0 3.6 2 3.6 4.6v5.603z"/>
            </svg>
          </a>
          
          <!-- Instagram -->
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-pink-500" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.004.247 2.467.416a4.92 4.92 0 0 1 1.675 1.09 4.92 4.92 0 0 1 1.09 1.675c.169.463.36 1.261.416 2.467.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.247 2.004-.416 2.467a4.92 4.92 0 0 1-1.09 1.675 4.92 4.92 0 0 1-1.675 1.09c-.463.169-1.261.36-2.467.416-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.004-.247-2.467-.416a4.92 4.92 0 0 1-1.675-1.09 4.92 4.92 0 0 1-1.09-1.675c-.169-.463-.36-1.261-.416-2.467C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.247-2.004.416-2.467a4.92 4.92 0 0 1 1.09-1.675A4.92 4.92 0 0 1 4.668 2.63c.463-.169 1.261-.36 2.467-.416C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.128 4.832.32 4.006.596a6.85 6.85 0 0 0-2.47 1.601A6.85 6.85 0 0 0 .596 4.006c-.276.826-.468 1.776-.526 3.046C0 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.058 1.27.25 2.22.526 3.046a6.85 6.85 0 0 0 1.601 2.47 6.85 6.85 0 0 0 2.47 1.601c.826.276 1.776.468 3.046.526C8.332 24 8.741 24 12 24s3.668-.012 4.948-.07c1.27-.058 2.22-.25 3.046-.526a6.85 6.85 0 0 0 2.47-1.601 6.85 6.85 0 0 0 1.601-2.47c.276-.826.468-1.776.526-3.046.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.27-.25-2.22-.526-3.046a6.85 6.85 0 0 0-1.601-2.47A6.85 6.85 0 0 0 19.994.596c-.826-.276-1.776-.468-3.046-.526C15.668.012 15.259 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Hero from '~/components/Hero.vue'; // Убедитесь, что путь к компоненту Hero верный

// Данные для филиалов
const branches = {
  east: {
    title: 'Восточно-Казахстанский филиал (г. Усть-Каменогорск)',
    address: 'г. Усть-Каменогорск, ул. Серикбаева, д. 47',
    phone: '+7 (7232) 26 74 00',
    workingHours: 'пн-пт: 08:30-17:30',
  },
  south: {
    title: 'Южно-Казахстанский филиал (г. Шымкент)',
    address: 'г. Шымкент, ул. Тауке хана, д. 162',
    phone: '+7 (7252) 53 00 00',
    workingHours: 'пн-пт: 09:00-18:00',
  },
  west: {
    title: 'Западно-Казахстанский филиал (г. Актобе)',
    address: 'г. Актобе, ул. Марат Оспанова, д. 68',
    phone: '+7 (7132) 54 00 00',
    workingHours: 'пн-пт: 09:00-18:00',
  }
};

// Данные для отделений
const departments = [
  {
    key: 'professionalTherapy',
    title: 'Отделение профессиональной терапии',
    description: 'Специализируется на диагностике и лечении заболеваний, связанных с профессиональной деятельностью.',
    phone: '+7 (7212) 56 52 63',
  },
  {
    key: 'consultativeDiagnostic',
    title: 'Консультативно-диагностическое отделение',
    description: 'Предоставляет консультации узких специалистов и проводит необходимые диагностические исследования.',
    phone: '+7 (7212) 56 53 10',
  },
  {
    key: 'clinicoBiochemical',
    title: 'Клинико-биохимическая лаборатория',
    description: 'Выполняет широкий спектр лабораторных анализов для оценки состояния здоровья пациентов.',
    phone: '+7 (7212) 56 52 63',
  },
  {
    key: 'physiotherapy',
    title: 'Физиотерапевтическое отделение',
    description: 'Предлагает различные методы физиотерапии для реабилитации и лечения пациентов.',
    phone: '+7 (7212) 56 53 10',
  },
  {
    key: 'fitnessMassage',
    title: 'Кабинеты лечебной физкультуры, массажа и гидромассажа',
    description: 'Направлены на восстановление и поддержание физического здоровья пациентов.',
    phone: '+7 (7212) 56 52 63',
  },
  {
    key: 'xray',
    title: 'Рентген-кабинет',
    description: 'Оснащен современным оборудованием для проведения рентгенологических исследований.',
    phone: '+7 (7212) 56 53 10',
  },
  {
    key: 'functionalDiagnosis',
    title: 'Отделение функциональной диагностики',
    description: 'Проводит исследования функционального состояния различных систем организма.',
    phone: '+7 (7212) 56 52 63',
  },
  {
    key: 'allergology',
    title: 'Аллергологический центр',
    description: 'Занимается диагностикой и лечением аллергических заболеваний, связанных с профессиональной деятельностью.',
    phone: '+7 (7212) 56 53 10',
  },
  {
    key: 'dayHospital',
    title: 'Дневной стационар',
    description: 'Предоставляет возможность прохождения лечения без необходимости круглосуточного пребывания в стационаре.',
    phone: '+7 (7212) 56 52 63',
  }
];

const { t } = useI18n();
</script>

<style scoped>
/* Общие стили */
section {
  transition: background-color 0.3s ease;
}

h2, h3 {
  font-family: 'Montserrat', sans-serif;
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
