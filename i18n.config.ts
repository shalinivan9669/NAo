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
          "location": "Мекен-жайы және карта"
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
        }
      },
    ru: {
        "title": "НАО \"Национальный центр гигиены\"",
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
          "location": "Локация и карта"
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
        }
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
          "location": "Location and Map"
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
        }
      },
  },
}));

 