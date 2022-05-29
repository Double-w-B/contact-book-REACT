export const uniqueFilteredLetters = (contacts) => {
  const filteredLetters = contacts.map((i) => {
    let firstLetter = i.name.slice(0, 1);
    return firstLetter;
  });

  const singleFilteredLetters = [...new Set(filteredLetters)];
  return singleFilteredLetters;
};

/* Hide active Submenu */
export const hideActiveSubmenu = () => {
  document.querySelectorAll(".submenu-icon img").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".contact-list li").forEach((contact) => {
    contact.classList.remove("showSubmenu");
    contact.lastElementChild.classList.remove("show");
  });
  document.querySelectorAll(".submenu-icon").forEach((icon) => {
    icon.classList.remove("show-icons");
  });
};

/* Handle onMouseOver and onClick for list of contacts  */
export const handleMouseOverList = (e) => {
  const element = e.target.lastElementChild;

  if (element?.classList?.contains("submenu")) {
    element.previousElementSibling.classList.add("show-icons");
  } else if (e.target.classList.contains("submenu-icon")) {
    e.target.classList.add("show-icons");
  } else if (e.target.closest(".submenu-icon")) {
    e.target.parentElement.classList.add("show-icons");
  } else {
    document.querySelectorAll(".submenu-icon").forEach((icon) => {
      if (!icon.firstElementChild.classList.contains("active"))
        icon.classList.remove("show-icons");
    });
  }
};

export const handleClickOnList = (e) => {
  const targetClass = e.target.classList;
  const liElm = e.target.closest(".contact-list li");
  const liElmImg = e.target.closest(".contact-list li img");

  if (
    liElm?.classList?.contains("showSubmenu") &&
    e.target.tagName === "IMG" &&
    !e.target.parentElement.classList.contains("contact") &&
    !e.target.parentElement.classList.contains("contact-img")
  ) {
    liElm?.classList?.remove("showSubmenu");
    liElm?.lastElementChild.classList?.remove("show");
    liElmImg?.classList?.remove("active");
    return;
  }

  if (
    !liElm?.classList?.contains("showSubmenu") &&
    e.target.tagName === "IMG" &&
    !e.target.parentElement.classList.contains("contact") &&
    !e.target.parentElement.classList.contains("contact-img")
  ) {
    document.querySelectorAll(".submenu-icon img").forEach((btn) => {
      btn.classList.remove("active");
    });

    document.querySelectorAll(".contact-list li").forEach((contact) => {
      contact.classList.remove("showSubmenu");
      contact.lastElementChild.classList.remove("show");
    });

    liElmImg?.classList.add("active");

    document.querySelectorAll(".submenu-icon").forEach((icon) => {
      if (!icon.firstElementChild.classList.contains("active")) {
        icon.classList.remove("show-icons");
      }
    });

    liElm?.classList.add("showSubmenu");
    liElm?.lastElementChild.classList.add("show");
    return;
  }

  /* Hide submenu icon & submenu on a side click */
  (targetClass.contains("first-letter") ||
    targetClass.contains("list__contacts")) &&
    hideActiveSubmenu();
};
