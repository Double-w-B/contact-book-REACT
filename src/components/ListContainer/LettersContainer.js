import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { alphabet } from "../../data/data";

const LettersContainer = () => {
  const { contacts } = useSelector((store) => store.contacts);

  const uniqueFilteredLetters = () => {
    const filteredLetters = contacts.map((i) => {
      let firstLetter = i.name.slice(0, 1);
      return firstLetter;
    });

    const singleFilteredLetters = [...new Set(filteredLetters)];
    return singleFilteredLetters;
  };

  const letters = alphabet.map((letter) => {
    if (uniqueFilteredLetters().includes(letter)) {
      return (
        <div className="letters__letter no-select" key={letter}>
          <a href={`#${letter}`}>{letter}</a>
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
