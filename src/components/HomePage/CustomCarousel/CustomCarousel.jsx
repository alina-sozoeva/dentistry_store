import { Carousel } from "antd";
import * as fonImages from "../../../assets/images";
import styles from "./CustomCarousel.module.scss";
import clsx from "clsx";

export const CustomCarousel = () => {
  return (
    <Carousel autoplay arrows className={clsx(styles.carousel)}>
      <div>
        <img src={fonImages.fon_1} alt="" />
      </div>
      <div>
        <img src={fonImages.fon_1} alt="" />
      </div>
      <div>
        <img src={fonImages.fon_1} alt="" />
      </div>
    </Carousel>
  );
};
