// src/components/Navbar/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div className="bg-white px-4 py-2 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo (20%) */}
        <div className="flex-[2] flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden mr-2">
            <label tabIndex={0} className="btn btn-ghost p-0 m-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <li className="text-base satoshi-font"><Link to="/shop">Shop</Link></li>
              <li className="text-base satoshi-font"><Link to="/onsale">On Sale</Link></li>
              <li className="text-base satoshi-font"><Link to="/newarrivals">New Arrivals</Link></li>
              <li className="text-base satoshi-font"><Link to="/brands">Brands</Link></li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="Shop logo" className="h-8" />
          </Link>
        </div>

        {/* Menu (45%) */}
        <div className="hidden lg:flex flex-[4.5] justify-center">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <li className="text-base satoshi-font">
              <Link to="/shop" className="flex items-center">
                Shop <MdKeyboardArrowDown className="ml-1" />
              </Link>
            </li>
            <li className="text-base satoshi-font"><Link to="/onsale">On Sale</Link></li>
            <li className="text-base satoshi-font"><Link to="/newarrivals">New Arrivals</Link></li>
            <li className="text-base satoshi-font"><Link to="/brands">Brands</Link></li>
          </ul>
        </div>

        {/* End Section (35%) */}
        <div className="flex-[3.5] flex items-center justify-end gap-4">
          {/* Search (only medium and up) */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-3xl px-2 py-1 w-full max-w-sm">
            <IoIosSearch size={20} />
            <input
              type="search"
              placeholder="Search Products"
              className="bg-transparent outline-none px-2 satoshi-font text-base w-full"
            />
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <IoCartOutline size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Profile */}
          <Link to="/dashboard">
            <FaRegUser size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
