import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    changeThemeMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { changeThemeMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;
