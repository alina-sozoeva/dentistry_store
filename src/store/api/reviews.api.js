import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_ADMIN_URL }),
  tagTypes: ["ReviewsList"],
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      providesTags: ["ReviewsList"],
    }),
    addReviews: builder.mutation({
      query: (newReviews) => ({
        url: "/reviews/add",
        method: "POST",
        body: newReviews,
      }),
      invalidatesTags: ["ReviewsList"],
    }),
  }),
});

export const { useGetReviewsQuery, useAddReviewsMutation } = reviewsApi;
