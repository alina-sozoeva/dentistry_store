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
  Select,
  Spin,
  Typography,
} from "antd";

import { ProductItem } from "../../common";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import {
  useGetCategoryQuery,
  useGetProductsQuery,
  useGetProvidersQuery,
} from "../../store";

import styles from "./ProductsPage.module.scss";
import clsx from "clsx";

export const ProductsPage = () => {
  const pageSize = 20;
  const location = useLocation();

  const { data: brands } = useGetProvidersQuery();
  const { data: categories } = useGetCategoryQuery();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  const brandParam = searchParams.get("brand");
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [inputValue, setInputValue] = useState(searchParam || "");

  const [filters, setFilters] = useState({
    categoryId: undefined,
    brandId: undefined,
    search: undefined,
  });

  const numericCategory =
    categoryParam !== null ? Number(categoryParam) : undefined;
  const numericBrand = brandParam !== null ? Number(brandParam) : undefined;

  const {
    data: products,
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    code_sp_category: filters.categoryId,
    code_sp_provider: filters.brandId,
    nameid: filters.search || searchParam || undefined,
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = products?.products?.slice(startIndex, endIndex);

  const onChangeCategory = (value) => {
    setCurrentPage(1);
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (selectedCategory === value) {
      setSelectedCategory(null);
      setFilters((prev) => ({ ...prev, categoryId: undefined }));
      newSearchParams.delete("category");
    } else {
      setSelectedCategory(value);
      setFilters((prev) => ({ ...prev, categoryId: value }));
      newSearchParams.set("category", value);
    }

    newSearchParams.set("page", "1");
    setSearchParams(newSearchParams);
  };

  const onChangeBrand = (value) => {
    setCurrentPage(1);
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (selectedBrand === value) {
      setSelectedBrand(null);
      setFilters((prev) => ({ ...prev, brandId: undefined }));
      newSearchParams.delete("brand");
    } else {
      setSelectedBrand(value);
      setFilters((prev) => ({ ...prev, brandId: value }));
      newSearchParams.set("brand", value);
    }

    newSearchParams.set("page", "1");
    setSearchParams(newSearchParams);
  };

  const onSelectCategory = (value) => {
    setCurrentPage(1);
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (value) {
      setSelectedCategory(value);
      setFilters((prev) => ({ ...prev, categoryId: value }));
      newSearchParams.set("category", value);
    } else {
      setSelectedCategory(null);
      setFilters((prev) => ({ ...prev, categoryId: undefined }));
      newSearchParams.delete("category");
    }

    newSearchParams.set("page", "1");
    setSearchParams(newSearchParams);
  };

  const onSelectBrand = (value) => {
    setCurrentPage(1);
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (value) {
      setSelectedBrand(value);
      setFilters((prev) => ({ ...prev, brandId: value }));
      newSearchParams.set("brand", value);
    } else {
      setSelectedBrand(null);
      setFilters((prev) => ({ ...prev, brandId: undefined }));
      newSearchParams.delete("brand");
    }

    newSearchParams.set("page", "1");
    setSearchParams(newSearchParams);
  };

  const onSearch = (value) => {
    setCurrentPage(1);
    setInputValue(value);
    setFilters((prev) => ({ ...prev, search: value }));
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (value) newSearchParams.set("search", value);
    else newSearchParams.delete("search");
    newSearchParams.set("page", "1");
    setSearchParams(newSearchParams);
  };

  const onDeleteSearchParams = () => {
    searchParams.delete("search");
    searchParams.delete("brand");
    searchParams.delete("category");
    setSearchParams(searchParams);
    setInputValue("");
    setSelectedBrand(null);
    setSelectedCategory(null);
    setFilters({
      categoryId: undefined,
      brandId: undefined,
      search: undefined,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (numericCategory) {
      setSelectedCategory(numericCategory);
      setFilters((prev) => ({ ...prev, categoryId: numericCategory }));
    }
    if (numericBrand) {
      setSelectedBrand(numericBrand);
      setFilters((prev) => ({ ...prev, brandId: numericBrand }));
    }
    if (searchParam !== null && searchParam !== inputValue) {
      setInputValue(searchParam);
      setFilters((prev) => ({ ...prev, search: searchParam }));
    }

    const pageFromUrl = Number(searchParams.get("page")) || 1;
    setCurrentPage(pageFromUrl);
  }, [
    numericCategory,
    numericBrand,
    searchParam,
    location.pathname,
    searchParams,
  ]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  };

  return (
    <main className={clsx(styles.wrap)}>
      <Spin spinning={isLoading || isFetching}>
        <div className="mt-10 container">
          <Flex align="center" justify="space-between">
            <Flex vertical>
              <Typography.Title level={2} className={clsx("text-nowrap")}>
                Стоматологическое оборудование
              </Typography.Title>
              <Flex gap={"small"}>
                <BarsOutlined />
                <span>Найдено</span>
                <span className="font-bold">
                  {products?.products?.length} результатов
                </span>
              </Flex>
            </Flex>
          </Flex>

          <Row gutter={16} className="py-6">
            <Col span={4} className={clsx(styles.filter, styles.desktopFilter)}>
              <aside>
                <Flex vertical gap={"small"}>
                  <Flex vertical gap={"middle"}>
                    <nav
                      className="bg-white px-3 py-2 relative max-w-[220px]"
                      aria-label="Категории товаров"
                    >
                      <h4 className="text-blue pb-1 sticky">Категории</h4>
                      <Flex
                        vertical
                        gap={"small"}
                        className="h-[230px]"
                        style={{ overflowY: "auto" }}
                      >
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
                      className="bg-white px-3 py-2 relative max-w-[220px]"
                      aria-label="Фильтр по брендам"
                    >
                      <h4 className="text-blue pb-1 sticky">Бренд</h4>
                      <Flex
                        vertical
                        className="h-[180px]"
                        gap={"small"}
                        style={{ overflowY: "auto" }}
                      >
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

            <Col span={20} className={clsx(styles.contentCol)}>
              <Input
                placeholder="Поиск по наименованию товара"
                className={clsx("mb-4", styles.desktopSearchInput)}
                value={inputValue}
                onChange={(e) => onSearch(e.target.value)}
              />

              <Flex gap="small" className={clsx(styles.mobileFilters)}>
                <Input
                  placeholder="Поиск по наименованию товара"
                  className={clsx(styles.searchInput)}
                  value={inputValue}
                  onChange={(e) => onSearch(e.target.value)}
                />
                <Select
                  placeholder="Категория"
                  allowClear
                  className={clsx(styles.selectFilter)}
                  value={selectedCategory || undefined}
                  onChange={onSelectCategory}
                  options={categories?.map((item) => ({
                    label: item.nameid,
                    value: item.codeid,
                  }))}
                />
                <Select
                  placeholder="Бренд"
                  allowClear
                  className={clsx(styles.selectFilter)}
                  value={selectedBrand || undefined}
                  onChange={onSelectBrand}
                  options={brands?.map((item) => ({
                    label: item.nameid,
                    value: item.codeid,
                  }))}
                />
              </Flex>

              {products?.products?.length === 0 ? (
                <Flex
                  align="center"
                  className="flex items-center justify-center"
                >
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
                  <section>
                    <div className={styles.products}>
                      {currentItems?.map((item) => (
                        <ProductItem
                          key={item.codeid}
                          item={item}
                          currentPage={currentPage}
                        />
                      ))}
                    </div>
                  </section>

                  <nav
                    aria-label="Пагинация"
                    className="flex items-center justify-center"
                  >
                    <Pagination
                      className="pt-4"
                      current={currentPage}
                      onChange={onPageChange}
                      total={products?.products?.length}
                      pageSize={pageSize}
                      showSizeChanger={false}
                    />
                  </nav>
                </>
              )}
            </Col>
          </Row>
        </div>
      </Spin>
    </main>
  );
};
