import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as modalModule from "../../features/modal/modalSlice";

const ContactInfo = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((store) => store.contacts);
  const { selectedContactId } = useSelector((store) => store.modal);

  const { name, surname, mail, address, notes, phone } = contacts.find(
    (contact) => contact.phone === selectedContactId
  );
  const { darkMode } = useSelector((store) => store.themeMode);
  return (
    <StyledContainer className={darkMode ? "dark-mode" : ""}>
      <div className="btn-container">
        <i
          className="fas fa-times"
          onClick={() => {
            dispatch(modalModule.showContactInfoModal(false));
            dispatch(modalModule.handleModalOverlay(false));
          }}
        ></i>
      </div>
      <div className="top-info">
        <div className="photo no-select">
          <div className="img">
            {name.slice(0, 1)} {surname.slice(0, 1)}
          </div>
        </div>
        <div className="main-info">
          <p>{name}</p>
          <p>{surname}</p>
          <p>
            <i className="fas fa-phone-alt no-select"></i>{" "}
            {phone.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")}
          </p>
        </div>
      </div>
      <div className="bottom-info">
        <p>
          <i className="fas fa-at no-select"></i>
          {mail ? mail : <span>no email address passed</span>}
        </p>
        <p>
          <i className="fas fa-map-marker-alt no-select"></i>&nbsp;
          {address ? address : <span>no address passed</span>}
        </p>
        <p>
          <i className="far fa-edit no-select"></i>
          {notes ? notes : <span>no notes passed</span>}
        </p>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.article`
  background-color: var(--white-dark);
  border-radius: 0.5rem;
  width: 400px;
  height: 230px;
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: visible;
  z-index: 1;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px, inset 0 0 1px #48484a;

  &.dark-mode {
    background-color: var(--dark-mode-2);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px, inset 0 0 1px #1a1d24;

    .top-info {
      .photo .img {
        background-color: var(--dark-mode-clr);
        color: var(--white-primary);
        box-shadow: none;
      }
      .main-info p {
        color: var(--white-primary);
        &:last-child {
          color: var(--grey-light);
        }
      }
    }

    .bottom-info {
      p {
        color: var(--white-primary);
      }
      .fas,
      .far {
        color: var(--dark-mode-clr);
      }
    }

    .btn-container .fas {
      color: var(--white-primary);
      &:hover {
        color: var(--dark-mode-clr);
      }
    }
  }

  .btn-container {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-content: center;
    position: absolute;
    top: 0;
    right: 0;
  }

  .top-info {
    width: 100%;
    height: 55%;
    display: flex;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .top-info .photo {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-info .photo .img {
    width: 100px;
    height: 95px;
    background-color: var(--white-secondary);
    border-radius: 50%;
    color: var(--blue-primary);
    display: grid;
    place-content: center;
    font-size: 3rem;
    text-transform: uppercase;
    box-shadow: rgba(4, 16, 29, 0.4) 0px 0px 0px 2px,
      rgba(4, 16, 29, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  .top-info .main-info {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .top-info .main-info p {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: normal;
    text-transform: capitalize;
    color: var(--grey-semi-dark);

    .fas {
      font-size: 1.1rem;
      transform: rotate(20deg) translateY(-0.1rem);
    }
  }

  .top-info .main-info p:first-child {
    margin-top: 1rem;
  }

  .top-info .main-info p:last-child {
    font-size: 1.7rem;
    color: var(--grey-dark-secondary);
    margin-bottom: 1rem;
  }

  .main-info .fa-phone-alt {
    color: var(--green-primary);
  }

  .bottom-info {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 0.5rem;
  }

  .bottom-info p {
    margin: 0 1rem;
    padding: 0;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-transform: lowercase;
    color: var(--grey-dark-secondary);
    font-style: italic;
  }

  .bottom-info p span {
    opacity: 0.6;
  }

  .bottom-info p .fas,
  .bottom-info p .far {
    color: var(--blue-primary);
  }

  .bottom-info p:nth-child(1) .fas {
    margin-right: 1.05rem;
    transform: translateY(0.1rem);
  }

  .bottom-info p:nth-child(2) .fas {
    margin-right: 1.05rem;
  }

  .bottom-info p:nth-child(3) .far {
    font-size: 0.9rem;
  }

  .bottom-info .fas,
  .bottom-info .far {
    font-size: 1rem;
    color: var(--grey-dark-secondary);
    font-weight: bold;
    margin-right: 1rem;
  }

  .btn-container .fas {
    color: var(--grey-semi-dark);
    font-size: 2rem;
    transition: all 0.1s;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-container .fas:hover {
    color: var(--blue-primary);
  }

  .btn-container .fas:active {
    transform: scale(0.9);
  }
`;

export default ContactInfo;
