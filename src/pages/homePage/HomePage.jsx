import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { CustomButton } from "../../components";
import { Carousel, Col, Divider, Flex, Row, Typography } from "antd";
import { RatingStars } from "../../ui";
import { ProductCategoryItem } from "./ui";
import foto from "../../assets/images/tovar.jpg";
import { div } from "framer-motion/client";

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

const dentalItems = [
  {
    id: 1,
    title: "Зубная щётка Curaprox 5460",
    price: 890,
    code: "CUR-5460",
    brand: "Curaprox",
  },
  {
    id: 2,
    title: "Паста Sensodyne Repair & Protect",
    price: 320,
    code: "SEN-RP01",
    brand: "Sensodyne",
  },
  {
    id: 3,
    title: "Ирригатор Waterpik WP-100",
    price: 7490,
    code: "WP-100",
    brand: "Waterpik",
  },
  {
    id: 4,
    title: "Зубная нить Oral-B Essential Floss",
    price: 150,
    code: "OB-EF10",
    brand: "Oral-B",
  },
  {
    id: 5,
    title: "Ополаскиватель Listerine Total Care",
    price: 410,
    code: "LTC-500",
    brand: "Listerine",
  },
  {
    id: 6,
    title: "Полоски Crest 3D White",
    price: 2450,
    code: "C3D-WHITE",
    brand: "Crest",
  },
  {
    id: 7,
    title: "Гель Elmex Sensitive",
    price: 530,
    code: "ELM-SENS",
    brand: "Elmex",
  },
  {
    id: 8,
    title: "Детская паста Splat Juicy",
    price: 180,
    code: "SPL-JC",
    brand: "Splat",
  },
  {
    id: 9,
    title: "Электрощётка Philips Sonicare",
    price: 8990,
    code: "PH-SNCR",
    brand: "Philips",
  },
  {
    id: 10,
    title: "Набор для путешествий DentalPro",
    price: 690,
    code: "DTP-KIT",
    brand: "DentalPro",
  },
  {
    id: 11,
    title: "Зеркало стоматологическое Zhermack",
    price: 320,
    code: "ZH-MIR01",
    brand: "Zhermack",
  },
  {
    id: 12,
    title: "Щипцы хирургические Hu-Friedy",
    price: 2150,
    code: "HF-FRC10",
    brand: "Hu-Friedy",
  },
  {
    id: 13,
    title: "Скейлер ультразвуковой Woodpecker",
    price: 12300,
    code: "WD-SCAL01",
    brand: "Woodpecker",
  },
  {
    id: 14,
    title: "Аспиратор стоматологический NSK",
    price: 4400,
    code: "NSK-ASP01",
    brand: "NSK",
  },
  {
    id: 15,
    title: "Турбинный наконечник Kavo",
    price: 9900,
    code: "KAVO-TURBO",
    brand: "Kavo",
  },
];

const images = [
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "1",
  },
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "2",
  },
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "3",
  },
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "4",
  },
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "5",
  },
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "6",
  },
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "7",
  },
  {
    src: "https://denttrade.kg/wp-content/uploads/2024/08/%D0%B7%D1%83%D0%B1%D0%BE%D1%82%D0%B5%D1%85_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B_%D0%B8_%D0%B0%D0%BA%D1%81-300x300.png",
    label: "8",
  },
];

export const HomePage = () => {
  const navigate = useNavigate();
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const contentStyle2 = {
    height: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
  };

  const chunked = [];
  for (let i = 0; i < images.length; i += 4) {
    chunked.push(images.slice(i, i + 4));
  }
  return (
    <main style={{ backgroundColor: "#f9f9f9" }}>
      <Carousel autoplay>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                'url("https://static.tildacdn.com/tild3032-6633-4366-a532-643335356139/6fgnff.png")',
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                'url("https://static.tildacdn.com/tild3032-6633-4366-a532-643335356139/6fgnff.png")',
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                'url("https://static.tildacdn.com/tild3032-6633-4366-a532-643335356139/6fgnff.png")',
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                'url("https://static.tildacdn.com/tild3032-6633-4366-a532-643335356139/6fgnff.png")',
            }}
          ></div>
        </div>
      </Carousel>
      <Flex className="m-10 gap-40" justify="center">
        <img
          style={{ width: "400px", objectFit: "contain" }}
          src="https://dentestore.com/Images/Banner-09.png"
          alt=""
        />
        <img
          style={{ width: "400px", objectFit: "contain" }}
          src="https://dentestore.com/Images/Banner-08.png"
          alt=""
        />
        <img
          style={{ width: "400px", objectFit: "contain" }}
          src="https://dentestore.com/Images/Banner-10.png"
          alt=""
        />
        <img
          style={{ width: "400px", objectFit: "contain" }}
          src="https://dentestore.com/Images/Banner-11.png"
          alt=""
        />
      </Flex>
      <div className="container">
        <Flex vertical className="my-10 bg-white">
          <h2 className="pl-4 pt-4 text-3xl font-bold">Наша продукция</h2>
          <Divider />
          <div className="grid grid-cols-5 gap-4 ">
            {dentalItems.map((item) => (
              <ProductCategoryItem item={item} />
            ))}
          </div>
        </Flex>

        <Flex align="center" justify="center" className="mt-4">
          <div>
            <CustomButton onClick={() => navigate("/products")}>
              Еще продукты
            </CustomButton>
          </div>
        </Flex>
        {/* <Row gutter={24} style={{ backgroundColor: "#e7e7e7" }}>
          <Col span={8}>
            <h2>КТО МЫ И ЧТО ПРЕДЛАГАЕМ</h2>
            <span>
              ОсОО “Дент Трейд” предлагает современное оборудование и расходные
              материалы для стоматологических кабинетов и зуботехнических
              лабораторий
            </span>
            <CustomButton>О нас</CustomButton>
          </Col>
          <Col></Col>
        </Row>
        <div className="grid grid-cols-4 gap-10">
          {doctors.map((item) => (
            <motion.div
              className={styles.card}
              whileHover={{
                boxShadow: "0px 4px 15px rgba(67, 141, 173, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className={styles.icon}>{item.icon}</p>
              <h2 className={styles.title}>{item.title}</h2>
              <Typography.Text className={styles.descrip}>
                {item.description}
              </Typography.Text>
            </motion.div>
          ))}
        </div> */}
      </div>
      {/* <div>
        <h2>Популярные товары</h2>
        <Carousel autoplay className="my-20">
          {chunked.map((group, index) => (
            <div key={index}>
              <div
                style={{ display: "flex", gap: 16, justifyContent: "center" }}
              >
                {group.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...contentStyle2,
                      flex: 1,
                      backgroundImage: `url(${item.src})`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div> */}

      <section
        className={`${styles.reviews} container`}
        style={{ marginBottom: "40px" }}
      >
        <div className="my-10 flex justify-between items-center h-full gap-20">
          <h2 className="text-3xl uppercase text-white">Отзывы покупателей</h2>
          <div className="flex flex-col gap-20">
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
