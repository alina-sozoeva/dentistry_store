import { Flex } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router";

import fon from ".././../assets/images/eq_card_bg.svg";
import no_foto from "../../assets/images/no_image.png";

import styles from "./ModelsCard.module.scss";
import clsx from "clsx";

export const ModelsCard = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const imgParse = item?.files?.length ? JSON.parse(item.files[0]?.file) : null;

  return (
    <div className={clsx(styles.card)} onClick={() => navigate(item.path)}>
      <Flex
        vertical
        justify="space-between"
        align="start"
        className={clsx("w-full h-full")}
      >
        <Flex vertical gap="middle">
          <Flex vertical>
            {location.pathname === "alltion" && (
              <span className={clsx(styles.series_name)}>Серия</span>
            )}
            <span className={clsx(styles.series)}>{item.nameid}</span>
          </Flex>
          <span className={clsx(styles.descrip)}>
            {item.nameid_sp_product_category}
          </span>
          <span className={clsx(styles.price)}>
            от {Number(item.price).toLocaleString()} $
          </span>
        </Flex>
        <button className={clsx(styles.btn)}>
          <ArrowRightOutlined rotate={-20} />
        </button>
      </Flex>

      <div className={clsx(styles.fon)}>
        <img src={fon} alt={fon} />
      </div>
      <div className={clsx(styles.item_img)}>
        {item.img ? (
          <img src={item.img} alt={item.img} />
        ) : (
          <img
            src={
              imgParse !== null
                ? `${process.env.REACT_APP_URL}/${imgParse?.path}`
                : no_foto
            }
            alt={item.img}
          />
        )}
      </div>
    </div>
  );
};
