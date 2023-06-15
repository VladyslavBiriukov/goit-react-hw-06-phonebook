// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialStateContacts = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };


// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialStateContacts,

//   reducers: {
//     addContact(state, action) {
//       const contact = {
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       };

//       state.contacts.push(contact);
//     },
//     deleteContact: {
//       reducer(state, action) {
//         state.contacts = state.contacts.filter(e => e.id !== action.payload);
//       },
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const getContacts = state => state.contacts.contacts;



import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
      prepare: contact => {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  filterContacts,
  readContactsFromLocalStorage,
} = contactsSlice.actions;

const contactsReducer = contactsSlice.reducer;

export const persistedReducer = persistReducer(persistConfig, contactsReducer);