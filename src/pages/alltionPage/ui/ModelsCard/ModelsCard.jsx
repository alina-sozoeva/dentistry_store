import { Flex } from "antd";
import fon from "../../../../assets/images/alltion/eq_card_bg.svg";
import styles from "./ModelsCard.module.scss";
import clsx from "clsx";

export const ModelsCard = ({ item }) => {
  return (
    <div className={clsx(styles.card)}>
      <Flex vertical gap="middle">
        <Flex vertical>
          <span>Серия</span>
          <span>{item.name}</span>
        </Flex>
        <span>{item.descrip}</span>
        <span>от {item.price} $</span>
      </Flex>
      <div className={clsx(styles.fon)}>
        <img src={fon} alt={fon} />
      </div>
      <div className={clsx(styles.item_img)}>
        <img src={item.img} alt={item.img} />
      </div>
    </div>
  );
};
