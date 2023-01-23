import { createSlice } from '@reduxjs/toolkit'

export const sendLzrSlice = createSlice({
  name: 'sendlzr',
  initialState: {
    value: "",
  },
  reducers: {
    addCase: (state, action) => { 
      state.value = action.payload
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { addCase} = sendLzrSlice.actions

export default sendLzrSlice.reducer