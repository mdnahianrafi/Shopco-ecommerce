import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductTabs from "../components/ProductTabs/ProductTabs";
import QuantityBox from "../components/utils/QuantityBox";
import TopSelling from "../components/TopSelling/TopSelling"
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
const ProductDescriptionPage = () => {
  const { all_product, renderStars } = useContext(ShopContext);
  const { id } = useParams();
  const product = all_product.find((item) => item.id.toString() === id);
  const dispatch = useDispatch();

  const [size, setSize] = useState("small");
  const [selectedColor, setSelectedColor] = useState("brown");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p className="p-10 text-red-500">Product not found</p>;

  const colors = [
    { name: "brown", code: "#4F4631" },
    { name: "red", code: "#EF4444" },
    { name: "yellow", code: "#FCD34D" },
  ];

  const handleAddToCart = () => {
  dispatch(
    addToCart({
      ...product,
      quantity,
      selectedColor,
      size,
    })
  );
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

    useEffect(()=>{
  window.scrollTo({top:0,behavior:"smooth"})
    },[id])
  return (
    <section className="relative overflow-x-hidden pb-16  pt-10">
      <div className="container mx-auto">
         <Breadcrumbs currentTitle={product.name} />
      </div>
      <div className=" container mx-auto flex flex-col md:flex-row gap-10">
     
        {/* Left Side (Images) */}
        <div className="w-full md:w-1/2 md:mt-20">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 w-full md:w-1/4 justify-center">
              <img src={product.image} className="w-32 h-auto object-cover" />
              <img src={product.image} className="w-32 h-auto object-cover" />
              <img src={product.image} className="w-32 h-auto object-cover" />
            </div>
            <div className="w-full md:w-3/4 flex justify-center">
              <img
                src={product.image}
                className="w-full max-w-[414px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 ml-4 xl:ml-0">
          <h1 className="text-2xl xl:text-[40px] font-bold integral-font">
            {product.name}
          </h1>
          <div className="flex gap-x-4 pt-4">
            {renderStars(product.rating, "text-2xl space-x-2")}
            <h1 className="text-xl satoshi-font">{product.rating}/5</h1>
          </div>

          {/* Price Section */}
          <div className="my-5">
            {product.discount ? (
              <div className="flex items-center space-x-2">
                <span className="text-black font-bold text-xl xl:text-2xl satoshi-font">
                  $
                  {(
                    product.price -
                    product.price * (product.discount / 100)
                  ).toFixed(2)}
                </span>
                <span className="text-gray-500 line-through font-bold text-xl xl:text-2xl satoshi-font">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-green-600 font-medium text-[10px] xl:text-xl">
                  ({product.discount}% OFF)
                </span>
              </div>
            ) : (
              <div className="text-black font-bold text-xl xl:text-2xl satoshi-font">
                ${product.price.toFixed(2)}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-5 satoshi-font pb-4">
            This shirt is perfect for any occasion. Crafted from a soft and
            breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color */}
          <div className="py-5 border-y border-gray-300">
            <h1 className="satoshi-font text-gray-400 xl:text-xl">
              Select Colors
            </h1>
            <div className="flex gap-x-4 mt-4">
              {colors.map((color) => (
                <div
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className="w-9 h-9 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: color.code,
                    border:
                      selectedColor === color.name ? "3px solid blue" : "none",
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="py-5 border-b border-gray-300">
            <h1 className="satoshi-font text-gray-400 xl:text-xl">
              Choose Size
            </h1>
            <div className="flex gap-x-4 mt-4">
              {["small", "medium", "large", "xlarge"].map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`pb-1 px-6 w-28 h-12 rounded-4xl cursor-pointer ${
                    size === item
                      ? "bg-black text-white"
                      : "bg-[#F0F0F0] text-gray-500"
                  }`}
                >
                  {item === "xlarge"
                    ? "X-Large"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex  flex-col sm:flex-row md:flex-col xl:flex-row  gap-x-4 mt-6 ">
            <div className="w-1/3 flex items-center gap-4">
    <QuantityBox
      quantity={quantity}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      className='w-full justify-center px-5 py-2'
    />
            </div>
            <div className="w-full sm:w-2/3  mt-5 sm:mt-0 md:mt-5 xl:mt-0 pr-5">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 rounded-4xl satoshi-font"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
          <div className="container mx-auto">
                <ProductTabs/>
                <h1 className="py-16 text-center text-4xl lg:text-5xl font-bold integral-font">YOU MIGHT ALSO LIKE</h1>
               <TopSelling/>
          </div>
    </section>
  );
};

export default ProductDescriptionPage;
