import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { showAddContact } from "../../features/modal/modalSlice";
import { addNewContact } from "../../features/contacts/contactsSlice";
import { handleModalOverlay } from "../../features/modal/modalSlice";
import { topInputsOne, topInputsTwo, bottomInputs } from "../../data/data";
import { validationFunction } from "../../helpers/validation";

const AddContact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const nameInput = useRef(null);
  const surnameInput = useRef(null);
  const phoneInput = useRef(null);
  const emailInput = useRef(null);
  const addressInput = useRef(null);
  const notesInput = useRef(null);

  const dispatch = useDispatch();

  const { isAddEditContactModalOpen } = useSelector((store) => store.modal);
  const { contacts } = useSelector((store) => store.contacts);

  const handleAddBtn = () => {
    const textRegExp = /[ĄĆĘÓŚŻŹŁŃŚąćęóśżźłńś^0-9^а-я]/;
    const emailRegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const checkNumber = contacts.map((person) => person.phone);

    validationFunction(
      nameInput,
      surnameInput,
      phoneInput,
      emailInput,
      checkNumber,
      textRegExp,
      emailRegExp
    );

    if (
      nameInput.current.value &&
      surnameInput.current.value &&
      !nameInput.current.value.match(textRegExp) &&
      !surnameInput.current.value.match(textRegExp) &&
      phoneInput.current.value.match(/^[0-9]+$/) &&
      !checkNumber.includes(phoneInput.current.value) &&
      (!emailInput.current.value || emailInput.current.value.match(emailRegExp))
    ) {
      dispatch(
        addNewContact({
          name: name.toLowerCase(),
          surname: surname.toLowerCase(),
          phone,
          mail: email.toLowerCase(),
          address: address.toLowerCase(),
          notes: notes.toLowerCase(),
        })
      );
      dispatch(showAddContact(false));
      dispatch(handleModalOverlay(false));
    } else {
      return;
    }
  };

  const handleCancelBtn = () => {
    dispatch(showAddContact(false));
    dispatch(handleModalOverlay(false));
  };

  return (
    <StyledContainer
      className={isAddEditContactModalOpen ? "open-modal" : undefined}
    >
      <div className="new-con-main-info">
        <div className="info">New Contact</div>
        <form>
          <div className="info-one">
            {topInputsOne.map((input) => {
              return (
                <div className={input.className} key={input.id}>
                  <input
                    ref={input.name === "name" ? nameInput : surnameInput}
                    type="text"
                    id={input.id}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={input.name === "name" ? name : surname}
                    onChange={(e) =>
                      input.method === "setName"
                        ? setName(e.target.value)
                        : setSurname(e.target.value)
                    }
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = input.placeholder)}
                    required
                  />
                  <div className="error-hint">invalid {input.name}</div>
                  <div className="error-hint-required">
                    {input.name} is required
                  </div>
                </div>
              );
            })}
          </div>
          <div className="info-two">
            {topInputsTwo.map((input) => {
              return (
                <div className={input.className} key={input.id}>
                  <input
                    ref={input.name === "phone" ? phoneInput : emailInput}
                    type={input.name === "phone" ? "text" : "email"}
                    id={input.id}
                    name={input.name}
                    placeholder={input.placeholder}
                    maxLength={input.name === "phone" ? 9 : 99}
                    value={input.name === "phone" ? phone : email}
                    onChange={(e) =>
                      input.method === "setPhone"
                        ? setPhone(e.target.value)
                        : setEmail(e.target.value)
                    }
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = input.placeholder)}
                    required
                  />
                  <div className="error-hint">
                    invalid {input.name === "phone" ? "number" : input.name}
                  </div>
                  {input.name === "phone" && (
                    <>
                      <div className="error-hint-required">
                        number is required
                      </div>
                      <div className="error-hint-number">
                        number already exists
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </form>
      </div>

      <div className="new-con-secondary-info">
        <form>
          {bottomInputs.map((input) => {
            return (
              <div className={input.className} key={input.id}>
                <input
                  ref={input.name === "notes" ? notesInput : addressInput}
                  type="text"
                  id={input.name}
                  name={input.name}
                  maxLength="36"
                  placeholder={input.placeholder}
                  value={input.name === "notes" ? notes : address}
                  onChange={(e) =>
                    input.method === "setNotes"
                      ? setNotes(e.target.value)
                      : setAddress(e.target.value)
                  }
                  onFocus={(e) => (e.target.placeholder = "")}
                  onBlur={(e) => (e.target.placeholder = input.placeholder)}
                />
              </div>
            );
          })}
        </form>
      </div>

      <div className="new-con-btns">
        <button className="accept" onClick={handleAddBtn}>
          Add
        </button>
        <button className="cancel" onClick={handleCancelBtn}>
          Cancel
        </button>
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
  .email-input {
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

  .email-input {
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
  .email-input input,
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
  .email-input input::placeholder,
  .address-input input::placeholder,
  .notes-input input::placeholder {
    opacity: 0.4;
  }

  .phone-input input {
    width: 100%;
    text-transform: none;
  }

  .email-input input {
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

  .name-input .invalid-input,
  .surname-input .invalid-input,
  .phone-input .invalid-input,
  #email.invalid-input,
  .error-hint.invalid-input {
    color: var(--red-secondary);
    visibility: visible;
  }
`;

export default AddContact;
