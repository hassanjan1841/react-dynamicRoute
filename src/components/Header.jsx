import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItemCount = 3; // Example item count; replace with dynamic data as needed

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Hssan's Store</Link>
        </div>

        {/* Right Side: Navigation */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 border border-black px-4 py-2 rounded-md hover:bg-slate-500  hover:text-white transition duration-300">
            Login
          </button>
          <button className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition duration-300">
            Sign Up
          </button>

          {/* Cart Icon with Badge */}
          <div className="relative">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
