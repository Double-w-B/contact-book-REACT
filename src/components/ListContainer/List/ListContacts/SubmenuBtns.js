import React from "react";
import { useDispatch } from "react-redux";
import {
  handleModalOverlay,
  showDeleteContactModal,
  showAddContactModal,
  showEditContactModal,
} from "../../../../features/modal/modalSlice";

const SubmenuBtns = (props) => {
  const dispatch = useDispatch();
  const { contactID, email } = props;

  const showModal = () => {
    dispatch(handleModalOverlay(true));
    dispatch(showAddContactModal(false));
  };
  return (
    <>
      <button
        className="editCon"
        onClick={() => {
          showModal();
          dispatch(showDeleteContactModal([false]));
          dispatch(showEditContactModal([true, contactID]));
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
          dispatch(showEditContactModal(false));
          dispatch(showDeleteContactModal([true, contactID]));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default SubmenuBtns;
