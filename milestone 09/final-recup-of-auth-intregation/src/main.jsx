import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import UserProvider from "./UserProvider/UserProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <UserProvider>
   <RouterProvider router={Router}></RouterProvider>
   </UserProvider>
  </React.StrictMode>
);
