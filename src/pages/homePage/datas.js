import * as brands from "../../assets/images/brendsLogo";
import * as cat_foto from "../../assets/images/categories";
import * as edu_foto from "../../assets/images/edu";

export const categories = [
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
  },
  {
    key: 2,
    title: "Luvis",
    img: brands.luvis,
    background: "#232323",
  },
  {
    key: 3,
    title: "EcoTron",
    img: brands.ecotorn_logo,
    background: "#f4f3ef",
  },
  {
    key: 4,
    title: "Promis",
    img: brands.promis_logo,
    background: "#222222",
  },
  {
    key: 5,
    title: "B&E",
    img: brands.b_and_e,
    background: "#f4f3ef",
  },
  {
    key: 6,
    title: "Large V",
    img: brands.lardev_logo,
    background: "#f4f3ef",
  },
];

export const edu = [
  {
    key: 1,
    title: "Современные технологии в ортодонтии",
    description:
      "Не пропустите уникальное событие, в городе Ош.  Приглашаем стоматологов и ординаторов на семинар на тему: «Современные технологии в ортодонтии. Элайнеры с памятью формы от-GRAPHY INC.». Кому подойдет курс: врачам ортодонтам, ординатором, стоматологам других направлений",
    date: "19.07.2025",
    price: 2000,
    location: "г. Ош, ORTO ASIA",
    img: edu_foto.il,
  },
  {
    key: 2,
    title: "Семинар по ортодонтии",
    description:
      "12 октября в Бишкеке пройдет уникальный семинар, который нельзя пропустить! Равиндра Нанда - основоположник современной ортодонтии, человек, чьи труды изучают специалисты по всему миру, выступит лично в Hyatt Bishkek.",
    date: "12.10.2025",
    location: "г. Бишкек, Hyatt Regency",
    img: edu_foto.ok,
  },
  {
    key: 3,
    title: "Cеминар по инновационным элайнерам от Graphy",
    description:
      "Разберем передовые технологии. Узнаем, как элайнеры с памятью формируют меняют подход к ортодонтии. Обсудим эффективные кейсы и реальные результаты",
    date: "10.04.2025",
    location: "г. Бишкек, Hyatt Regency",
    img: edu_foto.ap,
  },
];
