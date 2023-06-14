import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    putAllData: (state, action) => {
        state.data.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.data=state.data.filter(item=>item.id !== action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { putAllData, deleteItem } = adsSlice.actions;

export default adsSlice.reducer;