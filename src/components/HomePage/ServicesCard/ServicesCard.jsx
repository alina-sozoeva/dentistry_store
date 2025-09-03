import { Flex } from "antd";
import styles from "./ServicesCard.module.scss";

export const ServicesCard = ({ key, icon, title }) => {
  return (
    <div className={styles.card}>
      {icon}
      <span className={styles.title}>{title}</span>
    </div>
  );
};
