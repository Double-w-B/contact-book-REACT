import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addNewContact: (state, action) => {
      const currentState = current(state);
      state.contacts = [...currentState.contacts, action.payload];
      console.log(state.contacts);
    },
    refreshContactsList: (state, action) => {
      state.contacts = action.payload;
      console.log(state.contacts);
    },
  },
});

export const { addNewContact, refreshContactsList } = contactsSlice.actions;

export default contactsSlice.reducer;
