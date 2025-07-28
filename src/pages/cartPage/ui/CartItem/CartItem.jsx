import { Flex, Input } from "antd";
import { CloseOutlined, TruckOutlined } from "@ant-design/icons";
import { useState } from "react";
import * as chairImages from "../../../../assets/images/сhairs";
import styles from "./CartItem.module.scss";
import clsx from "clsx";
import { useCartStore } from "../../../../store";

export const CartItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const { removeFromCart } = useCartStore();
  const { addToCart, deleteCount } = useCartStore();

  const onChange = (e) => {
    setCount(e.target.value);
  };

  const removeItem = () => {
    removeFromCart(item.codeid);
  };

  const ButtonMinus = () => {
    return (
      <span className={clsx(styles.btn)} onClick={() => deleteCount(item)}>
        -
      </span>
    );
  };

  const ButtonPlus = () => {
    return (
      <span className={clsx(styles.btn)} onClick={() => addToCart(item)}>
        +
      </span>
    );
  };

  return (
    <Flex gap="small" className={clsx(styles.wrap)}>
      <div className={styles.img}>
        <img src={chairImages.C_Class_unit_cart_2} alt="" />
      </div>
      <Flex vertical justify="space-between" className={clsx("w-full py-2")}>
        <Flex className={clsx("mb-2")} justify="space-between">
          <span>{item.nameid}</span>
          <CloseOutlined onClick={() => removeItem()} />
        </Flex>
        <span className={clsx(styles.dostavka)}>
          <TruckOutlined /> Быстрая доставка
        </span>
        <Flex
          justify="space-between"
          gap="small"
          align="center"
          className={clsx(styles.price)}
        >
          <Flex gap="large" align="center">
            <span className={clsx("line-through")} style={{ color: "#647180" }}>
              {item.price.toLocaleString()} сом
            </span>
            <span className={clsx("text-xl whitespace-pre-line")}>
              {item.price.toLocaleString()} сом
            </span>
          </Flex>
          <Input
            addonBefore={<ButtonMinus />}
            addonAfter={<ButtonPlus />}
            defaultValue="mysite"
            value={item.count}
            className={clsx("w-[100px] text-center")}
            onChange={onChange}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
