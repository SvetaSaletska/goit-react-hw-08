import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../redux/contacts/contactsSlice";
import { filterReducer } from "../redux/filters/filtersSlice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
