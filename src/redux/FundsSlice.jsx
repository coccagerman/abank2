import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fundsAmount: 0
}

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    DEPOSIT: (state, action) => {
      state.fundsAmount += action.payload
    },
    TRANSFER: (state, action) => {
      state.fundsAmount -= action.payload
    }
  }
})

export const { DEPOSIT, TRANSFER } = fundsSlice.actions
export default fundsSlice.reducer