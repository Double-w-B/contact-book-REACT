import React, { useRef } from "react";
import styled from "styled-components";
import List from "./List/List";
import Menu from "./Menu/Menu";
import LettersContainer from "./LettersContainer";

const ListContainer = () => {
  const listEl = useRef(null);

  const handleLetterClick = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    
    if (document.getElementById(id) === null) return;

    const element = document.getElementById(id);
    let position = element.offsetTop - 15;

    listEl.current.scrollTo({
      left: 0,
      top: position,
    });
  };

  return (
    <StyledContainer>
      <List listEl={listEl} />
      <LettersContainer handleLetterClick={handleLetterClick} />
      <Menu />
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 100%;
  height: 91%;
  display: flex;
  overflow-y: hidden;
  position: relative;
`;

export default ListContainer;
