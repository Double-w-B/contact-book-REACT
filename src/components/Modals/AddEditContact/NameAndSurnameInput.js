import React from "react";
import { nameSurnameInputs } from "../../../data/data";

const NameAndSurnameInput = (props) => {
  const { name, surname, setName, setSurname, nameInput, surnameInput } = props;

  return nameSurnameInputs.map((input) => {
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
          required
        />
        <label>
          {input.label}
          <span>*</span>
        </label>
        <div className="error-hint">invalid {input.name}</div>
        <div className="error-hint-required">{input.name} is required</div>
      </div>
    );
  });
};

export default NameAndSurnameInput;
