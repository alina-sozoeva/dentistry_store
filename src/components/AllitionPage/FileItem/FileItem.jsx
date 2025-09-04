import { DownloadOutlined } from "@ant-design/icons";
import { Flex } from "antd";

import styles from "./FileItem.module.scss";
import clsx from "clsx";

export const FileItem = ({ title }) => {
  return (
    <Flex className={clsx(styles.wrap)}>
      <span>{title}</span>
      <button className={clsx(styles.btn)}>
        Скачать <DownloadOutlined />
      </button>
    </Flex>
  );
};
