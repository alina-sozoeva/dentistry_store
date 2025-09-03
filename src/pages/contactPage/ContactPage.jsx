import { Typography } from "antd";
import styles from "./ContactPage.module.scss";
import clsx from "clsx";
import { Map2GIS } from "../../common";

export const ContactPage = () => {
  return (
    <section className={clsx(styles.main, " container")}>
      <div className={clsx(styles.info)}>
        <Typography.Title level={2}>Контакты</Typography.Title>
        <p> г. Бишкек, улица Куйручук, 81/2</p>
        <p>+(996) 706 41 44 44</p>
        <p>+(996) 556 41 44 44</p>
        <p>Время работы: 09.00 - 18.00</p>
      </div>
      <div className={clsx(styles.map)}>
        <Map2GIS marker={[42.841027, 74.643384]} />
      </div>
    </section>
  );
};
