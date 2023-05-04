
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-[100vh]'>
        <div id="error-page">
            <div>
                <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1683128824~exp=1683129424~hmac=cc918dffe37a218f8cee3d6f1e423db362b1c9fc00f9d8cc5ef3cd715149cc1a' className='w-96 lg:w-[80vh] lg:-mt-16'></img>
            </div>
      <Link to="/">
      <button className="cursor-pointer px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-500 to-indigo-600 border-0 flex justify-center mx-auto">Back To Homepage</button>
      </Link>
       </div>
    </div>
    );
};

export default ErrorPage;