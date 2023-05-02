import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='px-8 py-6 bg-indigo-300 w-[35%] mx-auto mt-6 rounded-md'>
            <h3 className='text-center text-3xl font-semibold mb-6 '>Please <span className='text-indigo-700'>Login!!!</span></h3>
            <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                <label htmlFor="" className='text-xl font-semibold'>Email: <br />
                <input type="email" name="email" id="email" className='px-4 py-2 rounded-md w-full' required/>
                </label>
                <label htmlFor="" className='text-xl font-semibold'>Password: <br />
                <input type="password" name="password" id="password" className='px-4 py-2 rounded-md w-full' required />
                </label>
                <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md">Login</button>
                <hr />
                <button className="btn btn-outline btn-primary">Login With Google</button>
                <button className="btn btn-outline btn-primary">Login With Github</button>
                <p>New User? Create Account <Link to='/register' className='text-blue-800 underline font-semibold'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;