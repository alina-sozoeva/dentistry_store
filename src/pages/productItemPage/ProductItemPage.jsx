import {
  Carousel,
  Collapse,
  Divider,
  Flex,
  Input,
  Spin,
  Typography,
} from "antd";

import { CustomBreadcrumb, CustomButton } from "../../common";
import { useNavigate, useParams } from "react-router";
import { useMemo } from "react";
import {
  useCartStore,
  useFavoritesStore,
  useGetProductsQuery,
} from "../../store";
import { RatingStars } from "../../ui";

import no_foto from "../../assets/images/no_image.png";
import styles from "./ProductItemPage.module.scss";
import { ShoppingCartOutlined, StarOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { pathname } from "../../enums";

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
  const { category } = useParams();
  const navigate = useNavigate();

  const { data: products, isLoading, isFetching } = useGetProductsQuery({});
  const { addToFavorites } = useFavoritesStore();
  const { addToCart } = useCartStore();

  const findItem = useMemo(() => {
    return products?.products?.find((item) => +item.codeid === +codeid);
  }, [codeid, products]);

  const filterCategory = useMemo(() => {
    if (!products || !findItem) return [];

    return products.products.filter(
      (item) =>
        item.category === findItem.category &&
        item.category !== "other" &&
        +item.codeid !== +codeid
    );
  }, [codeid, findItem, products]);

  const imgParse = (img) => {
    return JSON.parse(img);
  };

  const splitCommet = findItem?.comment.split(/(?<=\.)\s+/);

  return (
    <section className={`${styles.wrap} py-4 `}>
      <Spin spinning={isLoading || isFetching}>
        <Flex vertical className="container">
          <CustomBreadcrumb
            midPath={pathname.PRODUCTS}
            midTitle={"Стоматологическое оборудование"}
            lastTitle={findItem?.nameid}
          />
          <Title>О продукте</Title>
          <Flex vertical className={styles.card}>
            <Flex gap={"large"}>
              <div className={clsx(styles.carousel_wrpa)}>
                {findItem?.files?.length !== 0 ? (
                  <Carousel arrows autoplay className={clsx(styles.carousel)}>
                    {findItem?.files?.map((item) => (
                      <div className={clsx(styles.carousel_item)}>
                        <img
                          src={`${process.env.REACT_APP_URL}/${
                            imgParse(item.file).path
                          }`}
                          alt=""
                        />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <Carousel>
                    <div className={clsx(styles.carousel_item)}>
                      <img src={no_foto} alt="no_foto" />
                    </div>
                  </Carousel>
                )}
              </div>

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
                  <RatingStars value={5} />
                </Flex>
                <Divider dashed style={{ borderColor: "#bbb" }} />
              </Flex>

              <Flex vertical gap={"middle"} className={styles.btns}>
                <CustomButton
                  icon={<StarOutlined />}
                  onClick={() => addToFavorites(findItem)}
                >
                  Добавить в избранное
                </CustomButton>
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
              </Flex>
            </Flex>

            {filterCategory.length > 0 && (
              <>
                <Divider dashed style={{ borderColor: "#bbb" }} />
                <Title level={4}>Другие модели</Title>
                <div className={styles.relatedWrapper}>
                  {filterCategory.map((item) => (
                    <div
                      key={item.codeid}
                      className={styles.relatedItem}
                      onClick={() =>
                        navigate(
                          item.category && item.category !== "other"
                            ? `/product/${item.category}/${item.codeid}`
                            : `/product/${item.codeid}`
                        )
                      }
                    >
                      <img
                        src={
                          item.files?.length
                            ? `${process.env.REACT_APP_URL}/${
                                JSON.parse(item.files[0].file).path
                              }`
                            : no_foto
                        }
                        alt={item.nameid}
                      />
                      <span>{item.nameid}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Flex>

          <Flex className="container">
            <Flex vertical className="w-full max-w-4xl py-10">
              <Title level={2}>{findItem?.nameid}</Title>

              <Paragraph>
                <strong>Описание:</strong>
                <Flex vertical>
                  {splitCommet?.map((item) => (
                    <span>{item}</span>
                  ))}
                </Flex>
              </Paragraph>
            </Flex>
          </Flex>
          {/* <Collapse
            items={items}
            bordered={false}
            defaultActiveKey={[]}
            className="mb-4"
          /> */}
        </Flex>
      </Spin>
    </section>
  );
};
