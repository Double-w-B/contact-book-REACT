import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const EditContact = () => {
  const { isAddEditContactModalOpen } = useSelector((store) => store.modal);

  return (
    <StyledContainer
      className={isAddEditContactModalOpen ? "open-modal" : undefined}
    >
      <div className="new-con-main-info">
        <div className="info">Edit contact</div>

        <form>
          <div className="info-one">
            <div className="name-input">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Name*")}
                required
              />
              <div className="error-hint">invalid name</div>
              <div className="error-hint-required">name is required</div>
            </div>
            <div className="surname-input">
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Surname*"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Surname*")}
                required
              />
              <div className="error-hint">invalid surname</div>
              <div className="error-hint-required">surname is required</div>
            </div>
          </div>
          <div className="info-two">
            <div className="phone-input">
              <input
                type="text"
                id="phone"
                name="phone"
                maxLength="9"
                placeholder="Phone*"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Phone*")}
                required
              />
              <div className="error-hint">invalid number</div>
              <div className="error-hint-required">number is required</div>
              <div className="error-hint-number">number already exists</div>
            </div>
            <div className="mail-input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Email")}
                required
              />
              <div className="error-hint">invalid email</div>
            </div>
          </div>
        </form>
      </div>

      <div className="new-con-secondary-info">
        <form>
          <div className="address-input">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              onFocus={(e) => (e.target.placeholder = "")}
              onblur="this.placeholder='Address'"
            />
          </div>
          <div className="notes-input">
            <input
              type="text"
              id="notes"
              name="notes"
              maxLength="36"
              placeholder="Notes"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Notes")}
            />
          </div>
        </form>
      </div>
      <div className="new-con-btns">
        <button className="save">Save</button>
        <button className="cancel">Cancel</button>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border-radius: 0.5rem;
  width: 410px;
  height: 330px;
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: hidden;
  z-index: -10;
  background-color: var(--white-dark);
  color: var(--grey-dark-secondary);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px, inset 0 0 1px #141e30;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &.open-modal {
    visibility: visible;
    z-index: 10;
  }

  .new-con-main-info {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .new-con-main-info .info {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--blue-primary);
    /* text-shadow: -1px 1px 6px var(--grey-semi-light),
	-1px -1px 6px var(--grey-semi-light); */
    font-weight: bold;
    letter-spacing: 0.05rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  .new-con-main-info form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info-one,
  .info-two {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  }

  .name-input,
  .surname-input,
  .phone-input,
  .mail-input {
    width: 50%;
    height: 40%;
    position: relative;
    display: flex;
    justify-content: center;
    position: relative;
    transition: all 0.1s ease-in;
  }

  .phone-input {
    width: 35%;
    margin: 0 0 0 0.7rem;
    text-align: center;
  }

  .mail-input {
    width: 65%;
    margin: 0 0.6rem;
  }

  .error-hint,
  .error-hint-number,
  .error-hint-required {
    position: absolute;
    bottom: -1rem;
    font-size: 0.8rem;
    visibility: hidden;
  }

  .name-input input,
  .surname-input input,
  .phone-input input,
  .mail-input input,
  .address-input input,
  .notes-input input {
    width: 80%;
    outline: none;
    border: none;
    border-bottom: 0.15rem solid var(--grey-semi-light);
    margin: 0 0.5rem;
    padding-left: 0.2rem;
    font-family: inherit;
    font-size: 1.1rem;
    font-family: inherit;
    text-transform: capitalize;
    background-color: transparent;
    color: var(--grey-dark);
  }

  .name-input input::placeholder,
  .surname-input input::placeholder,
  .phone-input input::placeholder,
  .mail-input input::placeholder,
  .address-input input::placeholder,
  .notes-input input::placeholder {
    opacity: 0.4;
  }

  .phone-input input {
    width: 100%;
    text-transform: none;
  }

  .mail-input input {
    width: 100%;
    text-transform: none;
  }

  .new-con-secondary-info {
    width: 100%;
    height: 40%;
  }

  .new-con-secondary-info form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .address-input,
  .notes-input {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
  }

  .address-input input,
  .notes-input input {
    margin: 0 1.2rem;
    width: 90%;
    text-transform: none;
  }

  .new-con-btns {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .new-con-btns button {
    width: 100px;
    height: 30px;
    cursor: pointer;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 1.5rem;
    letter-spacing: 0.05rem;
    transition: all 0.1s linear;
    background-color: var(--white-secondary);
    color: var(--grey-dark);
    /* box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* opacity: 0.85; */
  }

  .new-con-btns button:hover {
    background-color: var(--grey-light);
  }
`;

export default EditContact;
