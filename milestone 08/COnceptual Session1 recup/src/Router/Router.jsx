import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Product from "../Pages/Product/Product";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import ProductsDetails from "../Pages/Product/ProductsDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Product />,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
        loader: ({params})=> fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
