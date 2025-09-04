import {
  ChooseColor,
  Diaphragm,
  ModelInfo,
  PremiumOptics,
  StepIncrease,
} from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb } from "../../../../common";
import { fiveStep, sixStep } from "../../../../stepData";

import * as am_2000_plus_img from "../../../../assets/images/am2000Plus";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";

const modelInfo = {
  subtitle: "ALLTION",
  title: "AM-5000 VFR",
  description: "Больше возможностей для профессионалов",
  price: 19450,
  img_info: am_2000_plus_img.info_2000_plus,
  img_white: am_2000_plus_img.bel_2000_plus,
  img_black: am_2000_plus_img.black_2000_plus,
  img_optic: am_2000_plus_img.optic_2000_plus,
};

export const Am5000 = () => {
  return (
    <main>
      <section className={clsx("container")}>
        <CustomBreadcrumb
          midPath={pathname.ALLTION}
          midTitle={"Стоматологические микроскопы"}
          lastTitle={"ALLTION AM-5000 VFR"}
        />

        <ModelInfo item={modelInfo} />
        <ChooseColor item={modelInfo} />
        <PremiumOptics img={modelInfo.img_optic} />

        <StepIncrease step={5} title={"6-ступенчатое"} arr={sixStep} />
        <Diaphragm />
      </section>
    </main>
  );
};
