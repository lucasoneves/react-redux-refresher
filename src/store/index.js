import { configureStore } from "@reduxjs/toolkit"; // Cria a store
import uiSlice from "./ui-slice";
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
