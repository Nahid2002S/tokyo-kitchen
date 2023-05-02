import React from 'react';
import bannerImage from '../assets/chef.png'

const Banner = () => {
    return (
        <div className='bg-indigo-300 mt-4 lg:px-16 '>
            <div className='lg:flex items-center'>
            <div>
                <h1 className='text-6xl font-bold mb-6 text-indigo-600'><span className='text-indigo-700'>TOKYO</span> KITCHEN</h1>
                <p className='font-semibold mb-6 text-indigo-600'>Japan Is One Of The Most Popular Country For Its Delicious Food.. All The Credit Goes To Japanese Chefs! </p>
                <button class="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md">View More</button>
            </div>
            <div className='z-[2]'>
              <img src={bannerImage} alt="" className="lg:w-[1200px]" />
            </div>
        </div>
        {/* <div className='hidden lg:block w-[500px] h-[60vh] bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-tr-full rounded-tl-full absolute right-48 top-36 z-[1]'></div> */}
        </div>
    );
};

export default Banner;