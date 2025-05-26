import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import * as Pages from "../pages";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/products" /> },
      { path: "/home", element: <Pages.HomePage /> },
      { path: "/products", element: <Pages.ProductsPage /> },
      { path: "/product/:id", element: <Pages.ProductItemPage /> },
    ],
  },
]);
