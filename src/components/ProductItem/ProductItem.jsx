import { Flex } from "antd";
import {
  HeartFilled,
  HeartOutlined,
  MessageFilled,
  StarFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductItem.module.scss";
import clsx from "clsx";

export const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);

  const onFav = (e) => {
    e.stopPropagation();
  };

  return (
    <Flex
      className={clsx(styles.card)}
      vertical
      onClick={() => navigate(`/product/${item.id}`)}
    >
      <div className={clsx(styles.img)}>
        <img className={clsx(styles.ad_img)} src={item.img[0]} alt={item} />
        <span className={clsx(styles.fav)} onClick={(e) => onFav(e)}>
          {!fav && <HeartOutlined onClick={() => setFav(true)} />}
          {fav && <HeartFilled onClick={() => setFav(false)} />}
        </span>
      </div>
      <Flex className={clsx(styles.descrip)} vertical gap={"small"}>
        <Flex gap="small" align="center" className={clsx(styles.price)}>
          <span className={clsx("text-xl whitespace-pre-line")}>
            {item.price} сом
          </span>
          <span className={clsx("line-through")} style={{ color: "#647180" }}>
            {item.price} сом
          </span>
        </Flex>
        <Flex vertical justify="space-between">
          <h3
            className={clsx("text-base  min-h-[3em] font-bold line-clamp-2 ")}
          >
            {item.title}
          </h3>
          <span className={clsx("text-sm line-clamp-2")}>
            {item.description}
          </span>
        </Flex>
        <Flex gap="small">
          <span>
            <StarFilled style={{ color: "#f05423" }} /> 5.0
          </span>
          <span style={{ color: "#bbc2c8" }}>
            <MessageFilled /> 12 отзывов
          </span>
        </Flex>
        <button className={clsx(styles.btn)}>Добавить в корзину</button>
        <Flex gap={"small"}></Flex>
      </Flex>
    </Flex>
  );
};
