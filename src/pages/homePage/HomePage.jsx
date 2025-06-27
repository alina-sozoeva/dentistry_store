import { useLocation, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { CustomButton, ProductItem } from "../../components";
import { Carousel, Col, Flex, Row, Typography } from "antd";
import { RatingStars } from "../../ui";
import { categories, CategoryCard, CustomCarousel } from "./ui";
import { useEffect } from "react";
import { pathname } from "../../enums";
import clsx from "clsx";
import { dentalItems } from "../../data";
import { BsFillBoxFill } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import * as brands from "../../assets/images/brendsLogo";
import { DoubleRightOutlined } from "@ant-design/icons";

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

const brandsItem = [
  {
    key: 1,
    title: " LUVIS Dental ",
    img: brands.et_dental,
  },
  {
    key: 2,
    title: " LUVIS Dental ",
    img: brands.septodont,
  },
  {
    key: 3,
    title: " LUVIS Dental ",
    img: brands.dentsply,
  },
  {
    key: 4,
    title: " LUVIS Dental ",
    img: brands.septodont,
  },
  {
    key: 5,
    title: " LUVIS Dental ",
    img: brands.et_dental,
  },
  {
    key: 6,
    title: " LUVIS Dental ",
    img: brands.septodont,
  },
  {
    key: 7,
    title: " LUVIS Dental ",
    img: brands.dentsply,
  },
  {
    key: 8,
    title: " LUVIS Dental ",
    img: brands.et_dental,
  },
  {
    key: 9,
    title: " LUVIS Dental ",
    img: brands.septodont,
  },
  {
    key: 10,
    title: " LUVIS Dental ",
    img: brands.dentsply,
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
        <Flex vertical className={clsx("mb-6")}>
          <CustomCarousel />
        </Flex>
      </section>

      <section className={clsx("mb-6")}>
        <Flex justify="center" className={clsx(styles.about, "container")}>
          <Flex align="center" gap="small">
            <BsFillBoxFill />
            <span className={clsx("uppercase font-normal")}>
              +2000 продуктов
            </span>
          </Flex>
          <Flex align="center" gap="small">
            <FaStar />
            <span className={clsx("uppercase font-normal")}>+100 брендов</span>
          </Flex>
          <Flex align="center" gap="small">
            <FaCheckCircle />
            <span className={clsx("uppercase font-normal")}>100% оригинал</span>
          </Flex>
          <Flex align="center" gap="small">
            <AiFillSafetyCertificate />
            <span className={clsx("uppercase font-normal")}>
              самые лучшие цены
            </span>
          </Flex>
        </Flex>
      </section>

      <section className={clsx("container")}>
        <Flex vertical gap="small" className={clsx("mb-4")}>
          <Typography.Title level={2}>Лучшие бренды</Typography.Title>

          <Carousel
            // autoplay
            arrows
            className={clsx(styles.brands, "w-full")}
            slidesToShow={10}
          >
            {brandsItem.map((item) => (
              <Flex className={clsx("text-center mb-4")}>
                <div className={clsx(styles.brand)} key={item.key}>
                  <img src={item.img} alt="" />
                </div>
                <span>{item.title}</span>
              </Flex>
            ))}
          </Carousel>
        </Flex>
      </section>

      <section className={clsx("container ")}>
        <Flex vertical gap="small" className={clsx("mb-6")}>
          <Flex
            align="center"
            justify="space-between"
            onClick={() => navigate("/products")}
          >
            <Typography.Title level={2}>Товары месяца</Typography.Title>
            <span className={clsx(styles.section_title)}>
              Смотреть все <DoubleRightOutlined />
            </span>
          </Flex>

          <Flex gap="small">
            {dentalItems.slice(0, 7).map((item) => (
              <ProductItem item={item} />
            ))}
          </Flex>
        </Flex>
      </section>

      <section className={clsx("container ")}>
        <Flex vertical gap="small" className={clsx("mb-6")}>
          <Flex
            align="center"
            justify="space-between"
            onClick={() => navigate("/products")}
          >
            <Typography.Title level={2}>Популярные товары</Typography.Title>
            <span className={clsx(styles.section_title)}>
              Смотреть все <DoubleRightOutlined />
            </span>
          </Flex>
          <Flex gap="small">
            {dentalItems.slice(0, 7).map((item) => (
              <ProductItem item={item} />
            ))}
          </Flex>
        </Flex>
      </section>

      <section id="about">
        <div className="container">
          <Typography.Title level={2}>Поиск по категориям</Typography.Title>

          <Flex
            wrap="wrap"
            justify="center"
            className="my-4"
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
