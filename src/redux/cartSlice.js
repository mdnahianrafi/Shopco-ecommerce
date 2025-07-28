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
    existingItem.quantity += newItem.quantity || 1;
  } else {
    state.cart.push({ ...newItem, quantity: newItem.quantity || 1 });
  }
},


    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
removeFromCart: (state, action) => {
  state.cart = state.cart.filter(item =>
    !(
      item.id === action.payload.id &&
      item.selectedColor === action.payload.selectedColor &&
      item.size === action.payload.size
    )
  );
}


  }, 
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


