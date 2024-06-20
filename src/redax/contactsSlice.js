import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    // addContact(state, action) {
    //   state.items += action.payload;
    // },
    addContact: {
      reducer(state, action) {
        state.items += action.payload;
      },
      prepare(newContact) {
        return {
          payload: {
            id: crypto.randomUUID(),
            ...newContact,
          },
        };
      },
    },

    deleteContact(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
