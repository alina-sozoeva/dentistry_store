import { Flex, Form, Input, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

import { useEffect } from "react";
import { useAddReviewsMutation, useUserStore } from "../../store";
import { RatingStars } from "../../ui";
import { toast } from "react-toastify";

import styles from "./ReviewModal.module.scss";
import clsx from "clsx";

export const ReviewModal = ({ open, onCancel }) => {
  const [form] = useForm();
  const [add] = useAddReviewsMutation();

  const onClose = () => {
    form.resetFields();
    onCancel();
  };

  const onFinish = (values) => {
    add({
      codeid: 0,
      rating: values.rating,
      nameid: values.nameid,
      email: values.email,
      comment: values.comment,
    });

    toast.success(
      "Спасибо за Ваш отзыв! Он будет опубликован после модерации."
    );
    form.resetFields();
    onCancel();
  };

  return (
    <Modal centered open={open} onCancel={onCancel} width={400} footer={false}>
      <Typography.Title level={4} className={clsx("text-center")}>
        Оставить отзыв
      </Typography.Title>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Flex gap="middle" justify="center" className={styles.stars}>
          <Form.Item
            name="rating"
            rules={[
              {
                required: true,
                message: "Это обязательное поле для заполнения!",
              },
            ]}
          >
            <RatingStars
              value={form.getFieldValue("raiting")}
              onChange={(val) => form.setFieldValue("raiting", val)}
            />
          </Form.Item>
          -<span>Ваша оценка</span>
        </Flex>

        <Form.Item
          label="Имя"
          name="nameid"
          rules={[
            {
              required: true,
              message: "Это обязательное поле для заполнения!",
            },
          ]}
        >
          <Input placeholder="Введите свое имя" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Это обязательное поле для заполнения!",
            },
          ]}
        >
          <Input placeholder="Введите свой email" />
        </Form.Item>

        <Form.Item
          label="Отзыв"
          name="comment"
          rules={[
            {
              required: true,
              message: "Это обязательное поле для заполнения!",
            },
          ]}
        >
          <Input.TextArea placeholder="Напишите ваш отзыв" />
        </Form.Item>

        <Flex gap="small" justify="center">
          <button type="submit" className={clsx(styles.confirm)}>
            Подтвердить
          </button>
          <button
            type="button"
            className={clsx(styles.cancel)}
            onClick={onClose}
          >
            Отмена
          </button>
        </Flex>
      </Form>
    </Modal>
  );
};
