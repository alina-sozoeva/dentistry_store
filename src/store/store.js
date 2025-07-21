import { configureStore } from "@reduxjs/toolkit";
import { categoryApi, productsApi, providersApi } from "./api";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [providersApi.reducerPath]: providersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      categoryApi.middleware,
      providersApi.middleware,
    ]),
});
