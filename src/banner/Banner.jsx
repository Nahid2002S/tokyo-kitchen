import React from 'react';
import Chefs from '../chefs/Chefs';
import Header from '../header/Header';
import banner from '../assets/banner.jpg'
import plate from '../assets/plates.png'
import SignatureFood from '../signature-food/SignatureFood';
import Resturant from '../resturant/resturant';
import './banner.css';

const Banner = () => {
    return (
        <div>
            <div style={{backgroundImage: `url(${banner})`}}  className='bg-indigo-300 h-[80vh] lg:h-[90vh] lg:px-16 lg:bg-center bg-right bg-no-repeat bg-cover px-2 md:px-0'>
            <div className='flex items-center my-auto h-[100%]'>
            <div>
                <h1 className='text-7xl mb-6 font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900 z-[1]'>TOKYO KITCHEN</h1>
                <p className='font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900 lg:w-[600px] mb-6'>Japan Is One Of The Most Popular Country For Its Delicious Food.. All The Credit Goes To Japanese Chefs! </p>
                <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-pink-600 to-indigo-700 shadow:md">View More</button>
            </div>
            <div className='hidden lg:block -mt-72 ml-8'>
            <img src={plate} className='w-[70vh]' id='plate' alt="" />
        </div>
        </div>
        </div>
        <Chefs></Chefs>
        <SignatureFood></SignatureFood>
        <Resturant></Resturant>
        </div>
    );
};

export default Banner;