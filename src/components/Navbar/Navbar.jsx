import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { ShopContext } from "../../contexts/ShopContext";

export default function Navbar() {
  const navigate = useNavigate();
const {all_product}=useContext(ShopContext)
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.trim() === "") {
      setFilteredResults([]);
      return;
    }

    const filtered = all_product.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredResults(filtered);
  };

  const handleSelectProduct = (id) => {
    setSearchText("");
    setFilteredResults([]);
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-white px-4 py-2 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-[2] flex items-center">
          <div className="dropdown lg:hidden mr-2">
            <label tabIndex={0} className="btn btn-ghost p-0 m-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
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

        {/* Menu */}
        <div className="hidden lg:flex  justify-center">
          <ul className="menu menu-horizontal px-1 space-x-6 text-xl">
            <li>
              <Link to="/shop" className="flex items-center">
                Shop <MdKeyboardArrowDown className="ml-1" />
              </Link>
            </li>
            <li><Link to="/onsale">On Sale</Link></li>
            <li><Link to="/newarrivals">New Arrivals</Link></li>
            <li><Link to="/brands">Brands</Link></li>
          </ul>
        </div>

        {/* Search, Cart, User */}
        <div className="flex-[3.5] flex items-center justify-end gap-4 relative">
          {/* 🔍 Search */}
          <div className="hidden md:flex flex-col w-full max-w-sm">
            <div className="flex items-center bg-gray-100 rounded-3xl px-3 py-2">
              <IoIosSearch size={20} />
              <input
                type="search"
                placeholder="Search Products"
                value={searchText}
                onChange={handleSearch}
                className="bg-transparent outline-none px-2 satoshi-font text-base w-full"
              />
            </div>

            {/* Results Dropdown */}
            {searchText && filteredResults.length > 0 && (
              <div className="absolute top-full mt-1 bg-white shadow-md rounded-md z-10 max-h-60 overflow-y-auto w-full">
                {filteredResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.id)}
                    className="p-2 flex gap-2 cursor-pointer hover:bg-gray-100 text-sm"
                  >
              <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />

                    {product.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart">
            <IoCartOutline size={24} />
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
