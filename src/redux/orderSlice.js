// src/redux/orderSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  byUser: {}, // orders grouped by username
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const { username, items, date } = action.payload;

      // ✅ Ensure every item includes all necessary data (especially image)
      const formattedItems = items.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image, // ✅ Make sure image is passed when placing order
        selectedColor: item.selectedColor || null,
        size: item.size || null,
      }));

      const newOrder = {
        id: nanoid(), // generate unique order ID
        items: formattedItems,
        date,
      };

      if (!state.byUser[username]) {
        state.byUser[username] = [];
      }

      state.byUser[username].push(newOrder);
    },

    cancelOrder: (state, action) => {
      const { username, orderId } = action.payload;
      if (state.byUser[username]) {
        state.byUser[username] = state.byUser[username].filter(
          (order) => order.id !== orderId
        );
      }
    },
  },
});

export const { placeOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
