import React from "react";
import bannerSmall from "../../assets/bannersmall.png";
import CountUp from "react-countup";
import smallStar from "../../assets/smallStar.png";
import bigStar from "../../assets/bigStar.png";
import versace from "../../assets/versace.png";
import zara from "../../assets/zara.png";
import gucci from "../../assets/gucci.png";
import prada from "../../assets/prada.png";
import calvinKlein from "../../assets/clavinKlein.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="bg-[#F2F0F1] lg:bg-[url('/images/banner.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto">
          <div className="w-full lg:w-1/2 py-10 lg:py-16 sm:pl-8 lg:pl-0 xl:pl-24 relative">
            <h1 className="text-center sm:text-start text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-extrabold integral-font xl:pr-[50px] 2xl:pr-[100px] leading-10 lg:leading-16">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-center sm:text-start text-sm lg:text-base text-gray-600 satoshi-font py-4 md:py-8 pr-6 lg:pr-0 xl:pr-12 2xl:pr-42">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater your sense of
              style.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link to="/shop">
                {" "}
                <button className="my-4 ml-1 sm:ml-0 w-80 lg:w-52 h-[52px] bg-black text-white text-base rounded-4xl satoshi-font cursor-pointer shadow-xl active:shadow-xl/20">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* CountUp stats */}
            <div className="sm:mx-0 flex justify-between lg:justify-start pt-7 lg:pt-14 pb-16 lg:pb-32">
              <div className="pr-5 sm:pr-10 border-r-2 border-gray-400">
                <div className="text-2xl lg:text-[40px] font-semibold">
                  <CountUp end={200} duration={2.75} />+
                </div>
                <p className="text-[#423f3f] text-xs sm:text-sm lg:text-base">
                  International Brands
                </p>
              </div>

              <div className="counter-two px-5 sm:px-10 border-r-2 border-gray-400">
                <div className=" text-2xl lg:text-[40px] font-semibold">
                  <CountUp end={2000} duration={2.75} />+
                </div>
                <p className="text-[#423f3f] text-xs sm:text-sm lg:text-base">
                  High Quality Products
                </p>
              </div>

              <div className=" counter-three px-0 sm:px-10 ">
                <div className="text-2xl lg:text-[40px] font-semibold">
                  <CountUp end={30000} duration={2.75} />+
                </div>
                <p className="text-[#423f3f] text-xs sm:text-sm lg:text-base">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

          {/* Right-side Image & Stars */}
          <div>
            <img
              src={bannerSmall}
              alt="banner.png"
              className="mx-auto lg:w-1/2 block lg:hidden"
            />
            <div className="relative">
              <img
                src={smallStar}
                alt="smallStar.png"
                className="absolute -top-[290px] lg:-top-136 left-11 md:left-40 lg:left-[650px] xl:left-[750px] 2xl:left-[850px]"
              />
              <img
                src={bigStar}
                alt="bigStar.png"
                className="absolute -top-[450px] md:-bottom-[150px] lg:-top-172 right-10 sm:right-20 md:right-40 xl:-right-2 2xl:right-24 [@media(min-width:1875px)]:-right-[112px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="w-full py-6 lg:py-10 bg-black">
        <div className="container mx-auto flex flex-wrap justify-between">
          <img
            src={versace}
            alt="versace.png"
            className="mt-6 sm:mt-2 cursor-pointer"
          />
          <img
            src={zara}
            alt="zara.png"
            className="mt-6 sm:mt-2 cursor-pointer"
          />
          <img
            src={gucci}
            alt="gucci.png"
            className="mt-6 sm:mt-2 cursor-pointer"
          />
          <img
            src={prada}
            alt="prada.png"
            className="mt-6 sm:mt-2 cursor-pointer"
          />
          <img
            src={calvinKlein}
            alt="calvinKlein.png"
            className="mt-6 lg:mt-0 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
