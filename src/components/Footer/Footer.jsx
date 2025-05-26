import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { Flex, Row } from "antd";
import { Link } from "react-router";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container ">
        <h3 className="text-base mb-4">
          <b>Навигация по сайту</b>
        </h3>
      </div>
      <Flex className="container" justify="space-between">
        <Flex vertical>
          <Link>Главная</Link>
          <Link>Продукты</Link>
          <Link>Бренды</Link>
          <Link>Корзина</Link>
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
          <span> Токомбаева 15а/26</span>
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
