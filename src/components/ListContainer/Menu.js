import React from 'react'
import styled from "styled-components";

const Menu = () => {
  return (
    <StyledContainer>Menu</StyledContainer>
  )
}

const StyledContainer = styled.section`
  height: 7.5rem;
  width: 9rem;
  border-radius: 0 0 0.5rem 0.5rem;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 0;
  transform: translateY(-5px);
  transition: all 0.4s ease;
  z-index: -1;
  background-color: var(--blue-primary);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
`;

export default Menu