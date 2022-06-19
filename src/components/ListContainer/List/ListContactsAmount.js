import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ListContactsAmount = () => {
  const { contacts, searchingContact, filteredContactsAmount } = useSelector(
    (store) => store.contacts
  );

  return (
    <StyledContactsAmount className="no-select">
      <p>Contacts: {searchingContact? filteredContactsAmount : contacts.length}</p>
    </StyledContactsAmount>
  );
};

const StyledContactsAmount = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: auto;

  p {
    margin: 0.5rem;
    opacity: 0.4;
  }
`;

export default ListContactsAmount;
