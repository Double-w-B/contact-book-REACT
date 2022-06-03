import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOverlayOpen: false,
  isShowAddContactModal: false,
  isShowEditContactModal: false,
  isDeleteContactModal: false,
  isDeleteSelectedContactsModal: false,
  isShowContactInfoModal: false,
  selectedContactId: null,
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
    showAddContactModal: (state, action) => {
      state.isShowAddContactModal = action.payload;
    },
    showEditContactModal: (state, action) => {
      state.isShowEditContactModal = action.payload[0];
      if (action.payload[1]) state.selectedContactId = action.payload[1];
    },
    showDeleteContactModal: (state, action) => {
      state.isDeleteContactModal = action.payload[0];
      if (action.payload[1]) state.selectedContactId = action.payload[1];
    },
    showContactInfoModal: (state, action) => {
      state.isShowContactInfoModal = action.payload[0];
      if (action.payload[1]) state.selectedContactId = action.payload[1];
    },
    showDeleteSelectedContactsModal: (state, action) => {
      state.isDeleteSelectedContactsModal = action.payload;
    },
  },
});

export const {
  handleModalOverlay,
  handleAddEditContactModal,
  showAddContactModal,
  showEditContactModal,
  showDeleteContactModal,
  showContactInfoModal,
  showDeleteSelectedContactsModal,
} = modalSLice.actions;

export default modalSLice.reducer;
