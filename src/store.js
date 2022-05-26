import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./features/contacts/contacts";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
