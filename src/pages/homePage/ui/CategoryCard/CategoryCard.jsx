import { Flex, Typography, Spin } from "antd";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import styles from "./CategoryCard.module.scss";
import { RightOutlined } from "@ant-design/icons";

const lottieUrl =
  "https://lottie.host/03658204-7534-4792-af43-d528386d1b5f/LgI3dL1FCa.lottie";

export const CategoryCard = ({ key, title, onClick, slug }) => {
  return (
    <Flex
      className={
        slug === "sterilization" || slug === "models"
          ? styles.card_no
          : styles.card
      }
      vertical
      key={key}
      onClick={onClick}
    >
      <Typography.Title level={4}>{title}</Typography.Title>
      <DotLottieReact s src={lottieUrl} className={styles.lottie_noPlay} />
      <DotLottieReact
        src={lottieUrl}
        className={styles.lottie}
        autoplay={true}
        loop={true}
      />

      <span className={styles.title}>
        Смотреть <RightOutlined />
      </span>
    </Flex>
  );
};
