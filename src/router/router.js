import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import * as Pages from "../pages";

import { pathname } from "../enums";
import { Footer, Header } from "../common";
import clsx from "clsx";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <div className={clsx("header_h screen_page")}>
        <Outlet />
      </div>
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
      { path: pathname.PRODUCTSITEMCAT, element: <Pages.ProductItemPage /> },
      { path: pathname.ABOUT, element: <Pages.AboutUsPage /> },
      { path: pathname.CART, element: <Pages.CartPage /> },
      { path: pathname.PROFILE, element: <Pages.WIPPage /> },
      { path: pathname.CONTACT, element: <Pages.ContactPage /> },
      { path: pathname.STUDY, element: <Pages.StudyPage /> },
      { path: pathname.FAVORITES, element: <Pages.FavoritesPage /> },
      { path: pathname.ALLTION, element: <Pages.AlltionPage /> },
      { path: pathname.ECOTRON, element: <Pages.EcotronPage /> },
      { path: pathname.GRAPHY, element: <Pages.GraphyPage /> },
      { path: pathname.PROMIS, element: <Pages.PromisPage /> },
      { path: pathname.DENTIS, element: <Pages.DentisPage /> },
      { path: pathname.LARGEV, element: <Pages.LargevPage /> },
      { path: pathname.ALIGNERS, element: <Pages.AlignersPage /> },
      { path: pathname.AM2000PLUS, element: <Pages.Am2000Plus /> },
      { path: pathname.AM2000, element: <Pages.Am2000 /> },
      { path: pathname.AM5000, element: <Pages.Am5000 /> },
      { path: pathname.ANGEL100, element: <Pages.Angel100 /> },
      { path: pathname.ANGEL100PRO, element: <Pages.Angel100Pro /> },
    ],
  },
]);
