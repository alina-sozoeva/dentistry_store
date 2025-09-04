import { motion } from "framer-motion";
import {
  ChooseColor,
  ModelInfo,
  PremiumOptics,
  StepIncrease,
  VarioLens,
} from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb, ModelsCard } from "../../../../common";
import { fiveStep } from "../../../../stepData";

import * as am_2000_img from "../../../../assets/images/am2000Plus";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";
import { models } from "../../../../data";
import { Carousel } from "antd";

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
  "Регулировка фокусного расстояния осуществляется в зависимости от антропометрических данных оператора. Рабочая дистанция может составлять 250-430 мм или 200-300 мм – на выбор.";

export const Am2000 = () => {
  const filtered = models.filter((item) => item.codeid !== 3);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
            lastTitle={"Серия AM-2000"}
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
          <StepIncrease step={5} title={"6-ступенчатое"} arr={fiveStep} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <VarioLens item={modelInfo} v_text={v_text} dop_text={dop_text} />
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
