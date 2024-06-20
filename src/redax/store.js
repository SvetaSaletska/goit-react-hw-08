import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import storage from "redux-persist/lib/storage";

const persistedContactReducer = persistReducer(
  {
    key: "items",
    storage,
    whitelist: ["items"],
  },
  contactReducer
);

const persistedFilterReducer = persistReducer(
  {
    key: "selectedName",
    storage,
    whitelist: ["name"],
  },
  filterReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: persistedFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
