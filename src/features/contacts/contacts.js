import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: JSON.parse(localStorage.getItem("contacts")) || []
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
});


export default contactsSlice.reducer;