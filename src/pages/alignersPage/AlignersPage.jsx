import clsx from "clsx";
import styles from "./AlignersPage.module.scss";
import { Carousel, Col, Flex, Row } from "antd";
import { useState } from "react";
import { AddAppModal, VideoModal } from "../../components";
import * as foto from "../../assets/images/aligners";

import { ArrowRightOutlined } from "@ant-design/icons";
import fon from ".././../assets/images/eq_card_bg.svg";
import play from "../../assets/images/play.svg";

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

export const models = [
  {
    codeid: 1,
    nameid: "Точность и предсказуемость",
    nameid_sp_product_category:
      "Печать напрямую на 3D-принтере без термоформовки и вырезания. Каждый элайнер полностью соответствует цифровому плану, сохраняет форму и обеспечивает стабильный результат.",
  },
  {
    codeid: 2,
    nameid: "Расширение возможностей клиники",
    nameid_sp_product_category:
      "Премиальное качество по доступной цене позволяет предложить лечение большему числу пациентов и повысить доверие к врачу.",
  },
  {
    codeid: 3,
    nameid: "Максимальный комфорт для пациентов",
    nameid_sp_product_category:
      "Тонкие, гладкие и прозрачные, без острых краёв и деформаций. Пациенты носят элайнеры дольше и дисциплинированнее, с минимумом жалоб и внеплановых визитов.",
  },
  {
    codeid: 4,
    nameid: "Полный сервис для врача",
    nameid_sp_product_category:
      "Мы берём на себя диагностику, моделирование, 3D-сетап, печать и доставку готового комплекта",
  },
];

export const AlignersPage = () => {
  const [open, setOpen] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <div className={clsx(" mt-6")}>
      <div className={clsx(styles.aboutUsPage, "container  ")}>
        <div className={clsx(styles.yrs)}>
          <img src={foto.risunok} alt={foto.risunok} />
          <div className={clsx(styles.yrs_info)}>
            <p>Элайнеры с памятью формы Graphy Inc.</p>
            <span>новое поколение ортодонтии</span>
          </div>
        </div>

        <Row gutter={24} align="middle" className="mb-16">
          <Col span={12}>
            <div className={clsx(styles.img)}>
              <img src={foto.fourty} alt={foto.fourty} />
              <div
                className={clsx(styles.play_wrap)}
                onClick={() => setOpenVideo(true)}
              >
                <div className={clsx(styles.play_btn)}>
                  <img src={play} alt={play} />
                </div>
                <div className={clsx(styles.play_text)}>
                  <span>Смотреть видео о компании</span>
                </div>
              </div>
            </div>

            {/* <iframe
              width="660"
              height="380"
              src="https://www.youtube.com/embed/8-Yu5wcozcw?si=4_uxjh2KHWOsV5Mi"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              style={{ borderRadius: "20px" }}
            ></iframe> */}
          </Col>
          <Col span={12}>
            <Flex vertical gap="middle" className={clsx(styles.info)}>
              <p>
                Элайнеры Graphy - это единственные в мире фотополимерные
                элайнеры прямой 3D-печати, созданные с использованием
                инновационного материала с эффектом памяти формы.
              </p>
              <p>
                Мы, Jannat Dental Store (JDS), являемся официальным партнёром
                Graphy и обеспечиваем врачей оригинальными элайнерами с
                гарантией качества.Лаборатории по изготовлению элайнеров
                находятся в г. Бишкек и г. Ош.{" "}
                <span
                  className={clsx(styles.more)}
                  onClick={() => setOpen(true)}
                >
                  Оставить заявку
                </span>
              </p>
            </Flex>
          </Col>
        </Row>

        <span className={clsx(styles.models_info)}>
          Преимущества перед традиционными элайнерами
        </span>

        <Row gutter={24} className={clsx(styles.models, "mи-12")}>
          {models.map((item) => (
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
                      <span className={clsx(styles.series)}>{item.nameid}</span>
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

        <span
          style={{ color: "#147abc", fontSize: "28px" }}
          className={clsx("text-center")}
        >
          Медиа-контент
        </span>
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
      <VideoModal
        open={openVideo}
        onCancel={() => setOpenVideo(false)}
        sourse={"https://www.youtube.com/embed/8-Yu5wcozcw?si=4_uxjh2KHWOsV5Mi"}
        isYuoTube={true}
      />
    </div>
  );
};
