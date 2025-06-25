import { ShoppingCartOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { useState } from "react";
import { ProductModal } from "../ProductModal";
import { useNavigate } from "react-router";
import styles from "./ProductItem.module.scss";

export const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onProduct = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <Flex className={styles.card} vertical>
      <div className={styles.imageWrapper}>
        <img className={styles.img} src={item.img[0]} alt={item.img[0]} />
        <div className={styles.overlay} />
        <button
          className={styles.buttonOverlay}
          icon={<ShoppingCartOutlined />}
        >
          В корзину
        </button>
      </div>

      <span className={styles.title} onClick={onProduct}>
        {item.title}
      </span>
      <span className={styles.price}>{item.price} сом</span>
      <ProductModal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        item={item}
      />
    </Flex>
  );
};
