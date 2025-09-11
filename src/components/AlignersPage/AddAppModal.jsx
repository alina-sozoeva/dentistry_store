import { Flex, Form, Input, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

import styles from "./AddAppModal.module.scss";
import clsx from "clsx";

export const AddAppModal = ({ open, onCancel }) => {
  const [form] = useForm();

  const onClose = () => {
    form.resetFields();
    onCancel();
  };

  const onFinish = (values) => {
    onClose();
  };

  return (
    <Modal centered open={open} onCancel={onCancel} width={400} footer={false}>
      <Typography.Title level={4} className={clsx("text-center")}>
        Оставить заявку
      </Typography.Title>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="ФИО врача"
          name="nameid"
          rules={[
            {
              required: true,
              message: "Это обязательное поле для заполнения!",
            },
          ]}
        >
          <Input placeholder="Введите ФИО врача" />
        </Form.Item>

        <Form.Item
          label="Телефон"
          name="phone"
          rules={[
            {
              required: true,
              message: "Это обязательное поле для заполнения!",
            },
          ]}
        >
          <Input placeholder="Напишите номер телефона" />
        </Form.Item>

        <Flex gap="small" justify="center">
          <button type="submit" className={clsx(styles.confirm)}>
            Подтвердить
          </button>
        </Flex>
      </Form>
    </Modal>
  );
};
