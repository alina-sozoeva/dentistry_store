import { useLocation, useNavigate } from "react-router-dom";
import { CustomButton, ProductItem } from "../../components";
import { Carousel, Flex, Typography } from "antd";
import { RatingStars } from "../../ui";
import { categories, CustomCarousel } from "./ui";
import { useEffect } from "react";
import { dentalItems } from "../../data";
import { BsFillBoxFill } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { DoubleRightOutlined } from "@ant-design/icons";
import { PiUserCircleFill } from "react-icons/pi";
import * as brands from "../../assets/images/brendsLogo";
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

const brandsItem = [
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
    background: "#232323",
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

      <section className={clsx("container")} id="about">
        <Flex vertical gap="small" className={clsx("mb-6")}>
          <Typography.Title level={2} className={clsx("text-center mb-6")}>
            Поиск по категориям
          </Typography.Title>

          <Carousel
            // autoplay
            arrows
            className={clsx(styles.categories, "w-full")}
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
            className={clsx(styles.brands, "w-full")}
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

      <section className={clsx("container")}>
        <Flex vertical gap="small" className={clsx(styles.edu, "mb-20")}>
          <Typography.Title level={2} className={clsx("text-center mb-6")}>
            Обучение
          </Typography.Title>
          <Carousel
            autoplay
            arrows
            className={clsx(styles.carousel)}
            slidesToShow={3}
          >
            <Flex vertical>
              <img
                src="https://qx-medin.myshopify.com/cdn/shop/articles/blog-4.png?v=1744633500&width=540"
                alt=""
              />
              <h3 className={clsx("font-bold my-4 text-2xl")}>
                Lorem ipsum dolor sit amet consectetu
              </h3>
              <span className={clsx("text-base line-clamp-3 mb-4")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus minus nihil inventore, ipsam omnis itaque vitae esse!
                Et aspernatur dolorum repellendus cumque vel, ullam, natus optio
                dolor ratione excepturi voluptas?
              </span>
              <CustomButton>Подробнее</CustomButton>
            </Flex>
            <Flex vertical>
              <img
                src="https://qx-medin.myshopify.com/cdn/shop/articles/blog-5.png?v=1744633508&width=540"
                alt=""
              />
              <h3 className={clsx("font-bold my-4 text-2xl")}>
                Lorem ipsum dolor sit amet consectetu
              </h3>
              <span className={clsx("text-base line-clamp-3 mb-4")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus minus nihil inventore, ipsam omnis itaque vitae esse!
                Et aspernatur dolorum repellendus cumque vel, ullam, natus optio
                dolor ratione excepturi voluptas?
              </span>
              <CustomButton>Подробнее</CustomButton>
            </Flex>
            <Flex vertical>
              <img
                src="https://qx-medin.myshopify.com/cdn/shop/articles/blog-4.png?v=1744633500&width=540"
                alt=""
              />
              <h3 className={clsx("font-bold my-4 text-2xl")}>
                Lorem ipsum dolor sit amet consectetu
              </h3>
              <span className={clsx("text-base line-clamp-3 mb-4")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus minus nihil inventore, ipsam omnis itaque vitae esse!
                Et aspernatur dolorum repellendus cumque vel, ullam, natus optio
                dolor ratione excepturi voluptas?
              </span>
              <CustomButton>Подробнее</CustomButton>
            </Flex>
          </Carousel>
        </Flex>
      </section>
    </main>
  );
};
