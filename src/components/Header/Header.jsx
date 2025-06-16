import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Drawer, Flex, Input } from "antd";
import { Link, useNavigate } from "react-router";
import styles from "./Header.module.scss";
import logo from "../../assets/images/tooth.jpeg";
import { CustomButton } from "../CustomButton";
import { useState } from "react";
import { pathname } from "../../enums";
import clsx from "clsx";

export const Header = () => {
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState("/");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  console.log(searchValue, "searchValue");

  const onPage = (nav) => {
    setPage(nav);
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
      <Flex justify="space-between" align="center" className={styles.header}>
        <Link to={pathname.HOME} onClick={() => onPage(pathname.HOME)}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

        <Flex align="center" gap={"large"}>
          <Link
            className={
              page === pathname.HOME ? styles.active_link : styles.link
            }
            to={pathname.HOME}
            onClick={() => onPage(pathname.HOME)}
          >
            Главная
          </Link>
          <Link
            className={
              page === pathname.ABOUT ? styles.active_link : styles.link
            }
            // to={pathname.ABOUT}
            onClick={() => onPage(pathname.ABOUT)}
          >
            О нас
          </Link>
          <Link
            className={
              page === pathname.PRODUCTS ? styles.active_link : styles.link
            }
            to={pathname.PRODUCTS}
            onClick={() => onPage(pathname.PRODUCTS)}
          >
            Магазин
          </Link>
          <Link
            className={
              page === pathname.CONTACT ? styles.active_link : styles.link
            }
            // to={pathname.CONTACT}
            onClick={() => onPage(pathname.CONTACT)}
          >
            Контакты
          </Link>
          <Link
            to={`${pathname.HOME}#about`}
            className={
              page === pathname.STUDY ? styles.active_link : styles.link
            }
            // to={pathname.CONTACT}
            onClick={() => onPage(pathname.STUDY)}
          >
            Обучение
          </Link>
          <CustomButton>Акции</CustomButton>
        </Flex>

        <Flex gap={"large"} align="center">
          <div onClick={() => setSearch(true)}>
            <SearchOutlined
              className="text-2xl"
              style={{ whiteSpace: "nowrap" }}
            />
          </div>
          <Link to="" className="text-2xl" style={{ whiteSpace: "nowrap" }}>
            <UserOutlined />
          </Link>
          <Link to="" className="text-2xl" style={{ whiteSpace: "nowrap" }}>
            <ShoppingCartOutlined />
          </Link>
        </Flex>
      </Flex>

      <Flex align="center" justify="center">
        <Drawer
          placement="top"
          closable={false}
          onClose={() => setSearch(false)}
          open={search}
          // key={placement}
        >
          <div className={clsx("container ")}>
            <Flex
              className={clsx(styles.search, " pt-20")}
              vertical
              align="start"
              gap="small"
            >
              <Input
                value={searchValue}
                placeholder="Поиск"
                onChange={(e) => setSearchValue(e.target.value)}
                onPressEnter={handleSearch}
              />
              <span className={clsx("text-md")}>
                Чтобы закрыть поиск нажмите ESC
              </span>
            </Flex>
          </div>
        </Drawer>
      </Flex>
    </header>
  );
};
