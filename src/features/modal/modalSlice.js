import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOverlayOpen: false,
  isAddEditContactModalOpen: false,
  isAddContact: false,
  isEditContact: false,
  isDeleteContactModal: false,
  removeContactId: null,
};

const modalSLice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModalOverlay: (state, action) => {
      state.isModalOverlayOpen = action.payload;
    },
    handleAddEditContactModal: (state, action) => {
      state.isAddEditContactModalOpen = action.payload;
    },
    showAddContact: (state, action) => {
      state.isAddContact = action.payload;
    },
    showEditContact: (state, action) => {
      state.isEditContact = action.payload;
    },
    showDeleteContactModal: (state, action) => {
      state.isDeleteContactModal = action.payload[0];
      state.removeContactId = action.payload[1];
    },
  },
});

export const {
  handleModalOverlay,
  handleAddEditContactModal,
  showAddContact,
  showEditContact,
  showDeleteContactModal,
} = modalSLice.actions;

export default modalSLice.reducer;
