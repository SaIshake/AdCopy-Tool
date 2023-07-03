import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload
    },
    putAllData: (state, action) => {
        state.data.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.data=state.data.filter(item=>item._id !== action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { putAllData, deleteItem, getData } = adsSlice.actions;

export default adsSlice.reducer;