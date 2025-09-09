import { Col, Flex, Row } from "antd";
import { pathname } from "../../../enums";
import { useNavigate } from "react-router";

import { ModelsCard } from "../../../common";
import { useGetProductsQuery } from "../../../store";

import clsx from "clsx";
import styles from "./EcotronPage.module.scss";

export const EcotronPage = () => {
  const navigate = useNavigate();

  const { data: products } = useGetProductsQuery({ code_sp_provider: 6 });

  const onBrandId = () => {
    navigate({ pathname: pathname.PRODUCTS, search: `?brend=${6}` });
  };

  return (
    <div className={clsx(" mt-6")}>
      <div className={clsx(styles.aboutUsPage, "container  ")}>
        <h2 className={styles.title}>
          Ecotron — инновационные рентгеновские решения из Южной Кореи
        </h2>
        <p className={styles.paragraph}>
          <b>Ecotron Co., Ltd.</b> — южнокорейская компания, основанная в 2005
          году. С самого начала Ecotron сфокусирована на создании
          высокотехнологичных рентгеновских систем для медицины и ветеринарии.
          Сегодня бренд известен во всём мире как производитель надежного и
          современного оборудования, сочетающего компактность, удобство и
          передовые технологии.
        </p>

        <span>
          <b>Что выпускает Ecotron?</b>
        </span>
        <ul className={styles.list}>
          <li>
            <b>Портативные рентген-аппараты</b> — лёгкие, мобильные и удобные
            для работы в клиниках и на выезде.
          </li>
          <li>
            <b>C-дуги (C-arm)</b> для хирургии и интервенционной радиологии.
          </li>
          <li>
            <b>Рентгеновские генераторы</b> последнего поколения.
          </li>
        </ul>
        <span>
          <b>Достижения и признание</b>
        </span>
        <ul className={styles.list}>
          <li>
            Международные сертификаты <b>ISO 13485, CE</b> и одобрение{" "}
            <b>FDA 510(k)</b>.
          </li>
          <li>
            Участие в крупнейших медицинских выставках мира:{" "}
            <b>RSNA, MEDICA, ARAB HEALTH, KIMES, CMEF</b> и других.
          </li>
          <li>
            Партнёрская сеть в десятках стран, включая Европу, США, Ближний
            Восток и Центральную Азию.
          </li>
        </ul>
        <span>
          <b>Философия компании</b>
        </span>
        <p className={styles.paragraph}>
          Ecotron — это молодая и энергичная команда, которая верит в силу
          инноваций. Их девиз звучит так:
        </p>
        <span>
          <b>
            Challenging Spirit + Creative Mind = Innovative Technology =
            Customer Satisfaction
          </b>
        </span>
        <p className={styles.paragraph}>
          Именно поэтому оборудование Ecotron отличается надёжностью, простотой
          в использовании и соответствует самым высоким требованиям современных
          клиник.
        </p>
        <span>
          <b>Продукция</b>
        </span>
        <Row gutter={24} className={clsx(styles.models, "mb-12")}>
          {products?.products?.slice(0, 3).map((item) => (
            <Col span={12} className={clsx("mt-4")}>
              <ModelsCard item={item} onClick={() => onBrandId()} />
            </Col>
          ))}
        </Row>
        <Flex align="center" justify="center">
          <p className={clsx(styles.more)} onClick={() => onBrandId()}>
            <b>Узнайте больше о продукции Ecotron</b>
          </p>
        </Flex>
      </div>
    </div>
  );
};
