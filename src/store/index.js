import { configureStore } from "@reduxjs/toolkit"; // Cria a store
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
