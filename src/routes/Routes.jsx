import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddToCart from "../pages/AddToCart/AddToCart";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
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
      {
        path: "/productOverview/:id",
        element: <ProductOverview />,
        loader: async ({ params }) => {
          const response = await fetch(
            `http://localhost:5000/products/category/${params.id}`
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
