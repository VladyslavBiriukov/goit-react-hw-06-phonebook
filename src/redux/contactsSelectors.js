// export const getContacts = state => {
//   return state.contacts.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(state.contacts.query)
//   );
// };

// export const getFilter = state => state.contacts.filter;

import { createSelector } from "@reduxjs/toolkit";

const getContactsState = state => state.contacts;

export const getContacts = createSelector(
  [getContactsState],
  contactsState => {
    const query = contactsState.query.toLowerCase();
    return contactsState.contacts.filter(contact =>
      contact.name.toLowerCase().includes(query)
    );
  }
);

export const getFilter = state => state.contacts.filter;