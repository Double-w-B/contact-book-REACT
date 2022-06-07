import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  selectedContactsID: [],
  searchingContact: "",
  filteredContactsAmount: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addNewContact: (state, action) => {
      const currentState = current(state);
      state.contacts = [...currentState.contacts, action.payload];
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    refreshContactsList: (state, action) => {
      state.contacts = action.payload;
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    addSelectedContactID: (state, action) => {
      state.selectedContactsID = [...state.selectedContactsID, action.payload];
    },
    refreshSelectedContactsID: (state, action) => {
      state.selectedContactsID = action.payload;
    },
    handleSearchingContact: (state, action) => {
      state.searchingContact = action.payload;
    },
    setFilteredContactsAmount: (state, action) => {
      state.filteredContactsAmount = action.payload;
    },
  },
});

export const {
  addNewContact,
  refreshContactsList,
  addSelectedContactID,
  refreshSelectedContactsID,
  handleSearchingContact,
  setFilteredContactsAmount,
} = contactsSlice.actions;

export default contactsSlice.reducer;
