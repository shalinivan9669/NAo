<!-- pages/location.vue -->
<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Заголовок страницы -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-blue-800">{{ $t('location.title') }}</h1>
      <p class="mt-4 text-lg text-gray-600">{{ $t('location.subtitle') }}</p>
    </div>

    <!-- Карта и Информация -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Интерактивная Карта Яндекс -->
      <div class="w-full h-96 md:h-full">
        <div id="map" class="w-full h-full rounded-lg shadow-lg"></div>
      </div>

      <!-- Информационный Блок -->
      <div class="flex flex-col justify-center">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ $t('location.infoTitle') }}</h2>
        <p class="text-gray-700 mb-4">
          {{ $t('location.infoParagraph1') }}
        </p>
        <p class="text-gray-700 mb-4">
          {{ $t('location.infoParagraph2') }}
        </p>

        <!-- Адрес и Контакты -->
        <ul class="list-disc list-inside text-gray-700 mb-6">
          <li>{{ $t('location.address') }}: {{ $t('location.addressValue') }}</li>
          <li>
            {{ $t('location.phone') }}: 
            <a href="tel:+77271234567" class="text-blue-600 hover:underline">+7 (727) 123-45-67</a>
          </li>
          <li>
            {{ $t('location.email') }}: 
            <a href="mailto:info@ncgtpz.kz" class="text-blue-600 hover:underline">info@ncgtpz.kz</a>
          </li>
        </ul>

        <!-- Социальные Сети -->
        <div class="flex space-x-4 mb-6">
          <!-- Facebook -->
          <a href="https://www.facebook.com/ncgtpz" target="_blank" rel="noopener noreferrer" class="hover:text-blue-500" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.691V11.03h3.129V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.676h-3.123V24h6.116C23.405 24 24 23.405 24 22.675V1.325C24 .595 23.405 0 22.675 0z"/>
            </svg>
          </a>
          
          <!-- Twitter -->
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.94 13.94 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.097v.062a4.916 4.916 0 0 0 3.946 4.814 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.213c9.056 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"/>
            </svg>
          </a>
          
          <!-- LinkedIn -->
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="hover:text-blue-700" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zM19 19h-3v-5.604c0-1.337-.025-3.07-1.872-3.07-1.872 0-2.158 1.46-2.158 2.97v5.703h-3v-10h2.881v1.367h.041c.401-.76 1.381-1.562 2.839-1.562 3.037 0 3.6 2 3.6 4.6v5.603z"/>
            </svg>
          </a>
          
          <!-- Instagram -->
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="hover:text-pink-500" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.004.247 2.467.416a4.92 4.92 0 0 1 1.675 1.09 4.92 4.92 0 0 1 1.09 1.675c.169.463.36 1.261.416 2.467.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.247 2.004-.416 2.467a4.92 4.92 0 0 1-1.09 1.675 4.92 4.92 0 0 1-1.675 1.09c-.463.169-1.261.36-2.467.416-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.004-.247-2.467-.416a4.92 4.92 0 0 1-1.675-1.09 4.92 4.92 0 0 1-1.09-1.675c-.169-.463-.36-1.261-.416-2.467C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.247-2.004.416-2.467a4.92 4.92 0 0 1 1.09-1.675A4.92 4.92 0 0 1 4.668 2.63c.463-.169 1.261-.36 2.467-.416C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.782.128 4.832.32 4.006.596a6.85 6.85 0 0 0-2.47 1.601A6.85 6.85 0 0 0 .596 4.006c-.276.826-.468 1.776-.526 3.046C0 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.058 1.27.25 2.22.526 3.046a6.85 6.85 0 0 0 1.601 2.47 6.85 6.85 0 0 0 2.47 1.601c.826.276 1.776.468 3.046.526C8.332 24 8.741 24 12 24s3.668-.012 4.948-.07c1.27-.058 2.22-.25 3.046-.526a6.85 6.85 0 0 0 2.47-1.601 6.85 6.85 0 0 0 1.601-2.47c.276-.826.468-1.776.526-3.046.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.27-.25-2.22-.526-3.046a6.85 6.85 0 0 0-1.601-2.47A6.85 6.85 0 0 0 19.994.596c-.826-.276-1.776-.468-3.046-.526C15.668.012 15.259 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
            </svg>
          </a>
        </div>

        <!-- Направления до Центра -->
        <div class="space-y-6">
          <!-- Направление из Майкудука -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ $t('location.directions.fromMikeuduka.title') }}</h3>
            <h4 class="text-lg font-semibold text-gray-700">{{ $t('location.directions.byCar') }}</h4>
            <p class="text-gray-700 mb-2">{{ $t('location.directions.fromMikeuduka.byCarDescription') }}</p>
            <h4 class="text-lg font-semibold text-gray-700">{{ $t('location.directions.byPublicTransport') }}</h4>
            <p class="text-gray-700">{{ $t('location.directions.fromMikeuduka.byPublicTransportDescription') }}</p>
          </div>

          <!-- Направление из Юго-Востока -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ $t('location.directions.fromYugoVostocha.title') }}</h3>
            <h4 class="text-lg font-semibold text-gray-700">{{ $t('location.directions.byCar') }}</h4>
            <p class="text-gray-700 mb-2">{{ $t('location.directions.fromYugoVostocha.byCarDescription') }}</p>
            <h4 class="text-lg font-semibold text-gray-700">{{ $t('location.directions.byPublicTransport') }}</h4>
            <p class="text-gray-700">{{ $t('location.directions.fromYugoVostocha.byPublicTransportDescription') }}</p>
          </div>

          <!-- Направление из центра города -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ $t('location.directions.fromCenter.title') }}</h3>
            <h4 class="text-lg font-semibold text-gray-700">{{ $t('location.directions.byCar') }}</h4>
            <p class="text-gray-700 mb-2">{{ $t('location.directions.fromCenter.byCarDescription') }}</p>
            <h4 class="text-lg font-semibold text-gray-700">{{ $t('location.directions.byPublicTransport') }}</h4>
            <p class="text-gray-700">{{ $t('location.directions.fromCenter.byPublicTransportDescription') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

// Инициализация локализации
const { t, locale } = useI18n();

// Координаты вашего центра (пример: Караганда)
const latitude = ref(49.819276);
const longitude = ref(73.109803);

// Опции метки
const markerOptions = ref({
  preset: 'islands#icon',
  iconColor: '#1E90FF',
});

// Ссылка на метку
const placemarkRef = ref<any>(null);

// Функция инициализации карты
onMounted(() => {
  if (window.ymaps) {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [latitude.value, longitude.value],
        zoom: 15,
        controls: ['zoomControl', 'searchControl'],
      });

      const placemark = new ymaps.Placemark(map.getCenter(), {
        hintContent: t('location.placemarkHint'),
        balloonContent: t('location.placemarkBalloon'),
      }, {
        preset: markerOptions.value.preset,
        iconColor: markerOptions.value.iconColor,
      });

      placemarkRef.value = placemark;
      map.geoObjects.add(placemark);
    });
  } else {
    // Если ymaps нет в глобальном объекте, загрузите его
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU`;
    script.onload = () => {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          center: [latitude.value, longitude.value],
          zoom: 15,
          controls: ['zoomControl', 'searchControl'],
        });

        const placemark = new ymaps.Placemark(map.getCenter(), {
          hintContent: t('location.placemarkHint'),
          balloonContent: t('location.placemarkBalloon'),
        }, {
          preset: markerOptions.value.preset,
          iconColor: markerOptions.value.iconColor,
        });

        placemarkRef.value = placemark;
        map.geoObjects.add(placemark);
      });
    };
    document.head.appendChild(script);
  }
});

// Обновление метки при смене языка
watch(locale, (newLocale) => {
  if (placemarkRef.value) {
    placemarkRef.value.properties.set('hintContent', t('location.placemarkHint'));
    placemarkRef.value.properties.set('balloonContent', t('location.placemarkBalloon'));
  }
});
</script>

<style scoped>
/* Стилизация карты */
#map {
  border-radius: 0.5rem;
}

/* Адаптивные отступы и шрифты */
@media (max-width: 639px) {
  .text-4xl {
    font-size: 2.25rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }

  .text-lg {
    font-size: 1.125rem;
  }
}
</style>
