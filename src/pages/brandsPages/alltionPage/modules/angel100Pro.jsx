import { Diaphragm, ModelInfo, PremiumOptics } from "../../../../components";

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
};

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

        <Diaphragm />
      </section>
    </main>
  );
};
