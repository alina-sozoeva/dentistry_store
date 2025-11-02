import { Col, Flex, Row } from "antd";

import styles from "./PremiumOptics.module.scss";
import clsx from "clsx";

export const PremiumOptics = ({ img }) => {
  return (
    <Flex className={clsx(styles.wrap, "mb-28")}>
      <Row gutter={24} align="middle">
        <Col span={12}>
          <Flex vertical className={clsx("gap-[10px]")}>
            <Flex vertical>
              <p className={clsx(styles.title)}>
                <span>Премиальная</span> оптика
              </p>
              <span className={clsx(styles.subtitle)}>
                Без компромиссов – без аберраций
              </span>
            </Flex>
            <span className={clsx(styles.descrip)}>
              Апохроматические линзы из высококачественного сырья Schott
              устраняют хроматические аберрации при преломлении световых лучей,
              что значительно улучшает видимость рабочей зоны.
            </span>
          </Flex>
        </Col>
        <Col span={12}>
          <div className={clsx(styles.img)}>
            <img src={img} alt={img} />
          </div>
        </Col>
      </Row>
    </Flex>
  );
};
