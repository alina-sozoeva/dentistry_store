import { ShoppingCartOutlined, StarFilled } from "@ant-design/icons";
import { Flex } from "antd";
// import foto from "../../assets/images/tovar.jpg";
import { CustomButton } from "../../../components";
import styles from "./ProductCategoryItem.module.scss";
import { useState } from "react";
import { RatingStars } from "../../../ui";
import { useNavigate } from "react-router";

export const ProductCategoryItem = ({ item }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const onProduct = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <Flex className={styles.card} vertical>
      {/* <img className={styles.img} src={foto} alt="" /> */}

      <span className={styles.title} onClick={onProduct}>
        {item.title}
      </span>
      <RatingStars />
      <span className={styles.price}>{item.price} сом, КР</span>
      <span style={{ fontSize: "11px", color: "#afafaf" }}>
        Код: {item.code}
      </span>
      <span style={{ fontSize: "11px", color: "#afafaf" }}>
        Бренд: {item.brand}
      </span>
    </Flex>
  );
};
