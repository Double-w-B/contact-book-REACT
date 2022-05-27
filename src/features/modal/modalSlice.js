import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOverlayOpen: false,
  isAddEditContactModalOpen: false,
  isAddContact: false,
  isEditContact: false,
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
  },
});

export const {
  handleModalOverlay,
  handleAddEditContactModal,
  showAddContact,
  showEditContact,
} = modalSLice.actions;

export default modalSLice.reducer;
