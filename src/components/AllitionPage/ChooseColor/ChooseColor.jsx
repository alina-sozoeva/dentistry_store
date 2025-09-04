import { Flex } from "antd";

import bg_img from "../../../assets/images/eq_card_bg.svg";

import styles from "./ChooseColor.module.scss";
import clsx from "clsx";
import { useState } from "react";

export const ChooseColor = ({ item }) => {
  const [choose, setChoose] = useState("white");

  return (
    <Flex
      justify="space-between"
      className={clsx(styles.wrap, "gen_wrap mb-28")}
    >
      <Flex vertical justify="space-between" className={clsx("gap-[50px]")}>
        <Flex vertical gap="small">
          <span className={clsx(styles.title)}>
            Присмотритесь повнимательнее
          </span>
          <span className={clsx(styles.descrip)}>Выберите свой цвет</span>
        </Flex>
        <Flex gap="large">
          <Flex
            align="center"
            gap="middle"
            className={clsx(
              choose === "white" ? styles.white_btn_active : styles.white_btn
            )}
            onClick={() => setChoose("white")}
          >
            <button></button>
            <span>Белый</span>
          </Flex>

          <Flex
            align="center"
            gap="middle"
            className={clsx(
              choose === "black" ? styles.black_btn_active : styles.black_btn
            )}
            onClick={() => setChoose("black")}
          >
            <button></button>
            <span>Черный</span>
          </Flex>
        </Flex>
      </Flex>
      <div className={clsx(styles.bg_img)}>
        <img src={bg_img} alt={bg_img} />
      </div>
      <div className={clsx(styles.item_img)}>
        <img
          src={choose === "white" ? item?.img_white : item?.img_black}
          alt="img"
        />
      </div>
    </Flex>
  );
};
