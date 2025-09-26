import { Flex } from "antd";
import { HeartFilled, HeartOutlined, StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCartStore, useFavoritesStore } from "../../store";

import no_foto from "../../assets/images/no_image.png";
import styles from "./ProductItem.module.scss";
import clsx from "clsx";

export const ProductItem = ({ item, currentPage }) => {
  const navigate = useNavigate();
  const { addToCart } = useCartStore();
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoritesStore();

  const onFav = (e) => {
    e.stopPropagation();
  };

  const onCart = (e) => {
    e.stopPropagation();
    addToCart(item);
  };

  const onFavorites = () => {
    addToFavorites(item);
  };

  const removeFavorites = () => {
    removeFromFavorites(item.codeid);
  };

  const findFav = favorites?.find((fav) => fav?.codeid === item?.codeid);

  const imgParse = item?.files?.length ? JSON.parse(item.files[0]?.file) : null;

  return (
    <Flex
      className={clsx(styles.card)}
      vertical
      onClick={() =>
        navigate(
          item?.category && item?.category !== "other"
            ? `/product/${item?.category}?codeid=${item?.codeid}&page=${currentPage}`
            : `/product/${item?.category}/${item?.codeid}?page=${currentPage}`
        )
      }
    >
      <div className={clsx(styles.img)}>
        <img
          className={clsx(styles.ad_img)}
          src={
            imgParse !== null
              ? `${process.env.REACT_APP_URL}/${imgParse?.path}`
              : no_foto
          }
          alt={item}
        />
        <span className={clsx(styles.fav)} onClick={(e) => onFav(e)}>
          {!findFav && <HeartOutlined onClick={() => onFavorites()} />}
          {findFav && <HeartFilled onClick={() => removeFavorites()} />}
        </span>
      </div>
      <Flex className={clsx(styles.descrip)} vertical gap={"small"}>
        <Flex gap="small" align="center" className={clsx(styles.price)}>
          <span className={clsx("text-md whitespace-pre-line")}>
            {Number(item?.price).toLocaleString()} сом
          </span>
          {/* <span
            className={clsx("text-sm line-through line-clamp-2")}
            style={{ color: "#647180" }}
          >
            {Number(item?.price).toLocaleString()} сом
          </span> */}
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
        {/* <Flex gap="small">
          <span>
            <StarFilled style={{ color: "#f05423" }} /> 5.0
          </span>
        </Flex> */}
        <button className={clsx(styles.btn)} onClick={(e) => onCart(e)}>
          Добавить в корзину
        </button>
        <Flex gap={"small"}></Flex>
      </Flex>
    </Flex>
  );
};
