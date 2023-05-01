import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../header/Header';

const Home = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div className='lg:px-24 lg:py-4 bg-indigo-50'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;