import { Carousel, Col, Divider, Flex, Row } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import styles from "./StudyItem.module.scss";
import clsx from "clsx";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import DOMPurify from "dompurify";

export const StudyItem = ({ item }) => {
  return (
    <>
      <Row gutter={24}>
        <Col span={7}>
          <Carousel arrows autoplay>
            {item?.imgs.map((item) => (
              <div className={clsx(styles.img, "mb-2")}>
                <img
                  src={`https://api-jds-admin.ibm.kg${item.img_url}`}
                  alt=""
                />
              </div>
            ))}
          </Carousel>
        </Col>

        <Col span={17} className={clsx("flex flex-col justify-between")}>
          <span className={clsx("text-2xl font-bold")}>{item.title}</span>

          <Flex vertical gap="small">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.description),
              }}
            />
            {item.price && (
              <span>
                <strong>Цена:</strong> {Number(item.price).toLocaleString()} сом
              </span>
            )}

            <span>
              <strong>Место провидения:</strong> {item?.location}
            </span>
          </Flex>

          <span className={clsx(styles.date, "font-bold mt-2")}>
            <CalendarOutlined />{" "}
            {item?.start_date && item?.end_date && (
              <>
                {dayjs(item?.start_date).locale("ru").format("D MMMM YYYY") +
                  "г"}{" "}
                -{" "}
                {dayjs(item?.end_date).locale("ru").format("D MMMM YYYY") + "г"}
              </>
            )}
            {item?.event_date && (
              <>
                {dayjs(item?.event_date).locale("ru").format("D MMMM YYYY") +
                  "г"}
              </>
            )}
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
