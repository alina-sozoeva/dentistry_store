import { Col, Flex, Row } from "antd";
import { useState } from "react";

import fon_alltion from "../../../assets/images/fon_alltion.jpg";
import play from "../../../assets/images/play.svg";
import yrs from "../../../assets/images/30yrs_banner-scaled.webp";

import { VideoModal } from "../../../components";

import { useNavigate } from "react-router";
import { pathname } from "../../../enums";

import * as foto from "../../../assets/images/largev";
import styles from "./LargevPage.module.scss";
import clsx from "clsx";

export const LargevPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onBrandId = () => {
    navigate({ pathname: pathname.PRODUCTS });
  };

  return (
    <main className={clsx(styles.main, "  mt-4")}>
      <section className={clsx("container")}>
        <div className={clsx(styles.yrs)}>
          <img src={foto.header_largev} alt={yrs} />
        </div>
        <Row gutter={24} align="middle">
          <Col span={12}>
            <div className={clsx(styles.img)}>
              <img src={foto.about_1} alt={fon_alltion} />
              <div
                className={clsx(styles.play_wrap)}
                onClick={() => setOpen(true)}
              >
                <div className={clsx(styles.play_btn)}>
                  <img src={play} alt={play} />
                </div>
                <div className={clsx(styles.play_text)}>
                  <span>Смотреть видео о компании</span>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <Flex vertical gap="middle" className={clsx(styles.info)}>
              <p>
                Компания LargeV Instrument Corp., Ltd. была учреждена в 2011
                году с целью разработки и промышленного производства
                высококачественных медицинских изделий. Основная группа
                специалистов компании LargeV пришла из Университета Цинхуа и
                обладает прочной научно-теоретической базой в области
                компьютерной томографии, радиопротекции и обработки изображений.
              </p>
              <p>
                Мы исповедуем клиентоориентированный подход, а также
                приверженность инновационным исследованиям и достижению
                оптимальных результатов в своей деятельности.
              </p>
            </Flex>
          </Col>
        </Row>
        <div className={clsx(styles.models, "mt-12")}>
          <img src={foto.smart3D} alt={foto.smart3D} />
        </div>
        <div className={clsx(styles.model_info, "mt-6")}>
          <div className={clsx("container  ")}>
            <div className={clsx(styles.aboutUsPage)}>
              <h2 className={styles.title}>
                LargeV Smart 3D-X (Smart 3Dx) — Интеллектуальный 3-в-1
                дентальный томограф
              </h2>

              <p className={styles.paragraph}>
                <b>LargeV Smart 3D-X</b> — современный универсальный томограф
                высокой четкости, объединяющий функции:
              </p>
              <ul className={styles.list}>
                <li>
                  <b>CBCT (конусно-лучевая КТ)</b>
                </li>
                <li>
                  <b>Панорамной рентгенографии (PAN)</b>
                </li>
                <li>
                  <b>Цефалометрии (опция)</b>
                </li>
                <li>
                  <b>Сканирования модели (опция)</b>
                </li>
              </ul>

              <p className={styles.paragraph}>
                Модель удостоена международной премии iF Design за инновационный
                дизайн и компактность — ей требуется всего около 5 м²
                пространства.
              </p>
              <span>
                <b>Ключевые особенности</b>
                <br />
              </span>
              <span>
                <b>Высочайшее качество изображения</b>
              </span>
              <ul className={styles.list}>
                <li>
                  Минимальный размер вокселя до 0,05 мм, разрешение до 2,0 lp/mm
                  — идеально для диагностики пульпарных и эндодонтических
                  патологий.
                </li>
                <li>
                  <b>Небольшое фокусное пятно (0,5 мм)</b>для максимальной
                  четкости снимков.
                </li>
              </ul>
              <span>
                <b>Умная платформа сканирования</b>
              </span>
              <ul className={styles.list}>
                <li>
                  <b>360° сканирование и 800 кадров:</b> с уникальными
                  алгоритмами реконструкции.
                </li>
                <li>
                  <b>Платформа QuartZ 4</b> гибкие режимы сканирования и
                  многослойная фокусировка под форму зубной дуги.
                </li>
              </ul>
              <span>
                <b>Искусственный интеллект</b>
              </span>
              <ul className={styles.list}>
                <li>Снижает дозу облучения, сохраняя высокую детализацию.</li>
                <li>Автоматическая маркировка нервного канала (AI+Nerve).</li>
                <li>Устранение металлических артефактов (T-MAR).</li>
                <li>
                  Умное автофокусирование и 21-слойный искусственный панорамный
                  режим (AI+PAN).
                </li>
              </ul>
              <span>
                <b>Удобство использования</b>
              </span>
              <ul className={styles.list}>
                <li>
                  <b>6 лазеров позиционирования и X-образная опора</b> — удобно
                  для пациентов с ограниченной подвижностью.
                </li>
                <li>
                  <b>
                    10″ LED сенсорный экран, голосовые подсказки, короб для
                    хранения4
                  </b>{" "}
                  встроенных аксессуаров.
                </li>
              </ul>
              <span>
                <b>Программное обеспечение SmartVPro</b>
              </span>
              <ul className={styles.list}>
                <li>
                  Мультипланарный просмотр (аксиальный, сагиттальный,
                  корональный), измерение плотности кости и моделирование
                  имплантации.
                </li>
                <li>
                  Автоматическая идентификация анатомических контрольных точек,
                  отчетность, цефалометрическая аналитика.
                </li>
                <li>
                  Диагностика ВНЧС, сегментация верхнечелюстной пазухи и
                  дыхательных путей, оценка костного возраста.
                </li>
              </ul>
              <span className={clsx(styles.more)} onClick={() => onBrandId()}>
                <b>Узнайте больше</b>
              </span>
            </div>

            <div className={clsx(styles.prod_info)}></div>
          </div>
        </div>

        {/* <Row gutter={24} className={clsx(styles.models, "mи-12")}>
          {models.map((item) => (
            <Col span={12} className={clsx("mt-4")}>
              <ModelsCard item={item} />
            </Col>
          ))}
        </Row> */}
      </section>
      <VideoModal
        open={open}
        onCancel={() => setOpen(false)}
        sourse={
          "https://russia.largev.net//upload/2/cms/content/editor/1681113923778.mp4"
        }
      />
    </main>
  );
};
