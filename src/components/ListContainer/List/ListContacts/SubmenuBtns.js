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
  return (
      <>
      <button
        className="editCon"
        onClick={() => {
          dispatch(handleModalOverlay(true));
          dispatch(showDeleteContactModal([false]));
          dispatch(showAddContactModal(false));
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
          dispatch(showEditContactModal(false));
          dispatch(showAddContactModal(false));
          dispatch(handleModalOverlay(true));
          dispatch(showDeleteContactModal([true, contactID]));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default SubmenuBtns;
