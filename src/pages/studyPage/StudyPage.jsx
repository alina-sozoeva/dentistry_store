import { Button, DatePicker, Empty, Flex, Input, Typography } from "antd";
import { edu } from "../../data";

import styles from "./StudyPage.module.scss";
import clsx from "clsx";
import { StudyItem } from "../../components";
import { useGetEduQuery } from "../../store";
import { useState } from "react";

export const StudyPage = () => {
  const [search, setSearch] = useState("");
  const { data: edu } = useGetEduQuery(search ? { search } : undefined);

  return (
    <main className={clsx(styles.main, "")}>
      <section className={clsx("container")}>
        <Typography.Title level={2}>Обучение</Typography.Title>
        <Flex gap="middle">
          <Input
            placeholder="Поиск по названию"
            style={{ width: "400px" }}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <DatePicker placeholder="Выберите дату" /> */}
        </Flex>
        <Flex vertical gap="middle" className={clsx(styles.wrap, "py-10")}>
          {edu?.data?.length === 0 ? (
            <Flex align="center" className="flex items-center justify-center">
              <Empty
                description={<Typography.Text>Нет данных</Typography.Text>}
              ></Empty>
            </Flex>
          ) : (
            <>
              {edu?.data?.map((item) => (
                <StudyItem key={item.key} item={item} />
              ))}
            </>
          )}
        </Flex>
      </section>
    </main>
  );
};
