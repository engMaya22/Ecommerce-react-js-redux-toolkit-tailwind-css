import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage

import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

// Combine reducers inside store.jsx
const rootReducer = combineReducers({
  cart: cartSlice,
  product: productSlice,
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "product"], // Persist these slices
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Persistor instance
export const persistor = persistStore(store);
