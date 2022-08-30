import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import CounterReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    todo: todoSlice,
  },
});
