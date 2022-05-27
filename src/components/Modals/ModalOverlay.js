import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import AddContact from "./AddContact";
import EditContact from "./EditContact";

const ModalOverlay = () => {
  const { isModalOverlayOpen, isAddContact, isEditContact } = useSelector(
    (store) => store.modal
  );

  return (
    <StyledContainer className={isModalOverlayOpen ? "open-modal" : undefined}>
      {isAddContact && <AddContact />}
      {isEditContact && <EditContact />}
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  z-index: -10;

  &.open-modal {
    visibility: visible;
    z-index: 10;
  }
`;

export default ModalOverlay;