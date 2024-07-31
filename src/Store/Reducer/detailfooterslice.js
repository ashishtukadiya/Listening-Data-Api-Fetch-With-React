import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ContactApi, blogPageAPI, footerAPI } from "../../routes/services";

const initialState = {
    detailFooter : {}
};

export const detailfooterSlice = createAsyncThunk(
  "detailfooterSlice",
  async (values, { dispatch }) => {
    try {
      const result = await footerAPI(values);

      if (result?.data?.status === 200) {
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      return error;
    }
  }
);

const detailFootSlice = createSlice({
  name: "detailFootSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(detailfooterSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(detailfooterSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.detailFooter = action.payload;
      })
      .addCase(detailfooterSlice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default detailFootSlice.reducer;
