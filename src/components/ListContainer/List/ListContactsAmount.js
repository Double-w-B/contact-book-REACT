import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ListContactsAmount = () => {
  const { contacts } = useSelector((store) => store.contacts);

  return (
    <StyledContactsAmount className="no-select">
      <p>Contacts: {contacts.length}</p>
    </StyledContactsAmount>
  );
};

const StyledContactsAmount = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    margin: 0.5rem;
    opacity: 0.4;
  }
`;

export default ListContactsAmount;
