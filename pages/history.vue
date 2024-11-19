<template>
    <section class="history-section py-12 bg-gray-100">
      <!-- Введение -->
      <div class="container mx-auto px-6 mb-12">
        <h1 class="text-4xl font-bold text-blue-900 mb-6">История Центра</h1>
        <p class="text-lg text-gray-700 mb-8">
          Национальный центр гигиены труда и профессиональных заболеваний является ведущим научным учреждением Казахстана, занимающимся сохранением здоровья работающего населения и профилактикой профессиональных заболеваний. Центр осуществляет научно-исследовательскую деятельность в области медицины труда, медицинской экологии, а также координирует профпатологическую службу Казахстана, предоставляя специализированную медицинскую помощь больным с профессиональными заболеваниями.
        </p>
      </div>
  
      <!-- Миссия и Видение -->
      <div class="container mx-auto px-6 mb-12">
        <div class="mb-8">
          <h2 class="text-3xl font-semibold text-blue-800 mb-4">Миссия и Видение</h2>
          <div class="mb-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Миссия Центра</h3>
            <p class="text-gray-700">
              <strong>Миссия</strong> Национального центра гигиены труда и профессиональных заболеваний заключается в реализации государственной политики по охране и укреплению здоровья населения, сохранении трудового потенциала, координации гигиенических и профпатологической служб, а также в повышении качества и конкурентоспособности научных исследований в области экологии, гигиены и профпатологии.
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Видение Центра</h3>
            <p class="text-gray-700">
              <strong>Видение</strong> Центра – это эффективная система профилактической медицины, включающая гигиену и медицину труда, экологию человека, направленная на сохранение и развитие трудовых ресурсов. Здоровье работающего населения рассматривается как стратегический потенциал, фактор национальной безопасности и благополучия общества.
            </p>
          </div>
        </div>
      </div>
  
      <!-- Стратегические Направления и Приоритеты -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Стратегические Направления и Приоритеты</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Стратегические Направления -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Стратегические Направления</h3>
            <ol class="list-decimal list-inside text-gray-700 space-y-2">
              <li>Укрепление здоровья населения промышленных регионов Республики Казахстан.</li>
              <li>Повышение эффективности управления профпатологической службой в системе здравоохранения Республики Казахстан.</li>
              <li>Модернизация научно-исследовательской деятельности в области медицины труда, гигиены и медицинской экологии.</li>
              <li>Развитие системы кадровых ресурсов в области профпатологии, гигиены и медицинской экологии.</li>
            </ol>
          </div>
          <!-- Приоритетные Направления -->
          <div>
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Приоритетные Направления</h3>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Изучение основ формирования и управления здоровьем работающих в промышленных регионах.</li>
              <li>Разработка профилактики, ранней диагностики и эффективного лечения профессиональных заболеваний.</li>
              <li>Изучение воздействия экопроизводственных факторов на здоровье.</li>
              <li>Подготовка высококвалифицированных научных кадров.</li>
              <li>Участие в разработке нормативных актов и научно-технических документов.</li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- История Создания и Развития -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">История Создания и Развития</h2>
        <p class="text-gray-700 mb-6">
          Постановлением Совета Министров Казахской ССР от 16 января 1958 г. в Караганде был открыт Казахский научно-исследовательский институт гигиены труда и профзаболеваний Министерства здравоохранения Казахской ССР. В 1984 году институт вошел в состав Центрально-Казахстанского отделения Национальной Академии наук и переименован в НИИ физиологии и гигиены труда.
        </p>
        <p class="text-gray-700 mb-6">
          В 2002 году Постановлением Правительства № 1370 от 29.10.2001 г. институт переведен в ведение Министерства здравоохранения Республики Казахстан и переименован в «Национальный центр гигиены труда и профессиональных заболеваний» МЗ РК.
        </p>
        <div class="min-h-screen bg-gray-100 py-12">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-center text-blue-900 mb-12">История Центра</h1>
      <Timeline :events="events" />
    </div>
  </div>
        <!-- Фотогалерея -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <img src="" alt="Основание Центра" class="w-full h-60 object-cover rounded-lg shadow-md">
          <img src="" alt="Заседание Ученого Совета" class="w-full h-60 object-cover rounded-lg shadow-md">
        </div>
  
        <p class="text-gray-700 mb-6">
          На базе Национального центра с 1993 года по 31 декабря 2010 года действовал Диссертационный Совет по защите кандидатских и докторских диссертаций. Центр подготовил более 60 докторов и 150 кандидатов наук.
        </p>
  
        <!-- Руководители -->
        <div class="mb-12">
    <h3 class="text-2xl font-semibold text-gray-800 mb-6">Руководство Центра</h3>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div
        v-for="(leader, index) in leaders"
        :key="index"
        class="flex flex-col items-center text-center"
      >
        <img
          :src="leader.image"
          :alt="leader.name"
          class="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
        />
        <p class="text-center mt-4 font-semibold text-lg">{{ leader.name }}</p>
        <p class="text-center mt-1 text-sm text-gray-600">{{ leader.period }}</p>
      </div>
    </div>
  </div>
      </div>
  
      <!-- Структура Центра -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Структура Центра</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr>
                <th class="py-2 px-4 border-b text-left">Отделение</th>
                <th class="py-2 px-4 border-b text-left">Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b">Служба менеджмента научных исследований</td>
                <td class="py-2 px-4 border-b">Лаборатория менеджмента и моделирования медико-экологических исследований</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">Гигиенический отдел</td>
                <td class="py-2 px-4 border-b">Исследования в области гигиены труда</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">Клинический отдел</td>
                <td class="py-2 px-4 border-b">Клинические исследования и диагностика</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">Отдел медицинской экологии</td>
                <td class="py-2 px-4 border-b">Исследования воздействия экологических факторов на здоровье</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <!-- Клиника и Медицинские Услуги -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Клиника и Медицинские Услуги</h2>
        <p class="text-gray-700 mb-6">
          Клиника Национального центра располагает стационаром на 80 коек, состоящим из профессиональной неврологии, профессиональной терапии и платного отделения. Консультативно-диагностическое отделение включает кабинеты различных специалистов, лаборатории и диагностические кабинеты.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="" alt="Клиника Центра" class="w-full h-60 object-cover rounded-lg shadow-md">
          <img src="" alt="Специалисты Центра" class="w-full h-60 object-cover rounded-lg shadow-md">
        </div>
        <p class="text-gray-700 mt-6">
          В 2013 году был открыт аллергологический центр, оказывающий стационарзамещающую медицинскую помощь и консультативно-диагностическую помощь населению Караганды и Карагандинской области.
        </p>
      </div>
  
      <!-- Филиалы Центра -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Филиалы Центра</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Восточно-Казахстанский филиал -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-4">Восточно-Казахстанский филиал</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Терапевтическое профпатологическое отделение (25 коек)</li>
              <li>Неврологическое профпатологическое отделение (25 коек)</li>
              <li>Лаборатория региональных проблем ВКО</li>
            </ul>
          </div>
          <!-- Южно-Казахстанский филиал -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-4">Южно-Казахстанский филиал</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Профпатологическое отделение (20 коек)</li>
              <li>Лаборатория региональных проблем ЮКО</li>
            </ul>
          </div>
          <!-- Западно-Казахстанский филиал -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-2xl font-semibold text-blue-700 mb-4">Западно-Казахстанский филиал</h3>
            <ul class="list-disc list-inside text-gray-700">
              <li>Терапевтическое профпатологическое отделение (10 коек)</li>
              <li>Лаборатория региональных проблем ЗКО</li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Научные Достижения и Исследования -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Научные Достижения и Исследования</h2>
        <p class="text-gray-700 mb-6">
          Центр разработал множество концепций и моделей в области гигиены труда и медицинской экологии, проводил исследования воздействия экологических факторов на здоровье населения, создавал методики диагностики и профилактики профессиональных заболеваний.
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6">
          <li>Разработка экогигиенической концепции безопасного стажа горнорабочих.</li>
          <li>Создание концептуальной модели прогнозирования успешности трудовой деятельности.</li>
          <li>Исследования механизмов развития утомления при длительных физических нагрузках.</li>
          <li>Разработка методик оценки экологической ситуации.</li>
          <li>Изучение механизмов саморегуляции процессов адаптации.</li>
        </ul>
        <!-- Инфографика -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src="" alt="Научные исследования" class="w-full h-60 object-cover rounded-lg shadow-md">
          <img src="" alt="Научные разработки" class="w-full h-60 object-cover rounded-lg shadow-md">
        </div>
      </div>
  
      <!-- Международное Сотрудничество -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Международное Сотрудничество</h2>
        <p class="text-gray-700 mb-6">
          Центр активно сотрудничает с научными учреждениями различных стран, участвует в международных программах и конференциях, проводит мастер-классы с зарубежными экспертами.
        </p>
        <div class="flex flex-wrap gap-6">
          <img src="" alt="Партнер Франции" class="w-24 h-24 object-contain">
          <img src="" alt="Партнер Бельгии" class="w-24 h-24 object-contain">
          <img src="" alt="Партнер США" class="w-24 h-24 object-contain">
          <!-- Добавьте логотипы других партнеров аналогично -->
        </div>
        <p class="text-gray-700 mt-6">
          Сотрудники Центра выступали с докладами на международных форумах и конференциях, устанавливая тесные научные связи с ведущими мировыми центрами.
        </p>
      </div>
  
      <!-- Награды и Признание -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Награды и Признание</h2>
        <p class="text-gray-700 mb-6">
          Сотрудники Центра были награждены различными знаками отличия и медалями за вклад в развитие медицины труда и гигиены.
        </p>
        <div class="flex flex-wrap gap-6">
          <div class="w-1/2 md:w-1/4">
            <img src="" alt="Знак отличия" class="w-full h-40 object-contain rounded-lg shadow-md">
            <p class="text-center mt-2 font-semibold">Знак «Отличник здравоохранения»</p>
          </div>
          <div class="w-1/2 md:w-1/4">
            <img src="" alt="Международный сертификат" class="w-full h-40 object-contain rounded-lg shadow-md">
            <p class="text-center mt-2 font-semibold">Международный сертификат качества DQS</p>
          </div>
          <!-- Добавьте другие награды аналогично -->
        </div>
        <h3 class="text-2xl font-semibold text-gray-800 mt-6 mb-4">Научная Продукция</h3>
        <ul class="list-disc list-inside text-gray-700">
          <li>Журнал «Гигиена труда и медицинская экология»</li>
          <li>54 монографии</li>
          <li>Более 900 научных статей</li>
          <li>167 методических рекомендаций</li>
          <li>65 предпатентов</li>
        </ul>
      </div>
  
      <!-- Заключение -->
      <div class="container mx-auto px-6 mb-12">
        <h2 class="text-3xl font-semibold text-blue-800 mb-6">Заключение</h2>
        <p class="text-gray-700 mb-6">
          Национальный центр гигиены труда и профессиональных заболеваний продолжает свою миссию по охране здоровья работающего населения Казахстана, внедряя инновационные подходы и сотрудничая с международными партнёрами для достижения высоких стандартов в области гигиены и медицины труда.
        </p>
        <a href="/contacts" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Связаться с нами</a>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // Если необходимо добавить скрипты или импортировать компоненты, сделайте это здесь.
    import Timeline from '~/components/Timeline.vue';
    import { events } from '~/data/events.js';

    const leaders = [
  {
    name: 'З.К. Тулегенов',
    period: '1958–1970 гг.',
    image: '/images/leaders/tulegenov.jpg',
  },
  {
    name: 'А.П. Филин',
    period: '1970–1974 гг.',
    image: '/images/leaders/filin.jpg',
  },
  {
    name: 'Б.Е. Алтынбеков',
    period: '1974–1991 гг.',
    image: '/images/leaders/altynbekov.jpg',
  },
  {
    name: 'Г.А. Кулкыбаев',
    period: '1991–2006 гг.',
    image: '/images/leaders/kulkyaev.jpg',
  },
  {
    name: 'С.А. Ибраев',
    period: '2006–2007 гг.',
    image: '/images/leaders/ibraev.jpg',
  },
  {
    name: 'Е.Н. Сраубаев',
    period: '2007-2009 гг.',
    image: '/images/leaders/sraubayev.jpg',
  },
  {
    name: 'Ж.Е. Баттакова',
    period: '2009г.-2011г.',
    image: '/images/leaders/battakova.jpg',
  },
  {
    name: 'И.А. Аманжол',
    period: '2011-2013 гг.',
    image: '/images/leaders/amanzhol.jpg',
  },
  {
    name: 'К.З.Сакиев',
    period: '2013-2017гг.',
    image: '/images/leaders/sakiyev.jpg',
  },
  {
    name: 'Хамитов Т.Н.',
    period: '2017-2018гг.',
    image: '/images/leaders/khamitov.jpg',
  },
];
  </script>
  
  <style scoped>
  .history-section {
    font-family: 'Roboto', sans-serif;
  }
  
  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
  
  .text-blue-900 {
    color: #1e3a8a;
  }
  
  .text-blue-800 {
    color: #1e40af;
  }
  
  .text-gray-700 {
    color: #4b5563;
  }
  
  .text-gray-800 {
    color: #374151;
  }
  
  .bg-white {
    background-color: #ffffff;
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .mb-8 {
    margin-bottom: 2rem;
  }
  
  .mt-2 {
    margin-top: 0.5rem;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .mb-12 {
    margin-bottom: 3rem;
  }
  
  .p-6 {
    padding: 1.5rem;
  }
  
  .p-12 {
    padding: 3rem;
  }
  
  .container {
    max-width: 1200px;
  }
  
  .object-cover {
    object-fit: cover;
  }
  
  .object-contain {
    object-fit: contain;
  }
  
  .transition-opacity {
    transition: opacity 1s ease-in-out;
  }
  
  .inline-block {
    display: inline-block;
  }
  
  .bg-blue-600 {
    background-color: #2563eb;
  }
  
  .hover\:bg-blue-700:hover {
    background-color: #1d4ed8;
  }
  
  .transition {
    transition: all 0.3s ease;
  }
  
  .duration-300 {
    transition-duration: 300ms;
  }
  
  @media (max-width: 768px) {
    .h-60 {
      height: 15rem;
    }
  }
  </style>
  