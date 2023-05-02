import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';

const Home = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div className='lg:px-24 lg:py-4 bg-indigo-50'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;