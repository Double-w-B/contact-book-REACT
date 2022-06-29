import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListContacts from "./ListContacts/ListContacts";
import ListContactsAmount from "./ListContactsAmount";
import * as helpersModule from "../../../helpers/helpers";
import { handleMenuBtn } from "../../../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const List = (props) => {
  const dispatch = useDispatch();
  const [isMove, setIsMove] = useState(false);
  const { darkMode } = useSelector((store) => store.themeMode);

  const scrollbarThumb = () => {
    setIsMove(true);
    setTimeout(() => setIsMove(false), 700);
  };

  useEffect(() => {
    const listElement = props.listEl.current;

    listElement.addEventListener("scroll", scrollbarThumb);
    return () => listElement.removeEventListener("scroll", scrollbarThumb);
  });

  useEffect(() => {
    props.listEl.current.scrollTo(0, 0);
  }, [props.listEl]);

  const handleClick = (e) => {
    helpersModule.handleClickOnList(e);
    dispatch(handleMenuBtn(false));
  };
  const listClassName = () => {
    if (darkMode && isMove) return "move dark-mode";
    else if (darkMode) return "dark-mode";
    else if (isMove) return "move";
    else return "";
  };

  return (
    <StyledContainer ref={props.listEl} className={listClassName()}>
      <div
        className={
          darkMode ? "list__top-opacity dark-mode" : "list__top-opacity"
        }
      ></div>
      <div className="list__content">
        <ul
          className="list__contacts"
          onMouseOver={helpersModule.handleMouseOverList}
          onClick={(e) => handleClick(e)}
        >
          <ListContacts listEl={props.listEl} />
        </ul>
        <ListContactsAmount />
        <div
          className={
            darkMode ? "list__bottom-opacity dark-mode" : "list__bottom-opacity"
          }
        ></div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 97%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: var(--grey-light-2) var(--grey-light-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom-left-radius: 0.5rem;
  background-color: var(--grey-light-2);

  &.dark-mode {
    background-color: var(--dark-mode-1);
    scrollbar-color: var(--dark-mode-1) var(--dark-mode-1);

    &::-webkit-scrollbar-track {
      background-color: var(--dark-mode-1);
    }
    &::-webkit-scrollbar-track:hover {
      background-color: var(--dark-mode-1);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--dark-mode-1);
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--dark-mode-clr);
    }
    &.move::-webkit-scrollbar-thumb {
      background-color: var(--dark-mode-clr);
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: var(--grey-light-2);
  }

  &::-webkit-scrollbar-thumb:hover {
    height: 30px;
    background-color: var(--grey-light-2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--blue-primary);
  }

  &.move {
    scrollbar-color: var(--blue-primary) var(--grey-light-2);
    &.dark-mode {
      background-color: var(--dark-mode-1);
      scrollbar-color: var(--dark-mode-clr) var(--dark-mode-1);
    }
  }

  &.move::-webkit-scrollbar-thumb {
    height: 30px;
    background-color: var(--blue-primary);
  }

  & .list__contacts {
    width: 100%;
    padding: 0 1.7rem 0 2rem;
    list-style: none;
  }

  & .list__contacts * {
    transition: var(--transition);
  }

  .list__top-opacity,
  .list__bottom-opacity {
    padding: 0.5rem;
    background: linear-gradient(var(--grey-light-2) 25%, transparent);
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .list__top-opacity.dark-mode {
    background: linear-gradient(var(--dark-mode-1) 25%, transparent);
  }

  .list__bottom-opacity {
    background: linear-gradient(transparent, var(--grey-light-2) 55%);
    bottom: -0.05rem;

    &.dark-mode {
      background: linear-gradient(transparent, var(--dark-mode-1) 75%);
    }
  }

  .list__content {
    width: 100%;
    height: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default List;
