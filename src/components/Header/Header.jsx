import { CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Flex, Input, Row, Space } from "antd";
import { Link } from "react-router";
import styles from "./Header.module.scss";

const items = [
  {
    label: (
      <Button type="primary" className="w-full">
        Войти
      </Button>
    ),
    key: "0",
  },
  {
    label: (
      <div>
        <span>Новый клиент?</span>{" "}
        <a href="/" rel="noopener noreferrer">
          Перейти
        </a>
      </div>
    ),
    key: "1",
  },
];

const items2 = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

export const Header = () => {
  return (
    <header className={styles.wrap}>
      <Flex className={styles.header} vertical gap={"large"}>
        <Row gutter={24} align="middle">
          <Col span={16}>
            <Flex align="center" gap={"small"}>
              {/* <img src="" alt="logo" /> */}
              <Link
                to="/home"
                className="text-white"
                style={{ whiteSpace: "nowrap" }}
              >
                ОсОО «Жаннат-Клиник»
              </Link>
              <Input.Search type="text" placeholder="Поиск" />
            </Flex>
          </Col>
          <Col span={8}>
            <Flex justify="end" gap={"large"} className=" text-white">
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                className=" text-white"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Ваш аккаунт
                    <CaretDownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <Flex gap={"small"}>
                <ShoppingCartOutlined className="text-2xl" />
                <span>Cart</span>
              </Flex>
            </Flex>
          </Col>
        </Row>
        <Flex gap={"middle"}>
          <Dropdown menu={{ items: items2 }} className=" text-white">
            <span
              className="bg-orange text-white px-2 rounded-md"
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                Продукция
                <CaretDownOutlined />
              </Space>
            </span>
          </Dropdown>
          <Dropdown menu={{ items: items2 }} className=" text-white">
            <span
              className="bg-orange text-white px-2 rounded-md"
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                Бренды
                <CaretDownOutlined />
              </Space>
            </span>
          </Dropdown>
          <Link to="" className=" text-white">
            Связаться с нами
          </Link>
        </Flex>
      </Flex>
    </header>
  );
};
