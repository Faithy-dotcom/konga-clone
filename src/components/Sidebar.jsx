// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaShoppingCart, FaInfoCircle, FaHeadset, FaReceipt, FaMobileAlt, FaTv, FaWifi, FaUser} from "react-icons/fa";

// const Sidebar = () => {

//     return(
//         <div className="bg-pink-500 w-64 min-h-screen text-white p-4">
//             <h2 className="text-2xl front-bold mb-6">Dashboard</h2>
//             <nav className="flex flex-col s

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaInfoCircle, FaHeadset, FaReceipt, FaMobileAlt, FaTv, FaWifi, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-pink-500 w min-h-screen text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="flex items-center space-x-2">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link to="/products" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Products</span>
        </Link>
        <Link to="/cart" className="flex items-center space-x-2">
          <FaShoppingCart />
          <span>Cart</span>
        </Link>
        <Link to="/aboutus" className="flex items-center space-x-2">
          <FaInfoCircle />
          <span>About Us</span>
        </Link>
        <Link to="/category" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Category</span>
        </Link>
        <Link to="/customersupport" className="flex items-center space-x-2">
          <FaHeadset />
          <span>Customer Support</span>
        </Link>
        <Link to="/checkout" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Checkout</span>
        </Link>
        <Link to="/privacypolicy" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Privacy Policy</span>
        </Link>
        <Link to="/login" className="flex items-center space-x-2">
          <FaUser />
          <span>Login</span>
        </Link>
        <Link to="/register" className="flex items-center space-x-2">
          <FaUser />
          <span>Register</span>
        </Link>
        <Link to="/searchresult" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Search Result</span>
        </Link>
        <Link to="/termscondition" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Terms & Conditions</span>
        </Link>
        <Link to="/useraccount" className="flex items-center space-x-2">
          <FaUser />
          <span>User Account</span>
        </Link>
        <Link to="/wishlist" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Wish List</span>
        </Link>
      </nav>
      <h2 className="text-2xl font-bold mt-6 mb-4">Pay Bills</h2>
      <div className="flex flex-col space-y-4">
        <Link to="/pay/electricity" className="flex items-center space-x-2">
          <FaReceipt />
          <span>Electricity</span>
        </Link>
        <Link to="/pay/airtime" className="flex items-center space-x-2">
          <FaMobileAlt />
          <span>Airtime</span>
        </Link>
        <Link to="/pay/cabletv" className="flex items-center space-x-2">
          <FaTv />
          <span>Cable TV</span>
        </Link>
        <Link to="/pay/data" className="flex items-center space-x-2">
          <FaWifi />
          <span>Data</span>
        </Link>
        <Link to="/pay/internet" className="flex items-center space-x-2">
          <FaWifi />
          <span>Internet</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
