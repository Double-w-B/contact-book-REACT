import React from "react";
import styled from "styled-components";
import List from "./List";
import LettersContainer from "./LettersContainer";
import Menu from "./Menu";

const ListContainer = () => {
  return (
    <StyledContainer>
      <List />
      <LettersContainer />
      <Menu />
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 100%;
  height: 91%;
  display: flex;
  position: relative;
`;

export default ListContainer;
