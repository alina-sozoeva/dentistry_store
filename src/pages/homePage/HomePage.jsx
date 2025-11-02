import { useLocation, useNavigate } from "react-router-dom";
import { ReviewModal } from "../../common";
import {
  Button,
  Carousel,
  Col,
  Empty,
  Flex,
  Row,
  Spin,
  Typography,
} from "antd";
import { RatingStars } from "../../ui";
import { useEffect, useState } from "react";
import { BsFillBoxFill } from "react-icons/bs";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { CalendarOutlined } from "@ant-design/icons";
import { PiUserCircleFill } from "react-icons/pi";
import {
  useGetCategoryQuery,
  useGetEduQuery,
  useGetProvidersQuery,
  useGetReviewsQuery,
} from "../../store";
import { pathname } from "../../enums";
import brends_no_foto from "../../assets/images/no_image.png";
import { categoriesLocal, brandsItem } from "../../data";
import { CustomCarousel } from "../../components";
import DOMPurify from "dompurify";
import dayjs from "dayjs";

import * as cat_foto from "../../assets/images/categories";
import styles from "./HomePage.module.scss";
import clsx from "clsx";

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openReview, setOpenReview] = useState(false);

  const { data: brands, isLoading: isLoadingBrends } = useGetProvidersQuery();
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoryQuery();

  const { data: reviews } = useGetReviewsQuery();
  const { data: edu } = useGetEduQuery();

  const filteredReviews = reviews?.data?.filter(
    (item) => item?.is_published === 1
  );

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
    navigate({ pathname: pathname.PRODUCTS, search: `?brand=${codeid}` });
  };

  const onCategoryId = (codeid) => {
    navigate({ pathname: pathname.PRODUCTS, search: `?category=${codeid}` });
  };

  const dopBrends = [...(brands || [])];

  useEffect(() => {
    const scrollTo =
      location.state?.scrollTo ||
      new URLSearchParams(location.search).get("scrollTo");
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Spin
      spinning={isLoadingBrends || isLoadingCategories}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <main style={{ backgroundColor: "#f9f9f9" }}>
        <section className="container">
          <Flex vertical className={clsx(styles.rec, "mb-6")}>
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
              <span className={clsx("uppercase font-normal")}>
                +100 брендов
              </span>
            </Flex>
            <div className={styles.line}></div>
            <Flex align="center" gap="small">
              <FaCheckCircle />
              <span className={clsx("uppercase font-normal")}>
                100% качества
              </span>
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
              className={clsx(styles.carousel, styles.categories)}
              slidesToShow={5}
              responsive={[
                { breakpoint: 1200, settings: { slidesToShow: 4 } },
                { breakpoint: 992, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 3 } },
                { breakpoint: 576, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 2 } },
              ]}
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
              responsive={[
                { breakpoint: 1200, settings: { slidesToShow: 4 } },
                { breakpoint: 992, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 3 } },
                { breakpoint: 576, settings: { slidesToShow: 2 } },
                { breakpoint: 480, settings: { slidesToShow: 2 } },
              ]}
            >
              {dopBrends?.map((item) => {
                const localBrand = brandsItem.find(
                  (brand) => brand.title === item.nameid
                );

                return (
                  <Flex className={clsx("text-center mb-6")} key={item.codeid}>
                    <div
                      className={clsx(styles.brand)}
                      style={{ backgroundColor: localBrand?.background }}
                      onClick={
                        !localBrand?.path
                          ? () => onBrandId(item.codeid)
                          : () => navigate(localBrand?.path)
                      }
                    >
                      <img
                        src={localBrand ? localBrand.img : brends_no_foto}
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

        {/* <section className={clsx("container ")}>
          <Flex vertical gap="small" className={clsx("mb-6")}>
            <Flex align="center" justify="space-between">
              <Typography.Title level={2}>
                Рекомендуемые товары
              </Typography.Title>
              <span
                onClick={() => navigate("/products")}
                className={clsx(styles.section_title)}
              >
                Смотреть все <DoubleRightOutlined />
              </span>
            </Flex>
            <Flex wrap="wrap" gap="small" className={clsx(styles.products)}>
              {products?.products?.slice(12, 30).map((item) => (
                <ProductItem item={item} />
              ))}
            </Flex>
          </Flex>
        </section> */}

        <section className={clsx(styles.reviews, "my-10")}>
          <div className="container">
            <Flex vertical justify="center">
              <h2 className="text-3xl uppercase text-white mb-10 text-center">
                Отзывы покупателей
              </h2>

              {filteredReviews?.length === 0 ? (
                <Flex
                  vertical
                  align="center"
                  justify="center"
                  className="text-center text-white gap-4"
                >
                  <Empty description={false} />
                  <p className="text-lg font-medium">
                    Пока отзывов нет, но вы можете быть первым!
                  </p>
                  <Button
                    variant="primary"
                    className="mt-2 px-6 py-2"
                    onClick={() => setOpenReview(true)}
                  >
                    Оставить отзыв
                  </Button>
                </Flex>
              ) : (
                <Carousel
                  arrows
                  className={clsx(styles.carousel, styles.categories, "w-full")}
                  slidesToShow={3}
                >
                  {filteredReviews?.map((review, index) => (
                    <div
                      key={index}
                      className={clsx(
                        styles.reviewCard,
                        "p-6 rounded-2xl shadow-lg bg-white mb-4 hover:shadow-xl transition-shadow duration-300"
                      )}
                    >
                      <Flex
                        align="center"
                        justify="space-between"
                        className="mb-3"
                      >
                        <Flex align="center" gap="small">
                          <PiUserCircleFill className="text-4xl text-gray-400" />
                          <Flex vertical>
                            <h3 className="font-semibold text-lg">
                              {review.nameid}
                            </h3>
                            <span className="text-sm text-gray-500">
                              {review.email}
                            </span>
                          </Flex>
                        </Flex>
                        <RatingStars value={Number(review.rating)} readOnly />
                      </Flex>

                      <p
                        className="text-gray-700 mb-3 text-base overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {review.comment}
                      </p>

                      <span className="text-sm text-gray-400">
                        {dayjs(review.date_system).format("DD MMMM YYYY")}
                      </span>
                    </div>
                  ))}
                </Carousel>
              )}
            </Flex>
          </div>
        </section>

        <section className={clsx("container")} id="study">
          <Flex vertical gap="small" className={clsx(styles.edu, "mb-28")}>
            <Flex justify="space-between" align="center">
              <Typography.Title level={2} className={clsx("text-center mb-6")}>
                Обучение
              </Typography.Title>
              {/* <span
                className={clsx(styles.section_title)}
                onClick={() => navigate(pathname.STUDY)}
              >
                Узнать больше <DoubleRightOutlined />
              </span> */}
            </Flex>

            {edu?.data?.length === 0 ? (
              <Flex
                align="center"
                justify="center"
                className={clsx("text-2xl")}
              >
                Здесь скоро появится контент по обучению
              </Flex>
            ) : (
              edu?.data?.map((item) => (
                <Row
                  gutter={24}
                  align={"middle"}
                  className={clsx(styles.study)}
                >
                  <Col span={8} className={clsx(styles.study_car)}>
                    <Carousel arrows autoplay>
                      {item?.imgs.map((item) => (
                        <div className={clsx(styles.img, "mb-2")}>
                          <img
                            src={`https://api-jds-admin.ibm.kg${item.img_url}`}
                            alt=""
                          />
                        </div>
                      ))}
                    </Carousel>
                  </Col>

                  <Col span={16} className={clsx(styles.study_car_info)}>
                    <span className={clsx("text-2xl font-bold")}>
                      {item?.title}
                    </span>

                    <Flex vertical gap="small">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item?.description),
                        }}
                      />
                      {item?.price && (
                        <span>
                          <strong>Цена:</strong>{" "}
                          {Number(item?.price).toLocaleString()} сом
                        </span>
                      )}

                      <span>
                        <strong>Место провидения:</strong> {item?.location}
                      </span>
                    </Flex>

                    <span className={clsx(styles.date, "font-bold mt-2")}>
                      <CalendarOutlined />{" "}
                      {item?.start_date && item?.end_date && (
                        <>
                          {dayjs(item?.start_date)
                            .locale("ru")
                            .format("D MMMM YYYY") + "г"}{" "}
                          -{" "}
                          {dayjs(item?.end_date)
                            .locale("ru")
                            .format("D MMMM YYYY") + "г"}
                        </>
                      )}
                      {item?.event_date && (
                        <>
                          {dayjs(item?.event_date)
                            .locale("ru")
                            .format("D MMMM YYYY") + "г"}
                        </>
                      )}
                    </span>
                  </Col>
                </Row>
              ))
            )}
          </Flex>
        </section>

        <ReviewModal open={openReview} onCancel={() => setOpenReview(false)} />
      </main>
    </Spin>
  );
};
