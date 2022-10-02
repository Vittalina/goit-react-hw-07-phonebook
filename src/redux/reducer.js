import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = { items: [] };

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return { items: [...state.items, action.payload] };
  },
  [deleteContact]: (state, action) => {
    return {
      items: state.items.filter(contact => contact.id !== action.payload),
    };
  },
});

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
  [setFilter]: (state, action) => {
    return action.payload;
  },
});
