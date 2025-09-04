import { ChooseColor, ModelInfo, PremiumOptics } from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb } from "../../../../common";

import * as am_2000_plus_img from "../../../../assets/images/am2000Plus";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";

const modelInfo = {
  subtitle: "Серия",
  title: "AM-2000",
  description: "Надежный старт для работы с увеличением",
  price: 12100,
  img_info: am_2000_plus_img.info,
  img_white: am_2000_plus_img.white,
  img_black: am_2000_plus_img.black,
  img_optic: am_2000_plus_img.optic,
};

export const Am2000 = () => {
  return (
    <main>
      <section className={clsx("container")}>
        <CustomBreadcrumb
          midPath={pathname.ALLTION}
          midTitle={"Стоматологические микроскопы"}
          lastTitle={"Серия AM-2000 Plus"}
        />

        <ModelInfo item={modelInfo} />
        <ChooseColor item={modelInfo} />
        <PremiumOptics img={modelInfo.img_optic} />
      </section>
    </main>
  );
};
