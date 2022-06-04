import React from "react";
import { useDispatch } from "react-redux";
import * as modalModule from "../../../../features/modal/modalSlice";

const ContactsInfo = (props) => {
  const dispatch = useDispatch();

  const { contactID, name, surname } = props;
  return (
    <>
      <p
        onClick={() => {
          dispatch(modalModule.handleModalOverlay(true));
          dispatch(modalModule.showContactInfoModal([true, contactID]));
        }}
      >
        {name} {surname}
      </p>
      <p>
        <i className="fas fa-phone-alt"></i>
        {contactID.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")}
      </p>
    </>
  );
};

export default ContactsInfo;
