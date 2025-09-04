import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { pathname } from "../../enums";

import styles from "./CustomBreadcrumb.module.scss";
import clsx from "clsx";

export const CustomBreadcrumb = ({ midPath, midTitle, lastTitle }) => {
  return (
    <div className={clsx(styles.wrap)}>
      <Breadcrumb
        items={[
          {
            href: pathname.HOME,
            title: <HomeOutlined />,
          },
          {
            href: midPath,
            title: <span>{midTitle}</span>,
          },
          {
            title: lastTitle,
          },
        ]}
      />
    </div>
  );
};
