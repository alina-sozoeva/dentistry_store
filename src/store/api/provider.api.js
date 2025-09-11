import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const providersApi = createApi({
  reducerPath: "providersApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_MAIN_URL }),
  tagTypes: ["ProvidersList"],
  endpoints: (builder) => ({
    getProviders: builder.query({
      query: () => ({
        url: "/get_sp_provider",
        method: "GET",
      }),
      transformResponse: (response) => {
        return response.filter(
          (item) =>
            item.codeid === 5 ||
            item.codeid === 6 ||
            item.codeid === 4 ||
            item.codeid === 3 ||
            item.codeid === 10
        );
      },
      providesTags: ["ProvidersList"],
    }),
  }),
});

export const { useGetProvidersQuery } = providersApi;
