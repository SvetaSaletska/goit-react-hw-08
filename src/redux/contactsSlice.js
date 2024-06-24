import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTasks, addContact, deleteContact } from "./contactsOps";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = true;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
  // reducers: {
  //   addContact(state, { payload }) {
  //     state.items.push(payload);
  //   },

  //   deleteContact: (state, action) => {
  //     const index = state.items.findIndex((item) => item.id === action.payload);
  //     state.items.splice(index, 1);
  //   },
  // },
});

export const visibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filtersContact) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtersContact.toLowerCase())
    );
  }
);

// export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;

export const contactReducer = contactsSlice.reducer;
