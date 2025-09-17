import {
  HeartOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Dropdown, Flex, Input, Space } from "antd";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { pathname } from "../../enums";
import { TbCategoryFilled } from "react-icons/tb";
import { useGetCategoryQuery } from "../../store/api/category.api";
import { useLocation } from "react-router";

import { CustomButton } from "../CustomButton";
import { ReviewModal } from "../ReviewModal";
import {
  useCartStore,
  useFavoritesStore,
  useGetProvidersQuery,
  useUserStore,
} from "../../store";
import { FaTags } from "react-icons/fa6";

import styles from "./Header.module.scss";
import logo from "../../assets/images/logo_without_bg_blue.png";
import clsx from "clsx";

const links = [
  {
    key: 1,
    title: "Главная",
    path: pathname.HOME,
  },
  {
    key: 2,
    title: "О нас",
    path: pathname.ABOUT,
  },
  {
    key: 3,
    title: "Магазин",
    path: pathname.PRODUCTS,
  },
  {
    key: 4,
    title: "Контакты",
    path: pathname.CONTACT,
  },
  {
    key: 5,
    title: "Обучение",
    path: pathname.STUDY,
  },
  {
    key: 6,
    title: "Элайнеры",
    path: pathname.ALIGNERS,
  },
];

export const Header = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState("/");
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  const { data: categories } = useGetCategoryQuery();
  const { data: brands } = useGetProvidersQuery({});
  const { cart } = useCartStore();
  const { favorites } = useFavoritesStore();

  const onPage = (nav) => {
    setPage(nav);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`products?.products?search=${searchValue}`);
      setSearchValue("");
    }
  };

  const onCategoyId = (categoryСodeid) => {
    navigate({
      pathname: pathname.PRODUCTS,
      search: `?category=${categoryСodeid}`,
    });
  };

  const onBrandId = (brandСodeid) => {
    navigate({
      pathname: pathname.PRODUCTS,
      search: `?brand=${brandСodeid}`,
    });
  };

  const mappedCategories = categories?.map((item) => ({
    key: item.codeid,
    label: (
      <span
        onClick={() => onCategoyId(item.codeid)}
        className={clsx("cursor-pointer")}
      >
        {item.nameid}
      </span>
    ),
  }));

  const mappedBrands = brands?.map((item) => ({
    key: item.codeid,
    label: (
      <span
        onClick={() => onBrandId(item.codeid)}
        className={clsx("cursor-pointer")}
      >
        {item.nameid}
      </span>
    ),
  }));

  return (
    <header className={styles.wrap}>
      <Flex vertical className={clsx(styles.header)}>
        <Flex className={clsx("px-20")} gap="small" align="center">
          <Link
            className={clsx("w-[220px]")}
            to={pathname.HOME}
            onClick={() => onPage(pathname.HOME)}
          >
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <Flex
            className={clsx(styles.search, "container")}
            align="center"
            gap="middle"
          >
            <Input
              value={searchValue}
              placeholder="Поиск по более 2000 стамотолошических товаров"
              onChange={(e) => setSearchValue(e.target.value)}
              onPressEnter={handleSearch}
              className={clsx(styles.search_input)}
            />
          </Flex>

          <Flex gap={"large"} align="center" className={clsx("h-[50px]")}>
            <Link
              to={pathname.FAVORITES}
              className="text-2xl flex flex-col items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              <div className={clsx(styles.cart)}>
                {favorites?.length !== 0 && (
                  <div className={clsx(styles.cart_count)}>
                    {favorites?.length}
                  </div>
                )}
                <HeartOutlined />
              </div>
              <span>Избранное</span>
            </Link>
            <Link
              to={pathname.CART}
              className="text-2xl flex flex-col items-center"
              style={{ whiteSpace: "nowrap" }}
            >
              <div className={clsx(styles.cart)}>
                {cart.length !== 0 && (
                  <div className={clsx(styles.cart_count)}>{cart.length}</div>
                )}
                <ShoppingCartOutlined />
              </div>
              <span>Корзина</span>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <div className={clsx("container")}>
        <div className={clsx(styles.header_nav)}>
          <Flex align="center" gap="small">
            <Dropdown menu={{ items: mappedCategories }} trigger={["click"]}>
              <Space className={clsx("cursor-pointer")}>
                <TbCategoryFilled />
                Категории
              </Space>
            </Dropdown>
          </Flex>
          <Flex align="center" gap="small">
            <Dropdown menu={{ items: mappedBrands }} trigger={["click"]}>
              <Space className={clsx("cursor-pointer")}>
                <FaTags />
                Бренды
              </Space>
            </Dropdown>
          </Flex>
          {links.map((item) => (
            <Link to={item.path} onClick={() => onPage(item.path)}>
              <span
                className={
                  page === item.path ? styles.active_link : styles.link
                }
              >
                {item.title}
              </span>
            </Link>
          ))}

          <CustomButton onClick={() => setOpen(true)}>
            Оставить отзыв
          </CustomButton>
        </div>
      </div>

      <ReviewModal open={open} onCancel={() => setOpen(false)} />
    </header>
  );
};
