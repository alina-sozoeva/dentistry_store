import { DatePicker, Flex, Input, Typography } from "antd";
import { edu } from "../../data";

import styles from "./StudyPage.module.scss";
import clsx from "clsx";
import { StudyItem } from "../../components";

export const StudyPage = () => {
  return (
    <main className={clsx(styles.main, "")}>
      <section className={clsx("container")}>
        <Typography.Title level={2}>Обучение</Typography.Title>
        <Flex gap="middle">
          <Input placeholder="Поиск по названию" style={{ width: "400px" }} />
          <DatePicker placeholder="Выберите дату" />
        </Flex>
        <Flex vertical gap="middle" className={clsx(styles.wrap, "py-10")}>
          {edu.map((item) => (
            <StudyItem key={item.key} item={item} />
          ))}
        </Flex>
      </section>
    </main>
  );
};
