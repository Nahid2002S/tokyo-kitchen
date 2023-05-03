import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
<div className="navbar bg-indigo-300 lg:px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li>{
      user ? <button onClick={handleLogOut} className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md"> Logout </button> : <Link to='/login'><button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md"> Login </button> </Link>
    }</li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl lg:text-2xl font-bold text-silver-900">TOKYO KITCHEN</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-black">
    <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  {
      user ? <button onClick={handleLogOut} className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md"> Logout </button> : <Link to='/login'><button className="px-6 py-2 text-purple-100 rounded bg-gradient-to-r from-indigo-800 to-indigo-500 shadow:md"> Login </button> </Link>
    }
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
    </div>
  </div>
</div>

        </div>
    );
};

export default Header;