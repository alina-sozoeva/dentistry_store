import { Empty, Flex, Typography } from "antd";
import { useFavoritesStore } from "../../store";
import { useNavigate } from "react-router";
import { pathname } from "../../enums";
import { ProductItem } from "../../components";
import styles from "./FavoritesPage.module.scss";
import clsx from "clsx";

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites } = useFavoritesStore();

  return (
    <main className={clsx(styles.cart_wrap, "mb-6 ")}>
      <section className={clsx("container")}>
        <Typography.Title level={2}>Избранные</Typography.Title>

        <Flex className={clsx(styles.wrap)}>
          {favorites?.length === 0 ? (
            <Flex align="center" justify="center" className={clsx("w-full")}>
              <Empty
                className={clsx("")}
                description={
                  <Flex vertical align="center" justify="center" gap="small">
                    <span>У вас пока нет изранных</span>
                    <button
                      className={clsx(styles.btn)}
                      onClick={() => navigate(pathname.PRODUCTS)}
                    >
                      Посмотреть товары
                    </button>
                  </Flex>
                }
              />
            </Flex>
          ) : (
            <div className={clsx("grid grid-cols-5 gap-2")}>
              {favorites?.map((item) => (
                <ProductItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </Flex>
      </section>
    </main>
  );
};
