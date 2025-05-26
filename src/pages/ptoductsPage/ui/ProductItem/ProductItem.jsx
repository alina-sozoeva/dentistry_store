import { ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { Flex } from "antd";
import foto from "../../../../assets/images/tovar.jpg";
import { CustomButton } from "../../../../components";
import styles from "./ProductItem.module.scss";
import { useState } from "react";
import { ProductModal } from "../ProductModal";
import { RatingStars } from "../../../../ui";
import { useNavigate } from "react-router";

export const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onProduct = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <Flex className={styles.card} vertical>
      <div className={styles.imageWrapper}>
        <img className={styles.img} src={foto} alt="" />
        <div className={styles.overlay} />
        <button
          className={styles.buttonOverlay}
          icon={<ShoppingCartOutlined />}
          onClick={() => setOpenModal(true)}
        >
          Подробнее
        </button>
      </div>

      <span className={styles.title} onClick={onProduct}>
        {item.title}
      </span>
      <RatingStars />
      <span className={styles.price}>{item.price} сом, КР</span>
      <CustomButton icon={<ShoppingCartOutlined />}>В корзину</CustomButton>
      <ProductModal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        item={item}
      />
    </Flex>
  );
};
