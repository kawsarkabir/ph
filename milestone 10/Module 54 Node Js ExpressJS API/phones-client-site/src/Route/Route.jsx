import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Abot from "../pages/Abot";
import Login from "../pages/Login";
import Phones from "../components/Phones";
import Phone from "../components/Phone";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Abot />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: ()=> fetch('http://localhost:5000/phones')
      },
      {
        path: "/phone",
        element: <Phone></Phone>,
      },
    ],
  },
]);

export default Route;
