import { Checkbox, Flex, Input } from "antd";
import styles from "./CartPage.module.scss";
import clsx from "clsx";

export const useCartColumns = () => {
  const columns = [
    {
      key: "img",
      dataIndex: "img",
      width: 160,
      render: (_, record) => {
        return <img src={record.img[0]} alt="" />;
      },
    },
    {
      key: "nameid",
      dataIndex: "nameid",
      render: (_, record) => {
        return (
          <Flex vertical>
            <span>{record.nameid} сом</span>
            <Flex gap="middle">
              <span className={clsx("text-blue")}>В изранное</span>
              <span className={clsx("text-red-400")}>Удалить</span>
            </Flex>
          </Flex>
        );
      },
    },
    {
      key: "price",
      dataIndex: "price",
      width: 200,
      render: (_, record) => {
        return <span>{record.price.toLocaleString()} сом</span>;
      },
    },
    {
      key: "quantity",
      dataIndex: "quantity",
      title: "Кол-во, шт",
      align: "center",
      width: 150,
      render: (_, record) => {
        return <Input className="text-center w-20" value={1} />;
      },
    },
  ];

  return { columns };
};
