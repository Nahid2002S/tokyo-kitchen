import React, { useEffect, useState } from 'react';
import Singlechef from '../singlechef/Singlechef';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-10-server-nahid2002s.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])
    console.log(chefs)
    return (
        <div className='lg:px-12 px-2'>
            <h3 className='mb-8 mt-16 text-center text-3xl font-semibold underline text-indigo-500'>Our Chefs</h3>
            <div className='grid lg:grid-cols-3 gap-8'>
            {
                chefs.map(chef => <Singlechef chef={chef} key={chef.id}></Singlechef>)
            }
            </div>
        </div>
    );
};

export default Chefs;