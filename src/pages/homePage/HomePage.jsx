import { useLocation, useNavigate } from "react-router-dom";
import { CustomButton, ProductItem } from "../../components";
import { Carousel, Flex, Typography } from "antd";
import { RatingStars } from "../../ui";
import { CustomCarousel } from "./ui";
import { useEffect } from "react";
import { dentalItems } from "../../data";
import { BsFillBoxFill } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { DoubleRightOutlined } from "@ant-design/icons";
import { PiUserCircleFill } from "react-icons/pi";
import { brandsItem, categories, edu } from "./datas";

import styles from "./HomePage.module.scss";
import clsx from "clsx";

const reviews = [
  {
    date: "26.06.2025",
    name: "Иванов Иван",
    description:
      "Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
  {
    date: "26.06.2025",
    name: "Петрова Анна",
    description:
      "Очень понравился подход доктора, всегда на связи и дает четкие рекомендации. Рекомендую! Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален. Отличный врач, помог мне справиться с болезнью. Очень внимателен и профессионален.",
  },
  {
    date: "26.06.2025",
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
    <main className="header_h screen_page" style={{ backgroundColor: "#f9f9f9" }}>
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
          <div className={styles.line}></div>
          <Flex align="center" gap="small">
            <FaStar />
            <span className={clsx("uppercase font-normal")}>+100 брендов</span>
          </Flex>
          <div className={styles.line}></div>
          <Flex align="center" gap="small">
            <FaCheckCircle />
            <span className={clsx("uppercase font-normal")}>100% качества</span>
          </Flex>
        </Flex>
      </section>

      <section className={clsx("container")}>
        <Flex vertical gap="small" className={clsx("mb-6")}>
          <Typography.Title level={2} className={clsx("text-center mb-6")}>
            Поиск по категориям
          </Typography.Title>

          <Carousel
            // autoplay
            arrows
            className={clsx(styles.carousel, styles.categories, "w-full")}
            slidesToShow={5}
          >
            {categories.map((item) => (
              <Flex className={clsx("text-center mb-6")}>
                <div className={clsx(styles.category)} key={item.key}>
                  <img src={item.img} alt="" />
                </div>
                <span className={clsx("font-bold text-xl")}>{item.title}</span>
              </Flex>
            ))}
          </Carousel>
        </Flex>
      </section>

      <section className={clsx("container")}>
        <Flex vertical gap="small" className={clsx("mb-6")}>
          <Typography.Title level={2}>Лучшие бренды</Typography.Title>

          <Carousel
            arrows
            className={clsx(styles.carousel, styles.brands, "w-full")}
            slidesToShow={5}
          >
            {brandsItem.map((item) => (
              <Flex className={clsx("text-center mb-6")}>
                <div
                  className={clsx(styles.brand)}
                  key={item.key}
                  style={{
                    backgroundColor: item.background
                      ? item.background
                      : "#89c9ff",
                  }}
                >
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
            {dentalItems.slice(0, 6).map((item) => (
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
            {dentalItems.slice(0, 6).map((item) => (
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
            <Typography.Title level={2}>Рекомендуемые товары</Typography.Title>
            <span className={clsx(styles.section_title)}>
              Смотреть все <DoubleRightOutlined />
            </span>
          </Flex>
          <Flex gap="small">
            {dentalItems.slice(0, 6).map((item) => (
              <ProductItem item={item} />
            ))}
          </Flex>
        </Flex>
      </section>

      <section className={clsx(styles.reviews, "my-10")}>
        <div className={clsx("container")}>
          <Flex vertical justify="center">
            <h2 className="text-3xl uppercase text-white mb-10">
              Отзывы покупателей
            </h2>
            <Flex gap="small">
              {reviews.map((review, index) => (
                <div key={index} className={styles.reviews_one}>
                  <Flex align="center" justify="space-between">
                    <Flex align="center" gap="small">
                      <PiUserCircleFill className={clsx("text-5xl")} />
                      <Flex vertical>
                        <span>{review.date}</span>
                        <h3 className={clsx("font-bold")}>{review.name}</h3>
                      </Flex>
                    </Flex>

                    <RatingStars />
                  </Flex>

                  <p className={clsx("text-base line-clamp-4")}>
                    {review.description}
                  </p>
                </div>
              ))}
            </Flex>
          </Flex>
        </div>
      </section>

      <section className={clsx("container")} id="about">
        <Flex vertical gap="small" className={clsx(styles.edu, "mb-20")}>
          <Flex justify="space-between" align="center">
            <Typography.Title level={2} className={clsx("text-center mb-6")}>
              Обучение
            </Typography.Title>
            <span className={clsx(styles.section_title)}>
              Узнать больше <DoubleRightOutlined />
            </span>
          </Flex>
          <Carousel
            autoplay
            arrows
            className={clsx(styles.carousel, styles.edu_car)}
            slidesToShow={3}
          >
            {edu.map((item) => (
              <Flex vertical key={item.key}>
                <img src={item.img} alt={item.img} />
                <h3
                  className={clsx(
                    "font-bold h-[2.5em] leading-[1.2em] overflow-hidden my-4 text-2xl"
                  )}
                >
                  {item.title}
                </h3>
                <div className={clsx("text-base")}>
                  <span className={clsx("font-bold")}>Дата проведения:</span>{" "}
                  {item.date}
                </div>
                <div className={clsx("text-base  mb-4")}>
                  <span className={clsx("font-bold")}>Место проведения:</span>{" "}
                  {item.location}
                </div>
                <span className={clsx("text-base line-clamp-3 mb-4")}>
                  {item.description}
                </span>
                <CustomButton>Подробнее</CustomButton>
              </Flex>
            ))}
          </Carousel>
        </Flex>
      </section>
    </main>
  );
};
