import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import * as modalModule from "../../../features/modal/modalSlice";
import * as contactsModule from "../../../features/contacts/contactsSlice";
import { validationFunction } from "../../../helpers/validation";
import NameAndSurnameInput from "./NameAndSurnameInput";
import PhoneAndEmailInput from "./PhoneAndEmailInput";
import AddressAndNotesInput from "./AddressAndNotesInput";
import AddAndEditButtons from "./AddAndEditButtons";

const AddEditContact = () => {
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
  const { darkMode } = useSelector((store) => store.themeMode);

  const { isShowAddContactModal, isShowEditContactModal, selectedContactId } =
    useSelector((store) => store.modal);
  const { contacts } = useSelector((store) => store.contacts);

  React.useEffect(() => {
    if (isShowEditContactModal) {
      const foundContact = contacts.find(
        (contact) => contact.phone === selectedContactId
      );

      setName(foundContact.name);
      setSurname(foundContact.surname);
      setPhone(foundContact.phone);
      setEmail(foundContact.mail);
      setAddress(foundContact.address);
      setNotes(foundContact.notes);
    }
    // eslint-disable-next-line
  }, []);

  const handleAddBtn = (modalName) => {
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

    if (modalName === "AddContact") {
      if (
        nameInput.current.value &&
        surnameInput.current.value &&
        !nameInput.current.value.match(textRegExp) &&
        !surnameInput.current.value.match(textRegExp) &&
        phoneInput.current.value.match(/^[0-9]+$/) &&
        !checkNumber.includes(phoneInput.current.value) &&
        (!emailInput.current.value ||
          emailInput.current.value.match(emailRegExp))
      ) {
        dispatch(
          contactsModule.addNewContact({
            name: name.toLowerCase(),
            surname: surname.toLowerCase(),
            phone,
            mail: email.toLowerCase(),
            address: address.toLowerCase(),
            notes: notes.toLowerCase(),
          })
        );
        dispatch(modalModule.showAddContactModal(false));
        dispatch(modalModule.handleModalOverlay(false));
      } else {
        return;
      }
    } else {
      if (
        nameInput.current.value &&
        surnameInput.current.value &&
        !nameInput.current.value.match(textRegExp) &&
        !surnameInput.current.value.match(textRegExp) &&
        phoneInput.current.value.match(/^[0-9]+$/) &&
        (!emailInput.current.value ||
          emailInput.current.value.match(emailRegExp)) &&
        ((checkNumber.includes(phoneInput.current.value) &&
          phoneInput.current.value === selectedContactId) ||
          (!checkNumber.includes(phoneInput.current.value) &&
            phoneInput.current.value !== selectedContactId))
      ) {
        const newContactsList = contacts.filter(
          (contact) => contact.phone !== selectedContactId
        );
        dispatch(contactsModule.refreshContactsList(newContactsList));
        dispatch(
          contactsModule.addNewContact({
            name: name.toLowerCase(),
            surname: surname.toLowerCase(),
            phone,
            mail: email.toLowerCase(),
            address: address.toLowerCase(),
            notes: notes.toLowerCase(),
          })
        );
        dispatch(modalModule.handleModalOverlay(false));
        dispatch(modalModule.showEditContactModal(false));
        dispatch(modalModule.showDeleteContactModal([false, phone]));
      } else {
        return;
      }
    }
  };

  const handleCancelBtn = () => {
    dispatch(modalModule.handleModalOverlay(false));
    dispatch(modalModule.showEditContactModal(false));
    dispatch(modalModule.showAddContactModal(false));
  };

  return (
    <StyledContainer
      className={darkMode ? "dark-mode" : ""}
      darkMode={darkMode}
    >
      <div className="new-con-main-info">
        <div className="info">
          {isShowAddContactModal ? "New Contact" : "Edit Contact"}
        </div>
        <form>
          <div className="inputs_name-surname">
            <NameAndSurnameInput
              name={name}
              surname={surname}
              setName={setName}
              setSurname={setSurname}
              nameInput={nameInput}
              surnameInput={surnameInput}
            />
          </div>
          <div className="inputs_phone-email">
            <PhoneAndEmailInput
              phone={phone}
              email={email}
              setPhone={setPhone}
              setEmail={setEmail}
              phoneInput={phoneInput}
              emailInput={emailInput}
            />
          </div>
        </form>
      </div>

      <div className="new-con-secondary-info">
        <form>
          <AddressAndNotesInput
            address={address}
            notes={notes}
            setAddress={setAddress}
            setNotes={setNotes}
            addressInput={addressInput}
            notesInput={notesInput}
          />
        </form>
      </div>
      <AddAndEditButtons
        handleAddBtn={handleAddBtn}
        handleCancelBtn={handleCancelBtn}
        isShowAddContactModal={isShowAddContactModal}
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border-radius: 0.5rem;
  width: 410px;
  height: 420px;
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: visible;
  z-index: 1;
  background-color: var(--white-dark);
  color: var(--grey-dark-secondary);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px, inset 0 0 1px #141e30;
  transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &.dark-mode {
    background-color: var(--dark-mode-2);
    color: var(--white-primary);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px, inset 0 0 1px #1a1d24;

    .new-con-main-info .info {
      color: var(--dark-mode-clr);
      text-shadow: none;
    }

    form input {
      color: var(--dark-mode-clr);
      border-bottom: 0.15rem solid var(--grey-semi-light);
    }
  }

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

  .inputs_name-surname,
  .inputs_phone-email {
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
    display: flex;
    justify-content: center;
    position: relative;
    transition: all 0.1s ease-in;
  }

  .address-input,
  .notes-input {
    position: relative;
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
    font-size: 1.2rem;
    font-family: inherit;
    text-transform: capitalize;
    background-color: transparent;
    color: var(--blue-primary);
  }

  .phone-input input,
  .email-input input {
    width: 100%;
    text-transform: none;
  }

  .name-input label,
  .surname-input label,
  .phone-input label,
  .email-input label,
  .address-input label,
  .notes-input label {
    font-size: 1.2rem;
    color: var(--grey-semi-light);
    position: absolute;
    left: 1.6rem;
    bottom: 0.2rem;
    transition: 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    pointer-events: none;
  }

  .phone-input label,
  .email-input label {
    left: 0.8rem;
  }

  form div input:focus,
  form div input:valid {
    border-bottom: ${(props) =>
      props.darkMode
        ? "0.15rem solid var(--grey-light)"
        : "0.15rem solid var(--grey-semi-light-2)"};
  }

  form div input:focus + label,
  form div input:valid + label {
    transform: translateY(-30px);
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: ${(props) =>
      props.darkMode ? "color: var(--white-primary)" : "var(--grey-semi-dark)"};
  }

  form div input:focus + label span,
  form div input:valid + label span {
    color: var(--red-secondary);
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

    button {
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

      &:hover {
        background-color: var(--grey-light);
      }

      &:active {
        -webkit-box-shadow: inset 1px 2px 2px #535557;
        -moz-box-shadow: inset 1px 2px 2px #535557;
        box-shadow: inset 1px 2px 2px #535557;
      }
    }
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

export default AddEditContact;
