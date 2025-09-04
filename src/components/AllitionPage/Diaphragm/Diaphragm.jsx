import { Col, Flex, Row } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import * as gen from "../../../assets/images/genModelImg";

import styles from "./Diaphragm.module.scss";
import clsx from "clsx";

export const Diaphragm = () => {
  return (
    <Row gutter={24} align="middle" className={clsx(styles.wrap, "mb-20")}>
      <Col span={8}>
        <img src={gen.diafragm1} alt={gen.diafragm1} />
      </Col>
      <Col span={8}>
        <Flex vertical className={clsx(styles.info)}>
          <button className={clsx(styles.btn_left)}>
            <CloseOutlined className={clsx("text-red-500")} />
          </button>
          <span className={clsx(styles.title)}>Апертурная диафрагма</span>
          <span className={clsx(styles.descrip)}>
            Контролируйте количество света для усиления глубины резкости.
          </span>
          <button className={clsx(styles.btn_rigth)}>
            <CheckOutlined className={clsx("text-green-500")} />
          </button>
        </Flex>
      </Col>
      <Col span={8}>
        <img src={gen.diafragm2} alt={gen.diafragm2} />
      </Col>
    </Row>
  );
};
