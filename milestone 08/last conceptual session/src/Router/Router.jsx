
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Favarate from '../Pages/Favarate/Favarate';
import Login from '../Pages/Login/Login';
import PhoneDetails from '../components/AllPhones/PhoneDetails';

const Router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>, 
        children: [
            {
                path: '/', 
                element: <Home/>,
                loader: ()=> fetch('/phones.json')
            }, 
            {
                path: '/favarate', 
                element: <Favarate/>
            }, 
            {
                path: '/login', 
                element: <Login/>
            },
            {
                path: '/phonedetails/:id', 
                element: <PhoneDetails/>,
                loader: ()=> fetch('/phones.json')
            }
        ]
    }
])

export default Router;