import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Users";
import App from "./App";
import Update from "./Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>Hello world!</App>,
  },
  {
    path:'/users', 
    element: <Users></Users>, 
    loader: ()=> fetch('http://localhost:5000/users')

  },
  {
    path:'/update/:id', 
    element: <Update></Update>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
