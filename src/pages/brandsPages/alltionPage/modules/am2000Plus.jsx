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
import { fiveStep } from "../../../../stepData";

import * as am_2000_plus_img from "../../../../assets/images/am2000Plus";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";

const modelInfo = {
  subtitle: "Серия",
  title: "AM-2000 PLUS",
  description: "Оптимальный баланс технологий и стоимости",
  price: 15700,
  img_info: am_2000_plus_img.info_2000_plus,
  img_white: am_2000_plus_img.bel_2000_plus,
  img_black: am_2000_plus_img.black_2000_plus,
  img_optic: am_2000_plus_img.optic_2000_plus,
  img_v: am_2000_plus_img.v_2000_plus,
};
const v_text =
  "Регулировка фокусного расстояния (198-455 мм) в зависимости от  антропометрических данных оператора. Микроскоп с вариообъективом сохраняет здоровье врача, исключая травмы шейных и поясничных отделов.";

export const Am2000Plus = () => {
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
        <StepIncrease step={5} title={"5-ступенчатое"} arr={fiveStep} />
        <Diaphragm />
        <VarioLens item={modelInfo} v_text={v_text} />
      </section>
    </main>
  );
};
