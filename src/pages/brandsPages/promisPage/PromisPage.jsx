import { Col, Flex, Row } from "antd";

import { pathname } from "../../../enums";
import { useNavigate } from "react-router";

import clsx from "clsx";
import styles from "./PromisPage.module.scss";
import { ModelsCard } from "../../../common";
import { useGetProductsQuery } from "../../../store";
import fon from "../../../assets/images/promis_fon.jpg";

export const PromisPage = () => {
  const navigate = useNavigate();
  const { data: products } = useGetProductsQuery({ code_sp_provider: 3 });

  const onBrandId = () => {
    navigate({ pathname: pathname.PRODUCTS, search: `?brend=${3}` });
  };

  return (
    <div className={clsx(" mt-6")}>
      <div className={clsx("container")}>
        <div className={clsx(styles.aboutUsPage)}>
          <h2 className={styles.title}>
            Promis — экологичная гигиена полости рта с итальянским дизайном и
            заботой о природе
          </h2>
          <p className={styles.paragraph}>
            <b>Promis</b> — итальянский бренд экологичной гигиены полости рта,
            созданный в живописном регионе Южного Тироля (Альто-Адидже). Здесь,
            среди гор, лесов и виноградников, зародилась идея соединить любовь к
            природе и заботу о зубах. Promis -гигиена прослеживается обещание —
            внимательное отношение и к экосистеме окружающей среды, и к вашему
            рту.
          </p>
          <span>
            <b>Технологии и продукты</b>
          </span>
          <ul className={styles.list}>
            <li>
              Разработано{" "}
              <b>совместно с опытными стоматологами и гигиенистами</b>, чтобы
              продукты были одновременно эффективными, безопасными и
              экологичными
            </li>
            <li>
              Собственные разработки включают:{" "}
              <b>
                зубные щётки, пасты, гели против зубного налёта и кариеса,
                ополаскиватели и нить
              </b>
              . Все средства содержат только натуральные и органические
              ингредиенты и упакованы в экологичные материалы.
            </li>
            <li>
              Дизайн продуктов вдохновлён эстетикой мебельного искусства — щётки
              выглядят красиво, органично вписываясь в интерьер ванной комнаты
            </li>
          </ul>
          <span>
            <b>Преимущества для клиник и пациентов</b>
          </span>
          <ul className={styles.list}>
            <li>
              <b>Натуральные и веганские формулы,</b> безопасные как для ротовой
              полости, так и для экологии.
            </li>
            <li>
              <b>Cтолкновение природы и дизайна</b> — функциональность
              сочетается с эстетикой.
            </li>
            <li>
              Признание среди профессионалов: продукты тестируются, одобряются и
              рекомендуются стоматологами, которые используют их в своей
              практике
            </li>
          </ul>
          <span>
            <b>О компании</b>
          </span>
          <ul className={styles.list}>
            <li>
              <b>Место основания и штаб-квартира:</b> Южный Тироль
              (Альто-Адидже), Италия
            </li>
            <li>
              <b>Корни бренда:</b> часть семейной группы, работающей в
              стоматологическом секторе более 30 лет
            </li>
            <li>
              <b>Миссия:</b> предложить гигиену полости рта, которая
              одновременно заботится о человеке и окружающей среде, сохраняя
              высокие стандарты эффективности и дизайна.
            </li>
          </ul>
          <span>
            <b>Узнайте больше</b>
          </span>
          <p className={styles.paragraph}>
            Promis — это не просто продукты ухода, а философия устойчивости,
            подкреплённая качеством и инновациями.
          </p>
          <p>
            <span className={clsx(styles.more)} onClick={() => onBrandId()}>
              В каталоге JDS
            </span>{" "}
            вы найдете полный ассортимент promis — от зубных щёток до
            завершённых наборов ухода, уже оценённых и рекомендованных
            стоматологами.
          </p>
        </div>

        <div className={clsx(styles.prod_info)}>
          <p onClick={() => onBrandId()}>Продукция Promis</p>
        </div>

        <Row gutter={24} className={clsx(styles.models, "mb-12")}>
          {products?.products?.slice(2, 8).map((item) => (
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
