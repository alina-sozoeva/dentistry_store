import { Carousel } from "antd";
import * as fonImages from "../../../assets/images";
import styles from "./CustomCarousel.module.scss";
import clsx from "clsx";
import { useGetBannersQuery } from "../../../store";

export const CustomCarousel = () => {
  const { data: banners } = useGetBannersQuery();

  return (
    <Carousel autoplay arrows className={clsx(styles.carousel)}>
      {banners?.data.map((item) => (
        <div>
          <img
            src={`https://api-jds-admin.ibm.kg${item?.img_url}`}
            alt={item?.original_name}
          />
        </div>
      ))}
    </Carousel>
  );
};
