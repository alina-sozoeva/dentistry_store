import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.scss";
import { CustomButton } from "../../components";
import { Col, Divider, Flex, Row } from "antd";
import { RatingStars } from "../../ui";
import { ProductCategoryItem, ServicesCard } from "./ui";
import { dentalItems } from "../../data";
import {
  InboxOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
} from "@ant-design/icons";

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

      <Flex className="m-10 gap-10 flex-wrap" justify="center">
        <ServicesCard
          title="Быстра доставка"
          color="#0071bc"
          icon={<TruckOutlined />}
        />
        <ServicesCard
          title="Воспользуйтесь бесплатной доставкой"
          color="#fd4f01"
          icon={<ShoppingCartOutlined />}
        />
        <ServicesCard
          title="Бесплатный возврат"
          color="#0071bc"
          icon={<InboxOutlined />}
        />
        <ServicesCard
          title="Гарантия возврата денег и возмещения"
          color="#fd4f01"
        />
      </Flex>
      <div className="container">
        <Flex vertical className="my-10 bg-white">
          <h2 className="pl-4 pt-4 text-3xl font-bold">Наша продукция</h2>
          <Divider />
          <div className="grid grid-cols-5 gap-4 ">
            {dentalItems.slice(0, 10).map((item) => (
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
      </div>

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
