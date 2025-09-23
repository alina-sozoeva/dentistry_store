import clsx from "clsx";
import styles from "./AlignersPage.module.scss";
import { Carousel, Flex } from "antd";
import { useState } from "react";
import { AddAppModal } from "../../components";
import * as foto from "../../assets/images/aligners";

const imgs = [
  {
    key: 1,
    img: foto.one,
  },
  {
    key: 2,
    img: foto.two,
  },
  // {
  //   key: 3,
  //   img: foto.three,
  // },
  {
    key: 4,
    img: foto.fourty,
  },
  {
    key: 5,
    img: foto.fivety,
  },
  {
    key: 6,
    img: foto.six,
  },
  {
    key: 7,
    img: foto.seven,
  },
  {
    key: 8,
    img: foto.eigth,
  },
  {
    key: 9,
    img: foto.nine,
  },
  {
    key: 10,
    img: foto.ten,
  },
];

export const AlignersPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx(" mt-6")}>
      <div className={clsx(styles.aboutUsPage, "container  ")}>
        <h2 className={styles.title}>
          Элайнеры с памятью формы Graphy Inc. — новое поколение ортодонтии
        </h2>
        <p className={styles.paragraph}>
          <b>Элайнеры Graphy </b> - это единственные в мире фотополимерные
          элайнеры прямой 3D-печати, созданные с использованием инновационного
          материала с эффектом памяти формы.
        </p>
        <ul className={styles.list}>
          <li>
            <b>Преимущества перед традиционными элайнерами:</b>
          </li>
          <Flex vertical className={clsx("pb-2")}>
            <span className={clsx("pl-6")}>
              <b>Точность и предсказуемость</b> — печать напрямую на 3D-принтере
              без термоформовки и вырезания. Каждый элайнер полностью
              соответствует цифровому плану, сохраняет форму и обеспечивает
              стабильный результат.
            </span>
            <span className={clsx("pl-6")}>
              <b>Максимальный комфорт для пациентов</b> — тонкие, гладкие и
              прозрачные, без острых краёв и деформаций. Пациенты носят элайнеры
              дольше и дисциплинированнее, с минимумом жалоб и внеплановых
              визитов.
            </span>
            <span className={clsx("pl-6")}>
              <b>Расширение возможностей клиники </b> — премиальное качество по
              доступной цене позволяет предложить лечение большему числу
              пациентов и повысить доверие к врачу.
            </span>
            <span className={clsx("pl-6")}>
              <b>Полный сервис для врача</b> — мы берём на себя диагностику,
              моделирование, 3D-сетап, печать и доставку готового комплекта.
            </span>
          </Flex>
        </ul>
        <p className={styles.paragraph}>
          Мы, <b>Jannat Dental Store (JDS)</b>, являемся официальным партнёром{" "}
          <b>Graphy</b> и обеспечиваем врачей оригинальными элайнерами с
          гарантией качества.Лаборатории по изготовлению элайнеров находятся в
          г. Бишкек и г. Ош.{" "}
          <span className={clsx(styles.more)} onClick={() => setOpen(true)}>
            Оставить заявку
          </span>
        </p>
        <span className={clsx("text-2xl text-blue")}>Медиа-контент</span>
        <Carousel
          autoplay
          arrows
          className={clsx(styles.carousel)}
          slidesToShow={3}
        >
          {imgs.map((item) => (
            <div key={item.key} className={clsx("pl-4")}>
              <img src={item.img} alt={item?.original_name} />
            </div>
          ))}
        </Carousel>
      </div>

      <AddAppModal open={open} onCancel={() => setOpen(false)} />
    </div>
  );
};
