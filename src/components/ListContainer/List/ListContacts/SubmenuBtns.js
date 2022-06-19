import React from "react";
import { useDispatch } from "react-redux";
import * as modalModule from "../../../../features/modal/modalSlice";

const SubmenuBtns = (props) => {
  const dispatch = useDispatch();
  const { contactID, email } = props;

  const showModal = () => {
    dispatch(modalModule.handleModalOverlay(true));
    dispatch(modalModule.showAddContactModal(false));
  };

  const handleEditBtn = () => {
    showModal();
    dispatch(modalModule.showDeleteContactModal([false]));
    dispatch(modalModule.showEditContactModal([true, contactID]));
  };

  const handleDeleteBtn = () => {
    showModal();
    dispatch(modalModule.showEditContactModal(false));
    dispatch(modalModule.showDeleteContactModal([true, contactID]));
  };

  return (
    <>
      <button onClick={handleEditBtn}>Edit</button>
      <a href={`mailto:${email}`}>
        <button>Send email</button>
      </a>
      <button onClick={handleDeleteBtn}>Delete</button>
    </>
  );
};

export default SubmenuBtns;
