import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';

const Login = () => {

    const {loginUser, googleAuth, githubAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [errors, setErrors] = useState("");

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setErrors("");

        loginUser(email, password)
        .then(result => {
            navigate(from, {replace : true})
        })
        .catch(err => {
            setErrors(err.message)
        })
    }

    const handleGoogleLogin =() =>{
        googleAuth()
        .then(result =>{
            navigate(from, {replace : true})
        })
        .catch(err =>{
            console.log(err)
        })
    }
    const handleGithubLogin =() =>{
        githubAuth()
        .then(result =>{
            console.log(result)
            navigate(from, {replace : true})
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <div className='px-2 text-black'>
            <div className='px-8 py-6 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900 lg:w-[35%] mx-auto mt-6 rounded-md'>
            <h3 className='text-center text-black text-3xl font-semibold mb-6 '>Please <span className='text-indigo-200'>Login!!!</span></h3>
            <form onSubmit={handleLogin} className='flex flex-col gap-4'>
                <label htmlFor="" className='text-xl font-semibold text-black'>Email: <br />
                <input type="email" name="email" id="email" className='px-4 py-2 rounded-md w-full' required/>
                </label>
                <label htmlFor="" className='text-xl font-semibold text-black'>Password: <br />
                <input type="password" name="password" id="password" className='px-4 py-2 rounded-md w-full' required />
                </label>
                <p className='font-semibold text-red-200'>{errors}</p>
                <button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-pink-700 to-indigo-800 shadow:md">Login</button>
                <hr />
                <Link onClick={handleGoogleLogin} className="btn btn-outline btn-primary">Login With Google</Link>
                <Link onClick={handleGithubLogin} className="btn btn-outline btn-primary">Login With Github</Link>
                <p>New User? Create Account <Link to='/register' className='text-blue-200 underline font-semibold'>Register</Link></p>
            </form>
        </div>
        </div>
    );
};

export default Login;