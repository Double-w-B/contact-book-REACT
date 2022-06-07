import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { alphabet } from "../../data/data";
import { uniqueFilteredLetters } from "../../helpers/helpers";

const LettersContainer = (props) => {
  const { contacts } = useSelector((store) => store.contacts);

  const letters = alphabet.map((letter) => {
    if (uniqueFilteredLetters(contacts).includes(letter)) {
      return (
        <div className="letters__letter no-select" key={letter}>
          <a href={`#${letter}`} onClick={(e) => props.handleLetterClick(e)}>
            {letter}
          </a>
        </div>
      );
    } else {
      return (
        <div className="no-name no-select" key={letter}>
          <a href={`#${letter}`}>{letter}</a>
        </div>
      );
    }
  });

  return (
    <StyledContainer>
      {letters}
      <div className="free-space"></div>
    </StyledContainer>
  );
};

const StyledContainer = styled.section`
  width: 3%;
  height: 100%;
  background-color: var(--white-dark);
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-bottom-right-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  .letters__letter,
  .no-name {
    width: 100%;
    height: 25px;
    background-color: var(--white-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    a {
      text-decoration: none;
      color: var(--grey-semi-dark);
      color: var(--blue-primary);
      font-weight: 500;
      transition: all 0.1s linear;
      text-transform: capitalize;
      font-family: inherit;
    }
  }

  .no-name {
    cursor: default;
    pointer-events: none;

    a {
      opacity: 0.5;
      cursor: default;
    }
  }

  .free-space {
    width: 100%;
    height: 25px;
  }
`;

export default LettersContainer;
