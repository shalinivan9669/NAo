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
      <div class="w-full h-max md:h-full">
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

        <!-- Информация о маршрутах -->
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ $t('location.howToGet.title') }}</h3>
        <p class="text-gray-700 mb-4">{{ $t('location.howToGet.description') }}</p>

        <!-- Список маршрутов -->
        <ul class="list-disc list-inside text-gray-700 mb-6">
          <li>{{ $t('location.howToGet.routes') }}</li>
        </ul>
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
watch(locale, () => {
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
