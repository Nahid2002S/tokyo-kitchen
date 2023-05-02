import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-indigo-300 lg:px-12">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-2xl font-bold text-silver-900">TOKYO KITCHEN</a>
  </div>
  <div className="flex-none gap-2">
    <div className='lg:pr-12 flex gap-2 md:gap-10 font-semibold text-black'>
    <Link to="/">Home</Link>
    <Link to="/blogs">Blogs</Link>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;