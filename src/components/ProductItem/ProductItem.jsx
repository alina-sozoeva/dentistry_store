import { Flex } from "antd";
import {
  HeartFilled,
  HeartOutlined,
  MessageFilled,
  StarFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as chairImages from "../../assets/images/сhairs";

import styles from "./ProductItem.module.scss";
import clsx from "clsx";
import { useCartStore, useFavoritesStore } from "../../store";

export const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);
  const { addToCart } = useCartStore();
  const { addToFavorites } = useFavoritesStore();

  const onFav = (e) => {
    e.stopPropagation();
  };

  const onCart = (e) => {
    e.stopPropagation();
    addToCart(item);
  };

  const onFavorites = () => {
    setFav(true);
    addToFavorites(item);
  };

  return (
    <Flex
      className={clsx(styles.card)}
      vertical
      onClick={() => navigate(`/product/${item.codeid}`)}
    >
      <div className={clsx(styles.img)}>
        <img
          className={clsx(styles.ad_img)}
          src={chairImages.C_Class_unit_cart_2}
          alt={item}
        />
        <span className={clsx(styles.fav)} onClick={(e) => onFav(e)}>
          {!fav && <HeartOutlined onClick={() => onFavorites()} />}
          {fav && <HeartFilled onClick={() => setFav(false)} />}
        </span>
      </div>
      <Flex className={clsx(styles.descrip)} vertical gap={"small"}>
        <Flex gap="small" align="center" className={clsx(styles.price)}>
          <span className={clsx("text-md whitespace-pre-line")}>
            {Number(item?.price).toLocaleString()} сом
          </span>
          <span
            className={clsx("text-sm line-through line-clamp-2")}
            style={{ color: "#647180" }}
          >
            {Number(item?.price).toLocaleString()} сом
          </span>
        </Flex>
        <Flex vertical justify="space-between">
          <h3
            className={clsx("text-base  min-h-[3em] font-bold line-clamp-2 ")}
          >
            {item?.nameid}
          </h3>
          <span className={clsx("text-sm line-clamp-2")}>
            {item?.description}
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
        <button className={clsx(styles.btn)} onClick={(e) => onCart(e)}>
          Добавить в корзину
        </button>
        <Flex gap={"small"}></Flex>
      </Flex>
    </Flex>
  );
};
