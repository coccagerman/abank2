import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movements: []
}

export const movementsSlice = createSlice({
  name: 'movements',
  initialState,
  reducers: {
    UPDATEMOVEMENTS: (state, action) => {
      state.movements.push(action.payload)
    }
  }
})

export const { UPDATEMOVEMENTS } = movementsSlice.actions
export default movementsSlice.reducer