import React from "react";
import logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar  px-6 lg:px-24 py-4">
      {/* Start: Mobile menu + logo */}
      <div className="navbar-start">
        {/* Mobile dropdown menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
<FaBars className="text-2xl" />
          </div>
          {/* Mobile nav items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <a className="flex justify-between">
                Shop <MdKeyboardArrowDown />
              </a>
            </li>
            <li><a>On Sell</a></li>
            <li><a>New Arrivals</a></li>
            <li><a>Brands</a></li>
          </ul>
        </div>

        {/* Logo */}
        <img src={logo} alt="logo.png" className="" />
      </div>

      {/* Center: Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 satoshi-font text-base gap-4">
          <li>
            <a className="flex items-center gap-1">
              Shop <MdKeyboardArrowDown />
            </a>
          </li>
          <li><a>On Sell</a></li>
          <li><a>New Arrivals</a></li>
          <li><a>Brands</a></li>
        </ul>
      </div>

      {/* End: Search, Cart, User */}
      <div className="navbar-end flex items-center gap-4">
        {/* Search bar */}
        <div className="relative hidden lg:block">
          <input
            type="search"
            placeholder="Search products"
            className="w-[320px] xl:w-[450px] h-10 px-11 py-2 bg-[#F0F0F0] rounded-3xl text-sm"
          />
          <button type="submit" className="absolute top-2.5 left-4">
            <IoIosSearch className="text-xl text-gray-400" />
          </button>
        </div>

        {/* Cart icon */}
        <IoCartOutline className="text-2xl cursor-pointer" />

        {/* User icon */}
        <FaRegUser className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
