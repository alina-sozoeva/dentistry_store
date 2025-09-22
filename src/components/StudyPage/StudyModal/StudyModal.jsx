import { Carousel, Col, Flex, Modal, Row } from "antd";
import DOMPurify from "dompurify";

import styles from "./StudyModal.module.scss";
import clsx from "clsx";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "dayjs/locale/ru";

export const StudyModal = ({ open, onCancel, item }) => {
  return (
    <Modal open={open} onCancel={onCancel} centered width={1000} footer={false}>
      <Row gutter={24} align={"middle"}>
        <Col span={12}>
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

        <Col
          span={12}
          className={clsx(
            "flex flex-col align-center justify-center gap-[20px]"
          )}
        >
          <span className={clsx("text-2xl font-bold")}>{item?.title}</span>

          <Flex vertical gap="small">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item?.description),
              }}
            />
            {item?.price && (
              <span>
                <strong>Цена:</strong> {Number(item?.price).toLocaleString()}{" "}
                сом
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
      </Row>{" "}
    </Modal>
  );
};
