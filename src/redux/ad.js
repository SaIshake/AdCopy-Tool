import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ad: {},
  loading: false,
  error: false
};

export const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    begin: (state) => {
        state.loading = true
    },
    success: (state, action) => {
        state.loading = false
        state.ad = action.payload
    },
    failed: (state) => {
        state.error = true
        state.loading = false
    },
    editing: (state, action) => {
        state.ad = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { begin, success, failed, editing } = adSlice.actions;

export default adSlice.reducer;