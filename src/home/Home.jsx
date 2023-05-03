import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div className='lg:py-4 bg-neutral-900'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;