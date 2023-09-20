import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/Uses/User";
import UserDetails from "./components/Uses/UserDetails";
import Comments from "./components/Comments/Comments";
import CommentDetails from "./components/CommentDetails/CommentDetails";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <User />,
      },
      {
        path: "/singleUser/:userID",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetails />,
      },
      {
        path: "/comments",
        loader: () => fetch(`https://jsonplaceholder.typicode.com/comments`),
        element: <Comments />,
      },
      {
        path: "/comment/:commentId",
        loader: ({params}) =>
          fetch(
            `https://jsonplaceholder.typicode.com/comments/${params.commentId}`
          ),
        element: <CommentDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
