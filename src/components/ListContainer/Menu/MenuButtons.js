import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  refreshContactsList,
  refreshSelectedContactsID,
} from "../../../features/contacts/contactsSlice";

const MenuButtons = () => {
  const dispatch = useDispatch();

  const { contacts, selectedContactsID } = useSelector(
    (store) => store.contacts
  );

  const handleSelectAllBtn = () => {
    const allIDs = contacts.map((contact) => contact.phone);
    dispatch(refreshSelectedContactsID(allIDs));
  };

  const handleUnselectAllBtn = () =>{
    dispatch(refreshSelectedContactsID([]));
  }

  const handleRemoveBtn = () => {
    const filteredContacts = contacts.filter(
      (contact) => !selectedContactsID.find((id) => contact.phone === id)
    );
    dispatch(refreshContactsList(filteredContacts));
    dispatch(refreshSelectedContactsID([]));
  };

  return (
    <>
      <Button className="menu__btn--select" onClick={handleSelectAllBtn}>
        Select all
      </Button>
      <Button className="menu__btn--unselect" onClick={handleUnselectAllBtn}>Unselect all</Button>
      <Button className="menu__btn--remove" onClick={handleRemoveBtn}>
        Remove Selected
      </Button>
      <Button className="menu__btn--mode">Change theme</Button>
    </>
  );
};

const Button = styled.button`
  height: 2rem;
  cursor: pointer;
  transition: all 0.1s linear;
  display: flex;
  align-items: center;
  padding-left: 0.8rem;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  color: var(--white-secondary);

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    color: var(--grey-semi-light);
  }
`;

export default MenuButtons;
