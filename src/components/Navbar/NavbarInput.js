import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchingContact } from "../../features/contacts/contactsSlice";

const NavbarInput = () => {
  const { darkMode } = useSelector((store) => store.themeMode);
  const dispatch = useDispatch();
  const { searchingContact } = useSelector((store) => store.contacts);

  return (
    <InputContainer>
      <input
        type="text"
        id="search"
        className={darkMode ? "dark-mode" : ""}
        value={searchingContact}
        onChange={(e) => dispatch(handleSearchingContact(e.target.value))}
        placeholder="Name, surname, number ..."
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Name, surname, number ...")}
        autoComplete="off"
      />
      <div className="input__search-icon">
        <i
          className={darkMode ? "fas fa-search dark-mode" : "fas fa-search"}
        ></i>
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    height: 58.5%;
    font-family: inherit;
    font-size: 1.2rem;
    background-color: var(--white-secondary);
    color: var(--grey-dark);
    color: var(--blue-primary);
    padding-left: 1rem;
    border-radius: 1.5rem;
    border: none;
    outline: none;
    transition: all 0.3s linear;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

    &.dark-mode {
      color: var(--grey-light);
      background-color: var(--dark-mode-2);
      border: 1px solid var(--grey-semi-dark);

      &::placeholder {
        color: var(--grey-light);
      }
    }

    &:hover::placeholder {
      opacity: 0.25;
    }

    &::placeholder {
      color: var(--grey-dark-secondary);
      opacity: 0.2;
      font-size: 1rem;
      font-style: italic;
    }
  }

  & .input__search-icon {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 10%;
    display: flex;
    align-items: center;
  }

  & .fa-search {
    right: 1rem;
    top: 1.15rem;
    color: var(--grey-dark-secondary);
    opacity: 0.15;

    &.dark-mode {
      color: var(--grey-light);
    }
  }
`;

export default NavbarInput;
