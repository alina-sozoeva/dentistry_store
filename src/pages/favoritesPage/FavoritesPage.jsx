import { Divider, Empty, Flex, Typography } from "antd";
import { useFavoritesStore } from "../../store";
import { useNavigate } from "react-router";
import { pathname } from "../../enums";
import styles from "./FavoritesPage.module.scss";
import clsx from "clsx";
import { ProductItem } from "../../components";

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites } = useFavoritesStore();

  return (
    <main className={clsx(styles.cart_wrap, "header_h mb-6 screen_page")}>
      <section className={clsx("container")}>
        <Typography.Title level={2}>Избранные</Typography.Title>

        <Flex className={clsx(styles.wrap)}>
          <Flex vertical className={clsx(styles.wrap_item)}>
            <Divider />
            {favorites?.length === 0 ? (
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
                {favorites?.map((item) => (
                  <ProductItem key={item.id} item={item} />
                ))}
              </Flex>
            )}
          </Flex>
        </Flex>
      </section>
    </main>
  );
};
