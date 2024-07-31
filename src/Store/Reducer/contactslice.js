import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ContactApi } from "../../routes/services";
import { setLoading, setMessage } from "./LayoutSlice";

const initialState = {
  status: 'idle',
  postFooterForm: null,
  error: null,
};

export const postFooterForm = createAsyncThunk(
  "postFooterForm",
  async (values, { rejectWithValue }) => {
    try {
      const result = await ContactApi(values);

      if (result?.data?.status === 200) {
       
        // Return only the data part of the response, excluding headers
        return result.data;
      } else {
       
        return rejectWithValue(result.data);
      }
    } catch (error) {
     
      return rejectWithValue(error.response.data);
    }
  }
);

const contactSlice = createSlice({
  name: "contactSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postFooterForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postFooterForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.postFooterForm = action.payload;
      })
      .addCase(postFooterForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message || action.error.message;
      });
  },
});

export default contactSlice.reducer;
