import { Carousel, Col, Divider, Flex, Input, Row } from "antd";
import { RatingStars } from "../../ui";
import { CustomButton } from "../CustomButton";
import {
  FilePdfOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import styles from "./ProductInfo.module.scss";
import { Link } from "react-router";
import * as chairImages from "../../assets/images/сhairs";

export const ProductInfo = ({ item, isModal = false }) => {
  console.log(item, "item");

  return (
    <section>
      <Flex vertical className={styles.card}>
        <Flex gap={"large"}>
          <Row gutter={24}>
            <Col span={12}>
              <Carousel arrows autoplay>
                {/* {item?.img.map((i) => (
                  <img className={styles.img} src={i} alt="product foto" />
                ))} */}
                <img src={chairImages.C_Class_unit_cart_2} alt="" />
              </Carousel>
            </Col>
            <Col span={12}>
              <Flex vertical className={styles.about_product}>
                <Flex vertical gap={"small"}>
                  {!isModal ? (
                    <span>
                      <b>{item?.nameid}</b>
                    </span>
                  ) : (
                    <Link>
                      <b>E CONNECT S (Endo Motor)</b>
                    </Link>
                  )}
                  <span>{item?.nameid}</span>
                </Flex>
                <Divider dashed style={{ borderColor: "#bbb" }} />
                <Flex vertical gap={"small"} justify="center">
                  <span className="text-orange">
                    <b className="text-black">Цена:</b> 1 995, 00 сом, КР
                  </span>
                  <Flex>
                    <span className="bg-orange text-white px-2 rounded-sm">
                      В наличии
                    </span>
                  </Flex>
                  <span>
                    Заработайте <b>399 баллов</b> лояльности при покупке этого
                    товара.
                  </span>
                  <RatingStars />
                </Flex>
                <Divider dashed style={{ borderColor: "#bbb" }} />
                <Flex vertical className={styles.product_info}>
                  <span>Артикул: 3419-ЭКОНП</span>
                  <span>Код: ЭКОНП</span>
                  <span>Бренд: Восемнадцатый</span>
                  <span>
                    Производитель: Чанчжоуская Восемнадцатая Медицинская
                    Технологическая Компания, ООО
                  </span>
                  <span>Возвратный: Нет</span>
                  <span>
                    Доступно в: ОАЭ, Катар, Оман, ЛИВИЯ, Ливан, Кувейт,
                    Саудовская Аравия, Иордания, ИРАК, Египет, Бахрейн, Другая
                    страна
                  </span>
                </Flex>
              </Flex>
            </Col>
          </Row>

          <Flex vertical gap={"middle"} className={styles.btns}>
            <CustomButton icon={<FilePdfOutlined />}>Брошюра</CustomButton>
            <Input type="number" defaultValue={1} placeholder="Количество" />
            <CustomButton icon={<ShoppingCartOutlined />}>
              В корзину
            </CustomButton>
            <CustomButton icon={<ShoppingOutlined />}>
              Купить сейчас
            </CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};
