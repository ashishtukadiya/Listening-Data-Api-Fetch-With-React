import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogPageAPI } from "../../routes/services";

const initialState = {
  blogPageList: [],
  status: "idle",
  error: null,
};

export const fetchBlogPage = createAsyncThunk(
  "blogs/fetchBlogPage",
  async () => {
    try {
      const response = await blogPageAPI();
      console.log("blog", response)
      return response;
    } catch (error) {
      throw error;
    }
  }
);

const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogPage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogPageList = action.payload;
      })
      .addCase(fetchBlogPage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;


  