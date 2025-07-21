import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import * as Pages from "../pages";
import { Footer, Header } from "../components";
import { pathname } from "../enums";

const Layout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  { path: pathname.LOGIN, element: <Pages.LoginPage /> },
  {
    element: <Layout />,
    children: [
      { path: pathname.HOME, element: <Pages.HomePage /> },
      { path: pathname.PRODUCTS, element: <Pages.ProductsPage /> },
      { path: pathname.PRODUCTSITEM, element: <Pages.ProductItemPage /> },
      { path: pathname.ABOUT, element: <Pages.AboutUsPage /> },
      { path: pathname.CART, element: <Pages.CartPage /> },
      { path: pathname.PROFILE, element: <Pages.WIPPage /> },
      { path: pathname.CONTACT, element: <Pages.ContactPage /> },
    ],
  },
]);
