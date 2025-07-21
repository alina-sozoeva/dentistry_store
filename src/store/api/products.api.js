import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
      providesTags: ["ProductsList"],
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productsApi;
