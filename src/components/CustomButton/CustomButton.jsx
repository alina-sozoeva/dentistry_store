import { Flex } from "antd";
import styles from "./CustomButton.module.scss";

export const CustomButton = ({ children, icon, onClick }) => {
  return (
    <Flex>
      <button className={styles.btn} onClick={onClick}>
        {icon && <span>{icon}</span>}
        <span style={{ whiteSpace: "nowrap" }}>{children}</span>
      </button>
    </Flex> 
  );
};
