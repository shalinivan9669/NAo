<!-- pages/biblioteka.vue -->
<template>
  <div class="w-full">
    <!-- Хедер -->
    <header class="bg-blue-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <!-- Логотип или изображение журнала -->
        <div class="flex-shrink-0 mb-4 md:mb-0">
          <img src=" " alt="Обложка журнала" class="w-32 h-32 object-cover rounded-full mx-auto md:mx-0">
        </div>
        <!-- Название и описание -->
        <div class="md:ml-6 text-center md:text-left">
          <h1 class="text-3xl font-bold">Журнал «Гигиена труда и медицинская экология»</h1>
          <p class="mt-2 text-lg">Ежеквартальное научно-практическое издание</p>
        </div>
      </div>
    </header>

    <!-- Навигация -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a href="#home" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Главная
              </a>
              <a href="#about" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                О журнале
              </a>
              <a href="#submission" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Прием статей
              </a>
              <a href="#current-issue" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Текущий выпуск
              </a>
              <a href="#archives" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Архивы
              </a>
            </div>
          </div>
          <!-- Мобильное меню -->
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="menuOpen = !menuOpen" type="button" class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span class="sr-only">Открыть меню</span>
              <!-- Иконка меню -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Мобильное меню -->
      <div v-if="menuOpen" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <a href="#home" class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 bg-indigo-50 text-indigo-700 text-base font-medium">Главная</a>
          <a href="#about" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">О журнале</a>
          <a href="#submission" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">Прием статей</a>
          <a href="#current-issue" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">Текущий выпуск</a>
          <a href="#archives" class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium">Архивы</a>
        </div>
      </div>
    </nav>

    <!-- Основной контент -->
    <main>
      <!-- Главная -->
      <section id="home" class="bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <!-- Фото журнала -->
          <img src=" " alt="Обложка журнала" class="mx-auto mb-6 w-64 h-64 object-cover rounded-lg">
          <!-- Описание -->
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Журнал «Гигиена труда и медицинская экология» - ежеквартальное научно-практическое издание, в котором публикуются оригинальные статьи о теоретических, практических, методологических разработках в области гигиены, экологии, профессиональной патологии, методов ранней диагностики и лечения, экспертизы ранней диагностики и трудоспособности, медицинской и трудовой реабилитации, обоснования нормативно-методических документов для практического здравоохранения (Казахстан).
          </p>
        </div>
      </section>

      <!-- О журнале -->
      <section id="about" class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Персоналии -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-6">О журнале</h2>
            <!-- Персоналии -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Контакты -->
              <div>
                <h3 class="text-2xl font-semibold text-blue-700 mb-4">Персоналии</h3>
                <div class="bg-gray-50 shadow rounded-lg p-6">
                  <h4 class="text-xl font-semibold text-blue-600 mb-2">Контакты</h4>
                  <p class="text-gray-700">
                    Адрес редакции журнала:<br>
                    100017, г. Караганды, ул. Мустафина, 15<br>
                    Тел./факс: <a href="tel:+77212503930" class="text-blue-600 hover:underline">8(7212) 50-39-30</a>
                  </p>
                </div>
              </div>
              <!-- Редакционная коллегия -->
              <div>
                <h3 class="text-2xl font-semibold text-blue-700 mb-4">Редакционная коллегия</h3>
                <div class="bg-gray-50 shadow rounded-lg p-6">
                  <!-- Главный редактор -->
                  <div class="mb-6">
                    <h4 class="text-xl font-semibold text-blue-600">Главный редактор</h4>
                    <p class="text-gray-700">
                      Ертай Жалгаспаевич Отаров, д.м.н., уполномоченное лицо НАО «Национальный центр гигиены труда и профессиональных заболеваний»<br>
                      WoS: <a href="https://www.webofscience.com/wos/author/record/36825316" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/36825316</a>
                    </p>
                  </div>
                  <!-- Заместитель главного редактора -->
                  <div class="mb-6">
                    <h4 class="text-xl font-semibold text-blue-600">Заместитель главного редактора</h4>
                    <p class="text-gray-700">
                      Отарбаева М.Б., д.м.н., ассоциированный профессор, кафедры неврологии, психиатрии и реабилитологии, заведующая курсами повышения квалификации по медицине труда (Республика Казахстан)<br>
                      WoS: <a href="https://www.webofscience.com/wos/author/record/12859955" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/12859955</a>
                    </p>
                  </div>
                  <!-- Члены редакционной коллегии -->
                  <div>
                    <h4 class="text-xl font-semibold text-blue-600">Редакционная коллегия</h4>
                    <div class="mt-4 space-y-6">
                      <!-- Член 1 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Аманбекова А.У.</strong>, д.м.н., профессор, главный профпатолог НАО «НЦ ГТПЗ», председатель Республиканского Общественного объединения «Ассоциация врачей-профпатологов» (Республика Казахстан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/54901700" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/54901700</a>
                        </p>
                      </div>
                      <!-- Член 2 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Баттакова Ш.Б.</strong>, д.м.н., профессор кафедры неврологии, психиатрии и реабилитологии (Республика Казахстан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/46256243" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/46256243</a>
                        </p>
                      </div>
                      <!-- Член 3 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Бухтияров И.В.</strong>, заслуженный деятель науки РФ, д.м.н., профессор, академик РАН, директор ФГБНУ «Научно-исследовательский институт медицины труда имени академика Н.Ф.Измерова», заведующий кафедрой медицины труда, авиационно-космической и водолазной медицины Институт общественного здоровья им. Эрисмана Первого МГМУ им. И.М. Сеченова (Сеченовского университета), (Российская Федерация)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/49020390" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/49020390</a>
                        </p>
                      </div>
                      <!-- Член 4 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Алексеев А.В.</strong>, доктор PhD, заместитель директора по научной работе, заведующий испытательной лабораторий НАО «НЦ ГТПЗ»<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/46231247" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/46231247</a>
                        </p>
                      </div>
                      <!-- Член 5 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Мусина А.А.</strong>, д.м.н., профессор, заведующая кафедрой общественного здоровья и эпидемиологии Медицинского университета Астаны (Республика Казахстан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/25950806" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/25950806</a>
                        </p>
                      </div>
                      <!-- Член 6 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Султанбеков З.К.</strong>, д.м.н., профессор кафедры безопасность жизнедеятельности и охраны окружающей среды Восточно-Казахстанского технического университета им. Д. Серикбаева (Республика Казахстан)<br>
                          WoS: <span class="text-gray-500">нет данных</span>
                        </p>
                      </div>
                      <!-- Член 7 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Мамырбаев А.А.</strong>, д.м.н., профессор кафедры гигиенических дисциплин и профболезней Западно-Казахстанского медицинского университета, академик НАН, ВШК, АПМ, РАЕН, МАИН, заслуженный работник, почетный профессор Республики Казахстан (Республика Казахстан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/28686027" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/28686027</a>
                        </p>
                      </div>
                      <!-- Член 8 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Агзамова Г.С.</strong>, д.м.н., доцент, заведующая факультетской и госпитальной терапией №1 с профпатологией Ташкентской медицинской академии (Республика Узбекистан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/18674670" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/18674670</a>
                        </p>
                      </div>
                      <!-- Член 9 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Гребенева О.В.</strong>, д.м.н., главный научный сотрудник НАО «Национальный центр гигиены труда и профессиональных заболеваний» (Республика Казахстан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/56731549" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/56731549</a>
                        </p>
                      </div>
                      <!-- Член 10 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Потеряева Е.Л.</strong>, д.м.н., профессор, заведующая кафедрой неотложной терапии с эндокринологией и профпатологией факультета повышения квалификации и профессиональной переподготовки врачей ФГБОУ ВО «Новосибирский государственный медицинский университет» Министерства здравоохранения Российской Федерации, проректор по лечебной работе (Новосибирск, Россия)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/13269008" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/13269008</a>
                        </p>
                      </div>
                      <!-- Член 11 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Койгельдинова Ш.С.</strong>, д.м.н., профессор кафедры внутренних болезней НАО «КМУ»<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/38114571" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/38114571</a>
                        </p>
                      </div>
                      <!-- Член 12 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Досыбаева Г.Н.</strong>, д.м.н., ассоциированный профессор, заведующая кафедрой врач общей практики – 2 (ВОП-2) ЮКМА (Республика Казахстан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/20902319" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/20902319</a>
                        </p>
                      </div>
                      <!-- Член 13 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Карабалин С.К.</strong>, д.м.н., профессор кафедры нутрициологии и профилактической медицины КазНМУ им. С.Д. Асфендиярова МЗ международной академии информатизации (Республика Казахстан)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/712310" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/712310</a>
                        </p>
                      </div>
                      <!-- Член 14 -->
                      <div>
                        <p class="text-gray-700">
                          <strong>Бакиров А.Б.</strong>, д.м.н., профессор, заведующий кафедрой терапии и профессиональных болезней с курсом ИДПО, Академик АН РБ; Заслуженный врач РФ и РБ; заслуженный деятель науки РБ; Советник директора УФНИИ института медицины труда и экологии человека (Уфа, РБ, Россия)<br>
                          WoS: <a href="https://www.webofscience.com/wos/author/record/14761559" class="text-blue-600 hover:underline">https://www.webofscience.com/wos/author/record/14761559</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Политика журнала -->
          <div class="mt-12">
            <h2 class="text-3xl font-bold text-blue-800 mb-6">Политика журнала</h2>
            <!-- Цели и задачи -->
            <div class="bg-gray-50 shadow rounded-lg p-6 mb-6">
              <h3 class="text-2xl font-semibold text-blue-700 mb-4">Цели и задачи</h3>
              <p class="text-gray-700">
                Целью журнала является информирование ученых, врачей, специалистов из смежных областей науки и практики здравоохранения, преподавателей профильных кафедр о важнейших результатах фундаментальных и прикладных исследований в области медицины труда – гигиены труда и профессиональной патологии.
              </p>
              <p class="text-gray-700 mt-4">
                Задачи журнала:
              </p>
              <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Своевременная публикация результатов по актуальным и перспективным направлениям исследований по тематике журнала;</li>
                <li>Повышение уровня и качества обмена информацией между специалистами из различных регионов Республики Казахстан, стран ближнего и дальнего зарубежья;</li>
                <li>Расширение возможностей распространения и продвижения публикаций в научное информационное пространство в Казахстане и за рубежом с индексированием научных работ в ведущих зарубежных базах цитирования;</li>
                <li>Содействие повышению качества представляемых в редакцию журнала научных работ;</li>
                <li>Способствовать развитию медицины труда, как основы сохранения и укрепления здоровья работающего населения.</li>
              </ul>
            </div>
            <!-- Рецензирование -->
            <div class="bg-gray-50 shadow rounded-lg p-6 mb-6">
              <h3 class="text-2xl font-semibold text-blue-700 mb-4">Рецензирование</h3>
              <p class="text-gray-700">
                Информация о процессе рецензирования будет добавлена позже.
              </p>
            </div>
            <!-- Этика научных публикаций -->
            <div class="bg-gray-50 shadow rounded-lg p-6">
              <h3 class="text-2xl font-semibold text-blue-700 mb-4">Этика научных публикаций</h3>
              <p class="text-gray-700">
                Информация об этике научных публикаций будет добавлена позже.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Прием статей -->
      <section id="submission" class="bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-blue-800">Прием статей</h2>
          </div>
          <div class="mt-8">
            <!-- Отправка статей -->
            <div class="bg-white shadow rounded-lg p-6 mb-6">
              <h3 class="text-2xl font-semibold text-blue-700 mb-4">Отправка статей</h3>
              <p class="text-gray-700">
                Информация о том, как отправить статью, будет добавлена позже.
              </p>
            </div>
            <!-- Правила для авторов -->
            <div class="bg-white shadow rounded-lg p-6 mb-6">
              <h3 class="text-2xl font-semibold text-blue-700 mb-4">Правила для авторов</h3>
              <p class="text-gray-700 mb-4">
                При направлении статей в редакцию автору необходимо соблюдать следующее:
              </p>
              <ol class="list-decimal list-inside text-gray-700 space-y-2">
                <li>
                  Статья должна сопровождаться направлением от учреждения и иметь заключение экспертной комиссии о возможности публикации материалов исследований.
                </li>
                <li>
                  В выходных данных указываются: инициалы и фамилии авторов, название работы, название учреждения, в котором она выполнена, город.
                </li>
                <li>
                  Статья должна быть отпечатана в 2-х экземплярах и включать: резюме (не более 5-6 строк), ключевые слова (1-2 строки). Если статья на русском языке, то резюме представлять на казахском и английском языках и наоборот. Оригинальная статья должна включать актуальность, цель, материалы и методы, результаты исследования, выводы, литературу. Размер оригинальной статьи (включая все указанные разделы) не должен превышать – 8 страниц; для обзора - 10 страниц.
                </li>
                <li>
                  Статья обязательно подписывается всеми авторами. Указываются: имя, отчество, фамилия каждого автора, адрес, рабочий и домашний телефоны.
                </li>
                <li>
                  Статьи иностранных авторов, переведенные на русский язык, визируются переводчиком. Текст статьи, формулы, дозы, цифры должны быть тщательно выверены автором.
                </li>
                <li>
                  Статья должна быть набрана на компьютере в программе Word for Windows, шрифтом Times New Roman, кегль 12, через 1,0 интервала между строками, с полями сверху, снизу и справа 2 см, слева 4 см и распечатана на лазерном принтере. Ксерокопии допускаются только высокого качества. Статьи могут представляться на казахском, русском и английском языках.
                </li>
                <li>
                  Таблицы и рисунки должны быть представлены в тексте по мере их упоминания. В статье представленные рисунки или таблицы приводятся в соответствии с системой единиц СИ. Подписи к рисункам даются внизу. В них приводятся: название рисунка, объяснение названия всех кривых, букв, цифр и условных обозначений. Количество графического материала должно быть минимальным (не более 2—3); графики, схемы и диаграммы - контрастные, четкие и не должны быть перегружены текстовыми надписями.
                </li>
                <li>
                  Таблицы должны быть компактными, иметь название, их заголовка - точно соответствовать содержанию граф. Таблицы не должны дублировать графики, сокращение слов в таблицах не допускается. Таблицы должны быть озаглавлены и пронумерованы. Все математические формулы должны быть тщательно выверены. Фототаблицы не принимаются.
                </li>
                <li>
                  Сокращения допускаются лишь общепринятые в мировой практике (например, ЦНС, ЭКГ). В остальных случаях при первом упоминании термина дается его полное название, в скобках - сокращенное (аббревиатура), далее в тексте используется аббревиатура.
                </li>
                <li>
                  Список литературы дается на отдельном листе, в тексте в квадратных скобках - порядковый номер источника по мере упоминания цитируемой литературы. Количество источников в статье не должно превышать 15, в обзоре литературы - 50, за прошедшие 5-10 лет.
                  Если упоминается несколько работ одного автора, их нужно указывать по возрастанию годов издания. Статья, написанная коллективом авторов (более 4 человек), помещается в списке литературы по фамилии первого автора и указываются еще два автора, далее ставится "и др.". Если авторов всего 4, то указываются все авторы.
                  После фамилий авторов приводится полное название статьи, источника, год, том, номер, выпуск, страницы от и до. Для книг и сборников обязательно точное название, город, издательство, год.
                  Монография, написанная коллективом авторов (более 4 человек), помещается в списке по названию книги, затем через косую черту указываются фамилии трех авторов, а далее ставится "и др.".
                  В монографиях иностранных авторов, изданных на русском языке, после названия через двоеточие указывается, с какого языка сделан перевод.
                  Фамилии и все инициалы иностранных авторов в тексте даются в иностранной транскрипции.
                  Ссылки на неопубликованные работы, в том числе на авторефераты и диссертации, рабочие документы ВОЗ, не допускаются.
                </li>
                <li>
                  Статьи, оформленные не в соответствии с указанными правилами, возвращаются авторам без рассмотрения.
                </li>
                <li>
                  Статья, не соответствующая рубрике журнала, возвращается автору, и редакция журнала не несет ответственности за ее публикацию.
                </li>
                <li>
                  Рукописи, не принятые к печати, авторам не возвращаются.
                </li>
                <li>
                  Датой поступления статьи считается время поступления ее окончательного (переработанного) варианта.
                </li>
              </ol>
            </div>
            <!-- Авторские права -->
            <div class="bg-white shadow rounded-lg p-6 mb-6">
              <h3 class="text-2xl font-semibold text-blue-700 mb-4">Авторские права</h3>
              <p class="text-gray-700">
                Информация об авторских правах будет добавлена позже.
              </p>
            </div>
            <!-- Приватность -->
            <div class="bg-white shadow rounded-lg p-6">
              <h3 class="text-2xl font-semibold text-blue-700 mb-4">Приватность</h3>
              <p class="text-gray-700">
                Информация о политике приватности будет добавлена позже.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Текущий выпуск -->
      <section id="current-issue" class="bg-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-blue-800">Текущий выпуск</h2>
            <p class="mt-4 text-gray-700">
              Информация о текущем выпуске будет добавлена позже.
            </p>
          </div>
        </div>
      </section>

      <!-- Архивы -->
      <section id="archives" class="bg-gray-50 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-blue-800">Архивы</h2>
            <p class="mt-4 text-gray-700">
              Информация об архивах будет добавлена позже.
            </p>
          </div>
        </div>
      </section>

      <!-- Ссылки -->
      <section class="bg-white py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="flex flex-wrap justify-center space-x-4">
            <a href="#submission" class="text-blue-600 hover:underline">Отправить статью</a>
            <a href="#submission" class="text-blue-600 hover:underline">Правила для авторов</a>
            <a href="#about" class="text-blue-600 hover:underline">Редакционная коллегия</a>
            <a href="#about" class="text-blue-600 hover:underline">Рецензирование</a>
            <a href="#about" class="text-blue-600 hover:underline">Этика публикаций</a>
          </nav>
        </div>
      </section>
    </main>

    <!-- Футер -->
    <footer class="bg-blue-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>
          © {{ new Date().getFullYear() }} Журнал «Гигиена труда и медицинская экология»<br>
          Адрес редакции: 100017, г. Караганды, ул. Мустафина, 15<br>
          Тел./факс: <a href="tel:+77212503930" class="text-white hover:underline">8(7212) 50-39-30</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<style scoped>
/* Вы можете добавить дополнительные стили при необходимости */
</style>
