import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Product /Products";
import About from "../Pages/About/About";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products />,
        loader: ()=> fetch(`https://dummyjson.com/products`)
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: <About />,
      },
    ],
  },
]);

export default Routes;
