import { Flex, Form, Input, Modal, Typography } from "antd";
import { useForm } from "antd/es/form/Form";
import { StarFilled } from "@ant-design/icons";
import { useState } from "react";
import styles from "./ReviewModal.module.scss";
import clsx from "clsx";
import { useCartStore, useReviewStore } from "../../store";
import { v1 as uuidv1 } from "uuid";

export const ReviewModal = ({ open, onCancel }) => {
  const [form] = useForm();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { addReviews } = useReviewStore();
  const { user } = useCartStore();

  const handleClick = (i) => {
    setSelectedIndex(i);
    form.setFieldValue("rating", i + 1);
  };

  const onClose = () => {
    form.resetFields();
    setHoveredIndex(null);
    setSelectedIndex(null);
    onCancel();
  };

  const onFinish = (values) => {
    const newReviews = {
      guid: uuidv1(),
      nameid: user?.login,
      comment: values.comment,
      date: "23.09.2023",
      rating: values.rating,
    };
    addReviews(newReviews);
    form.resetFields();
    setHoveredIndex(null);
    setSelectedIndex(null);
    onCancel();
  };

  return (
    <Modal centered open={open} onCancel={onCancel} width={400} footer={false}>
      <Typography.Title level={4} className={clsx("text-center")}>
        Оставить отзыв
      </Typography.Title>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="rating"
          rules={[
            {
              required: true,
              message: "Это обязательное поле для заполнения!",
            },
          ]}
        >
          <Flex gap="middle" justify="center" className={styles.stars}>
            <Flex className={clsx(styles.starGroup, "gap-[15px]")}>
              {Array.from({ length: 5 }).map((_, i) => {
                const isActive =
                  selectedIndex !== null
                    ? i <= selectedIndex
                    : hoveredIndex !== null && i <= hoveredIndex;

                return (
                  <StarFilled
                    key={i}
                    className={clsx(styles.star, {
                      [styles.active]: isActive,
                    })}
                    onMouseEnter={() => {
                      if (selectedIndex === null) setHoveredIndex(i);
                    }}
                    onMouseLeave={() => {
                      if (selectedIndex === null) setHoveredIndex(null);
                    }}
                    onClick={() => handleClick(i)}
                    style={{
                      transitionDelay: `${i * 50}ms`,
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </Flex>
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
