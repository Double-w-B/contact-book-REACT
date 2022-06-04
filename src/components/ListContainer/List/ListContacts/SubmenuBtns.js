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
  return (
    <>
      <button
        className="editCon"
        onClick={() => {
          showModal();
          dispatch(modalModule.showDeleteContactModal([false]));
          dispatch(modalModule.showEditContactModal([true, contactID]));
        }}
      >
        Edit
      </button>
      <a href={`mailto:${email}`}>
        <button className="sendEm">Send email</button>
      </a>
      <button
        className="deleteCon"
        onClick={() => {
          showModal();
          dispatch(modalModule.showEditContactModal(false));
          dispatch(modalModule.showDeleteContactModal([true, contactID]));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default SubmenuBtns;
