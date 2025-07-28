import { Divider, Empty, Flex, Typography } from "antd";
import { CartItem } from "./ui";
import { useCartStore } from "../../store";
import { useNavigate } from "react-router";
import { pathname } from "../../enums";
import styles from "./CartPage.module.scss";
import clsx from "clsx";
import { useMemo } from "react";

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart } = useCartStore();

  const summa = useMemo(() => {
    return cart.reduce((acc, item) => (acc = acc + item.price * item.count), 0);
  }, [cart]);

  return (
    <main className={clsx(styles.cart_wrap, "header_h mb-6 screen_page")}>
      <section className={clsx("container")}>
        <Typography.Title level={2}>Корзина</Typography.Title>

        <Flex className={clsx(styles.wrap)}>
          <Flex vertical className={clsx(styles.wrap_item)}>
            <Divider />
            {cart.length === 0 ? (
              <Empty
                description={
                  <Flex vertical align="center" justify="center" gap="small">
                    <span>Ваша корзина пока пуста</span>
                    <button
                      className={clsx(styles.btn)}
                      onClick={() => navigate(pathname.PRODUCTS)}
                    >
                      Посмотреть товары
                    </button>
                  </Flex>
                }
              />
            ) : (
              <Flex vertical gap="small">
                {cart?.slice(0, 7).map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </Flex>
            )}
          </Flex>
          <Flex
            vertical
            className={clsx(styles.wrap_item, "h-[350px]")}
            gap="middle"
          >
            <button
              className={clsx(styles.btn)}
              onClick={() => navigate(pathname.LOGIN)}
            >
              Перейти к оформлению
            </button>
            <Divider />
            <Flex justify="space-between">
              <span className={clsx("text-lg font-bold")}>Ваша корзина</span>
              <span>{cart.length} товара</span>
            </Flex>
            <Flex justify="space-between">
              <span>Товары ({cart.length})</span>
              <span className={clsx("font-bold text-sm")}>
                {summa.toLocaleString()} сом
              </span>
            </Flex>
            <Flex justify="space-between">
              <span>Скидка</span>
              <span className={clsx("font-bold text-red-400 text-sm")}>
                0 сом
              </span>
            </Flex>
            <Divider />
            <Flex justify="space-between">
              <span className={clsx("text-lg font-bold")}>Общая стоимость</span>
              <span className={clsx("text-lg font-bold")}>
                {summa.toLocaleString()} сом
              </span>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </main>
  );
};
