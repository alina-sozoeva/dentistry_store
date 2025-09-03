import {
  Carousel,
  Col,
  Collapse,
  Divider,
  Flex,
  Input,
  Row,
  Spin,
  Typography,
} from "antd";

import { CustomButton } from "../../common";
import { useParams } from "react-router";
import { useMemo } from "react";
import {
  useCartStore,
  useFavoritesStore,
  useGetProductsQuery,
} from "../../store";
import { RatingStars } from "../../ui";

import no_foto from "../../assets/images/no_image.png";
import styles from "./ProductItemPage.module.scss";
import {
  FilePdfOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from "@ant-design/icons";
import clsx from "clsx";

const { Title, Paragraph } = Typography;

const text = (
  <p
    style={{
      paddingInlineStart: 24,
    }}
  >
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);

const items = [
  {
    key: "1",
    label: "Связанные элементы:",
    children: text,
  },
  {
    key: "2",
    label: "Горячие позиции:",
    children: text,
  },
];

export const ProductItemPage = () => {
  const { codeid } = useParams();
  const { data: products, isLoading, isFetching } = useGetProductsQuery({});
  const { addToFavorites } = useFavoritesStore();
  const { addToCart } = useCartStore();

  const findItem = useMemo(() => {
    return products?.find((item) => +item.codeid === +codeid);
  }, [codeid, products]);

  const imgParse = (img) => {
    return JSON.parse(img);
  };

  const splitCommet = findItem?.comment.split(/(?<=\.)\s+/);

  return (
    <section className={`${styles.wrap} py-4 `}>
      <Spin spinning={isLoading || isFetching}>
        <Flex vertical className="container">
          <Title>О продукте</Title>
          <Flex vertical className={styles.card}>
            <Flex gap={"large"}>
              <Row gutter={24}>
                <Col span={12}>
                  {findItem?.files?.length ? (
                    <Carousel arrows autoplay className={clsx(styles.carousel)}>
                      {findItem?.files?.map((item) => (
                        <img
                          src={`${process.env.REACT_APP_URL}/${
                            imgParse(item.file).path
                          }`}
                          alt=""
                        />
                      ))}
                    </Carousel>
                  ) : (
                    <Carousel>
                      <img src={no_foto} alt={no_foto} />
                    </Carousel>
                  )}
                </Col>
                <Col span={12}>
                  <Flex vertical className={styles.about_product}>
                    <Flex vertical gap={"small"}>
                      <span>
                        <b>{findItem?.nameid}</b>
                      </span>
                    </Flex>
                    <Divider dashed style={{ borderColor: "#bbb" }} />
                    <Flex vertical gap={"small"} justify="center">
                      <span className="text-orange">
                        <b className="text-black">Цена:</b>{" "}
                        {Number(findItem?.price).toLocaleString()} сом
                      </span>
                      <Flex>
                        <span className="bg-orange rounded-sm ">
                          <strong> В наличии: </strong> {findItem?.quantity}{" "}
                          {findItem?.nameid_sp_units}
                        </span>
                      </Flex>
                      <span>
                        <b>Категория:</b> {findItem?.nameid_sp_product_category}{" "}
                      </span>
                      <RatingStars />
                    </Flex>
                    <Divider dashed style={{ borderColor: "#bbb" }} />
                    <Flex vertical className={styles.product_info}>
                      <span>
                        <b>Артикул:</b> 3419-ЭКОНП
                      </span>
                      <span>
                        <b>Код</b>: ЭКОНП
                      </span>
                      <span></span>
                      <span>
                        <b>Производитель:</b> Чанчжоуская Восемнадцатая
                        Медицинская Технологическая Компания, ООО
                      </span>
                    </Flex>
                  </Flex>
                </Col>
              </Row>

              <Flex vertical gap={"middle"} className={styles.btns}>
                <CustomButton icon={<FilePdfOutlined />}>Брошюра</CustomButton>
                <Input
                  type="number"
                  defaultValue={1}
                  placeholder="Количество"
                />
                <CustomButton
                  onClick={() => addToCart(findItem)}
                  icon={<ShoppingCartOutlined />}
                >
                  В корзину
                </CustomButton>
                <CustomButton
                  icon={<StarOutlined />}
                  onClick={() => addToFavorites(findItem)}
                >
                  Добавить в избранное
                </CustomButton>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="container">
            <Flex vertical className="w-full max-w-4xl py-10">
              <Title level={2}>{findItem?.nameid}</Title>

              <Paragraph>
                <strong>Описание:</strong> {splitCommet}
              </Paragraph>
            </Flex>
          </Flex>
          <Collapse
            items={items}
            bordered={false}
            defaultActiveKey={[]}
            className="mb-4"
          />
        </Flex>
      </Spin>
    </section>
  );
};
