 
import Navbar from '../components/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
           <section>
           <Navbar/>
           <Outlet/>
           </section>
        </div>
    );
};

export default Layout;