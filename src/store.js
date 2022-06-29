import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./features/contacts/contactsSlice";
import menuReducer from "./features/menu/menuSlice";
import modalReducer from "./features/modal/modalSlice";
import themeModeReducer from "./features/themeMode/themeModeSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    menu: menuReducer,
    modal: modalReducer,
    themeMode: themeModeReducer,
  },
});
