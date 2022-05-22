import React from 'react'
import styled from "styled-components";

const LettersContainer = () => {
  return (
    <StyledContainer></StyledContainer>
  )
}

const StyledContainer = styled.section`
  width: 3%;
  height: 100%;
  background-color: var(--white-dark);
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-bottom-right-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export default LettersContainer