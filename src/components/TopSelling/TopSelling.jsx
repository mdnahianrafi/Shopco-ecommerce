import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShopContext } from "../../contexts/ShopContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const NewArrival = () => {
  const { top_selling ,renderStars} = useContext(ShopContext);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
     arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto pt-[86px] pb-16 bg-white min-h-[400px]">
      <h1 className="text-center text-5xl font-bold mb-8">Top Selling</h1>
      <div className="pt-14 pb-10 slider-container">
        <Slider {...settings} className="relative overflow-hidden">
          {top_selling.map((product) => {
            const finalPrice = product.discount
              ? product.price - product.price * (product.discount / 100)
              : product.price;


            return (
              <div key={product.id} className="w-[295px] pr-5 cursor-pointer hover:transform hover:scale-105 transition duration-600">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full pl-4 sm:pl-0 "
                />
                <h1 className="mt-4 text-xl font-bold satoshi-font">
                  {product.name}
                </h1>
                {/* Rating */}
                <div className="flex gap-x-3 mt-[14px]">
                  <div className="flex space-x-1 mt-1">
                    {renderStars(product.rating)}
                  </div>
                  <p>{product.rating}/5</p>
                </div>

                {/* Price Section */}
                <div className="mt-2">
                  {product.discount ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-black font-bold text-xl xl:text-2xl satoshi-font">
                        ${finalPrice.toFixed(2)}
                      </span>
                      <span className="text-gray-500 line-through font-bold text-xl xl:text-2xl satoshi-font">
                        ${product.price.toFixed(2)}
                      </span>

                      <span className=" text-green-600 font-medium  text-[10px] xl:text-xs ">
                        ({product.discount}% OFF)
                      </span>
                    </div>
                  ) : (
                    <div className="text-black font-bold text-xl xl:text-2xl satoshi-font">
                      ${product.price.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="flex justify-center">
        <button className=" mt-3 xl:mt-11 py-5 px-16 xl:px-20 border-1 border-gray-300 rounded-full text-base font-medium satoshi=font cursor-pointer active:bg-slate-100 active:shadow-lg">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
