import { motion } from "framer-motion";
import {
  ChooseColor,
  Diaphragm,
  ModelInfo,
  PremiumOptics,
  StepIncrease,
  VarioLens,
} from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb, ModelsCard } from "../../../../common";
import { fiveStep } from "../../../../stepData";

import * as am_2000_plus_img from "../../../../assets/images/am2000Plus";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";
import { models } from "../../../../data";
import { Carousel } from "antd";

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
  "Регулировка фокусного расстояния (198-455 мм) в зависимости от антропометрических данных оператора. Микроскоп с вариообъективом сохраняет здоровье врача, исключая травмы шейных и поясничных отделов.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Am2000Plus = () => {
  const filtered = models.filter((item) => item.codeid !== 4);

  return (
    <main>
      <section className={clsx("container")}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <CustomBreadcrumb
            midPath={pathname.ALLTION}
            midTitle={"Стоматологические микроскопы"}
            lastTitle={"Серия AM-2000 Plus"}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <ModelInfo item={modelInfo} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <ChooseColor item={modelInfo} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <PremiumOptics img={modelInfo.img_optic} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <StepIncrease step={5} title={"5-ступенчатое"} arr={fiveStep} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Diaphragm />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <VarioLens item={modelInfo} v_text={v_text} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Carousel
            arrows
            slidesToShow={2}
            className={clsx(styles.carousel, "mb-28")}
          >
            {filtered.map((item) => (
              <motion.div
                key={item.codeid}
                className={clsx("pl-5")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <ModelsCard item={item} />
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </section>
    </main>
  );
};
