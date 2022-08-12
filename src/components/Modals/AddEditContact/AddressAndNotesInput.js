import React from "react";
import { addressNotesInputs } from "../../../data/data";

const AddressAndNotesInput = (props) => {
  const { address, notes, setAddress, setNotes, addressInput, notesInput } =
    props;

  return addressNotesInputs.map((input) => {
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
          required
        />
        <label>{input.label}</label>
      </div>
    );
  });
};

export default AddressAndNotesInput;
