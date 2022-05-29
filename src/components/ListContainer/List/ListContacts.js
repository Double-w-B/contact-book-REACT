import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NoContactsInfo from "./NoContactsInfo";
import { uniqueFilteredLetters } from "../../../helpers/helpers";
import { alphabet } from "../../../data/data";
import arrowIcon from "../../../assets/arrowDown.svg";

const ListContacts = () => {
  const { contacts } = useSelector((store) => store.contacts);

  if (contacts.length < 1) {
    return <NoContactsInfo />;
  }

  return (
    <>
      {uniqueFilteredLetters(contacts).map((letter, index) => {
        if (alphabet.includes(letter)) {
          return (
            <StyledLetterContainer
              key={letter}
              id={letter}
              className="letter-container"
            >
              <div className="first-letter no-select">
                <p>{letter}</p>
              </div>
              <ul className="contact-list">
                {contacts
                  .filter((person) => person.name.slice(0, 1) === letter)
                  .map((person) => {
                    const { phone, name, surname, mail } = person;

                    return (
                      <StyledLiContact key={phone} id={phone}>
                        <div className="contact-img no-select">
                          <i className="fas fa-check"></i>
                          {name.slice(0, 1)} {surname.slice(0, 1)}
                        </div>
                        <div className="contact">
                          <p>
                            {name} {surname}
                          </p>
                          <p>
                            <i className="fas fa-phone-alt"></i>
                            {phone.replace(
                              /(?!^)(?=(?:\d{3})+(?:\.|$))/gm,
                              " "
                            )}
                          </p>
                        </div>
                        <div className="submenu-icon">
                          <img
                            src={arrowIcon}
                            alt="icon"
                            onClick={(e) => {
                              e.currentTarget.classList.toggle("active");
                            }}
                          />
                        </div>
                        <div className="submenu">
                          <button className="editCon">Edit</button>
                          <a href={`mailto:${mail}`}>
                            <button className="sendEm">Send email</button>
                          </a>
                          <button className="deleteCon">Delete</button>
                        </div>
                      </StyledLiContact>
                    );
                  })}
              </ul>
            </StyledLetterContainer>
          );
        }
      })}
    </>
  );
};
const StyledLetterContainer = styled.li`
  .first-letter {
    width: 100%;
    height: 1.6rem;
    background-color: var(--grey-semi-light);
    color: var(--white-primary);
    color: var(--blue-primary);
    display: flex;
    align-items: center;
    justify-content: start;
    border-radius: 2rem;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  .first-letter p {
    margin: 0;
    padding: 0;
    margin-left: 0.8rem;
  }

  .contact-list {
    margin: 0.5rem 0 0.5rem 0;
    padding-left: 0;

    li {
      &.showSubmenu {
        margin-bottom: 2rem !important;
      }
      &:first-child {
        border-radius: 0.5rem 0.5rem 0 0;
      }
      &:last-child {
        border-radius: 0 0 0.5rem 0.5rem;
        margin-bottom: 1rem;
      }
      &:only-child {
        border-radius: 0.5rem;
      }

      .submenu-icon {
        width: 19%;
        opacity: 0;
        height: 100%;
        border-radius: 0.2rem;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        right: 0;
        transition: all 0.3s linear;
        padding-left: 0.5rem;
        padding-right: 0.5rem;

        &.show-icons {
          opacity: 1;
        }

        img {
          cursor: pointer;
          width: 20px;

          filter: invert(81%) sepia(6%) saturate(227%) hue-rotate(173deg)
            brightness(85%) contrast(91%);
          transition: all 0.2s ease-in;

          &.active {
            transform: rotate(90deg) scale(0.8);
            filter: invert(55%) sepia(100%) saturate(7471%) hue-rotate(190deg)
              brightness(84%) contrast(90%);
          }
        }
      }
    }

    .submenu {
      position: absolute;
      bottom: -1.2rem;
      left: 50%;
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 1.3rem;
      font-size: 1rem;
      border-radius: 0 0 0.5rem 0.5rem;
      transform: translateX(-50%);
      background-color: #dbe4ee3d;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      opacity: 0;

      &.show {
        bottom: -1.38rem;
        opacity: 1;
      }

      a {
        height: 100%;
        pointer-events: none;
      }

      &.show a {
        pointer-events: all;
      }

      button {
        font-family: inherit;
        font-weight: bold;
        border: none;
        color: var(--grey-dark-secondary);
        background-color: transparent;
        pointer-events: none;
        &:hover {
          color: var(--blue-primary);
        }
        &:active {
          transform: scale(0.8);
        }
      }

      &.show button {
        cursor: pointer;
        pointer-events: all;
      }
    }
  }
`;

const StyledLiContact = styled.li`
  width: 96%;
  height: 3.1rem;
  list-style: none;

  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  margin-left: 0.8rem;
  transition: all 0.3s linear;
  display: flex;
  align-items: center;

  background-color: #dbe4ee3d;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0;
  position: relative;

  .contact-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    letter-spacing: 0.08rem;
    font-weight: 600;
    font-size: 1rem;
    background-color: var(--white-secondary);
    color: var(--blue-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin-left: 0.5rem;
    padding-left: 0.1rem;
    position: relative;
    cursor: pointer;

    .fa-check {
      position: absolute;
      background-color: var(--blue-primary);
      color: var(--white-secondary);
      font-size: 1.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0.2rem;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      transition: all 0.1s linear;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    color: var(--grey-dark-secondary);

    p {
      &:first-child {
        margin: 0;
        cursor: pointer;
      }
      &:first-child:hover {
        color: var(--blue-primary);
      }

      &:nth-child(2) {
        margin: 0.1rem 0 0 0;
        font-size: 1.05rem;
      }

      .fas {
        margin-right: 0.4rem;
        font-size: 0.8rem;
        transform: rotate(20deg) translateY(-0.1rem);
        color: var(--green-primary);
      }
    }
  }
`;
export default ListContacts;
