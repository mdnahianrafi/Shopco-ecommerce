// src/pages/Cart.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();

  // Read the array directly—no fallback, no transformation
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li
              key={`${item.id}-${item.selectedColor}-${item.size}`}
              className="flex items-center space-x-4"
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-sm text-gray-500">
                Color: {item.selectedColor}
              </span>
              <span className="text-sm text-gray-500">Size: {item.size}</span>
              <span>${item.price.toFixed(2)}</span>
              <span>Qty: {item.quantity}</span>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>
                −
              </button>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>
                ＋
              </button>
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
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
