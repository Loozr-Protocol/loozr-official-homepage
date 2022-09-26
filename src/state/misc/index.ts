import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageLoader: false
}

const miscSlice = createSlice({
  name: 'misc',
  initialState,
  reducers: {
    setPageLoaderStatus: (state, action) => {
      state.pageLoader = action.payload;
    },
  },
});

export const { setPageLoaderStatus } = miscSlice.actions
export default miscSlice.reducer