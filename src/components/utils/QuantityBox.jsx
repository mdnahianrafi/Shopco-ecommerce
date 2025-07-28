import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityBox = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="w-full flex items-center gap-4">
      <label className="text-gray-600">Quantity:</label>
      <div className="flex items-center gap-2 bg-gray-300 rounded-full">
        <button
          onClick={decreaseQuantity}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200"
        >
          <FaMinus className="text-xl" />
        </button>
        <span className="w-6 text-center font-semibold text-gray-800">
          {quantity}
        </span>
        <button
          onClick={increaseQuantity}
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition duration-200"
        >
          <FaPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default QuantityBox;
