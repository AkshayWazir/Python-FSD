import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MakeRequest } from "../utils";

export const fetchPublicApi = createAsyncThunk("data/fetchPublicApis", async () => {
  const response = await MakeRequest("https://api.publicapis.org/entries").get();
  return response.entries;
});

const publicApiSlice = createSlice({
  name: "PublicApisData",
  initialState: { data: [] },
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPublicApi.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { updateData } = publicApiSlice.actions;
export default publicApiSlice.reducer;
