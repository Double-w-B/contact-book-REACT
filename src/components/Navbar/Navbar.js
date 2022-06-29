import React from "react";
import styled from "styled-components";
import NavbarInput from "./NavbarInput";
import NavbarButtons from "./NavbarButtons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { darkMode } = useSelector((store) => store.themeMode);
  return (
    <StyledNavbar className={darkMode ? "dark-mode" : ""}>
      <NavbarInput />
      <NavbarButtons />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  height: 9%;
  background-color: var(--grey-semi-light);
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

  &.dark-mode {
    background-color: var(--dark-mode-secondary);
  }
`;

export default Navbar;
