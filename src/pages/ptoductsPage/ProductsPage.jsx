import { BarsOutlined } from "@ant-design/icons";
import { Checkbox, Col, Flex, Pagination, Row, Typography } from "antd";

import { CustomButton, ProductItem } from "../../components";
import { brandsItem, categories } from "../../data";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useGetProductsQuery } from "../../store";

import styles from "./ProductsPage.module.scss";
import clsx from "clsx";

export const ProductsPage = () => {
  const pageSize = 15;
  const location = useLocation();
  const { data: products } = useGetProductsQuery({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = products?.slice(startIndex, endIndex);

  return (
    <main className={clsx(styles.wrap, "header_h screen_page")}>
      <div className="mt-10 container">
        <Flex align="center" justify="space-between">
          <Flex vertical>
            <Typography.Title level={2}>
              Стоматологическое оборудование
            </Typography.Title>
            <Flex gap={"small"}>
              <BarsOutlined />
              <span>Найдено</span>
              <span className="font-bold">{products?.length} результатов</span>
            </Flex>
          </Flex>
          <Flex>
            <CustomButton>Лучшее товары</CustomButton>
          </Flex>
        </Flex>

        <Row gutter={16} className="py-6">
          <Col span={4}>
            <aside>
              <Flex vertical gap={"small"}>
                <Flex vertical gap={"middle"}>
                  <nav
                    className="bg-white px-3 py-2"
                    style={{ height: "220px", overflowY: "auto" }}
                    aria-label="Категории товаров"
                  >
                    <h4 className="text-blue pb-1">Категории</h4>
                    <Flex vertical gap={"small"}>
                      {categories.map((item) => (
                        <Checkbox key={item.key}>{item.title}</Checkbox>
                      ))}
                    </Flex>
                  </nav>
                  <nav
                    className="bg-white px-3 py-2"
                    style={{ height: "220px", overflowY: "auto" }}
                    aria-label="Фильтр по брендам"
                  >
                    <h4 className="text-blue pb-1">Бренд</h4>
                    <Flex vertical gap={"small"}>
                      {brandsItem.map((item) => (
                        <Checkbox
                          key={item.key}
                          // checked={checked}
                          // onChange={onChange}
                        >
                          {item.title}
                        </Checkbox>
                      ))}
                    </Flex>
                  </nav>
                </Flex>
              </Flex>
            </aside>
          </Col>

          <Col span={20} className="flex flex-col items-center">
            <section aria-label="Список товаров">
              <div className={`${styles.ptoducts} grid grid-cols-5 gap-2`}>
                {currentItems?.map((item) => (
                  <ProductItem key={item.id} item={item} />
                ))}
              </div>
            </section>
            <nav aria-label="Пагинация">
              <Pagination
                className="pt-4"
                current={currentPage}
                onChange={setCurrentPage}
                total={products?.length}
                pageSize={pageSize}
                showSizeChanger={false}
              />
            </nav>
          </Col>
        </Row>
      </div>
    </main>
  );
};
