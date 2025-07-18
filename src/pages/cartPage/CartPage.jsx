import { Checkbox, Divider, Flex, Table, Typography } from "antd";
import { useCartColumns } from "./useCartColumns";
import { dentalItems } from "../../data";
import styles from "./CartPage.module.scss";
import clsx from "clsx";

export const CartPage = () => {
  const { columns } = useCartColumns();
  return (
    <main className={clsx(styles.cart_wrap, "header_h mb-6 screen_page")}>
      <section className={clsx("container")}>
        <Typography.Title level={2}>Корзина</Typography.Title>

        <Flex className={clsx(styles.wrap)}>
          <Flex vertical className={clsx(styles.wrap_item)}>
            <span className={clsx("text-red-400 ")}>Удалить выбранные</span>
            <Divider />

            <Table
              dataSource={dentalItems}
              showHeader={false}
              columns={columns}
              scroll={{ x: 800, y: 400 }}
            />
          </Flex>
          <Flex vertical className={clsx(styles.wrap_item)} gap="middle">
            <button className={clsx(styles.btn)}>Перейти к оформлению</button>
            <Divider />
            <Flex justify="space-between">
              <span className={clsx("text-lg font-bold")}>Ваша корзина</span>
              <span>2 товара</span>
            </Flex>
            <Flex justify="space-between">
              <span>Товары (2)</span>
              <span className={clsx("font-bold text-sm")}>1 200, 00 сом</span>
            </Flex>
            <Flex justify="space-between">
              <span>Скидка</span>
              <span className={clsx("font-bold text-red-400 text-sm")}>
                -700 сом
              </span>
            </Flex>
            <Divider />
            <Flex justify="space-between">
              <span className={clsx("text-lg font-bold")}>Общая стоимость</span>
              <span className={clsx("text-lg font-bold")}>1 200, 00 сом</span>
            </Flex>
          </Flex>
        </Flex>
      </section>
    </main>
  );
};
