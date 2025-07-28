import { Flex, Form, Input, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { StarFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import styles from "./ReviewModal.module.scss";
import clsx from "clsx";
import { useReviewStore, useUserStore } from "../../store";
import { v1 as uuidv1 } from "uuid";
import dayjs from "dayjs";
import { RatingStars } from "../../ui";

export const ReviewModal = ({ open, onCancel }) => {
  const [form] = useForm();
  const { addReviews } = useReviewStore();
  const { user } = useUserStore();

  const onClose = () => {
    form.resetFields();
    onCancel();
  };

  const onFinish = (values) => {
    const newReviews = {
      guid: uuidv1(),
      nameid: user?.login,
      comment: values.comment,
      date: dayjs().format("DD.MM.YYYY"),
      raiting: values.raiting,
    };
    addReviews(newReviews);
    form.resetFields();
    onCancel();
  };

  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        nameid: user?.login,
      });
    }
  }, [user]);

  return (
    <Modal centered open={open} onCancel={onCancel} width={400} footer={false}>
      <Typography.Title level={4} className={clsx("text-center")}>
        Оставить отзыв
      </Typography.Title>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="raiting"
          rules={[
            {
              required: true,
              message: "Это обязательное поле для заполнения!",
            },
          ]}
        >
          <Flex gap="middle" justify="center" className={styles.stars}>
            <RatingStars
              value={form.getFieldValue("raiting")}
              onChange={(val) => form.setFieldValue("raiting", val)}
            />
            -<span>Ваша оценка</span>
          </Flex>
        </Form.Item>
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
