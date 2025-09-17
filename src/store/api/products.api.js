import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categories = [
  "Бор твердосплавный",
  "Твердосплавные боры",
  "Твердосплавный бор для углового наконечника",
  "Боры алмазные",
  "Силиконовые насадки для бормашины",
  "H-файлы",
  "K-файлы",
  "Reamers-файлы",
  "Spreaders-файлы",
  "Gutta percha points 02",
  "Gutta percha points 04",
  "Absorbent paper points 02",
  "Absorbent paper points 04",
];

const normalizeName = (str) => str.replace(/Н/g, "H").toLowerCase();

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MAIN_URL }),
  tagTypes: ["ProductsList"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({
        code_sp_provider,
        code_sp_category,
        quantity,
        barcode,
        price_from,
        price_to,
        nameid,
      }) => ({
        url: "/get_sp_product",
        method: "GET",
        params: {
          code_sp_provider,
          code_sp_category,
          quantity,
          barcode,
          price_from,
          price_to,
          nameid,
        },
      }),
      transformResponse: (response) => {
        const categorized = {};

        categories.forEach((cat) => {
          categorized[cat] = [];
        });

        const products = response.map((item) => {
          const foundCategory = categories.find((cat) =>
            normalizeName(item.nameid).includes(normalizeName(cat))
          );

          const productWithCategory = {
            ...item,
            category: foundCategory || "other",
          };

          if (foundCategory) {
            categorized[foundCategory].push(productWithCategory);
          }

          return productWithCategory;
        });

        const oneFromEach = categories
          .map((cat) => {
            const firstItem = categorized[cat][0];
            if (!firstItem) return null;

            return {
              ...firstItem,
              nameid: cat,
            };
          })
          .filter(Boolean);

        const filteredProducts = products.filter(
          (item) =>
            !categories.some(
              (cat) => normalizeName(item.category) === normalizeName(cat)
            )
        );

        return {
          products: [...filteredProducts, ...oneFromEach],
          ...categorized,
        };
      },

      providesTags: ["ProductsList"],
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
