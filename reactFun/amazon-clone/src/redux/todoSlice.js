import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "globalState",
  initialState: { value: 0, text: "" },
  reducers: {
    addCount(state, action) {
      console.log("Reached here ");
      state.value += action.payload;
    },
    subCount(state, action) {
      state.value -= 1;
    },
    changeText(initialState, action) {
      initialState.text = action.payload;
    },
  },
});

export const { addCount, subCount, changeText } = todosSlice.actions;
export default todosSlice.reducer;
