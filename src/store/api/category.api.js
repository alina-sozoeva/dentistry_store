import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MAIN_URL }),
  tagTypes: ["CategoryList"],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/get_sp_category",
        method: "GET",
      }),
      providesTags: ["CategoryList"],
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
