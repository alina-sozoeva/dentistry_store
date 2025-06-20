import { useLocation, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { CustomButton } from "../../components";
import { Col, Flex, Row, Typography } from "antd";
import { RatingStars } from "../../ui";
import { categories, CategoryCard, ServicesCard } from "./ui";
import {
  FileProtectOutlined,
  SafetyCertificateOutlined,
  SwitcherOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { pathname } from "../../enums";

const whoWeAre = [
  { key: 1, title: "БОЛЕЕ 2000 НАИМЕНОВАНИЙ", icon: <SwitcherOutlined /> },
  {
    key: 1,
    title: "ГАРАНТИЯ ОТ ПОДДЕЛОК",
    icon: <SafetyCertificateOutlined />,
  },
  {
    key: 1,
    title: "МЫ ПРЕДОСТАВЛЯЕМ СЕРТИФИКАТ",
    icon: <FileProtectOutlined />,
  },
];

const reviews = [
  {
    name: "Иванов Иван",
    description:
      "Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
  {
    name: "Петрова Анна",
    description:
      "Очень понравился подход доктора, всегда на связи и дает четкие рекомендации. Рекомендую! Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
  {
    name: "Смирнов Сергей",
    description:
      "Доктор с большой буквы! Очень помог мне с лечением, всё объяснил подробно и доступно. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
];

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="header_h " style={{ backgroundColor: "#f9f9f9" }}>
      <section className="container">
        <Flex vertical className="mb-20">
          <Row gutter={24} align="middle">
            <Col span={10} offset={1}>
              <Flex vertical gap="large">
                <h1 className="text-5xl w-96">
                  СТОМАТОЛОГИЧЕСКОЕ ОБОРУДОВАНИЕ И МАТЕРИАЛЫ
                </h1>
                <span className="text-base w-96">
                  Поставка на рынок Кыргызской Республики качественных
                  материалов и оборудования для стоматологов и зубных техников
                  напрямую от производителей
                </span>
                <CustomButton onClick={() => navigate("/products")}>
                  Перейти в магазин
                </CustomButton>
              </Flex>
            </Col>
            <Col span={13}>
              <img
                src="https://denttrade.kg/wp-content/uploads/2024/05/chair_sirona.png"
                alt=""
                style={{ width: "80%" }}
              />
            </Col>
          </Row>

          <Row gutter={24} className="mt-20">
            <Col span={10} offset={1}>
              <Flex vertical gap="small">
                <span>
                  с <b className="text-5xl">2006 </b>года
                </span>
                <span>мы работаем более 18 лет</span>
              </Flex>
            </Col>
            <Col span={13}>
              <Flex vertical gap="small">
                <span>
                  <b className="text-5xl">250+</b>
                </span>
                <span>клиник уже с нами</span>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </section>

      <section style={{ backgroundColor: "#e8e7e7" }}>
        <div className="container">
          <Flex className="py-8" justify="space-between" align="center">
            <Flex vertical gap={"middle"} style={{ width: "300px" }}>
              <Typography.Title level={2}>
                КТО МЫ И ЧТО ПРЕДЛАГАЕМ
              </Typography.Title>
              <span>
                ОсОО "Жаннат-Клиник" предлагает современное оборудование и
                расходные материалы для стоматологических кабинетов и
                зуботехнических лабораторий
              </span>
              <CustomButton>О нас</CustomButton>
            </Flex>

            <Flex justify="center" className="my-10 gap-10 flex-wrap">
              {whoWeAre.map((item) => (
                <ServicesCard
                  key={item.key}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </Flex>
          </Flex>
        </div>
      </section>

      <section className="container"></section>

      <section id="about">
        <div className="container">
          <Flex
            wrap="wrap"
            justify="center"
            className="my-10"
            style={{ rowGap: "18px", columnGap: "45px" }}
          >
            {categories.map((item) => (
              <CategoryCard
                key={item.key}
                title={item.title}
                onClick={() => navigate(pathname.PRODUCTS)}
                slug={item.slug}
              />
            ))}
          </Flex>
        </div>
      </section>

      <section
        className={`${styles.reviews} container`}
        style={{ marginBottom: "40px" }}
      >
        <div className="my-10 flex justify-center items-center h-full gap-10">
          <h2 className="text-3xl uppercase text-white">Отзывы покупателей</h2>
          <div className="flex flex-col gap-10">
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviews_one}>
                <h3>{review.name}</h3>
                <RatingStars />
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
