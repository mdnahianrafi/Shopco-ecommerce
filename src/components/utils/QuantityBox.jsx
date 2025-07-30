// src/components/utils/QuantityBox.jsx
import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

export default function QuantityBox({className, quantity, increaseQuantity, decreaseQuantity }) {
  return (
    <div className={`flex  bg-slate-100 shadow-xl rounded-2xl ${className}`}>
      <button
        onClick={decreaseQuantity}
        disabled={quantity <= 1}
        className="px-1"
      >
        <FiMinus/>
      </button>
      <span className="px-3">{quantity}</span>
      <button
        onClick={increaseQuantity}
        className=""
      >
  <GoPlus/>
      </button>
    </div>
  );
}
