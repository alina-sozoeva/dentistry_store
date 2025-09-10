import { pathname } from "../../../enums";
import { useNavigate } from "react-router";
import { Col, Row } from "antd";
import { ModelsCard } from "../../../common";
import { useGetProductsQuery } from "../../../store";

import clsx from "clsx";
import styles from "./GraphyPage.module.scss";
import fon from "../../../assets/images/promis_fon.jpg";

export const GraphyPage = () => {
  const navigate = useNavigate();
  const { data: products } = useGetProductsQuery({ code_sp_provider: 4 });

  const onBrandId = () => {
    navigate({ pathname: pathname.PRODUCTS, search: `?brend=${4}` });
  };

  return (
    <div className={clsx(" mt-6")}>
      <div className={clsx("container  ")}>
        <div className={clsx(styles.aboutUsPage)}>
          <h2 className={styles.title}>
            Graphy — 3D-печать с памятью формы: революция в ортодонтии
          </h2>

          <p className={styles.paragraph}>
            <b>Graphy Inc.</b> южнокорейская компания из Сеула, лидер в
            разработке инновационных материалов для 3D-печати в стоматологии.
            Компания стала первой в мире, кто представил{" "}
            <b>
              3D-печатаемые элайнеры с эффектом памяти формы (Shape Memory
              Aligners)
            </b>{" "}
            , открыв новую эру в ортодонтическом лечении.
          </p>

          <span>
            <b>Технологии и продукты</b>
          </span>
          <ul className={styles.list}>
            <li>
              <b>Shape Memory Aligners</b> — уникальные элайнеры, напечатанные
              напрямую на 3D-принтере, которые под воздействием тепла
              возвращаются к заданной форме и обеспечивают более предсказуемый
              результат лечения.
            </li>
            <li>
              <b>Фотополимерные смолы для стоматологии</b> — собственные
              разработки Graphy, отличающиеся биосовместимостью, прочностью и
              точностью печати.
            </li>
            <li>
              <b>UV-отверждающие системы и аксессуары</b> — комплексные решения,
              которые позволяют клиникам и лабораториям внедрять технологию
              3D-печати под ключ.
            </li>
          </ul>
          <span>
            <b>Преимущества для клиник и пациентов</b>
          </span>
          <ul className={styles.list}>
            <li>
              <b>Высокая биосовместимость</b> и безопасность материалов.
            </li>
            <li>
              <b>Более точная посадка</b> элайнеров за счёт прямой 3D-печати.
            </li>
            <li>
              <b>Сокращение сроков изготовления</b> и предсказуемость
              результатов лечения.
            </li>
            <li>
              <b>Инновационный дизайн</b> и комфорт в использовании для
              пациента.
            </li>
          </ul>
          <span>
            <b>О компании</b>
          </span>
          <ul className={styles.list}>
            <li>
              <b>Основана и базируется</b> в Сеуле, Южная Корея.
            </li>
            <li>
              <b>Команда: </b> более 50 специалистов в области материаловедения,
              3D-печати и стоматологии.
            </li>
            <li>
              <b>Признание:</b> компания активно участвует в международных
              выставках и конференциях, формируя новые стандарты в цифровой
              стоматологии.
            </li>
          </ul>
          <span>
            <b>Узнайте больше</b>
          </span>
          <p className={styles.paragraph}>
            Graphy открывает новые возможности для ортодонтов и пациентов,
            сочетая технологии будущего и клиническую эффективность –
            лаборатория по изготовлению элайнеров. Ознакомьтесь с продукцией
            Graphy{" "}
            <span className={clsx(styles.more)} onClick={() => onBrandId()}>
              в каталоге JDS
            </span>{" "}
            и узнайте, как инновации меняют стоматологию уже сегодня.
          </p>
        </div>

        <div className={clsx(styles.prod_info)}>
          <p onClick={() => onBrandId()}>Продукция Graphy</p>
        </div>

        <Row gutter={24} className={clsx(styles.models, "mb-12")}>
          {products?.products?.slice(0, 4).map((item) => (
            <Col span={12} className={clsx("mt-4")}>
              <ModelsCard
                item={item}
                onClick={() =>
                  navigate(
                    item.category && item.category !== "other"
                      ? `/product/${item?.category}?codeid=${item?.codeid}`
                      : `/product/${item?.category}/${item?.codeid}`
                  )
                }
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
