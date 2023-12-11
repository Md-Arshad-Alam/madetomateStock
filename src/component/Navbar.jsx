import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl text-white font-semibold mb-2 md:mb-0">Made 2 Automate</div>
        <h2 className="text-3xl text-black font-semibold mb-4 md:mb-0">Welcome to Upstocks</h2>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-white">
          <li>
            <Link
              className={`hover:text-black cursor-pointer uppercase ${location.pathname === '/' ? 'border-b-2 border-yellow-300' : ''}`} to="/">
              STOCK DATA LIST
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-black cursor-pointer uppercase ${
                location.pathname === '/watchList' ? 'border-b-2 border-yellow-300' : ''
              }`}
              to="/watchList"
            >
              My Watchlist
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-black cursor-pointer uppercase ${
                location.pathname === '/order' ? 'border-b-2 border-yellow-300' : ''
              }`}
              to="/order"
            >
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
