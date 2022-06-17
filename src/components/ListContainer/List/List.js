import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListContacts from "./ListContacts/ListContacts";
import ListContactsAmount from "./ListContactsAmount";
import * as helpersModule from "../../../helpers/helpers";
import { handleMenuBtn } from "../../../features/menu/menuSlice";
import { useDispatch } from "react-redux";

const List = (props) => {
  const dispatch = useDispatch();
  const [isMove, setIsMove] = useState(false);

  useEffect(() => {
    const scrollbarThumb = () => {
      setIsMove(true);
      setTimeout(setIsMove(false), 700);
    };
    props.listEl.current.addEventListener("scroll", scrollbarThumb);
    props.listEl.current.removeEventListener("scroll", scrollbarThumb);
  });

  return (
    <StyledContainer ref={props.listEl} className={isMove && "move"}>
      <ul
        className="list__contacts"
        onMouseOver={helpersModule.handleMouseOverList}
        onClick={(e) => {
          helpersModule.handleClickOnList(e);
          dispatch(handleMenuBtn(false));
        }}
      >
        <ListContacts />
      </ul>
      <ListContactsAmount />
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

  &.move {
    scrollbar-color: var(--blue-primary) var(--grey-light-2);
  }

  &.move::-webkit-scrollbar-thumb {
    height: 30px;
    background-color: var(--blue-primary);
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--grey-light-2);
  }

  &::-webkit-scrollbar-thumb {
    height: 30px;
    background-color: var(--grey-light-2);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-primary);
  }

  & .list__contacts {
    width: 100%;
    padding: 2rem 1.7rem 1.5rem 2rem;
    list-style: none;
  }
  & .list__contacts * {
    transition: var(--transition);
  }
`;

export default List;
