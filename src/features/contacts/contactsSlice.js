import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  selectedContactsID: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addNewContact: (state, action) => {
      const currentState = current(state);
      state.contacts = [...currentState.contacts, action.payload];
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
      console.log(state.contacts);
    },
    refreshContactsList: (state, action) => {
      state.contacts = action.payload;
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
      console.log(state.contacts);
    },
    addSelectedContactID: (state, action) => {
      state.selectedContactsID = [...state.selectedContactsID, action.payload];
      console.log(state.selectedContactsID);
    },
    refreshSelectedContactsID: (state, action) => {
      state.selectedContactsID = action.payload;
      console.log(state.selectedContactsID);
    },
  },
});

export const {
  addNewContact,
  refreshContactsList,
  addSelectedContactID,
  refreshSelectedContactsID,
} = contactsSlice.actions;

export default contactsSlice.reducer;
