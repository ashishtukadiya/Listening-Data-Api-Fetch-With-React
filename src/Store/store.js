import { configureStore } from "@reduxjs/toolkit";
import blogslice from "./Reducer/blogslice";
import contactSlice from "./Reducer/contactslice";
import detailfooterslice, {
  detailfooterSlice,
} from "./Reducer/detailfooterslice";

const store = configureStore({
  reducer: {
    blogslice: blogslice,
    contactSlice: contactSlice,
    detailfooterSlice: detailfooterslice,
  },
});

export default store;
