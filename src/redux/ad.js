import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ad: {},
  loading: false,
  error: false,
  edit: false
};

export const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    begin: (state) => {
        state.loading = true
        state.error = false
        state.ad = {}
    },
    success: (state, action) => {
        state.loading = false
        state.error = false
        state.ad = action.payload
    },
    failed: (state) => {
        state.error = true
        state.loading = false
        state.ad = {}
    },
    editing: (state, action) => {
        state.ad = action.payload
        state.loading = false
        state.error = false
        state.edit = false
    },
    clear: (state) => {
      state.ad = {}
      state.loading = false
      state.error = false
      state.edit = false
    },
    clickEdit: (state) => {
      state.edit = true
    }
  },
});

// Action creators are generated for each case reducer function
export const { begin, success, failed, editing, clear, clickEdit } = adSlice.actions;

export default adSlice.reducer;