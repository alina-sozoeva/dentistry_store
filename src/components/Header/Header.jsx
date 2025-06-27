import {
  MenuOutlined,
  PhoneFilled,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer, Flex, Input } from "antd";
import { Link, useNavigate } from "react-router";
import { CustomButton } from "../CustomButton";
import { useState } from "react";
import { pathname } from "../../enums";
import clsx from "clsx";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo_without_bg_blue.png";
import { TbCategoryFilled } from "react-icons/tb";

export const Header = () => {
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState("/");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onPage = (nav) => {
    setPage(nav);
    setSearch(false);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`products?search=${searchValue}`);
      setSearchValue("");
      setSearch(false);
    }
  };

  return (
    <header className={styles.wrap}>
      <Flex vertical className={clsx(styles.header)}>
        <Flex className={clsx("px-20")} justify="space-between" align="center">
          <Link to={pathname.HOME} onClick={() => onPage(pathname.HOME)}>
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>

          <Flex className={clsx(styles.search)} align="center" gap="middle">
            <Input
              value={searchValue}
              placeholder="Поиск по более 2000 стамотолошических товаров"
              onChange={(e) => setSearchValue(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: "56rem" }}
            />
          </Flex>
          <Flex gap={"large"} align="center">
            <Link
              to=""
              className={clsx("text-2xl flex gap-2 items-center")}
              style={{ whiteSpace: "nowrap" }}
            >
              <UserOutlined />
            </Link>
            <Link to="" className="text-2xl" style={{ whiteSpace: "nowrap" }}>
              <ShoppingCartOutlined />
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <div className={clsx("container")}>
        <div className={clsx(styles.header_nav)}>
          <Flex align="center" gap="small">
            <TbCategoryFilled />
            <span>Категории</span>
          </Flex>
          <Link to={pathname.HOME} onClick={() => onPage(pathname.HOME)}>
            <span
              className={
                page === pathname.HOME ? styles.active_link : styles.link
              }
            >
              Главная
            </span>
          </Link>
          <Link
            // to={pathname.ABOUT}
            onClick={() => onPage(pathname.ABOUT)}
          >
            <span
              className={
                page === pathname.ABOUT ? styles.active_link : styles.link
              }
            >
              О нас
            </span>
          </Link>
          <Link
            to={pathname.PRODUCTS}
            onClick={() => onPage(pathname.PRODUCTS)}
          >
            <span
              className={
                page === pathname.PRODUCTS ? styles.active_link : styles.link
              }
            >
              Магазин
            </span>
          </Link>
          <Link
            // to={pathname.CONTACT}
            onClick={() => onPage(pathname.CONTACT)}
          >
            <span
              className={
                page === pathname.CONTACT ? styles.active_link : styles.link
              }
            >
              Контакты
            </span>
          </Link>
          <Link
            to={`${pathname.HOME}#about`}
            // to={pathname.CONTACT}
            onClick={() => onPage(pathname.STUDY)}
          >
            <span
              className={
                page === pathname.STUDY ? styles.active_link : styles.link
              }
            >
              Обучение
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};
