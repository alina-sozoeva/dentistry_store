import { motion } from "framer-motion";
import {
  Diaphragm,
  ModelInfo,
  PremiumOptics,
  Smooth,
  VarioLens,
} from "../../../../components";

import { pathname } from "../../../../enums";
import { CustomBreadcrumb, ModelsCard } from "../../../../common";

import * as angel_1000 from "../../../../assets/images/angel100";

import styles from "../AlltionPage.module.scss";
import clsx from "clsx";
import { models } from "../../../../data";
import { Carousel } from "antd";

const modelInfo = {
  subtitle: "ALLTION",
  title: "ANGEL 100",
  description: "Создан для тех, кто выбирает максимум",
  price: 42000,
  img_info: angel_1000.angel_info,
  img_optic: angel_1000.linzy_krupno,
  img_v: angel_1000.v_100,
};

const v_text =
  "Регулировка фокусного расстояния (198-455 мм) в зависимости от антропометрических данных оператора. Микроскоп с вариообъективом сохраняет здоровье врача, исключая травмы шейных и поясничных отделов.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Angel100 = () => {
  const filtered = models.filter((item) => item.codeid !== 1);

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
            lastTitle={"ALLTION ANGEL 100"}
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
          <PremiumOptics img={modelInfo.img_optic} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Smooth />
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
