import { BarsOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Flex, Row, Typography } from "antd";
import styles from "./ProductsPage.module.scss";
import { ProductItem } from "./ui";
import { CustomButton } from "../../components";

const categories = [
  { key: "1", label: "Зубные щётки" },
  { key: "2", label: "Зубные пасты" },
  { key: "3", label: "Ирригаторы" },
  { key: "4", label: "Нити и ёршики" },
  { key: "5", label: "Ополаскиватели" },
  { key: "6", label: "Полоски для отбеливания" },
  { key: "7", label: "Пасты для чувствительных зубов" },
  { key: "8", label: "Детская гигиена" },
  { key: "9", label: "Электрические щётки" },
  { key: "10", label: "Дорожные наборы" },
];

const brands = [
  { key: "1", label: "Curaprox" },
  { key: "2", label: "Sensodyne" },
  { key: "3", label: "Waterpik" },
  { key: "4", label: "Oral-B" },
  { key: "5", label: "Listerine" },
  { key: "6", label: "Crest" },
  { key: "7", label: "Elmex" },
  { key: "8", label: "Splat" },
  { key: "9", label: "Philips" },
  { key: "10", label: "Colgate" },
];

const dentalProducts = [
  {
    id: 1,
    title: "Зубная щётка Curaprox 5460",
    price: 890,
    img: "https://example.com/images/curaprox5460.jpg",
  },
  {
    id: 2,
    title: "Паста Sensodyne Repair & Protect",
    price: 320,
    img: "https://example.com/images/sensodyne_repair.jpg",
  },
  {
    id: 3,
    title: "Ирригатор Waterpik WP-100",
    price: 7490,
    img: "https://example.com/images/waterpik_wp100.jpg",
  },
  {
    id: 4,
    title: "Зубная нить Oral-B Essential Floss",
    price: 150,
    img: "https://example.com/images/oralb_floss.jpg",
  },
  {
    id: 5,
    title: "Ополаскиватель Listerine Total Care",
    price: 410,
    img: "https://example.com/images/listerine_total.jpg",
  },
  {
    id: 6,
    title: "Отбеливающие полоски Crest 3D White",
    price: 2450,
    img: "https://example.com/images/crest_3d.jpg",
  },
  {
    id: 7,
    title: "Гель для чувствительных зубов Elmex",
    price: 530,
    img: "https://example.com/images/elmex_sens.jpg",
  },
  {
    id: 8,
    title: "Детская зубная паста Splat Juicy",
    price: 180,
    img: "https://example.com/images/splat_juicy.jpg",
  },
  {
    id: 9,
    title: "Щётка электрическая Philips Sonicare",
    price: 8990,
    img: "https://example.com/images/sonicare.jpg",
  },
  {
    id: 10,
    title: "Гигиенический набор для путешествий",
    price: 690,
    img: "https://example.com/images/travel_kit.jpg",
  },
];

export const ProductsPage = () => {
  return (
    <section className={`${styles.wrap} h-screen`}>
      <div className="mt-10 container">
        <Flex align="center" justify="space-between">
          <Flex vertical>
            <Typography.Title level={2}>
              Стоматологические инструменты
            </Typography.Title>
            <Flex gap={"small"}>
              <BarsOutlined />
              <span>Найдено</span>
              <span className="font-bold">200 результатов</span>
            </Flex>
          </Flex>
          <Flex>
            <CustomButton>Лучшее товары</CustomButton>
          </Flex>
        </Flex>
        <Row gutter={16} className="mt-4">
          <Col span={4}>
            <Flex vertical gap={"small"}>
              <Flex vertical gap={"middle"}>
                <div
                  className="bg-white px-3 py-2"
                  style={{ height: "220px", overflowY: "auto" }}
                >
                  <h4 className="text-orange pb-1">Категории</h4>
                  <Flex vertical gap={"small"}>
                    {categories.map((item) => (
                      <Checkbox
                        key={item.key}
                        // checked={checked}
                        // onChange={onChange}
                      >
                        {item.label}
                      </Checkbox>
                    ))}
                  </Flex>
                </div>
                <div
                  className="bg-white px-3 py-2"
                  style={{ height: "220px", overflowY: "auto" }}
                >
                  <h4 className="text-orange pb-1">Бренд</h4>
                  <Flex vertical gap={"small"}>
                    {brands.map((item) => (
                      <Checkbox
                        key={item.key}
                        // checked={checked}
                        // onChange={onChange}
                      >
                        {item.label}
                      </Checkbox>
                    ))}
                  </Flex>
                </div>
              </Flex>
            </Flex>
          </Col>

          <Col span={20}>
            <div className={`${styles.ptoducts}  grid grid-cols-5 gap-4`}>
              {dentalProducts.map((item) => (
                <ProductItem key={item.id} item={item} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
