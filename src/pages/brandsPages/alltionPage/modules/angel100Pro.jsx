import {
  Diaphragm,
  ModelInfo,
  PremiumOptics,
  Smooth,
  VarioLens,
} from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb } from "../../../../common";

import * as angel_1000_pro from "../../../../assets/images/angel100";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";

const modelInfo = {
  subtitle: "ALLTION",
  title: "ANGEL 100 PRO",
  description: "Создан для тех, кто выбирает максимум",
  price: 51450,
  img_info: angel_1000_pro.angel_info,
  img_optic: angel_1000_pro.linzy_krupno,
  img_v: angel_1000_pro.v_100,
};

const v_text =
  "Регулировка фокусного расстояния (198-455 мм) в зависимости от  антропометрических данных оператора. Микроскоп с вариообъективом сохраняет здоровье врача, исключая травмы шейных и поясничных отделов.";

export const Angel100Pro = () => {
  return (
    <main>
      <section className={clsx("container")}>
        <CustomBreadcrumb
          midPath={pathname.ALLTION}
          midTitle={"Стоматологические микроскопы"}
          lastTitle={"ALLTION ANGEL 100 PRO"}
        />

        <ModelInfo item={modelInfo} />
        <PremiumOptics img={modelInfo.img_optic} />
        <Smooth />
        <Diaphragm />
        <VarioLens item={modelInfo} v_text={v_text} />
      </section>
    </main>
  );
};
