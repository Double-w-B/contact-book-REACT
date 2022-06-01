import React from "react";
import { phoneEmailInputs } from "../../../data/data";

const PhoneAndEmailInput = (props) => {
  const { phone, email, setPhone, setEmail, phoneInput, emailInput } = props;

  return phoneEmailInputs.map((input) => {
    return (
      <div className={input.className} key={input.id}>
        <input
          ref={input.name === "phone" ? phoneInput : emailInput}
          type={input.name === "phone" ? "text" : "email"}
          id={input.id}
          name={input.name}
          placeholder={input.placeholder}
          maxLength={input.name === "phone" ? 9 : 32}
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
            <div className="error-hint-required">number is required</div>
            <div className="error-hint-number">number already exists</div>
          </>
        )}
      </div>
    );
  });
};

export default PhoneAndEmailInput;
