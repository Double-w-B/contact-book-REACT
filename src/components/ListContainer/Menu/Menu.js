import React from "react";
import styled from "styled-components";
import MenuButtons from "./MenuButtons";
import { useSelector } from "react-redux";

const Menu = () => {
  const { isMenuOpen } = useSelector((store) => store.menu);

  return (
    <StyledContainer className={isMenuOpen ? "show-menu" : undefined}>
      <MenuButtons />
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  height: 7.5rem;
  width: 9rem;
  border-radius: 0 0 0.5rem 0.5rem;
  top: -7.5rem;
  right: 0.05rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0;
  transition: all 0.35s linear;
  z-index: 1;
  background-color: var(--grey-semi-light);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px,
    inset 0 7px 9px -7px rgba(0, 0, 0, 0.4),
    inset 7px 0 1px -7px rgba(0, 0, 0, 0.4),
    inset -7px 0 1px -7px rgba(0, 0, 0, 0.4),
    inset 0 -7px 1px -7px rgba(0, 0, 0, 0.4);
  position: absolute;

  &.show-menu {
    opacity: 1;
    top: 0;
    z-index: 2;
  }
`;

export default Menu;
