import { Collapse, Flex, Typography } from "antd";
import { ProductInfo } from "../../components";

import styles from "./ProductItemPage.module.scss";
import { useParams } from "react-router";
import { useMemo } from "react";
import { dentalItems } from "../../data";

const { Title, Paragraph } = Typography;

const text = (
  <p
    style={{
      paddingInlineStart: 24,
    }}
  >
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);

const items = [
  {
    key: "1",
    label: "Связанные элементы:",
    children: text,
  },
  {
    key: "2",
    label: "Горячие позиции:",
    children: text,
  },
];

export const ProductItemPage = () => {
  const { id } = useParams();

  const findItem = useMemo(() => {
    return dentalItems.find((item) => item.id === +id);
  }, [id]);

  return (
    <section className={`${styles.wrap} py-4 header_h`}>
      <Flex vertical className="container">
        <Title>О продукте</Title>
        <ProductInfo item={findItem} />
        <Flex className="container">
          <Flex vertical className="w-full max-w-4xl py-10">
            <Title level={2}>E Connect S — эндомотор с апекс-локатором</Title>

            <Paragraph>
              <strong>Описание:</strong> Беспроводной эндомотор с встроенным
              апекс-локатором, компактен и легкий в использовании.
            </Paragraph>

            <Paragraph>
              <strong>Функции:</strong> возвратно-поступательное движение,
              разные режимы вращения, OLED-дисплей, автостарт/стоп, настройка
              крутящего момента.
            </Paragraph>

            <Paragraph>
              <strong>Режимы работы:</strong> CW (по часовой), CCW (против
              часовой), REC (возвратно-поступательное), ATC (адаптивный
              контроль).
            </Paragraph>

            <Paragraph>
              <strong>Дополнительно:</strong> обновляемое ПО, память на 11
              программ, совместимость с большинством файловых систем.
            </Paragraph>

            <Paragraph>
              <strong>Технические характеристики:</strong>
              <ul style={{ paddingLeft: "1.2rem" }}>
                <li>Скорость: 120–1000 об/мин</li>
                <li>Крутящий момент: 0.5–4.0 Нсм</li>
                <li>Батарея: 1500 мАч</li>
                <li>Питание: AC100–240V, 50/60Hz</li>
                <li>11 программ памяти</li>
                <li>Апикальное замедление и реверс</li>
                <li>Автостарт/стоп при вхождении/выходе из канала</li>
                <li>Амбидекстричный дисплей (для левшей и правшей)</li>
              </ul>
            </Paragraph>
          </Flex>
        </Flex>
        <Collapse
          items={items}
          bordered={false}
          defaultActiveKey={[]}
          className="mb-4"
        />
      </Flex>
    </section>
  );
};
