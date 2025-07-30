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

    // for optimized runtime its better 
    cancelOrder: (state, action) => {
      const { username, orderId } = action.payload;
      if (state.byUser[username]) {
        state.byUser[username] = state.byUser[username].filter(
          (order) => order.id !== orderId
        );
      }
    },


    // for optimized memory its better
//     cancelOrder: (state, action) => {
//   const { username, orderId } = action.payload;

//   // Check if the user exists in the order state
//   if (state.byUser[username]) {
//     // Filter out the order to cancel
//     const updatedOrders = state.byUser[username].filter(
//       (order) => order.id !== orderId
//     );

//     // If the user has remaining orders, update the array
//     if (updatedOrders.length > 0) {
//       state.byUser[username] = updatedOrders;
//     } else {
//       // Otherwise, remove the username key entirely to keep the state clean
//       delete state.byUser[username];
//     }
//   }
// }

  },
});

export const { placeOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
