import React, { useEffect, useState } from 'react';
import Singlechef from '../singlechef/Singlechef';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-10-server-nahid2002s.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])
    return (
        <div className='lg:px-12 px-2'>
            <h3 className='mb-2 mt-16 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600'>Our Chefs</h3>
            <p className='mb-12 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600'>Japanese chefs believe our soul goes into our knives once we start using them. <br /> You wouldn't put your soul in a dishwasher!</p>
            <div className='grid lg:grid-cols-3 gap-8'>
            {
                chefs.map(chef => <Singlechef chef={chef} key={chef.id}></Singlechef>)
            }
            </div>
        </div>
    );
};

export default Chefs;