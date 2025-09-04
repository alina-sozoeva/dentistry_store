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
import { fiveStep, sixStep } from "../../../../stepData";

import * as am_5000 from "../../../../assets/images/am5000";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";
import { models } from "../../../../data";
import { Carousel } from "antd";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// AM-5000 пример
const modelInfo5000 = {
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
  "Регулировка фокусного расстояния (198-455 мм) в зависимости от антропометрических данных оператора. Микроскоп с вариообъективом сохраняет здоровье врача, исключая травмы шейных и поясничных отделов.";

export const Am5000 = () => {
  const filtered = models.filter((item) => item.codeid !== 5);

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
            lastTitle={"ALLTION AM-5000 VFR"}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <ModelInfo item={modelInfo5000} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <ChooseColor item={modelInfo5000} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <PremiumOptics img={modelInfo5000.img_optic} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <StepIncrease step={5} title={"6-ступенчатое"} arr={sixStep} />
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
          <VarioLens item={modelInfo5000} v_text={v_text} />
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
