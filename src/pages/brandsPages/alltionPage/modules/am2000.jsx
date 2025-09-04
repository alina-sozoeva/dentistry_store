import {
  ChooseColor,
  ModelInfo,
  PremiumOptics,
  StepIncrease,
  VarioLens,
} from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb } from "../../../../common";
import { fiveStep } from "../../../../stepData";

import * as am_2000_img from "../../../../assets/images/am2000Plus";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";

const modelInfo = {
  subtitle: "Серия",
  title: "AM-2000",
  description: "Надежный старт для работы с увеличением",
  price: 12100,
  img_info: am_2000_img.info_2000_plus,
  img_white: am_2000_img.bel_2000_plus,
  img_black: am_2000_img.black_2000_plus,
  img_optic: am_2000_img.optic_2000_plus,
  img_v: am_2000_img.v_2000_plus,
};

const v_text =
  "Микроскоп с вариообъективом сохраняет здоровье врача, исключая травмы шейных и поясничных отделов.";

const dop_text =
  "Реегулировка фокусного расстояния осуществляется в зависимости от антропометрических данных оператора. Рабочая дистанция может составлять 250-430 мм или 200-300 мм – на выбор.";

export const Am2000 = () => {
  return (
    <main>
      <section className={clsx("container")}>
        <CustomBreadcrumb
          midPath={pathname.ALLTION}
          midTitle={"Стоматологические микроскопы"}
          lastTitle={"Серия AM-2000"}
        />

        <ModelInfo item={modelInfo} />
        <ChooseColor item={modelInfo} />
        <PremiumOptics img={modelInfo.img_optic} />
        <StepIncrease step={5} title={"6-ступенчатое"} arr={fiveStep} />
        <VarioLens item={modelInfo} v_text={v_text} dop_text={dop_text} />
      </section>
    </main>
  );
};
