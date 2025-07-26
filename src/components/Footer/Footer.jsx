import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiGooglepay,
  SiApplepay,
} from "react-icons/si";
import { IoMailOpenOutline } from "react-icons/io5";
import logo from "../../assets/logo.png"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-black relative pt-52">
      {/* Email Subscribe Box */}
      <div className="absolute w-full -top-20">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="bg-black rounded-4xl p-6 md:p-12 lg:p-[52px] flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl lg:text-4xl xl:text-[40px] text-white font-bold integral-font 2xl:pr-20">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h1>
            </div>

            {/* Right: Input and Button */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 relative">
              <div className="relative">
                <IoMailOpenOutline className="absolute top-3.5 left-4 text-gray-600 text-2xl" />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="bg-white w-full h-12 rounded-4xl py-3 pl-12 pr-4 satoshi-font text-black"
                />
              </div>
              <button className="w-full h-12 bg-white text-black py-3 rounded-4xl satoshi-font">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Logo + Socials */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logo} alt="Logo" className="w-40 mb-4" />
            <p className="text-sm text-gray-700 mb-4 py-7 leading-6">
              We have clothes that suit your style and that you're proud to wear. From women to men.
            </p>
            <div className="flex gap-4 text-lg">
              <div className="p-2 border border-gray-900 rounded-full bg-blue-400 text-white cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 border border-gray-900 rounded-full bg-sky-400 text-white cursor-pointer">
                <FaTwitter />
              </div>
              <div className="p-2 border border-gray-900 rounded-full bg-pink-500 text-white cursor-pointer">
                <FaInstagram />
              </div>
              <div className="p-2 border border-gray-900 rounded-full bg-blue-500 text-white cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-medium mb-4 satoshi-font">COMPANY</h4>
            <ul className="space-y-4 text-gray-700">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h4 className="font-medium mb-4 satoshi-font">HELP</h4>
            <ul className="space-y-4 text-gray-700">
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="font-medium mb-4 satoshi-font">FAQ</h4>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Payment</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-medium mb-4 satoshi-font">RESOURCES</h4>
            <ul className="space-y-4 text-gray-700">
              <li><a href="#" className="hover:underline">Docs</a></li>
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-4">
          <div className="text-sm text-gray-600 text-center md:text-left">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-3xl text-black">
            <SiVisa title="Visa" />
            <SiMastercard title="MasterCard" />
            <SiPaypal title="PayPal" />
            <SiGooglepay title="Google Pay" />
            <SiApplepay title="Apple Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
