import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleMenuBtn } from "../../features/menu/menuSlice";
import {
  handleModalOverlay,
  handleAddEditContactModal,
  showAddContact,
} from "../../features/modal/modalSlice";
import { hideActiveSubmenu } from "../../helpers/helpers";

const NavbarButtons = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((store) => store.menu);

  return (
    <>
      <Button
        className="nav__btn--add no-select"
        onClick={() => {
          dispatch(handleModalOverlay(true));
          dispatch(handleAddEditContactModal(true));
          dispatch(showAddContact(true));
        }}
      >
        <i className="fas fa-user-plus"></i>
        <p>Add</p>
        <p>New</p>
      </Button>
      <Button className="nav__btn--show no-select">
        <i className="fas fa-address-book"></i>
        <p>List</p>
      </Button>

      <Button
        className="nav__btn--menu no-select"
        onClick={() => {
          dispatch(handleMenuBtn(!isMenuOpen));
          hideActiveSubmenu();
        }}
      >
        <i className="fas fa-bars"></i>
      </Button>
    </>
  );
};

const Button = styled.button`
  height: 65%;
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s linear;
  background-color: var(--white-secondary);
  color: var(--blue-primary);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:active {
    -webkit-box-shadow: inset 1px 2px 2px #535557;
    -moz-box-shadow: inset 1px 2px 2px #535557;
    box-shadow: inset 1px 2px 2px #535557;
  }

  * {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  .fa-address-book,
  .fa-user-plus {
    margin-top: 0.1rem;
  }

  &.nav__btn--show {
    width: 11%;
    padding: 0 0.4rem 0 0.4rem;
  }

  &.nav__btn--add {
    width: 19%;
    padding: 0 0.4rem 0 0.4rem;
    background-color: var(--blue-primary);
    color: var(--white-secondary);
  }

  &.nav__btn--menu {
    width: 5%;
    border-radius: 0.5rem;
  }

  &.nav__btn--menu .fa-bars {
    pointer-events: none;
  }
`;

export default NavbarButtons;
