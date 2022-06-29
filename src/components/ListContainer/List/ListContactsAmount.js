import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ListContactsAmount = () => {
  const { contacts, searchingContact, filteredContactsAmount } = useSelector(
    (store) => store.contacts
  );
  const { darkMode } = useSelector((store) => store.themeMode);
  return (
    <StyledContactsAmount
      className={darkMode ? "dark-mode no-select" : "no-select"}
    >
      <p>
        Contacts:{" "}
        {searchingContact
          ? filteredContactsAmount > 0
            ? filteredContactsAmount
            : 0
          : contacts.length}
      </p>
    </StyledContactsAmount>
  );
};

const StyledContactsAmount = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: auto;

  &.dark-mode {
    color: var(--white-secondary);
  }

  p {
    margin: 0.5rem;
    opacity: 0.4;
  }
`;

export default ListContactsAmount;
