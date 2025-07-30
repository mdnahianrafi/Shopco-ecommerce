import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice";
import userReducer from "./userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

// Combine your reducers and assign to rootReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  orders: orderReducer,
});

// Persist config: whitelist includes slices you want persisted
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "cart", "orders"],
};

// Create the persisted reducer using persistConfig and rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions for serializable check
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create the persistor for redux-persist
export const persistor = persistStore(store);
