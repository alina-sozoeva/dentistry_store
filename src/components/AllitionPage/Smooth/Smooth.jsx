import { Flex } from "antd";
import * as foto from "../../../assets/images/genModelImg";

import styles from "./Smooth.module.scss";
import clsx from "clsx";

export const Smooth = () => {
  return (
    <Flex className={clsx(styles.wrap, "mb-28")}>
      <div>
        <img
          className={clsx(styles.img)}
          src={foto.zoom2_1}
          alt={foto.zoom2_1}
        />
      </div>
      <Flex vertical gap="middle">
        <p className={clsx(styles.title)}>
          Плавное <br /> <span>увеличение 1,7х — 19х</span>
        </p>
        <span className={clsx(styles.descrip)}>
          Отсутствие скачков и дерганий изображения улучшает визуальное
          восприятие и снижает нагрузку на глаза. Особенно актуально при съемке
          видео, где важно обеспечить стабильную и непрерывную картинку без
          рывков.
        </span>
      </Flex>
    </Flex>
  );
};
