import { Col, Divider, Flex, Row } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import styles from "./StudyItem.module.scss";
import clsx from "clsx";

export const StudyItem = ({ item }) => {
  return (
    <>
      <Row gutter={24}>
        <Col span={7}>
          <div className={clsx(styles.img, "mb-2")}>
            <img src={item.img} alt="" />
          </div>
        </Col>

        <Col span={17} className={clsx("flex flex-col justify-between")}>
          <span className={clsx("text-2xl font-bold")}>{item.title}</span>

          <Flex vertical gap="small">
            <span>{item.description}</span>
            {item.price && (
              <span>
                <strong>Цена:</strong> {Number(item.price).toLocaleString()} сом
              </span>
            )}

            <span>
              <strong>Место провидения:</strong> {item?.location} сом
            </span>
          </Flex>

          <span className={clsx(styles.date, "font-bold mt-2")}>
            <CalendarOutlined /> {item.date}
          </span>
        </Col>
      </Row>
      <Divider
        className={clsx("my-2 h-2")}
        style={{
          borderTop: "1.5px solid #0000005e",
        }}
      />
    </>
  );
};
