import { BarsOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Empty,
  Flex,
  Input,
  Pagination,
  Row,
  Spin,
  Typography,
} from "antd";

import { CustomButton, ProductItem } from "../../components";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import {
  useGetCategoryQuery,
  useGetProductsQuery,
  useGetProvidersQuery,
} from "../../store";

import styles from "./ProductsPage.module.scss";
import clsx from "clsx";
import debounce from "lodash.debounce";

export const ProductsPage = () => {
  const pageSize = 15;
  const location = useLocation();

  const { data: brands } = useGetProvidersQuery();
  const { data: categories } = useGetCategoryQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const brend = searchParams.get("brend");

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [inputValue, setInputValue] = useState(search || "");

  const [obj, setObj] = useState({
    categoryId: undefined,
    brandId: undefined,
    search: undefined,
  });

  const numericCategory = category !== null ? Number(category) : undefined;
  const numericBrend = brend !== null ? Number(brend) : undefined;

  const { data: products, isFetching } = useGetProductsQuery({
    code_sp_category: obj.categoryId,
    code_sp_provider: obj.brandId,
    nameid: obj.search || search || undefined,
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = products?.slice(startIndex, endIndex);

  const onChangeCategory = (value) => {
    if (selectedCategory === value) {
      setSelectedCategory(null);
      setObj((prev) => ({ ...prev, categoryId: undefined }));
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSelectedCategory(value);
      setObj((prev) => ({ ...prev, categoryId: value }));
      searchParams.set("category", value);
      setSearchParams(searchParams);
    }
  };

  const onChangeBrand = (value) => {
    if (selectedBrand === value) {
      setSelectedBrand(null);
      setObj((prev) => ({ ...prev, brandId: undefined }));
      searchParams.delete("brend");
      setSearchParams(searchParams);
    } else {
      setSelectedBrand(value);
      setObj((prev) => ({ ...prev, brandId: value }));
      searchParams.set("brend", value);
      setSearchParams(searchParams);
    }
  };

  const debouncedSetSearch = useMemo(
    () =>
      debounce((value) => {
        setObj((prev) => ({ ...prev, search: value }));
        if (value) {
          searchParams.set("search", value);
        } else {
          searchParams.delete("search");
        }
        setSearchParams(searchParams);
      }, 400),
    [searchParams, setSearchParams]
  );
  
  const onSearch = (value) => {
    setInputValue(value);
    debouncedSetSearch(value);
  };

  const onDeleteSearchParams = () => {
    searchParams.delete("search");
    searchParams.delete("brend");
    searchParams.delete("category");
    setSearchParams(searchParams);
    setInputValue("");
    setSelectedBrand(null);
    setSelectedCategory(null);
    setObj((prev) => ({ ...prev, categoryId: undefined }));
    setObj((prev) => ({ ...prev, brandId: undefined }));
    setObj((prev) => ({ ...prev, search: undefined }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (numericCategory) {
      setSelectedCategory(numericCategory);
      setObj((prev) => ({ ...prev, categoryId: numericCategory || undefined }));
    }
    if (numericBrend) {
      setSelectedBrand(numericBrend);
      setObj((prev) => ({ ...prev, brandId: numericBrend || undefined }));
    }
    if (search) {
      setInputValue(search);
      setObj((prev) => ({ ...prev, search }));
    }
  }, [numericCategory, numericBrend, search, location.pathname]);

  console.log(products?.length, "products?.length");

  return (
    <main className={clsx(styles.wrap, "mt-28 screen_page")}>
      <div className="mt-10 container">
        <Flex align="center" justify="space-between">
          <Flex vertical>
            <Typography.Title level={2} className={clsx("text-nowrap")}>
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
                      {categories?.map((item) => (
                        <Checkbox
                          key={item.codeid}
                          value={item.codeid}
                          checked={selectedCategory === item.codeid}
                          onChange={(e) => onChangeCategory(e.target.value)}
                        >
                          {item.nameid}
                        </Checkbox>
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
                      {brands?.map((item) => (
                        <Checkbox
                          key={item.codeid}
                          value={item.codeid}
                          checked={selectedBrand === item.codeid}
                          onChange={(e) => onChangeBrand(e.target.value)}
                        >
                          {item.nameid}
                        </Checkbox>
                      ))}
                    </Flex>
                  </nav>
                </Flex>
              </Flex>
            </aside>
          </Col>

          <Col span={20} className="flex flex-col items-center">
            <Input
              placeholder="Поиск по наименованию товара"
              className={clsx("mb-4")}
              value={inputValue}
              onChange={(e) => onSearch(e.target.value)}
            />
            {products?.length === 0 ? (
              <Flex align="center">
                <Empty
                  description={<Typography.Text>Нет данных</Typography.Text>}
                >
                  <Button type="primary" onClick={onDeleteSearchParams}>
                    Получить полный список
                  </Button>
                </Empty>
              </Flex>
            ) : (
              <>
                <Spin spinning={isFetching}>
                  <section aria-label="Список товаров">
                    <div
                      className={`${styles.ptoducts} grid grid-cols-5 gap-2`}
                    >
                      {currentItems?.map((item) => (
                        <ProductItem key={item.codeid} item={item} />
                      ))}
                    </div>
                  </section>
                </Spin>

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
              </>
            )}
          </Col>
        </Row>
      </div>
    </main>
  );
};
