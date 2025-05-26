import styles from "./CustomButton.module.scss";

export const CustomButton = ({ children, icon, onClick }) => {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        {icon && <span>{icon}</span>}
        <span style={{ whiteSpace: "nowrap" }}>{children}</span>
      </button>
    </>
  );
};
