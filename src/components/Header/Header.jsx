import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Flex, Input, Space } from "antd";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { pathname } from "../../enums";
import { TbCategoryFilled } from "react-icons/tb";
import { useGetCategoryQuery } from "../../store/api/category.api";
import { useLocation } from "react-router";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo_without_bg_blue.png";
import clsx from "clsx";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState("/");
  const [searchValue, setSearchValue] = useState("");
  const { data: categories } = useGetCategoryQuery();

  const onPage = (nav) => {
    setPage(nav);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`products?search=${searchValue}`);
      setSearchValue("");
    }
  };

  const onCategoyId = (codeid) => {
    navigate({ pathname: pathname.PRODUCTS, search: `?category=${codeid}` });
  };

  const mappedCategories = categories?.map((item) => ({
    key: item.codeid,
    label: <span onClick={() => onCategoyId(item.codeid)}>{item.nameid}</span>,
  }));

  console.log(location.pathname);

  return (
    <header className={styles.wrap}>
      <Flex vertical className={clsx(styles.header)}>
        <Flex className={clsx("px-20")} justify="space-between" align="center">
          <Link to={pathname.HOME} onClick={() => onPage(pathname.HOME)}>
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>

          {location.pathname !== "/products" ? (
            <Flex className={clsx(styles.search)} align="center" gap="middle">
              <Input
                value={searchValue}
                placeholder="Поиск по более 2000 стамотолошических товаров"
                onChange={(e) => setSearchValue(e.target.value)}
                onPressEnter={handleSearch}
                style={{ width: "56rem" }}
              />
            </Flex>
          ) : (
            <div className={clsx("container")}>
              <div className={clsx(styles.header_nav)}>
                <Flex align="center" gap="small">
                  <Dropdown
                    menu={{ items: mappedCategories }}
                    trigger={["click"]}
                  >
                    <Space>
                      <TbCategoryFilled />
                      Категории
                    </Space>
                  </Dropdown>
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
                  to={pathname.ABOUT}
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
                  to={pathname.CONTACT}
                  onClick={() => onPage(pathname.CONTACT)}
                >
                  <span
                    className={
                      page === pathname.CONTACT
                        ? styles.active_link
                        : styles.link
                    }
                  >
                    Контакты
                  </span>
                </Link>
                <Link
                  to={pathname.STUDY}
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
          )}

          <Flex gap={"large"} align="center" className={clsx("h-[50px]")}>
            <Link
              to={pathname.LOGIN}
              className={clsx("text-2xl flex gap-2 items-center")}
              style={{ whiteSpace: "nowrap" }}
            >
              <UserOutlined /> <span className={clsx("text-base")}>Login</span>
            </Link>
            <Link
              to={pathname.CART}
              className="text-2xl"
              style={{ whiteSpace: "nowrap" }}
            >
              <div className={clsx(styles.cart)}>
                <div className={clsx(styles.cart_count)}>5</div>
                <ShoppingCartOutlined />
              </div>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      {location.pathname !== "/products" && (
        <div className={clsx("container")}>
          <div className={clsx(styles.header_nav)}>
            <Flex align="center" gap="small">
              <Dropdown menu={{ items: mappedCategories }} trigger={["click"]}>
                <Space>
                  <TbCategoryFilled />
                  Категории
                </Space>
              </Dropdown>
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
            <Link to={pathname.ABOUT} onClick={() => onPage(pathname.ABOUT)}>
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
              to={pathname.CONTACT}
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
            <Link to={pathname.STUDY} onClick={() => onPage(pathname.STUDY)}>
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
      )}
    </header>
  );
};
