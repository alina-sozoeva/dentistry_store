import { useForm } from "antd/es/form/Form";
import { Button, Flex, Form, Input, Switch, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./LoginPage.module.scss";
import fon from "../../assets/images/bg_forest.jpg";
import clsx from "clsx";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = useForm();

  const onFinish = async (values) => {};

  return (
    <section className={clsx(styles.wrap, "h-screen h-full")}>
      <div>
        <img src={fon} alt={fon} className={clsx(styles.img)} />
      </div>

      <div className={clsx(styles.form)}>
        <Typography.Title
          level={3}
          className={clsx(
            styles.title,
            "text-center flex items-center justify-center"
          )}
        >
          <Link to="/" className={clsx("absolute left-2")}>
            <ArrowLeftOutlined className={clsx("text-white")} />
          </Link>
          Войти
        </Typography.Title>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            name="login"
            label={<span className={clsx("text-white")}>Логин</span>}
            rules={[
              {
                required: true,
                message: "Это обязательное поле для заполнения!",
              },
            ]}
          >
            <Input placeholder="Введите логин" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className={clsx("text-white")}>Пароль</span>}
            rules={[
              {
                required: true,
                message: "Это обязательное поле для заполнения!",
              },
            ]}
          >
            <Input type="password" placeholder="Введите логин" />
          </Form.Item>

          <Button type="" htmlType="submit" className={clsx("w-full")}>
            Войти
          </Button>

          {/* <Flex justify="center" gap="small" className={clsx("mt-2")}>
            <span className={clsx("text-white")}>Нет аккаунта?</span>{" "}
            <Link to="/register" className={clsx("text-green")}>
              Зарегистрироваться
            </Link>
          </Flex> */}
        </Form>
      </div>
    </section>
  );
};
