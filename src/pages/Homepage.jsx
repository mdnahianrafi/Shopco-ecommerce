import React from "react";
import SignupBar from "../components/SignupBar/SignupBar";
import bannerSmall from "../assets/bannersmall.png";
import CountUp from "react-countup";
import smallStar from "../assets/smallStar.png";
import bigStar from "../assets/bigStar.png";
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/clavinKlein.png";
import NewArrival from "../components/NewArrival/NewArrival";
import TopSelling from "../components/TopSelling/TopSelling";
import BrowseStyle from "../components/BrowseStyle/BrowseStyle";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import Banner from "../components/Banner/Banner";

const Homepage = () => {
  return (
    <>


      <section>
        <div className="bg-[#F2F0F1] lg:bg-[url('/images/banner.png')] bg-no-repeat bg-center bg-cover ">
          <div className="container mx-auto  ">
            <div className="w-full lg:w-1/2 py-10 lg:py-16   sm:pl-8 lg:pl-24 relative">
              <h1 className="text-center sm:text-start text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[64px]  font-extrabold integral-font xl:pr-[50px] 2xl:pr-[100px] leading-10 lg:leading-16 ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-center sm:text-start text-sm lg:text-base text-gray-600 satoshi-font py-4 md:py-8   pr-6 lg:pr-0 xl:pr-12  2xl:pr-42">
                Browse through our diverse range of meticulously carfted
                garments, designed to bring out your individuality and cater
                your sense of style.
              </p>
<div className="flex justify-center md:justify-start">
                <button className="ml-1 sm:ml-0 w-80 lg:w-52 h-[52px] bg-black text-white text-base rounded-4xl satoshi-font cursor-pointer shadow-xl active:shadow-xl/20">
                Shop Now
              </button>
</div>
              <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start pt-7 lg:pt-48">
                <div className="counter-one pr-10 border-r-2 border-gray-400">
                  <div className="text-[24px] lg:text-[40px] font-semibold">
                    <CountUp end={200} duration={2.75} />+
                  </div>
                  <p className="text-[#423f3f] text-sm lg:text-base">
                    International Brands
                  </p>
                </div>
                {/* counter two  */}
                <div className="counter-two px-10 sm:border-r-2 border-gray-400">
                  <div className="text-[24px] lg:text-[40px] font-semibold">
                    <CountUp end={2000} duration={2.75} />+
                  </div>
                  <p className="text-[#423f3f] text-sm lg:text-base">
                    High Quality Products
                  </p>
                </div>
                {/* counter three  */}
                <div className="mt-4 md:mt-0 counter-three px-10  border-gray-400">
                  <div className="text-[24px] lg:text-[40px] font-semibold">
                    <CountUp end={30000} duration={2.75} />+
                  </div>
                  <p className="text-[#423f3f] text-sm lg:text-base">
                    {" "}
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <img
                src={bannerSmall}
                alt="banner.png"
                className="mx-auto  lg:w-1/2 block lg:hidden"
              />
              <div className="relative">
                <img
                  src={smallStar}
                  alt="smallStar.png"
                  className="absolute -top-[290px]  lg:-top-136 left-11 md:left-40 lg:left-[650px] xl:left-[750px] 2xl:left-[850px]  "
                />
                <img
                  src={bigStar}
                  alt="bigStar.png"
                  className="absolute -top-[450px]  md:-bottom-[150px] lg:-top-172  right-10 sm:right-20 md:right-40 xl:-right-2  2xl:right-24 [@media(min-width:1875px)]:-right-[112px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full py-6  lg:py-10  bg-black">
          <div className="container mx-auto flex flex-wrap justify-between ">
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
        <NewArrival/>
      <TopSelling/>
      <BrowseStyle/>
      <CustomerReview/>
      </section>
    </>
  );
};

export default Homepage;
