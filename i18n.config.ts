// i18n.config.ts
import { defineI18nConfig } from '#imports';
import { createI18n } from 'vue-i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'en',
  messages: {
    kk: {
        "title": "НАО \"Ұлттық гигиена орталығы\"",
        "menu": {
          "about": "Орталық туралы",
          "history": "Тарихы",
          "values": "Миссия және құндылықтар",
          "management": "Басшылық",
          "partners": "Серіктестер",
          "science": "Ғылыми қызмет",
          "elders_council": "Аксакалдар кеңесі",
          "research": "Зерттеулер",
          "publications": "Публикациялар",
          "conferences": "Конференциялар",
          "young_scientists": "Жас ғалымдар",
          "clinics": "Клиникалар",
          "main_clinic": "Негізгі клиника",
          "dental_clinic": "Стоматологиялық клиника",
          "education": "Білім беру",
          "programs": "Оқу бағдарламалары",
          "library": "Кітапхана",
          "scholarships": "Стипендиялар",
          "contacts": "Байланыстар",
          "contact_us": "Бізбен байланысу",
          "location": "Мекен-жайы және карта",
          "goszakupki": "Мемлекеттік сатып алум",
          "biblioteka":"кітапхана"
        },
        "footer": {
          "quick_links": "Жылдам сілтемелер",
          "contact_info": "Байланыс ақпараты",
          "address": "Мекен-жайы",
          "phone": "Телефон",
          "email": "Электронды пошта",
          "description": "ҚР Ұлттық еңбек гигиенасы және кәсіби аурулар орталығы. Біз жұмысшылардың денсаулығы мен қауіпсіздігін жақсартуға ұмтыламыз."
        },
        "hero": {
          "title": "Қазақстанның Еңбек Гигиенасы және Кәсіби Аурулардың Ұлттық Орталығы",
          "subtitle": "Біздің орталықтың миссиясы — еңбек етушілердің денсаулығы мен қауіпсіздігін қамтамасыз ету.",
          "description1": "Қазақстанның Еңбек Гигиенасы және Кәсіби Аурулардың Ұлттық Орталығы еңбек етушілердің денсаулығын сақтау және кәсіби аурулардың алдын алу саласында маңызды рөл атқарады.",
          "description2": "Біз озық медициналық қызметтерді ұсынамыз, зерттеулер жүргіземіз және еңбек гигиенасы саласындағы мамандарды оқытамыз.",
          "cta": "Толығырақ білу"
        },
        "professionalism": {
          "title": "Біздің Кәсіби Қабілетіміз",
          "subtitle": "Тәжірибелі мамандар мен заманауи зерттеулер",
          "description": "Біздің орталық еңбек гигиенасы және кәсіби аурулардың алдын алу саласында көпжылдық тәжірибесі бар жоғары білікті мамандарды біріктіреді. Біз жаңашыл зерттеулер жүргіземіз, заманауи технологияларды енгіземіз және қызметкерлеріміздің білімін үздіксіз арттырамыз."
        },
        "quality": {
          "title": "Қызмет Көрсету Сапасы",
          "subtitle": "Жоғары стандарттар және жеке тәсіл",
          "description": "Біз әрбір клиентке жеке тәсілмен жоғары сапалы қызмет көрсетуге ұмтыламыз. Біздің әдістеріміз алдыңғы қатарлы ғылыми жетістіктер мен халықаралық стандарттарға негізделген, бұл тиімді және сенімді қызмет көрсетуді қамтамасыз етеді.",
          "testimonials": [
            {
              "quote": "Тамаша қызмет көрсету және кәсіби тәсіл. Орталық менің жұмыс орнымдағы еңбек жағдайларын жақсартуға көмектесті.",
              "author": "Иван Петров"
            },
            {
              "quote": "Орталықтың арқасында мен еңбек гигиенасы мәселелерінде қажетті қолдау мен кеңес алдым.",
              "author": "Мария Сидорова"
            }
          ]
        },
        "support": {
          "title": "Халықты Қолдау",
          "subtitle": "Еңбек етушілердің денсаулығын қамтамасыз етуге арналған бастамалар мен бағдарламалар",
          "programs": {
            "education": {
              "title": "Білім Беру Бағдарламалары",
              "description": "Біз мамандардың біліктілігін арттыру және халықты еңбек гигиенасының маңызды аспектілері туралы хабардар ету үшін курстар мен семинарлар ұйымдастырамыз."
            },
            "medical": {
              "title": "Медициналық Қызметтер",
              "description": "Біздің медициналық қызметтеріміз кәсіби ауруларға тап болған еңбек етушілерге кеңес беру, тексеру және емдеу қызметтерін ұсынады."
            },
            "research": {
              "title": "Зерттеу Жобалары",
              "description": "Біз еңбек жағдайларының еңбек етушілердің денсаулығына әсерін зерттеуге және алдын алу үшін тиімді әдістерді әзірлеуге бағытталған зерттеулер жүргіземіз."
            }
          }
        },
        "stateProcurements": {
    "title": "Мемлекеттік сатып алулар",
    "generalInfoTitle": "Жалпы ақпарат",
    "generalInfoParagraph1": "Мемлекеттік сатып алулар мемлекеттік мекемелерді қажетті тауарлармен және қызметтермен қамтамасыз етуде маңызды рөл атқарады. Гигиена және еңбек саласындағы мемлекеттік сатып алулардың басты мақсаттары мен міндеттері медициналық жабдықтарды, зертханалық реагенттерді және басқа да қажетті ресурстарды сатып алуда ашықтықты, тиімділікті және экономикалық негізділікті қамтамасыз ету болып табылады.",
    "generalInfoParagraph2": "Қазақстанда мемлекеттік сатып алуларды реттеуге келесі нормативтік-құқықтық актілер қолданылады:",
    "generalInfoLink1": "Қазақстан Республикасының \"Мемлекеттік сатып алулар туралы\" Заңы",
    "generalInfoItem2": "Мемлекеттік сатып алуларды жүргізу ережелері",
    "generalInfoItem3": "Қазақстан Республикасы Үкіметінің қаулылары",
    "plansTitle": "Сатып алу жоспарлары",
    "plansParagraph": "Денсаулық сақтау министрлігі жыл сайын сатып алу жоспарларын жариялайды, олар жылдық және тоқсандық жоспарларды қамтиды. Бұл жоспарларда сатып алудың мерзімдері, көлемдері және сатып алынатын тауарлар мен қызметтердің түрлері көрсетілген.",
    "plansLink": "Жылдық сатып алу жоспарларын қарау",
    "tendersTitle": "Сатып алу хабарландырулары",
    "tendersParagraph": "Төменде қазіргі тендерлер тізімі, қысқаша сипаттамалары, өтінімдерді беру мерзімдері және егжей-тегжейлі ақпаратқа сілтемелер берілген.",
    "table": {
      "number": "№",
      "name": "Атауы",
      "startDate": "Басталу күні",
      "endDate": "Аяқталу күні",
      "status": "Мәртебесі"
    },
    "documentationTitle": "Құжаттама",
    "documentationParagraph": "Мұнда сіз тендерге қатысуға арналған өтінімдер, келісім-шарттар және басқа құжаттардың қажетті үлгілерін таба аласыз.",
    "documentationLink1": "Тендер өтінімінің үлгісі",
    "documentationLink2": "Келісім-шарт үлгісі",
    "documentationLink3": "Пішіндерді толтыру бойынша нұсқаулық",
    "registryTitle": "Жеткізушілер тізілімі",
    "registryParagraph": "Жеткізушілер тізіліміне министрліктің сатып алуларына қатысуға аккредиттелген компаниялар кіреді. Төменде тізілімге енгізілген компаниялар туралы ақпарат, сондай-ақ тізілімге енгізу критерийлері мен рәсімдері келтірілген.",
    "registryLink1": "Аккредиттелген жеткізушілер тізімі",
    "registryItem2": "Жеткізушілер тізіліміне енгізу критерийлері",
    "registryItem3": "Аккредитация рәсімдері",
    "contactInfoTitle": "Байланыс ақпараты",
    "contactInfoParagraph": "Мемлекеттік сатып алулар бойынша қосымша ақпарат алу үшін біздің мамандармен байланыса аласыз.",
    "contactInfoName": "Аты-жөні",
    "contactInfoPosition": "Лауазымы",
    "contactInfoEmail": "Email",
    "contactInfoPhone": "Телефон",
    "contactFormEmailLabel": "Сіздің Email:",
    "contactFormMessageLabel": "Хабарлама:",
    "contactFormMessagePlaceholder": "Сіздің хабарламаңыз",
    "contactFormSubmit": "Жіберу",
    "faqTitle": "Жиі қойылатын сұрақтар (FAQ)",
    "faqQuestion1": "Тендерге қатысуға өтінімді қалай беру керек?",
    "faqAnswer1": "Өтінімді беру үшін тиісті құжаттама үлгісін жүктеп алып, барлық қажетті өрістерді толтырып, көрсетілген электрондық поштаға белгіленген мерзімге дейін жіберу керек.",
    "faqQuestion2": "Жеткізушілерді іріктеу критерийлері қандай?",
    "faqAnswer2": "Негізгі іріктеу критерийлеріне ұсынылатын өнімнің сапасы, техникалық талаптарға сәйкестігі, бәсекеге қабілетті бағалар және осы саладағы жұмыс тәжірибесі жатады.",
    "newsTitle": "Жаңалықтар мен жаңартулар",
    "newsItem1Title": "Сатып алулар туралы заңнамадағы өзгерістер",
    "newsItem1Description": "01.07.2024 ж. бастап мемлекеттік сатып алу процестерін реттейтін, ашықтықты және тиімділікті арттыруға бағытталған жаңа нормалар күшіне енді.",
    "newsItem2Title": "2025 жылға арналған жаңа тендерлер",
    "newsItem2Description": "Денсаулық сақтау министрлігі 2025 жылға арналған медициналық жабдықтар мен шығыс материалдарын жеткізу бойынша жаңа тендерлерді жариялады. Өтінімдерді қабылдау мерзімдері: 15.09.2024-тен 15.10.2024-ке дейін.",
    "feedbackTitle": "Кері байланыс және шағымдар",
    "feedbackParagraph": "Егер сізде мемлекеттік сатып алуларға байланысты сұрақтар, ұсыныстар немесе шағымдар болса, төмендегі кері байланыс формасы арқылы немесе көрсетілген байланыс деректері бойынша бізге хабарласыңыз.",
    "feedbackFormNameLabel": "Сіздің атыңыз:",
    "feedbackFormNamePlaceholder": "Сіздің атыңыз",
    "feedbackFormEmailLabel": "Сіздің Email:",
    "feedbackFormMessageLabel": "Сіздің хабарламаңыз:",
    "feedbackFormMessagePlaceholder": "Шағымыңызды немесе ұсынысыңызды сипаттаңыз",
    "feedbackFormSubmit": "Жіберу",
    "additionalResourcesTitle": "Қосымша ресурстар",
    "additionalResource1": "Қазақстан Республикасының мемлекеттік сатып алулар порталы",
    "additionalResource2": "Тендерлерге қатысу бойынша нұсқаулық",
    "additionalResource3": "Жиі қойылатын сұрақтар"
  }
      },
    ru: {
        "title": "НАО \"Национальный центр гигиены\"",
        "library": {
    "loginTitle": "Вход в Библиотеку",
    "username": "Логин",
    "password": "Пароль",
    "usernamePlaceholder": "Введите ваш логин",
    "passwordPlaceholder": "Введите ваш пароль",
    "loginButton": "Войти",
    "invalidCredentials": "Неверный логин и пароль",
    "fillAllFields": "Пожалуйста, заполните все поля",},
        "menu": {
          "about": "О центре",
          "history": "История",
          "values": "Миссия и ценности",
          "management": "Руководство",
          "partners": "Наши партнёры",
          "science": "Научная деятельность",
          "elders_council": "Совет аксакалов",
          "research": "Исследования",
          "publications": "Публикации",
          "conferences": "Конференции",
          "young_scientists": "Молодые учёные",
          "clinics": "Клиники",
          "main_clinic": "Основная клиника",
          "dental_clinic": "Стоматологическая клиника",
          "education": "Образование",
          "programs": "Учебные программы",
          "library": "Библиотека",
          "scholarships": "Стипендии",
          "contacts": "Контакты",
          "contact_us": "Связаться с нами",
          "location": "Локация и карта",
          "goszakupki": "Госзакупки", 
    "biblioteka": "Библиотека"
        },
        "footer": {
          "quick_links": "Быстрые ссылки",
          "contact_info": "Контактная информация",
          "address": "Адрес",
          "phone": "Телефон",
          "email": "Электронная почта",
          "description": "НАО \"Национальный центр гигиены труда и профессиональных заболеваний Казахстана\". Мы стремимся к улучшению здоровья и безопасности трудящихся."
        },
        "hero": {
          "title": "Национальный Центр Гигиены Труда и Профессиональных Заболеваний",
          "subtitle": "Миссия нашего центра — обеспечение здоровья и безопасности трудящихся.",
          "description1": "Национальный Центр Гигиены Труда и Профессиональных Заболеваний играет ключевую роль в поддержании здоровья рабочих и предотвращении профессиональных заболеваний в Казахстане.",
          "description2": "Мы предоставляем передовые медицинские услуги, проводим исследования и обучаем специалистов в области гигиены труда.",
          "cta": "Узнать больше"
        },
        "professionalism": {
          "title": "Наш Профессионализм",
          "subtitle": "Опытные специалисты и передовые исследования",
          "description": "Наш центр объединяет высококвалифицированных специалистов с многолетним опытом работы в области гигиены труда и профилактики профессиональных заболеваний. Мы проводим новаторские исследования, внедряем современные технологии и постоянно повышаем уровень знаний наших сотрудников."
        },
        "quality": {
          "title": "Качество Обслуживания",
          "subtitle": "Высокие стандарты и индивидуальный подход",
          "description": "Мы стремимся предоставлять услуги наивысшего качества, обеспечивая индивидуальный подход к каждому клиенту. Наши методы основаны на передовых научных достижениях и международных стандартах, что гарантирует эффективное и надежное обслуживание.",
          "testimonials": [
            {
              "quote": "Отличный сервис и профессиональный подход. Центр помог мне улучшить условия труда на моем рабочем месте.",
              "author": "Иван Петров"
            },
            {
              "quote": "Благодаря Центру я получил необходимую поддержку и консультации по вопросам гигиены труда.",
              "author": "Мария Сидорова"
            }
          ]
        },
        "support": {
          "title": "Поддержка Населения",
          "subtitle": "Инициативы и программы для обеспечения здоровья трудящихся",
          "programs": {
            "education": {
              "title": "Образовательные Программы",
              "description": "Мы организуем курсы и семинары для повышения квалификации специалистов и информирования населения о важных аспектах гигиены труда."
            },
            "medical": {
              "title": "Медицинские Услуги",
              "description": "Наши медицинские службы предоставляют консультации, обследования и лечение для работников, сталкивающихся с профессиональными заболеваниями."
            },
            "research": {
              "title": "Исследовательские Проекты",
              "description": "Мы проводим исследования, направленные на изучение влияния условий труда на здоровье работников и разработку эффективных методов профилактики."
            }
          }
        },
        "stateProcurements": {
    "title": "Государственные Закупки",
    "generalInfoTitle": "Общая информация",
    "generalInfoParagraph1": "Государственные закупки играют ключевую роль в обеспечении государственных учреждений необходимыми товарами и услугами. Основные цели и задачи государственных закупок в сфере гигиены и труда включают обеспечение прозрачности, эффективности и экономической целесообразности при приобретении медицинского оборудования, лабораторных реагентов и других необходимых ресурсов.",
    "generalInfoParagraph2": "Для регулирования государственных закупок в Казахстане применяются следующие нормативно-правовые акты:",
    "generalInfoLink1": "Закон Республики Казахстан \"О государственных закупках\"",
    "generalInfoItem2": "Правила проведения государственных закупок",
    "generalInfoItem3": "Постановления Правительства Республики Казахстан",
    "plansTitle": "Планы закупок",
    "plansParagraph": "Министерство здравоохранения ежегодно публикует планы закупок, которые включают как годовые, так и квартальные планы. В этих планах указаны сроки проведения закупок, объемы и виды приобретаемых товаров и услуг.",
    "plansLink": "Смотреть годовые планы закупок",
    "tendersTitle": "Объявления о закупках",
    "tendersParagraph": "Ниже представлен список текущих тендеров с кратким описанием, сроками подачи заявок и ссылками на подробную информацию.",
    "table": {
      "number": "№",
      "name": "Название",
      "startDate": "Дата Начала",
      "endDate": "Дата Окончания",
      "status": "Статус"
    },
    "documentationTitle": "Документация",
    "documentationParagraph": "Здесь вы можете найти необходимые шаблоны заявок, договоров и других документов для участия в государственных закупках.",
    "documentationLink1": "Шаблон заявки на тендер",
    "documentationLink2": "Шаблон договора",
    "documentationLink3": "Руководство по заполнению форм",
    "registryTitle": "Реестр поставщиков",
    "registryParagraph": "В реестр поставщиков включаются компании, прошедшие аккредитацию для участия в закупках министерства. Ниже приведена информация о компаниях, включённых в реестр, а также критерии и процедуры для включения.",
    "registryLink1": "Список аккредитованных поставщиков",
    "registryItem2": "Критерии для включения в реестр поставщиков",
    "registryItem3": "Процедуры аккредитации",
    "contactInfoTitle": "Контактная информация",
    "contactInfoParagraph": "Для получения дополнительной информации по вопросам государственных закупок, вы можете связаться с нашими специалистами.",
    "contactInfoName": "Имя",
    "contactInfoPosition": "Должность",
    "contactInfoEmail": "Email",
    "contactInfoPhone": "Телефон",
    "contactFormEmailLabel": "Ваш Email:",
    "contactFormMessageLabel": "Сообщение:",
    "contactFormMessagePlaceholder": "Ваше сообщение",
    "contactFormSubmit": "Отправить",
    "faqTitle": "Часто задаваемые вопросы (FAQ)",
    "faqQuestion1": "Как подать заявку на участие в тендере?",
    "faqAnswer1": "Для подачи заявки необходимо скачать соответствующий шаблон документации, заполнить все необходимые поля и отправить на указанный электронный адрес до установленного срока.",
    "faqQuestion2": "Какие критерии отбора поставщиков?",
    "faqAnswer2": "Основные критерии отбора включают качество предлагаемой продукции, соответствие техническим требованиям, конкурентоспособные цены и опыт работы в данной сфере.",
    "newsTitle": "Новости и обновления",
    "newsItem1Title": "Изменения в законодательстве о закупках",
    "newsItem1Description": "01.07.2024 г. вступили в силу новые нормы, регулирующие процессы государственных закупок, направленные на повышение прозрачности и эффективности.",
    "newsItem2Title": "Новые тендеры на 2025 год",
    "newsItem2Description": "Министерство здравоохранения объявило о новых тендерах на поставку медицинского оборудования и расходных материалов на 2025 год. Сроки подачи заявок: с 15.09.2024 по 15.10.2024.",
    "feedbackTitle": "Обратная связь и жалобы",
    "feedbackParagraph": "Если у вас есть вопросы, предложения или жалобы, связанные с государственными закупками, пожалуйста, свяжитесь с нами через форму обратной связи ниже или по указанным контактным данным.",
    "feedbackFormNameLabel": "Ваше Имя:",
    "feedbackFormNamePlaceholder": "Ваше имя",
    "feedbackFormEmailLabel": "Ваш Email:",
    "feedbackFormMessageLabel": "Ваше сообщение:",
    "feedbackFormMessagePlaceholder": "Опишите вашу жалобу или предложение",
    "feedbackFormSubmit": "Отправить",
    "additionalResourcesTitle": "Дополнительные ресурсы",
    "additionalResource1": "Портал государственных закупок Республики Казахстан",
    "additionalResource2": "Руководство по участию в тендерах",
    "additionalResource3": "Часто задаваемые вопросы"
  },
      },
      
    en: {
        "title": "JSC \"National Center of Hygiene\"",
        "menu": {
          "about": "About Us",
          "history": "History",
          "values": "Mission and Values",
          "management": "Management",
          "partners": "Our Partners",
          "science": "Scientific Activities",
          "elders_council": "Council of Elders",
          "research": "Research",
          "publications": "Publications",
          "conferences": "Conferences",
          "young_scientists": "Young Scientists",
          "clinics": "Clinics",
          "main_clinic": "Main Clinic",
          "dental_clinic": "Dental Clinic",
          "education": "Education",
          "programs": "Educational Programs",
          "library": "Library",
          "scholarships": "Scholarships",
          "contacts": "Contacts",
          "contact_us": "Contact Us",
          "location": "Location and Map",
          "goszakupki": "Government procurement",
          "biblioteka":"library"
        },
        "footer": {
          "quick_links": "Quick Links",
          "contact_info": "Contact Information",
          "address": "Address",
          "phone": "Phone",
          "email": "Email",
          "description": "JSC \"National Center of Labor Hygiene and Occupational Diseases of Kazakhstan\". We strive to improve the health and safety of workers."
        },
        "hero": {
          "title": "National Center for Occupational Hygiene and Professional Diseases",
          "subtitle": "Our center's mission is to ensure the health and safety of workers.",
          "description1": "The National Center for Occupational Hygiene and Professional Diseases plays a key role in maintaining the health of workers and preventing professional diseases in Kazakhstan.",
          "description2": "We provide advanced medical services, conduct research, and train specialists in the field of occupational hygiene.",
          "cta": "Learn More"
        },
        "professionalism": {
          "title": "Our Professionalism",
          "subtitle": "Experienced specialists and advanced research",
          "description": "Our center brings together highly qualified specialists with years of experience in occupational hygiene and the prevention of professional diseases. We conduct innovative research, implement modern technologies, and continuously enhance the knowledge of our staff."
        },
        "quality": {
          "title": "Quality of Service",
          "subtitle": "High standards and individual approach",
          "description": "We strive to provide the highest quality services, ensuring an individual approach to each client. Our methods are based on cutting-edge scientific achievements and international standards, guaranteeing effective and reliable service.",
          "testimonials": [
            {
              "quote": "Excellent service and professional approach. The center helped me improve the working conditions at my workplace.",
              "author": "Ivan Petrov"
            },
            {
              "quote": "Thanks to the center, I received the necessary support and consultations on occupational hygiene issues.",
              "author": "Maria Sidorova"
            }
          ]
        },
        "support": {
          "title": "Support for the Population",
          "subtitle": "Initiatives and programs to ensure the health of workers",
          "programs": {
            "education": {
              "title": "Educational Programs",
              "description": "We organize courses and seminars to enhance the qualifications of specialists and inform the public about important aspects of occupational hygiene."
            },
            "medical": {
              "title": "Medical Services",
              "description": "Our medical services provide consultations, examinations, and treatment for workers facing professional diseases."
            },
            "research": {
              "title": "Research Projects",
              "description": "We conduct research aimed at studying the impact of working conditions on the health of workers and developing effective prevention methods."
            }
          }
        },
        "stateProcurements": {
    "title": "State Procurements",
    "generalInfoTitle": "General Information",
    "generalInfoParagraph1": "State procurements play a key role in providing government institutions with necessary goods and services. The main objectives and tasks of state procurements in the field of hygiene and labor include ensuring transparency, efficiency, and economic feasibility when acquiring medical equipment, laboratory reagents, and other essential resources.",
    "generalInfoParagraph2": "The following regulatory acts apply to state procurements in Kazakhstan:",
    "generalInfoLink1": "Law of the Republic of Kazakhstan 'On State Procurements'",
    "generalInfoItem2": "Rules for conducting state procurements",
    "generalInfoItem3": "Government resolutions of the Republic of Kazakhstan",
    "plansTitle": "Procurement Plans",
    "plansParagraph": "The Ministry of Health publishes annual procurement plans, which include both annual and quarterly plans. These plans specify the timelines for procurements, volumes, and types of goods and services to be acquired.",
    "plansLink": "View annual procurement plans",
    "tendersTitle": "Procurement Announcements",
    "tendersParagraph": "Below is a list of current tenders with a brief description, application deadlines, and links to detailed information.",
    "table": {
      "number": "No.",
      "name": "Name",
      "startDate": "Start Date",
      "endDate": "End Date",
      "status": "Status"
    },
    "documentationTitle": "Documentation",
    "documentationParagraph": "Here you can find the necessary templates for applications, contracts, and other documents to participate in state procurements.",
    "documentationLink1": "Tender application template",
    "documentationLink2": "Contract template",
    "documentationLink3": "Form filling guide",
    "registryTitle": "Supplier Registry",
    "registryParagraph": "The supplier registry includes companies accredited to participate in the ministry's procurements. Below is information on the companies included in the registry as well as criteria and procedures for inclusion.",
    "registryLink1": "List of accredited suppliers",
    "registryItem2": "Criteria for inclusion in the supplier registry",
    "registryItem3": "Accreditation procedures",
    "contactInfoTitle": "Contact Information",
    "contactInfoParagraph": "For additional information on state procurements, you can contact our specialists.",
    "contactInfoName": "Name",
    "contactInfoPosition": "Position",
    "contactInfoEmail": "Email",
    "contactInfoPhone": "Phone",
    "contactFormEmailLabel": "Your Email:",
    "contactFormMessageLabel": "Message:",
    "contactFormMessagePlaceholder": "Your message",
    "contactFormSubmit": "Submit",
    "faqTitle": "Frequently Asked Questions (FAQ)",
    "faqQuestion1": "How to submit an application for tender participation?",
    "faqAnswer1": "To submit an application, download the appropriate documentation template, fill out all required fields, and send it to the specified email before the deadline.",
    "faqQuestion2": "What are the supplier selection criteria?",
    "faqAnswer2": "The main selection criteria include the quality of the offered products, compliance with technical requirements, competitive prices, and experience in the field.",
    "newsTitle": "News and Updates",
    "newsItem1Title": "Changes in procurement legislation",
    "newsItem1Description": "As of 01.07.2024, new norms regulating state procurement processes have come into effect, aimed at enhancing transparency and efficiency.",
    "newsItem2Title": "New tenders for 2025",
    "newsItem2Description": "The Ministry of Health announced new tenders for the supply of medical equipment and consumables for 2025. Application deadlines: from 15.09.2024 to 15.10.2024.",
    "feedbackTitle": "Feedback and Complaints",
    "feedbackParagraph": "If you have questions, suggestions, or complaints regarding state procurements, please contact us through the feedback form below or via the provided contact details.",
    "feedbackFormNameLabel": "Your Name:",
    "feedbackFormNamePlaceholder": "Your name",
    "feedbackFormEmailLabel": "Your Email:",
    "feedbackFormMessageLabel": "Your Message:",
    "feedbackFormMessagePlaceholder": "Describe your complaint or suggestion",
    "feedbackFormSubmit": "Submit",
    "additionalResourcesTitle": "Additional Resources",
    "additionalResource1": "State Procurement Portal of the Republic of Kazakhstan",
    "additionalResource2": "Guide to tender participation",
    "additionalResource3": "Frequently Asked Questions"
  }
      },
  },
}));

 