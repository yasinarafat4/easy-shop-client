import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllProducts from "../pages/AllProducts/AllProducts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCart from "../pages/MyCart/MyCart";
import ProductOverview from "../pages/ProductOverview/ProductOverview";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/UserProfile/UserProfile";

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
        path: "/myCart",
        element: <MyCart />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/productOverview/:id",
        element: <ProductOverview />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://easy-shop-server-five.vercel.app/products/category/${params.id}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        },
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      // Authentication Routes
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
