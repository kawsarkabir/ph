import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const Routers =  createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout/>,
        children: [
            {
                path: '/', 
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])

export default Routers;
