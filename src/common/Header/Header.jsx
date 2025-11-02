import {
  HeartOutlined,
  ShoppingCartOutlined,
  WhatsAppOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Dropdown, Drawer, Flex, Input, Space } from "antd";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { pathname } from "../../enums";
import { TbCategoryFilled } from "react-icons/tb";
import { useGetCategoryQuery } from "../../store/api/category.api";

import { CustomButton } from "../CustomButton";
import { ReviewModal } from "../ReviewModal";
import {
  useCartStore,
  useFavoritesStore,
  useGetProvidersQuery,
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const goToStudy = () => {
    navigate("/", { state: { scrollTo: "study" } });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.wrap}>
      <Flex vertical className={clsx(styles.header)}>
        <Flex
          className={clsx("px-20", styles.header_top)}
          gap="small"
          align="center"
        >
          <Link
            className={clsx(styles.logo_link)}
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

            <CustomButton
              className={clsx(styles.review_btn)}
              onClick={() => setOpen(true)}
            >
              Оставить отзыв
            </CustomButton>
          </Flex>

          <Flex
            gap={"large"}
            align="center"
            className={clsx(styles.actions, "h-[50px]")}
          >
            <Link
              to={pathname.FAVORITES}
              className={clsx(
                styles.action_link,
                "text-2xl flex flex-col items-center"
              )}
            >
              <div className={clsx(styles.cart)}>
                {favorites?.length !== 0 && (
                  <div className={clsx(styles.cart_count)}>
                    {favorites?.length}
                  </div>
                )}
                <HeartOutlined />
              </div>
              <span className={clsx(styles.action_text)}>Избранное</span>
            </Link>
            <Link
              to={pathname.CART}
              className={clsx(
                styles.action_link,
                "text-2xl flex flex-col items-center"
              )}
            >
              <div className={clsx(styles.cart)}>
                {cart.length !== 0 && (
                  <div className={clsx(styles.cart_count)}>{cart.length}</div>
                )}
                <ShoppingCartOutlined />
              </div>
              <span className={clsx(styles.action_text)}>Корзина</span>
            </Link>
          </Flex>

          <button
            className={clsx(styles.burger_menu)}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <MenuOutlined />
          </button>
        </Flex>
      </Flex>

      <div className={clsx("container", styles.desktop_nav)}>
        <div className={clsx(styles.header_nav)}>
          <a
            href="https://api.whatsapp.com/send/?phone=996706414444&text&type=phone_number&app_absent=0"
            target="_blank"
            className={clsx("cursor-pointer flex gap-[10px] align-center")}
            style={{ color: "#147abc" }}
          >
            <WhatsAppOutlined />
            Связаться с нами
          </a>

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
          {links.map((item) =>
            item?.key === 5 ? (
              <span
                key={item.key}
                onClick={goToStudy}
                className={
                  page === item.path ? styles.active_link : styles.link
                }
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </span>
            ) : (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => navigate(item.path)}
              >
                <span
                  className={
                    page === item.path ? styles.active_link : styles.link
                  }
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
        </div>
      </div>

      <Drawer
        title={
          <Flex justify="space-between">
            <span>Меню</span>
          </Flex>
        }
        placement="left"
        onClose={closeMobileMenu}
        open={mobileMenuOpen}
        className={clsx(styles.mobile_drawer)}
      >
        <Flex vertical className={clsx(styles.mobile_menu)}>
          <a
            href="https://api.whatsapp.com/send/?phone=996706414444&text&type=phone_number&app_absent=0"
            target="_blank"
            className={clsx(styles.mobile_link)}
            onClick={closeMobileMenu}
          >
            <WhatsAppOutlined />
            Связаться с нами
          </a>

          <Dropdown menu={{ items: mappedCategories }} trigger={["click"]}>
            <div className={clsx(styles.mobile_link)}>
              <TbCategoryFilled />
              Категории
            </div>
          </Dropdown>

          <Dropdown menu={{ items: mappedBrands }} trigger={["click"]}>
            <div className={clsx(styles.mobile_link)}>
              <FaTags />
              Бренды
            </div>
          </Dropdown>

          {links.map((item) =>
            item?.key === 5 ? (
              <span
                key={item.key}
                onClick={() => {
                  goToStudy();
                  closeMobileMenu();
                }}
                className={clsx(styles.mobile_link)}
              >
                {item.title}
              </span>
            ) : (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => {
                  navigate(item.path);
                  closeMobileMenu();
                }}
                className={clsx(styles.mobile_link)}
              >
                {item.title}
              </Link>
            )
          )}
        </Flex>

        <Dropdown menu={{ items: mappedBrands }} trigger={["click"]}>
          <Link
            to={pathname.FAVORITES}
            onClick={closeMobileMenu}
            className={clsx(styles.mobile_link)}
          >
            <HeartOutlined />
            <span>
              Избранное
              {favorites?.length !== 0 && ` (${favorites?.length})`}
            </span>
          </Link>
        </Dropdown>

        <Dropdown menu={{ items: mappedBrands }} trigger={["click"]}>
          <Link
            to={pathname.CART}
            onClick={closeMobileMenu}
            className={clsx(styles.mobile_link)}
          >
            <ShoppingCartOutlined />
            <span>
              Корзина
              {cart.length !== 0 && ` (${cart.length})`}
            </span>
          </Link>
        </Dropdown>
        <Flex className={clsx("w-full mt-4")}>
          <CustomButton
            className={clsx(styles.review_btn, "w-full")}
            onClick={() => setOpen(true)}
          >
            Оставить отзыв
          </CustomButton>
        </Flex>
      </Drawer>

      <ReviewModal open={open} onCancel={() => setOpen(false)} />
    </header>
  );
};
