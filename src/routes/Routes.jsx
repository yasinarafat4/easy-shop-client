import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddToCart from "../pages/AddToCart/AddToCart";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import ProductOverview from "../pages/ProductOverview/ProductOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/productOverview",
        element: <ProductOverview />,
      },
      {
        path: "/addToCart",
        element: <AddToCart />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);
