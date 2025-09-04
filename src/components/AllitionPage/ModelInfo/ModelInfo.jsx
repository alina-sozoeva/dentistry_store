import { Flex } from "antd";

import bg_img from "../../../assets/images/eq_card_bg.svg";

import clsx from "clsx";
import styles from "./ModelInfo.module.scss";

export const ModelInfo = ({ item }) => {
  return (
    <Flex
      justify="space-between"
      className={clsx(styles.wrap, "gen_wrap mb-20")}
    >
      <Flex vertical className={clsx("gap-[50px]")}>
        <Flex vertical>
          <span className={clsx(styles.subtitle)}>{item?.subtitle}</span>
          <span className={clsx(styles.title)}>{item?.title}</span>
          <span className={clsx(styles.descrip)}>{item?.description}</span>
        </Flex>
        <span className={clsx(styles.price)}>
          от {Number(item?.price).toLocaleString()} $
        </span>
      </Flex>
      <div className={clsx(styles.bg_img)}>
        <img src={bg_img} alt={bg_img} />
      </div>
      <div className={clsx(styles.item_img)}>
        <img src={item?.img_info} alt={item?.img_info} />
      </div>
    </Flex>
  );
};
