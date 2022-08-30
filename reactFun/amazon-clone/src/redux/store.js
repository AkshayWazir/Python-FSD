import { configureStore } from "@reduxjs/toolkit";
import PublicDataSlice from "./publicDataSlice";
import CounterReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    publicData: PublicDataSlice,
  },
});
