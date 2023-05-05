import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');

    const {registerUser, updateUser, user} = useContext(AuthContext);
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
            updateUser(result.user, name, photoUrl)
            if(!result.user){
                navigate('/login');
            }
            navigate('/');
        })
        .catch(err => {
            console.log(err.message)
        })     
    }

    return (
        <div className='px-2 text-black'>
            <div className='px-8 py-6 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900 lg:w-[35%] mx-auto mt-6 rounded-md'>
            <h3 className='text-center text-3xl font-semibold mb-6'>Please <span className='text-indigo-200'>Register!!!</span></h3>
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
                <input type="url" name="photo" id="photo" className='px-4 py-2 rounded-md w-full' placeholder='Photo URL' required/>
                </label>
                <p className='text-red-200 font-semibold'>{error}</p>
                <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-pink-700 to-indigo-800 shadow:md">Register </button>
                <p>Already have an account? <Link to='/login' className='text-blue-200 underline font-semibold'>Login</Link></p>
            </form>
        </div>
        </div>
    );
};

export default Register;