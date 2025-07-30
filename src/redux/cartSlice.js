// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find(
        item => item.id === newItem.id &&
                item.selectedColor === newItem.selectedColor &&
                item.size === newItem.size
      );

      if (existingItem) {
        //set default to 1 when quantity is missing or 0
        existingItem.quantity += newItem.quantity || 1; 
      } else {
        state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
      }
    },

removeFromCart: (state, action) => {
  const { id, selectedColor, size } = action.payload;
  state.cart = state.cart.filter(item =>
    !(
      item.id === id &&
      item.selectedColor === selectedColor &&
      item.size === size
    )
  );
},


    // ADD THESE NEW REDUCERS
    incrementQuantity: (state, action) => {
      const { id, selectedColor, size } = action.payload;
      const item = state.cart.find(item => 
        item.id === id &&
        item.selectedColor === selectedColor &&
        item.size === size
      );
      
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const { id, selectedColor, size } = action.payload;
      const item = state.cart.find(item => 
        item.id === id &&
        item.selectedColor === selectedColor &&
        item.size === size
      );
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

        clearCart: (state) => {
      state.cart = [];
    },
  }, 
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;