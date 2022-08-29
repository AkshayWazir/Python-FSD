import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { value: 0, cartItems: [] },
  reducers: {
    addCount(state, action) {
      console.log("Reached here ");
      state.value += action.payload;
    },
    subCount(state, action) {
      state.value -= 1;
    },
  },
});

export const { addCount, subCount } = todosSlice.actions;
export default todosSlice.reducer;
