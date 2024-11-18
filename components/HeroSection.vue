<template>
  <section class="relative min-h-screen flex flex-col lg:flex-row">
    <!-- Левая часть: Текстовые блоки -->
    <div class="w-full lg:w-1/2 px-6 lg:px-10 py-12 flex flex-col space-y-12">
      <!-- Герой Секция -->
      <div class="block" ref="heroSection" data-section="hero">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900 mb-4">
          {{ $t('hero.title') }}
        </h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {{ $t('hero.subtitle') }}
        </h2>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          {{ $t('hero.description1') }}
        </p>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          {{ $t('hero.description2') }}
        </p>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          {{ $t('hero.description3') }}
        </p>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          {{ $t('hero.description4') }}
        </p>
        <button class="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300">
          {{ $t('hero.cta') }}
        </button>
      </div>

      <!-- Профессионализм -->
      <div class="block" ref="professionalismSection" data-section="professionalism">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          {{ $t('professionalism.title') }}
        </h2>
        <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {{ $t('professionalism.subtitle') }}
        </h3>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
          {{ $t('professionalism.description') }}
        </p>
      </div>

      <!-- Качество Обслуживания -->
      <div class="block" ref="qualitySection" data-section="quality">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          {{ $t('quality.title') }}
        </h2>
        <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {{ $t('quality.subtitle') }}
        </h3>
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          {{ $t('quality.description') }}
        </p>
        <!-- Отзывы -->
        <!-- Отзывы (захардкоженные) -->
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

      <!-- Поддержка Населения -->
      <div class="block" ref="supportSection" data-section="support">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          {{ $t('support.title') }}
        </h2>
        <h3 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          {{ $t('support.subtitle') }}
        </h3>
        <!-- Карточки Программ -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(program, key) in $t('support.programs')"
            :key="key"
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div class="mb-4">
              <img :src="`/icons/${key}.svg`" :alt="program.title" class="w-12 h-12" />
            </div>
            <h4 class="text-xl font-semibold text-blue-900 mb-2">{{ program.title }}</h4>
            <p class="text-gray-700">{{ program.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Правая часть: Изображения с параллакс-эффектом -->
    <div class="w-full lg:w-1/2 h-screen lg:h-auto relative overflow-hidden">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        :style="{ backgroundImage: `url(${image})`, opacity: currentImage === index ? 1 : 0 }"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

// Список изображений для параллакс-эффекта
const images = [
  '/images/hero1.jpg',          // Герой
  '/images/professionalism1.jpg', // Профессионализм
  '/images/quality1.jpg',        // Качество
  '/images/support1.jpg'         // Поддержка
]

const currentImage = ref(0)

// Отслеживание текущего видимого блока
const heroSection = ref(null)
const professionalismSection = ref(null)
const qualitySection = ref(null)
const supportSection = ref(null)

let observer

const handleIntersect = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const section = entry.target.getAttribute('data-section')
      switch(section) {
        case 'hero':
          currentImage.value = 0
          break
        case 'professionalism':
          currentImage.value = 1
          break
        case 'quality':
          currentImage.value = 2
          break
        case 'support':
          currentImage.value = 3
          break
        default:
          currentImage.value = 0
      }
    }
  })
}

onMounted(() => {
  // Инициализация IntersectionObserver
  observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })

  // Наблюдение за всеми секциями
  if (heroSection.value) observer.observe(heroSection.value)
  if (professionalismSection.value) observer.observe(professionalismSection.value)
  if (qualitySection.value) observer.observe(qualitySection.value)
  if (supportSection.value) observer.observe(supportSection.value)
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
section {
  background-color: #f0f4f8;
}

h1, h2, h3 {
  font-family: 'Montserrat', sans-serif;
}

h1 {
  color: #003366;
}

h2, h3 {
  color: #555555;
}

p {
  color: #555555;
  line-height: 1.8;
}

.bg-cover {
  transition: opacity 1s ease-in-out;
}

button {
  cursor: pointer;
}
</style>
