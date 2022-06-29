import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as modalModule from "../../features/modal/modalSlice";
import * as contactsModule from "../../features/contacts/contactsSlice";

const RemoveContact = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((store) => store.themeMode);
  const {
    selectedContactId,
    isDeleteSelectedContactsModal,
    isDeleteContactModal,
  } = useSelector((store) => store.modal);
  const { contacts, selectedContactsID } = useSelector(
    (store) => store.contacts
  );

  const closeModal = () => {
    dispatch(modalModule.handleModalOverlay(false));
    dispatch(modalModule.showDeleteContactModal([false]));
    dispatch(modalModule.showDeleteSelectedContactsModal(false));
  };

  const handleRemoveBtn = () => {
    if (modalModule.showDeleteSelectedContactsModal) {
      const filteredContacts = contacts.filter(
        (contact) => !selectedContactsID.find((id) => contact.phone === id)
      );
      dispatch(contactsModule.refreshContactsList(filteredContacts));
      dispatch(contactsModule.refreshSelectedContactsID([]));
      closeModal();
    }
    if (isDeleteContactModal) {
      console.log(contacts);
      const newContactsList = contacts.filter(
        (contact) => contact.phone !== selectedContactId
      );
      closeModal();
      dispatch(contactsModule.refreshContactsList(newContactsList));
    }
  };

  const findContactFromList = () => {
    const { name, surname } = contacts.find(
      (person) => person.phone === selectedContactId
    );
    return `${name} ${surname}`;
  };

  const checkContactsLength = () => {
    if (selectedContactsID.length > 1) {
      return "Are you sure you want to delete all the";
    } else {
      return "Are you sure you want to delete";
    }
  };

  return (
    <StyledContainer className={darkMode ? "dark-mode" : ""}>
      <div className="confirm-container  no-select">
        <div className="confirm-question">
          <p>
            {isDeleteSelectedContactsModal
              ? checkContactsLength()
              : "Are you sure you want to delete the"}{" "}
            <span className="selected-contact">
              {isDeleteSelectedContactsModal
                ? selectedContactsID.length
                : findContactFromList()}
            </span>{" "}
            {isDeleteSelectedContactsModal && selectedContactsID.length > 1
              ? "contacts?"
              : "contact?"}
          </p>
        </div>
        <div className="confirm-btns">
          <button className="confirm-delete" onClick={handleRemoveBtn}>
            Delete
          </button>
          <button className="confirm-cancel" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: var(--white-dark);
  border-radius: 0.5rem;
  width: 330px;
  height: 130px;
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: visible;
  z-index: 1;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  color: var(--grey-dark-secondary);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px, inset 0 0 1px #141e30;

  &.dark-mode {
    background-color: var(--dark-mode-2);
    color: var(--white-primary);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px, inset 0 0 1px #1a1d24;

    .confirm-container .confirm-question .selected-contact {
      color: var(--dark-mode-clr);
      text-shadow: none;
    }
  }

  .confirm-container {
    width: 100%;
    height: 100%;

    .confirm-question {
      width: 100%;
      height: 65%;
      font-size: 1.1rem;
      display: flex;
      align-items: center;

      & p {
        margin: 0 1.5rem;
        padding: 0;
        text-align: justify;
        line-height: 1.5;

        .selected-contact {
          text-transform: capitalize;
          font-weight: bold;
          font-size: 1.2rem;
          color: var(--blue-primary);
        }
      }
    }

    .confirm-btns {
      width: 100%;
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        width: 80px;
        height: 30px;
        margin: 0 1rem 0 0.5rem;
        padding-left: 0.4rem;
        font-size: 1rem;
        font-weight: bold;
        font-family: inherit;
        cursor: pointer;
        border: none;
        border-radius: 1.5rem;
        letter-spacing: 0.05rem;
        transition: all 0.2s linear;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        background-color: var(--white-secondary);
        color: var(--grey-dark);

        &:hover {
          background-color: var(--grey-light);
        }
        &:active {
          -webkit-box-shadow: inset 1px 2px 2px #535557;
          -moz-box-shadow: inset 1px 2px 2px #535557;
          box-shadow: inset 1px 2px 2px #535557;
        }
      }
    }
  }
`;

export default RemoveContact;
