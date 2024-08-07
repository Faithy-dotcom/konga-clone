import React from 'react';
import { FaSearch, FaQuestionCircle, FaShoppingCart } from 'react-icons/fa';
// import kongaLogo from '../assets/konga-logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-pink-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {/* <img src={kongaLogo} alt="Konga Logo" className="h-8 mr-4" /> */}
          <h1 className="text-2xl font-bold">Konga</h1>
        </div>
        <div className="flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-l border-none focus:outline-none"
          />
          <button className="bg-white text-pink-700 p-2 rounded-r">
            <FaSearch />
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-200 transition-colors">
            <FaQuestionCircle size={24} />
          </button>
          <button className="hover:text-gray-200 transition-colors">
            <FaShoppingCart size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
