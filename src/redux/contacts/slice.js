import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) =>
    builder
      // fetch
      .addCase(fetchContacts.pending, (s) => {
        s.isLoading = true;
        s.error = null;
      })
      .addCase(fetchContacts.fulfilled, (s, { payload }) => {
        s.isLoading = false;
        s.items = payload;
      })
      .addCase(fetchContacts.rejected, (s, { payload }) => {
        s.isLoading = false;
        s.error = payload;
      })
      // add
      .addCase(addContact.pending, (s) => {
        s.isLoading = true;
      })
      .addCase(addContact.fulfilled, (s, { payload }) => {
        s.isLoading = false;
        s.items.push(payload);
      })
      .addCase(addContact.rejected, (s, { payload }) => {
        s.isLoading = false;
        s.error = payload;
      })
      // delete
      .addCase(deleteContact.pending, (s) => {
        s.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (s, { payload }) => {
        s.isLoading = false;
        s.items = s.items.filter((c) => c.id !== payload.id);
      })
      .addCase(deleteContact.rejected, (s, { payload }) => {
        s.isLoading = false;
        s.error = payload;
      })
      // logout'ta temizle
      .addCase(logout.fulfilled, (s) => {
        s.items = [];
        s.error = null;
        s.isLoading = false;
      }),
});

export default contactsSlice.reducer;
