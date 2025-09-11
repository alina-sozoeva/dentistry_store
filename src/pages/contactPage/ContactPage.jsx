import { Flex, Typography } from "antd";

import { Map2GIS } from "../../common";
import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

import styles from "./ContactPage.module.scss";
import clsx from "clsx";

export const ContactPage = () => {
  return (
    <section className={clsx(styles.main, "container")}>
      <div className={clsx(styles.info)}>
        <Typography.Title level={2}>Контакты</Typography.Title>
        <p> г. Бишкек, улица Куйручук, 81/2</p>
        <p>+(996) 706 41 44 44</p>
        <p>+(996) 556 41 44 44</p>
        <p>Время работы: 09.00 - 18.00</p>
        <p className={clsx("font-bold")}>Также вы можете связаться по:</p>

        <Flex gap={"small"} className={styles.media}>
          <a href="https://www.instagram.com/jdstore.kg/" target="_blank">
            <InstagramOutlined />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=996706414444&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <WhatsAppOutlined />
          </a>
        </Flex>
      </div>

      <div className={clsx(styles.map)}>
        <Map2GIS marker={[42.841027, 74.643384]} />
      </div>
    </section>
  );
};
