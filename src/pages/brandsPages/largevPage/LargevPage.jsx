import { Col, Flex, Row } from "antd";
import { useState } from "react";
import { VideoModal } from "../../../components";
import { useNavigate } from "react-router";
import { pathname } from "../../../enums";

import fon_alltion from "../../../assets/images/fon_alltion.jpg";
import play from "../../../assets/images/play.svg";
import yrs from "../../../assets/images/30yrs_banner-scaled.webp";
import fon from "../../../assets/images/eq_card_bg.svg";

import * as foto from "../../../assets/images/largev";
import styles from "./LargevPage.module.scss";
import clsx from "clsx";
import { ArrowRightOutlined } from "@ant-design/icons";

const arr = [
  {
    codeid: 1,
    nameid: "Умная платформа сканирования",
    nameid_sp_product_category:
      "360° сканирование и 800 кадров: с уникальными алгоритмами реконструкции. Платформа QuartZ 4 гибкие режимы сканирования и многослойная фокусировка под форму зубной дуги.",
  },
  {
    codeid: 2,
    nameid: "Искусственный интеллект",
    nameid_sp_product_category:
      "Снижает дозу облучения, сохраняя высокую детализацию. Автоматическая маркировка нервного канала (AI+Nerve). Устранение металлических артефактов (T-MAR). Умное автофокусирование и 21-слойный искусственный панорамный режим (AI+PAN).",
  },
  {
    codeid: 3,
    nameid: "Удобство использования",
    nameid_sp_product_category:
      "6 лазеров позиционирования и X-образная опора— удобно для пациентов с ограниченной подвижностью. 10″ LED сенсорный экран, голосовые подсказки, короб для хранения4встроенных аксессуаров.",
  },
  {
    codeid: 4,
    nameid: "Программное обеспечение SmartVPro",
    nameid_sp_product_category:
      "Мультипланарный просмотр (аксиальный, сагиттальный, корональный), измерение плотности кости и моделирование имплантации. Автоматическая идентификация анатомических контрольных точек, отчетность, цефалометрическая аналитика. Диагностика ВНЧС, сегментация верхнечелюстной пазухи и дыхательных путей, оценка костного возраста.",
  },
];

export const LargevPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onBrandId = () => {
    navigate({ pathname: pathname.PRODUCTS, search: `?brand=${13}` });
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

        <h2 className={clsx(styles.title, "mt-10 ")}>
          LargeV Smart 3D-X (Smart 3Dx) - Интеллектуальный 3-в-1 дентальный
          томограф.
        </h2>

        <div className={clsx(styles.model_info, "mt-6")}>
          <div className={clsx("container  ")}>
            <Flex
              justify="space-between"
              className={clsx(styles.wrap, "gen_wrap ")}
            >
              <Row gutter={24} align="middle">
                <Col span={12}>
                  <Flex vertical>
                    <span className={clsx(styles.info_title)}>
                      LargeV Smart 3D-X (Smart 3Dx)
                    </span>
                    <span className={clsx(styles.descrip)}>
                      Cовременный универсальный томограф высокой четкости,
                      объединяющий функции: CBCT (конусно-лучевая КТ),
                      Панорамной рентгенографии (PAN), Цефалометрии (опция),
                      Сканирования модели (опция)
                    </span>
                  </Flex>
                </Col>
                <Col span={12}>
                  <div className={clsx(styles.second_img)}>
                    <img src={foto.CT_CEPH_PAN} alt={foto.CT_CEPH_PAN} />
                  </div>
                </Col>
              </Row>
            </Flex>

            <Flex vertical align="center" className={clsx("mb-10 mt-10")}>
              <p className={clsx(styles.cluch_title, "mb-4")}>
                <span>Ключевые особенности</span> высочайшее качество
                изображения
              </p>
              <span className={clsx(styles.cluch_descrip)}>
                Минимальный размер вокселя до 0,05 мм, разрешение до 2,0 lp/mm —
                идеально для диагностики пульпарных и эндодонтических патологий.
              </span>
            </Flex>

            <img
              className={clsx(styles.img_one)}
              src={foto.newAbout_2}
              alt={foto.newAbout_2}
              style={{ width: "100%", height: "500px", borderRadius: "24px" }}
            />

            <Flex vertical align="center" className={clsx("mb-4 mt-4")}>
              <span className={clsx(styles.cluch_descrip)}>
                Небольшое фокусное пятно (0,5 мм) для максимальной четкости
                снимков.
              </span>
            </Flex>

            <Flex className={clsx(styles.img_two, "gap-[60px]")}>
              <img
                src={foto.newAbout_5}
                alt={foto.newAbout_5}
                style={{ width: "100%", height: "500px", borderRadius: "24px" }}
              />
              <img
                src={foto.newAbout_6}
                alt={foto.newAbout_6}
                style={{ width: "100%", height: "500px", borderRadius: "24px" }}
              />
            </Flex>

            <Row gutter={24} className={clsx(styles.models, "mb-12 mt-10")}>
              {arr.map((item) => (
                <Col span={12} className={clsx("mt-4")}>
                  <div className={clsx(styles.card)}>
                    <Flex
                      vertical
                      justify="space-between"
                      align="start"
                      className={clsx("w-full h-full")}
                    >
                      <Flex vertical gap="middle">
                        <Flex vertical>
                          <span className={clsx(styles.series)}>
                            {item.nameid}
                          </span>
                        </Flex>
                        <span className={clsx(styles.descrip)}>
                          {item.nameid_sp_product_category}
                        </span>
                      </Flex>

                      <button className={clsx(styles.btn)}>
                        <ArrowRightOutlined rotate={-20} />
                      </button>
                    </Flex>
                    <div className={clsx(styles.fon)}>
                      <img src={fon} alt={fon} />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <span className={clsx(styles.more)} onClick={() => onBrandId()}>
              Узнайте больше
            </span>

            <div className={clsx(styles.prod_info)}></div>
          </div>
        </div>
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
