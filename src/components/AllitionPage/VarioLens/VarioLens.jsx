import { Col, Flex, Row } from "antd";

import * as gen from "../../../assets/images/genModelImg";

import styles from "./VarioLens.module.scss";
import clsx from "clsx";
import { useMemo, useState } from "react";

const arr = [
  {
    id: 1,
    size: "Большое",
    img: gen.p1_2_scaled,
  },
  {
    id: 2,
    size: "Среднее",
    img: gen.p2_scaled,
  },
  {
    id: 3,
    size: "Маленькое",
    img: gen.p3_scaled,
  },
];

export const VarioLens = ({ item, v_text, dop_text }) => {
  const [active, setActive] = useState(1);

  const activeItem = useMemo(
    () => arr.find((item) => item.id === active),
    [arr, active]
  );
  return (
    <>
      <Flex className={clsx(styles.wrap_first, "mb-28")}>
        <div>
          <img
            className={clsx(styles.img)}
            src={item?.img_v}
            alt={item?.img_v}
          />
        </div>
        <Flex vertical gap="middle" className={clsx(styles.info)}>
          <span className={clsx(styles.title)}>Вариообъектив</span>
          <span className={clsx(styles.descrip)}>{v_text}</span>
          <span className={clsx(styles.descrip)}>{dop_text}</span>
        </Flex>
      </Flex>
      <Row className={clsx(styles.wrap_second, "mb-28")}>
        <Col span={11} className={clsx()}>
          <Flex vertical>
            <p className={clsx(styles.second_title, "mb-6")}>
              Используйте для работы с композитными материалами{" "}
              <span>световые фильтры</span>
            </p>
            <span className={clsx(styles.second_descrip)}>
              Наличие светофильтров делает видимыми мельчайшие сосудистые
              структуры.
            </span>
          </Flex>
        </Col>
        <Col span={11} offset={2}>
          <Flex vertical className={clsx(styles.color)}>
            <div>
              <img className={clsx(styles.img)} src={gen.red} alt={gen.red} />
            </div>
            <Flex justify="space-between" className={clsx("mt-2")}>
              <span>Зеленый</span>
              <span>Оранжевый</span>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Flex vertical className={clsx(styles.wrap_third, "mb-28")}>
        <Flex vertical align="center" className={clsx("mb-4")}>
          <p className={clsx(styles.second_title, "mb-4")}>
            <span>3 размера</span> светового пятна
          </p>
          <span className={clsx(styles.descrip)}>
            Сосредоточьтесь на области лечения
          </span>
        </Flex>

        <div className={clsx(styles.img_third)}>
          {activeItem && <img src={activeItem.img} alt={activeItem.img} />}

          <Flex gap="small" className={clsx(styles.size_wrap)}>
            {arr.map((item) => (
              <span
                key={item.id}
                className={clsx(
                  active === item.id ? styles.img_size_act : styles.img_size
                )}
                onClick={() => setActive(item.id)}
              >
                {item.size}
              </span>
            ))}
          </Flex>
        </div>
      </Flex>
    </>
  );
};
