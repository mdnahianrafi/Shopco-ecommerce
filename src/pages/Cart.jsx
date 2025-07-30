// src/pages/Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import QuantityBox from "../components/utils/QuantityBox";
import { MdOutlineDiscount } from "react-icons/md";
export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  function calculateCartTotals(cartItems) {
    let subTotal = 0;
    let totalDiscount = 0;

    for (const item of cartItems) {
      const itemTotal = item.price * item.quantity;

      let discount = 0;
      if (item.discount && item.discount >= 1) {
        discount = (item.price * (item.discount/100)) * item.quantity;
      }

      subTotal += itemTotal;
      totalDiscount += discount;
    }

    const finalTotal = subTotal - totalDiscount + 15;

    return {
      subTotal,
      totalDiscount,
      finalTotal,
    };
  }

  // 👇 This is the function call
  const { subTotal, totalDiscount, finalTotal } =
    calculateCartTotals(cartItems);

  return (
    <div className="container mx-auto pt-7 pb-20">
      <h2 className="text-2xl lg:text-[40px] font-bold integral-font mb-6">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-2xl satoshi-font py-5">Your cart is empty.</p>
      ) : (
        <>
          <div className="py-10 flex flex-col gap-y-5 lg:gap-y-0 lg:gap-x-5  lg:flex-row m-3 lg:m-0">
            <div className=" w-full lg:w-2/3 p-5 md:p-10 border-2 border-gray-300 rounded-3xl">
              <div className="space-y-2">
                {cartItems.map((item) => {
                  return (
                    <>
                      <div
                        key={`${item.id}-${item.selectedColor}-${item.size}`}
                        className="py-2 flex items-center space-x-4 pb-4 lg:pb-6 border-b-2 border-gray-300 last:border-b-0"
                      >
                        <div className="w-[17%]">
                          <img src={item.image} alt={item.name} className="" />
                        </div>
                        <div className="flex flex-col w-[60%]">
                          <span className=" md:text-xl font-bold satoshi-font">
                            {item.name}
                          </span>
                          <span className="text-sm">
                            Color:{" "}
                            <span className="text-gray-500">
                              {item.selectedColor}
                            </span>
                          </span>
                          <span className="text-sm">
                            Size:{" "}
                            <span className="text-gray-500">{item.size}</span>
                          </span>

                          <span className="text-xl lg:text-2xl font-semibold">
                            {" "}
                            $ {item.price.toFixed(2)}
                          </span>
                        </div>

                        <div className="w-[22%] relative">
                          <QuantityBox
                            quantity={item.quantity}
                            increaseQuantity={() => {
                              console.log(
                                "🛠️ + clicked for",
                                item.id,
                                item.selectedColor,
                                item.size
                              );
                              dispatch(
                                incrementQuantity({
                                  id: item.id,
                                  selectedColor: item.selectedColor,
                                  size: item.size,
                                })
                              );
                            }}
                            decreaseQuantity={() => {
                              console.log(
                                "🛠️ - clicked for",
                                item.id,
                                item.selectedColor,
                                item.size
                              );
                              dispatch(
                                decrementQuantity({
                                  id: item.id,
                                  selectedColor: item.selectedColor,
                                  size: item.size,
                                })
                              );
                            }}
                            className="w-full sm:px-3 sm:justify-between "
                          />

                          <button
                            onClick={() =>
                              dispatch(
                                removeFromCart({
                                  id: item.id,
                                  selectedColor: item.selectedColor,
                                  size: item.size,
                                })
                              )
                            }
                            className="cursor-pointer absolute -top-9 lg:-top-10  right-0 text-red-500 hover:text-red-700"
                          >
                            <RiDeleteBin5Fill className="text-xl md:text-2xl" />
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-1/3 p-5 md:p-10 border-2 border-gray-300 rounded-3xl">
              <h1 className="text-xl md:text-2xl font-semibold satoshi-font pb-1">
                Order Summary
              </h1>

              <div className="flex flex-col pt-6 pb-4 gap-y-4 border-b-2 border-b-gray-400">
                <div className="flex justify-between">
                  <p className="font-medium lg:text-xl text-gray-500 satoshi-font">
                    Subtotal
                  </p>
                  <p className="font-bold lg:text-xl satoshi-font ">
                    {" "}
                    ${subTotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium lg:text-xl text-gray-500 satoshi-font">
                    Total Discount (-%)
                  </p>
                  <p className="text-red-500 font-bold lg:text-xl satoshi-font ">
                    -${totalDiscount.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium lg:text-xl text-gray-500 satoshi-font">
                    Subtotal
                  </p>
                  <p className="font-bold lg:text-xl satoshi-font ">$15</p>
                </div>
              </div>
              <div className="flex justify-between pt-5">
                <p className="font-medium text-xl lg:text-2xl text-gray-500 satoshi-font">
                  Total
                </p>
                <p className="font-bold text-xl lg:text-2xl satoshi-font ">
                  {" "}
                  ${finalTotal.toFixed(2)}
                </p>
              </div>
              <div className="flex gap-x-2 pt-5 relative">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="bg-gray-200 py-5 px-10 text-black w-2/3 rounded-full"
                />
                <MdOutlineDiscount className="absolute top-10 text-gray-400 left-2 text-2xl" />
                <button
                  type="submit"
                  className="w-1/3 py-5 px-5 bg-black text-white rounded-full font-semibold satoshi-font cursor-pointer active:shadow-lg"
                >
                  Apply
                </button>
              </div>

              <button className="mt-5 w-full py-5 px-5 bg-black text-white rounded-full font-semibold satoshi-font cursor-pointer active:shadow-lg">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
