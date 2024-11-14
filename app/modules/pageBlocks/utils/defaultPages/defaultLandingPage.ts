import { TFunction } from "i18next";
import { PageBlockDto } from "~/modules/pageBlocks/dtos/PageBlockDto";
import { defaultFooter } from "../defaultFooter";
import { defaultHeader } from "../defaultHeader";
import Constants from "~/application/Constants";

export function defaultLandingPage({ t }: { t: TFunction }) {
  const blocks: PageBlockDto[] = [
    // Header
    { header: defaultHeader({ t }) },

    // Hero
    {
      hero: {
        style: "simple",
        headline: "Магазин канцелярских товаров и изделий «Бюрократ»",
        description: "Все для вашего офиса и работы: огромный выбор ручек, штампов и других канцелярских товаров высшего качества. Быстрая доставка, удобный заказ и широкий ассортимент для вашего комфорта.",
        image: "https://example.com/your-image-url.png",
        cta: [
          // {
          //   text: "Начать покупку",
          //   href: "/shop",
          //   isPrimary: true,
          // },
          {
            text: "Связаться с нами",
            href: "/contact",
            isPrimary: false,
          },
        ],
        topText: {
          text: "Простота и Качество →"
        },
        bottomText: {
          // link: {
          //   text: `Последнее обновление сайта: версия v${Constants.VERSION}`,
          //   href: "/changelog"
          // }
        }
      }
    },

    // Logo Clouds
    {
      logoClouds: {
        style: "withBrand",
        headline: "Оцените качество ведущих производителей штампов и печатей. Наши партнеры:",
        logos: [
          {
            alt: "Trodat",
            href: "https://www.trodat.net/",
            src: "https://www.trodat.net/fileadmin/user_upload/editors_int/int/en/logos/logo_int_en.jpg"
          },
          {
            alt: "Colop",
            href: "https://www.colop.com/",
            src: "https://www.colop.com/media/logo/stores/7/colop-logo.svg"
          }
        ]
      }
    },

    // Testimonials
    {
      testimonials: {
        style: "simple",
        headline: "Отзывы наших клиентов",
        subheadline: "Посмотрите, как «Бюрократ» помогает другим!",
        items: [
          {
            name: "Анна Смирнова",
            avatar: "",
            company: "ООО \"Прогресс\"",
            companyUrl: "",
            logoLightMode: "",
            logoDarkMode: "",
            quote: "Бюрократ проделал потрясающую работу, оптимизировав наши внутренние процессы. Работа стала более структурированной, а наша команда — продуктивнее.",
            personalWebsite: "",
            role: "Руководитель отдела развития"
          },
          {
            name: "Сергей Иванов",
            avatar: "",
            company: "АО \"ТехИнновации\"",
            companyUrl: "",
            logoLightMode: "",
            logoDarkMode: "",
            quote: "Отличное партнерство! Благодаря работе с компанией Бюрократ мы сократили бюрократические издержки и ускорили принятие решений.",
            personalWebsite: "",
            role: "Директор по операционной деятельности"
          },
          {
            name: "Елена Петрова",
            avatar: "",
            company: "ООО \"Альфа Консалтинг\"",
            companyUrl: "",
            logoLightMode: "",
            logoDarkMode: "",
            quote: "Команда Бюрократ понимает специфику нашей сферы и предложила решения, которые реально облегчают наши повседневные задачи.",
            personalWebsite: "",
            role: "Финансовый аналитик"
          },
          {
            name: "Михаил Козлов",
            avatar: "",
            company: "ЗАО \"Бизнес Точка\"",
            companyUrl: "",
            logoLightMode: "",
            logoDarkMode: "",
            quote: "Наше взаимодействие с Бюрократом стало для нас важным шагом. С ними нам удалось улучшить наши бизнес-процессы и оптимизировать документооборот.",
            personalWebsite: "",
            role: "Управляющий партнер"
          },
          {
            name: "Ирина Васильева",
            avatar: "",
            company: "ООО \"ГлобалТрейд\"",
            companyUrl: "",
            logoLightMode: "",
            logoDarkMode: "",
            quote: "Очень довольны результатами! Бюрократ помог нам систематизировать управление и внедрить более эффективные процессы.",
            personalWebsite: "",
            role: "HR-директор"
          }
        ]
      }
    },

    // Footer
    {
      footer: defaultFooter({ t }),
    },
  ];
  return blocks;
}
