import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { ShopContext } from "../../contexts/ShopContext";

export default function Navbar() {
const {all_product}=useContext(ShopContext)

  const cartCount = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const searchRef = useRef();

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = all_product.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  const handleResultClick = (id) => {
    navigate(`/product/${id}`);
    setSearchQuery("");
    setFilteredProducts([]);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setFilteredProducts([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white px-4 py-2 shadow relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo and Mobile Menu */}
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
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/onsale">On Sale</Link></li>
              <li><Link to="/newarrivals">New Arrivals</Link></li>
              <li><Link to="/brands">Brands</Link></li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="Shop logo" className="h-8" />
          </Link>
        </div>

        {/* Center: Menu */}
        <div className="hidden lg:flex flex-[4.5] justify-center">
          <ul className="menu menu-horizontal px-1 space-x-6 text-xl">
            <li><Link to="/shop">Shop <MdKeyboardArrowDown /></Link></li>
            <li><Link to="/onsale">On Sale</Link></li>
            <li><Link to="/newarrivals">New Arrivals</Link></li>
            <li><Link to="/brands">Brands</Link></li>
          </ul>
        </div>

        {/* Right: Search + Cart + Profile */}
        <div className="flex-[3.5] flex items-center justify-end gap-4 relative" ref={searchRef}>
          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-3xl px-2 py-1 w-full max-w-sm relative">
            <IoIosSearch size={20} />
            <input
              type="search"
              placeholder="Search Products"
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-transparent outline-none px-2 text-base w-full"
            />
          </div>

          {/* Results Dropdown */}
          {filteredProducts.length > 0 && (
            <ul className="absolute top-full mt-2 bg-white shadow-md w-80 max-w-sm rounded-md z-50 overflow-y-auto max-h-60">
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 flex gap-x-1 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => handleResultClick(product.id)}
                >
                 <img
      src={product.image}
      alt={product.name}
      className="w-10 h-10 object-cover rounded"
    />
                  {product.name}
                </li>
              ))}
            </ul>
          )}

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
