import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../config/constants/types';
import { httpError } from '../../helpers/httpHelper';
import { getUserDetails, signUp, resendVerificationMail } from './userActions';

const jwtToken = localStorage.getItem('jwtToken')
  ? localStorage.getItem('jwtToken')
  : null;

const initialState: UserState = {
  userInfo: null,
  jwtToken,
  loading: false,
  success: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('jwtToken') // deletes token from storage
      state.userInfo = null;
      state.jwtToken = null;

    },
    login: (state, action) => {
      state.userInfo = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    });

    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      httpError(action.payload);
    });

    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });

    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      httpError(action.payload);
    });

    builder.addCase(resendVerificationMail.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(resendVerificationMail.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
    });

    builder.addCase(resendVerificationMail.rejected, (state, action) => {
      state.loading = false;
      httpError(action.payload);
    });
  }
});

export const { logout, login } = userSlice.actions
export default userSlice.reducer