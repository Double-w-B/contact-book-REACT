import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleModalOverlay } from "../../features/modal/modalSlice";
import { showDeleteContactModal } from "../../features/modal/modalSlice";
import { refreshContactsList } from "../../features/contacts/contactsSlice";

const RemoveContact = () => {
  const dispatch = useDispatch();

  const { removeContactId } = useSelector((store) => store.modal);
  const { contacts } = useSelector((store) => store.contacts);

  const removeContactFromList = () => {
    const newContactsList = contacts.filter(
      (contact) => contact.phone !== removeContactId
    );
    dispatch(handleModalOverlay(false));
    dispatch(showDeleteContactModal([false, null]));
    dispatch(refreshContactsList(newContactsList));
  };

  const findContactFromList = () => {
    const { name, surname } = contacts.find(
      (person) => person.phone === removeContactId
    );
    return `${name} ${surname}`;
  };

  return (
    <StyledContainer /* classNAme="modal__contact-delete" */>
      <div className="confirm-container  no-select">
        <div className="confirm-question">
          <p>
            Are you sure you want to delete the{" "}
            <span className="selected-contact">{findContactFromList()}</span>{" "}
            contact?
          </p>
        </div>
        <div className="confirm-btns">
          <button className="confirm-delete" onClick={removeContactFromList}>
            Delete
          </button>
          <button
            className="confirm-cancel"
            onClick={() => dispatch(handleModalOverlay(false))}
          >
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
