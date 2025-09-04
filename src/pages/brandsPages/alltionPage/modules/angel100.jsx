import { Diaphragm, ModelInfo, PremiumOptics } from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb } from "../../../../common";

import * as angel_1000 from "../../../../assets/images/angel100";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";

const modelInfo = {
  subtitle: "ALLTION",
  title: "ANGEL 100",
  description: "Создан для тех, кто выбирает максимум",
  price: 42000,
  img_info: angel_1000.angel_info,
  img_optic: angel_1000.linzy_krupno,
};

export const Angel100 = () => {
  return (
    <main>
      <section className={clsx("container")}>
        <CustomBreadcrumb
          midPath={pathname.ALLTION}
          midTitle={"Стоматологические микроскопы"}
          lastTitle={"ALLTION ANGEL 100"}
        />

        <ModelInfo item={modelInfo} />
        <PremiumOptics img={modelInfo.img_optic} />
        <Diaphragm />
      </section>
    </main>
  );
};
