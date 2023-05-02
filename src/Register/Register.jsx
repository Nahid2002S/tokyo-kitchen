import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    const {registerUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;


        setError('');

        if(password.length < 6){
            setError('Password should be 6 character or more.')
            return;
        }

        registerUser(email,password)
        .then(result => {
            console.log(result.user)
            navigate('/');
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='px-8 py-6 bg-indigo-300 w-[35%] mx-auto mt-6 rounded-md'>
            <h3 className='text-center text-3xl font-semibold mb-6 '>Please <span className='text-indigo-700'>Register!!!</span></h3>
            <form onSubmit={handleRegister} className='flex flex-col gap-4'>
            <label htmlFor="" className='text-xl font-semibold'>Name: <br />
                <input type="text" name="name" id="name" className='px-4 py-2 rounded-md w-full' placeholder='Your Name' required/>
                </label>
                <label htmlFor="" className='text-xl font-semibold'>Email: <br />
                <input type="email" name="email" id="email" className='px-4 py-2 rounded-md w-full' placeholder='Your Email' required/>
                </label>
                <label htmlFor="" className='text-xl font-semibold'>Password: <br />
                <input type="password" name="password" id="password" className='px-4 py-2 rounded-md w-full' placeholder='Password' required />
                </label>
                <label htmlFor="" className='text-xl font-semibold'>Photo URL: <br />
                <input type="text" name="photo" id="photo" className='px-4 py-2 rounded-md w-full' placeholder='Photo URL' required/>
                </label>
                <p className='text-red-600 font-semibold'>{error}</p>
                <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md">Register</button>
                <p>Already have an account? <Link to='/login' className='text-blue-800 underline font-semibold'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;