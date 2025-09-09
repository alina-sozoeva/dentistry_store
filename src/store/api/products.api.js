import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categories = ["боры", "файлы", "gutta", "absorbent"];

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
          const lowerName = item.nameid.toLowerCase();
          const foundCategory = categories.find((cat) =>
            lowerName.includes(cat)
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

        return {
          products,
          ...categorized,
        };
      },

      providesTags: ["ProductsList"],
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
