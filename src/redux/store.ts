
import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import drinksSlice from "./slices/drinksSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    drinks: drinksSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;