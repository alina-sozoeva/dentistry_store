import { configureStore } from "@reduxjs/toolkit";
import {
  bannersApi,
  categoryApi,
  educationApi,
  productsApi,
  providersApi,
  reviewsApi,
} from "./api";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [providersApi.reducerPath]: providersApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [educationApi.reducerPath]: educationApi.reducer,
    [bannersApi.reducerPath]: bannersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      categoryApi.middleware,
      providersApi.middleware,
      reviewsApi.middleware,
      educationApi.middleware,
      bannersApi.middleware,
    ]),
});
