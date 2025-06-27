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
        <Flex
          className={clsx("container")}
          justify="space-between"
          align="center"
        >
          <Link to={pathname.HOME} onClick={() => onPage(pathname.HOME)}>
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>

          <Flex className={clsx(styles.search)} align="center" gap="middle">
            <div onClick={() => setSearch(true)}>
              <MenuOutlined />
            </div>

            <Input
              value={searchValue}
              placeholder="Поиск"
              onChange={(e) => setSearchValue(e.target.value)}
              onPressEnter={handleSearch}
              style={{ width: "600px" }}
            />
          </Flex>

          <Flex gap="small">
            <PhoneFilled className={clsx("text-2xl font-100")} />
            <Flex vertical>
              <span>Контакты:</span>
              <span>0556 414 444</span>
            </Flex>

            {/* <span>
              <WhatsAppOutlined /> 0706 414 444
            </span> */}
          </Flex>

          <Flex gap={"large"} align="center">
            <Link
              to=""
              className={clsx("text-2xl flex gap-2 items-center")}
              style={{ whiteSpace: "nowrap" }}
            >
              <UserOutlined />
              <span className="text-sm">login</span>
            </Link>
            <Link to="" className="text-2xl" style={{ whiteSpace: "nowrap" }}>
              <ShoppingCartOutlined />
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="center" justify="center">
        <Drawer
          placement="left"
          closable={false}
          onClose={() => setSearch(false)}
          open={search}
          // key={placement}
          width={200}
        >
          <div className={clsx(styles.header_nav)}>
            <Flex
              vertical
              className={clsx("mt-10 container")}
              gap={"large"}
              justify="start"
            >
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
                    page === pathname.PRODUCTS
                      ? styles.active_link
                      : styles.link
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
              <CustomButton>Акции</CustomButton>
            </Flex>
          </div>
        </Drawer>
      </Flex>
    </header>
  );
};
