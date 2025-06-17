import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { Link } from "react-router";
import logo from "../../assets/images/logo_without_bg_white.jpeg";
import styles from "./Footer.module.scss";
import { pathname } from "../../enums";
import clsx from "clsx";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container ">
        <h3 className="text-base mb-4">
          <b>Навигация по сайту</b>
        </h3>
      </div>
      <Flex className="container" justify="space-between">
        <div>
          <Link to={pathname.HOME}>
            <img src={logo} alt={logo} className={clsx(styles.logo)} />
          </Link>
        </div>
        <Flex vertical>
          <Link to={pathname.HOME}>Главная</Link>
          <Link to={pathname.PRODUCTS}>Продукты</Link>
          <Link to={pathname.PRODUCTS}>Бренды</Link>
          <Link to={pathname.ORDER}>Корзина</Link>
          <Link>Чекаут</Link>
        </Flex>
        <Flex vertical>
          <Link>О нас</Link>
          <Link>Контакты</Link>
          <Link>Условия и положения</Link>
          <Link>Политика конфиденциальности</Link>
          <Link>Политика возврата</Link>
        </Flex>
        <Flex vertical>
          <Link>Войти и зарегистрироваться</Link>
          <Link>Настройки учетной записи</Link>
          <Link>Мои заказы</Link>
          <Link>Список пожеланий</Link>
        </Flex>
        <Flex vertical>
          <span>КР, г. Бишкек, </span>
          <span>Октябрьский район,ул.</span>
          <span>улица Куйручук, 81/2</span>
          <span>Подпишитесь на</span>
          <Flex gap={"small"} className={styles.media}>
            <FacebookOutlined />
            <InstagramOutlined />
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};
