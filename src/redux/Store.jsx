import { configureStore } from '@reduxjs/toolkit'
import fundsReducer from './FundsSlice'
import contactsReducer from './ContactsSlice'
import movementsSlice from './MovementsSlice'

export const store = configureStore({
  reducer: {
      funds: fundsReducer,
      contacts: contactsReducer,
      movements: movementsSlice
  }
})