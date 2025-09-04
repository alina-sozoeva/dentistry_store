import {
  ChooseColor,
  Diaphragm,
  ModelInfo,
  PremiumOptics,
  StepIncrease,
  VarioLens,
} from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb } from "../../../../common";
import { fiveStep, sixStep } from "../../../../stepData";

import * as am_5000 from "../../../../assets/images/am5000";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";

const modelInfo = {
  subtitle: "ALLTION",
  title: "AM-5000 VFR",
  description: "Больше возможностей для профессионалов",
  price: 19450,
  img_info: am_5000.info_5000,
  img_white: am_5000.bel_5000,
  img_black: am_5000.black_5000,
  img_optic: am_5000.optic_5000,
  img_v: am_5000.v_5000,
};

const v_text =
  "Регулировка фокусного расстояния (198-455 мм) в зависимости от  антропометрических данных оператора. Микроскоп с вариообъективом сохраняет здоровье врача, исключая травмы шейных и поясничных отделов.";

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
        <VarioLens item={modelInfo} v_text={v_text} />
      </section>
    </main>
  );
};
