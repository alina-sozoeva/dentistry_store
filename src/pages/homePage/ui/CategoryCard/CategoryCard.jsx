import { Flex, Typography } from "antd";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import styles from "./CategoryCard.module.scss";
import { RightOutlined } from "@ant-design/icons";

export const CategoryCard = ({ key, title, onClick }) => {
  return (
    <Flex className={styles.card} vertical key={key}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <DotLottieReact
        src="https://lottie.host/2df181db-d7fd-4bd3-948e-6a474e29bc46/509SpSc9pX.lottie"
        className={styles.lottie_noPlay}
      />
      <DotLottieReact
        src="https://lottie.host/2df181db-d7fd-4bd3-948e-6a474e29bc46/509SpSc9pX.lottie"
        className={styles.lottie}
        autoplay={true}
        loop={true}
      />
      <span className={styles.title} onClick={onClick}>Смотреть <RightOutlined /></span>
    </Flex>
  );
};
