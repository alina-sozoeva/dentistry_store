import { useNavigate } from "react-router";
import { Col, Flex, Row } from "antd";

import { useGetProductsQuery } from "../../../store";
import { pathname } from "../../../enums";

import clsx from "clsx";
import styles from "./DentisPage.module.scss";
import { ModelsCard } from "../../../common";

export const DentisPage = () => {
  const navigate = useNavigate();
  const { data: products } = useGetProductsQuery({ code_sp_provider: 5 });

  const onBrandId = () => {
    navigate({ pathname: pathname.PRODUCTS, search: `?brend=${5}` });
  };

  return (
    <div className={clsx(" mt-6 ")}>
      <div className={clsx(styles.aboutUsPage, "container  ")}>
        <h2 className={styles.title}>Стоматологические установки Dentis</h2>
        <p className={styles.paragraph}>
          <b>Стоматологические установки Dentis</b> — это сочетание эргономики,
          технологичности и современного дизайна. Каждая установка создаётся с
          учётом потребностей врача и комфорта пациента:
        </p>

        <ul className={styles.list}>
          <li>
            <b>Эргономичный дизайн</b> — продуманное расположение модулей и
            органов управления для удобной работы стоматолога.
          </li>
          <li>
            <b>Надёжность и долговечность</b> — качественные материалы и высокая
            культура производства обеспечивают стабильную эксплуатацию.
          </li>
          <li>
            <b>Комфорт пациента</b> — мягкое кресло с оптимальной анатомической
            поддержкой и плавными регулировками.
          </li>
          <li>
            <b>Гибкая комплектация</b> — возможность адаптировать установку под
            потребности конкретной клиники.
          </li>
        </ul>

        <p className={styles.paragraph}>
          Установки Dentis помогают повысить эффективность работы и создать
          современную атмосферу в стоматологическом кабинете.
        </p>
        <span>
          <b>Продукция</b>
        </span>
        <Row gutter={24} className={clsx(styles.models, "mb-12")}>
          {products?.products?.slice(0, 3).map((item) => (
            <Col span={12} className={clsx("mt-4")}>
              <ModelsCard item={item} />
            </Col>
          ))}
        </Row>
        <Flex align="center" justify="center">
          <p className={clsx(styles.more)} onClick={() => onBrandId()}>
            <b>Узнайте больше о продукции Dentis</b>
          </p>
        </Flex>
      </div>
    </div>
  );
};
