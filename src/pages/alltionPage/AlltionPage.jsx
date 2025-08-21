import { Col, Flex, Row } from "antd";
import { useState } from "react";
import { VideoModal } from "./ui";

import fon_alltion from "../../assets/images/fon_alltion.jpg";
import play from "../../assets/images/play.svg";
import yrs from "../../assets/images/30yrs_banner-scaled.webp";

import styles from "./AlltionPage.module.scss";
import clsx from "clsx";

export const AlltionPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className={clsx(styles.main, "header_h screen_page mt-4")}>
      <section className={clsx("container")}>
        <div className={clsx(styles.yrs)}>
          <img src={yrs} alt={yrs} />
          <div className={clsx(styles.yrs_info)}>
            <p>30 лет истории ALLTION</p>
            <span>От фундамента до мировой известности</span>
          </div>
        </div>
        <Row gutter={24} align="middle">
          <Col span={12}>
            <div className={clsx(styles.img)}>
              <img src={fon_alltion} alt={fon_alltion} />
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
                История бренда ALLTION берет начало в 1995 году с города Учжоу.
                Именно здесь был построен первый завод, проводились первые
                исследования и разрабатывались первые модели. За несколько
                десятилетий существования бренда, количество заводов существенно
                увеличилось, а продукция ALLTION обрела популярность в Европе,
                Японии, США и Австралии.
              </p>
              <p>
                В производстве микроскопов применяются передовые технологии и
                материалы, комплектующие из Германии и США. Каждый микроскоп
                проходит качественное тестирование перед отгрузкой, которое
                контролируется департаментом тестирования.
              </p>
            </Flex>
          </Col>
        </Row>
      </section>
      <VideoModal open={open} onCancel={() => setOpen(false)} />
    </main>
  );
};
