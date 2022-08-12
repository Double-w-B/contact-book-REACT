/* Invalid data validation */
const invalidItem = (elm) => {
  const siblingElement = [...elm.current.parentElement.children].find(
    (el) => el.className === "error-hint"
  );

  elm.current.classList.add("invalid-input");
  siblingElement.classList.add("invalid-input");

  setTimeout(() => {
    elm.current.classList.remove("invalid-input");
    siblingElement.classList.remove("invalid-input");
  }, 1500);
};

/* Required data validation */
const requiredInput = (elm) => {
  const siblingElement = [...elm.current.parentElement.children].find(
    (el) => el.className === "error-hint-required"
  );

  elm.current.classList.add("invalid-input");
  siblingElement.classList.add("invalid-input");

  setTimeout(() => {
    elm.current.classList.remove("invalid-input");
    siblingElement.classList.remove("invalid-input");
  }, 1500);
};

/* Same number validation */
const unavailableNumber = (elm) => {
  const siblingElement = [...elm.current.parentElement.children].find(
    (el) => el.className === "error-hint-number"
  );
  elm.current.classList.add("invalid-input");
  siblingElement.classList.add("invalid-input");

  setTimeout(() => {
    elm.current.classList.remove("invalid-input");
    siblingElement.classList.remove("invalid-input");
  }, 1500);
};

export const validationFunction = (
  inputName,
  inputSurname,
  inputPhone,
  inputEmail,
  checkNumber,
  textRegExp,
  emailRegExp
) => {
  /* Required data validation */
  !inputName.current.value && requiredInput(inputName);
  !inputSurname.current.value && requiredInput(inputSurname);
  !inputPhone.current.value && requiredInput(inputPhone);

  /* Invalid data validation */
  inputName.current.value.match(textRegExp) && invalidItem(inputName);
  inputSurname.current.value.match(textRegExp) && invalidItem(inputSurname);

  inputPhone.current.value &&
    !inputPhone.current.value.match(/^[0-9]+$/) &&
    invalidItem(inputPhone);

  inputEmail.current.value &&
    !inputEmail.current.value.match(emailRegExp) &&
    invalidItem(inputEmail);

  /* Same number validation */

  if (
    inputName.current.value &&
    inputSurname.current.value &&
    !inputName.current.value.match(textRegExp) &&
    !inputSurname.current.value.match(textRegExp) &&
    (!inputEmail.current.value || inputEmail.current.value.match(emailRegExp))
  ) {
    checkNumber.includes(inputPhone.current.value) &&
      unavailableNumber(inputPhone);
  }
};
