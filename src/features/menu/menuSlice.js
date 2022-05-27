import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenuBtn: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});
export const { handleMenuBtn } = menuSlice.actions;

export default menuSlice.reducer;
