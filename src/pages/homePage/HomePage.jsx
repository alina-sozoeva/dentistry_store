import { useLocation, useNavigate } from "react-router-dom";
import { CustomButton, ProductItem } from "../../components";
import { Carousel, Flex, Typography } from "antd";
import { RatingStars } from "../../ui";
import { CustomCarousel } from "./ui";
import { useEffect } from "react";
import { edu } from "../../data";
import { BsFillBoxFill } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { DoubleRightOutlined } from "@ant-design/icons";
import { PiUserCircleFill } from "react-icons/pi";
import {
  useGetCategoryQuery,
  useGetProductsQuery,
  useGetProvidersQuery,
  useReviewStore,
} from "../../store";
import { pathname } from "../../enums";
import * as brends_foto from "../../assets/images/brendsLogo";
import * as cat_foto from "../../assets/images/categories";
import { categoriesLocal, brandsItem } from "../../data";

import styles from "./HomePage.module.scss";
import clsx from "clsx";
import dayjs from "dayjs";

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: brends } = useGetProvidersQuery();
  const { data: categories } = useGetCategoryQuery();
  const { data: products } = useGetProductsQuery({});
  const { reviews } = useReviewStore();

  console.log(reviews, "reviews");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, location.pathname]);

  const onBrandId = (codeid) => {
    navigate({ pathname: pathname.PRODUCTS, search: `?brend=${codeid}` });
  };

  const onCategoryId = (codeid) => {
    navigate({ pathname: pathname.PRODUCTS, search: `?category=${codeid}` });
  };

  return (
    <main
      className="header_h screen_page"
      style={{ backgroundColor: "#f9f9f9" }}
    >
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
            arrows
            className={clsx(styles.carousel, styles.categories, "w-full")}
            slidesToShow={5}
          >
            {categories?.map((item) => {
              const localCat = categoriesLocal.find(
                (cat) => cat.title === item.nameid
              );

              return (
                <Flex
                  className={clsx("text-center mb-6 cursor-pointer")}
                  onClick={() => onCategoryId(item.codeid)}
                  key={item.codeid}
                >
                  <div className={clsx(styles.category)}>
                    <img
                      src={localCat ? localCat.img : cat_foto.consumables}
                      alt={item.nameid}
                    />
                  </div>
                  <span className={clsx("font-bold text-xl")}>
                    {item.nameid}
                  </span>
                </Flex>
              );
            })}
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
            {brends?.map((item) => {
              const localBrand = brandsItem.find(
                (brand) => brand.title === item.nameid
              );

              return (
                <Flex className={clsx("text-center mb-6")} key={item.codeid}>
                  <div
                    className={clsx(styles.brand)}
                    style={{ backgroundColor: item.background ?? "#222222" }}
                    onClick={() => onBrandId(item.codeid)}
                  >
                    <img
                      src={localBrand ? localBrand.img : brends_foto.luvis}
                      alt={item.nameid}
                    />
                  </div>
                  <span>{item.nameid}</span>
                </Flex>
              );
            })}
          </Carousel>
        </Flex>
      </section>

      <section className={clsx("container")}>
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
            {products?.slice(0, 6).map((item) => (
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
            {products?.slice(6, 12).map((item) => (
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
            {products?.slice(12, 18).map((item) => (
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
            <Carousel
              arrows
              className={clsx(styles.carousel, styles.categories, "w-full")}
              slidesToShow={3}
            >
              {reviews?.map((review, index) => (
                <div key={index} className={styles.reviews_one}>
                  <Flex align="center" justify="space-between">
                    <Flex align="center" gap="small">
                      <PiUserCircleFill className={clsx("text-5xl")} />
                      <Flex vertical>
                        <span>{review.date}</span>
                        <h3 className={clsx("font-bold")}>{review.nameid}</h3>
                      </Flex>
                    </Flex>
                    <RatingStars value={review.raiting} readOnly />
                  </Flex>
                  <p className={clsx("text-base line-clamp-4")}>
                    {review.comment}
                  </p>
                </div>
              ))}
            </Carousel>
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
            {edu.slice(0, 3).map((item) => (
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
                <CustomButton onClick={() => navigate(pathname.STUDY)}>
                  Подробнее
                </CustomButton>
              </Flex>
            ))}
          </Carousel>
        </Flex>
      </section>
    </main>
  );
};
