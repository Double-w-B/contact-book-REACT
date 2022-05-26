import React from "react";
import styled from "styled-components";

const MenuButtons = () => {
  return (
    <>
      <Button className="menu__btn--select">Select all</Button>
      <Button className="menu__btn--unselect">Unselect all</Button>
      <Button className="menu__btn--remove">Remove Selected</Button>
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
