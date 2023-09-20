import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar/>
            {
                navigation.state === 'loading' ? <p className='text-6xl text-red-400 text-center mt-52'>Loading...</p>:<Outlet/>
            }
       
    
            <Footer/>
        </div>
    );
};

export default Home;