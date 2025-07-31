import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShopContext } from "../contexts/ShopContext";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"; // Adjust path if different
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const NewArrival = () => {
  const { all_product, new_arrivals, renderStars } = useContext(ShopContext);
  const dispatch = useDispatch();

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
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto pt-[86px] pb-20 lg:pb-36 bg-white min-h-[400px]">
      <Breadcrumbs/>
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-8">
        New Arrivals
      </h1>
      <div className="pt-14 pb-10 flex justify-center flex-wrap gap-x-4  gap-y-3 xl:gap-y-5">
        {new_arrivals.map((product) => {
          const finalPrice = product.discount
            ? product.price - product.price * (product.discount / 100)
            : product.price;

          return (
            <>
          
                <div
                  key={product.id}
                  className="w-[295px] mt-5 pr-5 md:pr-14 lg:pr-14 xl:pr-5 hover:transform hover:scale-105 transition duration-600"
                >
                  <Link to={`product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full pl-4 sm:pl-0 img-fluid"
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
                          <span className="text-green-600 font-medium text-[10px] xl:text-xs">
                            ({product.discount}% OFF)
                          </span>
                        </div>
                      ) : (
                        <div className="text-black font-bold text-xl xl:text-2xl satoshi-font">
                          ${product.price.toFixed(2)}
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* ✅ Add to Cart Button */}
                  <div className="mt-4 pl-4 sm:pl-0">
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: finalPrice,
                            image: product.image,
                            quantity: 1,
                            selectedColor: product.color || "default",
                          })
                        )
                      }
                      className="w-full bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
      
            </>
          );
        })}
      </div>
      <h1 className="my-5 text-3xl md:text-4xl text-center">
        All Caught Up 😊
      </h1>
    </div>
  );
};

export default NewArrival;
