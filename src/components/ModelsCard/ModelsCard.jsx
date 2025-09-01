import { Flex } from "antd";
import fon from "../../assets/images/alltion/eq_card_bg.svg";
import styles from "./ModelsCard.module.scss";
import clsx from "clsx";
import { ArrowRightOutlined } from "@ant-design/icons";

export const ModelsCard = ({ item }) => {
  return (
    <div className={clsx(styles.card)}>
      <Flex
        vertical
        justify="space-between"
        align="start"
        className={clsx("w-full h-full")}
      >
        <Flex vertical gap="middle">
          <Flex vertical>
            <span className={clsx(styles.series_name)}>Серия</span>
            <span className={clsx(styles.series)}>{item.name}</span>
          </Flex>
          <span className={clsx(styles.descrip)}>{item.descrip}</span>
          <span className={clsx(styles.price)}>от {item.price} $</span>
        </Flex>
        <button className={clsx(styles.btn)}>
          <ArrowRightOutlined rotate={-20} />
        </button>
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
