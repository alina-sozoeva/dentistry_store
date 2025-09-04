import { Flex } from "antd";

import styles from "./StepIncrease.module.scss";
import clsx from "clsx";
import { useMemo, useState } from "react";

export const StepIncrease = ({ arr, title }) => {
  const [active, setActive] = useState(1);

  const activeItem = useMemo(
    () => arr.find((item) => item.id === active),
    [arr, active]
  );

  return (
    <Flex vertical className={clsx(styles.wrap, "mb-28")}>
      <p className={clsx(styles.title)}>
        <span>{title}</span> увеличение
      </p>

      <div className={clsx(styles.img)}>
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
  );
};
