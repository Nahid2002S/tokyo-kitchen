import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user)

  const handleLogOut = () => {
    logOut()
        .then()
        .catch(error => console.log(error));
}

    return (
        <div className='text-white lg:px-12'>
<div className="navbar lg:px-1">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-900 rounded-box w-52">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900' : '')}>Home</NavLink></li>
        {
          user ? "" : <li><NavLink to="/register" className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900' : '')}>Register</NavLink></li>
        }
        <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900' : '')}>Blogs</NavLink></li>
        <li>
      {
        user?.displayName || user?.photoURL ? <button onClick={handleLogOut} className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md"> Logout </button> : <Link to='/login'><button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md"> Login </button> </Link>
      }
    </li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case -ml-8 md:-ml-0 text-xl lg:text-2xl text-indigo-500 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">TOKYO KITCHEN</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900' : '')}>Home</NavLink></li>
        {
          user ? "" : <li><NavLink to="/register" className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900' : '')}>Register</NavLink></li>
        }
        <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'font-extrabold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-400 to-indigo-900' : '')}>Blogs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-success" data-tip={user?.displayName}>
        {
          user?.photoURL ? <div className="w-10 rounded-full">
          <img src={user?.photoURL}/>
        </div> : ""
        }
      </label>
    <div className="dropdown dropdown-end">
    {
      user?.displayName || user?.photoURL ? <button onClick={handleLogOut} className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-pink-600 to-indigo-700 shadow:md"> Logout </button> : <Link to='/login'><button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-pink-600 to-indigo-700 shadow:md"> Login </button> </Link>
    }
    </div>
  </div>
</div>

        </div>
    );
};

export default Header;