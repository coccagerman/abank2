import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: []
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    ADDCONTACTS: (state, action) => {
      state.contacts = action.payload
    }
  }
})

export const { ADDCONTACTS } = contactsSlice.actions
export default contactsSlice.reducer