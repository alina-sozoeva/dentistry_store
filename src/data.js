import { pathname } from "./enums";
import * as brands from "./assets/images/brendsLogo";
import * as cat_foto from "./assets/images/categories";
import * as edu_foto from "./assets/images/edu";
import * as models_img from "./assets/images/alltion";

export const categoriesLocal = [
  {
    key: "anesthesia",
    title: "Анестезия",
    slug: "anesthesia",
    img: cat_foto.anesthesia,
  },
  {
    key: "models",
    title: "Обучающие модели и симуляторы",
    slug: "models",
    img: cat_foto.models,
  },
  {
    key: "brands",
    title: "Бренды",
    slug: "brands",
    img: cat_foto.tools,
  },
  {
    key: "lab",
    title: "Зуботехническая лаборатория",
    slug: "lab",
    img: cat_foto.lab,
  },
  {
    key: "tools",
    title: "Инструменты",
    slug: "tools",
    img: cat_foto.tools,
  },
  {
    key: "orthodontics",
    title: "Ортодонтия",
    slug: "orthodontics",
    img: cat_foto.orthodontics,
  },
  {
    key: "orthopedics",
    title: "Ортопедия",
    slug: "orthopedics",
    img: cat_foto.orthopedics,
  },
  {
    key: "consumables",
    title: "Расходные материалы и СИЗ",
    slug: "consumables",
    img: cat_foto.consumables,
  },
  {
    key: "sterilization",
    title: "Стерилизационное оборудование и аксессуары",
    slug: "sterilization",
    img: cat_foto.sterilization,
  },
  {
    key: "cadcam",
    title: "СAD/CAM системы",
    slug: "cadcam",
    img: cat_foto.cadcam,
  },
  {
    key: "equipment",
    title: "Стоматологическое оборудование",
    slug: "equipment",
    img: cat_foto.tools,
  },
  {
    key: "therapy",
    title: "Терапия",
    slug: "therapy",
    img: cat_foto.therapy,
  },
  {
    key: "surgery",
    title: "Хирургия",
    slug: "surgery",
    img: cat_foto.surgery,
  },
  {
    key: "endodontics",
    title: "Эндодонтия",
    slug: "endodontics",
    img: cat_foto.endodontics,
  },
];

export const brandsItem = [
  {
    key: 1,
    title: "Graphy",
    img: brands.graphy,
    background: "#f4f3ef",
    path: pathname.GRAPHY,
  },
  {
    key: 2,
    title: "Dentis",
    img: brands.luvis,
    background: "#232323",
    path: pathname.DENTIS,
  },
  {
    key: 3,
    title: "Ecotron",
    img: brands.ecotorn_logo,
    background: "#f4f3ef",
    path: pathname.ECOTRON,
  },
  {
    key: 4,
    title: "Promis",
    img: brands.promis_logo,
    background: "#222222",
    path: pathname.PROMIS,
  },
  // {
  //   key: 5,
  //   title: "Charming dent",
  //   img: brands.charming_dent,
  //   background: "#f4f3ef",
  // },
  // {
  //   key: 6,
  //   title: "Foshan Tanture Medical Equipment \t",
  //   img: brands.foshan_tanture_logo,
  //   background: "#f4f3ef",
  // },
  {
    key: 7,
    title: "Alltion",
    img: brands.alltion,
    background: "#f4f3ef",
    path: pathname.ALLTION,
  },
  {
    key: 8,
    title: "LargeV",
    img: brands.largev,
    background: "#f4f3ef",
    path: pathname.LARGEV,

    // path: pathname.LARGEV,
  },
];

export const edu = [
  {
    key: 3,
    title: "Cеминар по инновационным элайнерам от Graphy",
    description:
      "Разберем передовые технологии. Узнаем, как элайнеры с памятью формируют меняют подход к ортодонтии. Обсудим эффективные кейсы и реальные результаты",
    date: "10 апреля 2025 г.",
    location: "г. Бишкек, Hyatt Regency",
    img: edu_foto.ap,
  },
  {
    key: 4,
    title: "Ортопедическая диагностика и планирование лечения 2.0",
    description:
      "Четырёхдневный практический курс для ортодонтов, где вы получите системный подход к диагностике и планированию лечения, основанный на реальной клинической практике. На курсе вы научитесь: определять ключевые параметры на диагностических моделях, составлять свой протокол оценки ТРГ (ёмкий, информативный, без лишнего), понимать стадии роста зубочелюстной системы и учитывать их в плане лечения, принимать клинически обоснованные решения об удалении или сохранении зубов, выявлять показания к скелетному расширению, оценивать состояние ВНЧС по данным КЛКТ, устанавливать наличие и характер асимметрий.",
    date: "16–19 октября 2025 г.",
    location: "г. Бишкек, Park Hotel",
    img: edu_foto.ap,
  },
];

export const users = [
  {
    login: "test",
    phone: "0555555555",
    password: 123,
  },
];

export const reviews = [
  {
    guid: "1",
    date: "26.06.2025",
    nameid: "Иванов Иван",
    raiting: 5,
    comment:
      "Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
  {
    guid: "2",
    date: "26.06.2025",
    nameid: "Петрова Анна",
    raiting: 5,
    comment:
      "Очень понравился подход доктора, всегда на связи и дает четкие рекомендации. Рекомендую! Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
  {
    guid: "3",
    date: "26.06.2025",
    nameid: "Смирнов Сергей",
    raiting: 5,
    comment:
      "Доктор с большой буквы! Очень помог мне с лечением, всё объяснил подробно и доступно. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
];

export const models = [
  {
    codeid: 1,
    nameid: "ANGEL 100",
    nameid_sp_product_category: "Создан для тех, кто выбирает максимум",
    price: 42000,
    img: models_img.angel_netest,
    path: pathname.ANGEL100,
  },
  {
    codeid: 2,
    nameid: "ANGEL 100 PRO",
    nameid_sp_product_category: "Создан для тех, кто выбирает максимум",
    price: 51450,
    img: models_img.angel_netest,
    path: pathname.ANGEL100PRO,
  },
  {
    codeid: 3,
    nameid: "AM-2000",
    nameid_sp_product_category: "Надежный старт для работы с увеличением",
    price: 12100,
    img: models_img.two_netest,
    path: pathname.AM2000,
  },
  {
    codeid: 4,
    nameid: "AM-2000 PLUS",
    nameid_sp_product_category: "Оптимальный баланс технологий и стоимости",
    price: 15700,
    img: models_img.two_plus_netest,
    path: pathname.AM2000PLUS,
  },
  {
    codeid: 5,
    nameid: "AM-5000",
    nameid_sp_product_category: "Больше возможностей для профессионалов",
    price: 17850,
    img: models_img.five_netest,
    path: pathname.AM5000,
  },
];

export const arrProd = [
  {
    guid: "1",
    codeid: "",
    quantity: "",
    price: "",
    nameid: "боры",
    nameid_sp_units: "шт",
    nameid_sp_product_category: "Расходные материалы",
  },
  {
    guid: "2",
    codeid: "",
    quantity: "",
    price: "",
    nameid: "файлы",
    nameid_sp_units: "шт",
    nameid_sp_product_category: "Эндодонтия",
  },
  {
    guid: "2",
    codeid: "",
    quantity: "",
    price: "",
    nameid: "Absorbent",
    nameid_sp_units: "шт",
    nameid_sp_product_category: "Эндодонтия",
  },
];
