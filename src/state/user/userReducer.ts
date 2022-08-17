import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../config/constants/types';
import { httpError } from '../../helpers/httpHelper';
import { getUserDetails, signUp, resendVerificationMail, accountSetup } from './userActions';

const jwtToken = localStorage.getItem('jwtToken')
  ? localStorage.getItem('jwtToken')
  : null;

let precachedUser = null;
if (jwtToken) {
  const userAccountId = localStorage.getItem('accountId')
    ? localStorage.getItem('accountId')
    : null;
  if (userAccountId) {
    precachedUser = { account_id: userAccountId }
  }
}

const initialState: UserState = {
  userInfo: precachedUser,
  jwtToken,
  loading: false,
  success: false,
  accountSetupSuccess: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('jwtToken')
      localStorage.removeItem('accountId')
      state.userInfo = null;
      state.jwtToken = null;
    },
    login: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("accountId", state.userInfo.account_id);
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
      localStorage.setItem("accountId", state.userInfo.account_id);
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

    builder.addCase(accountSetup.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(accountSetup.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.accountSetupSuccess = true;
    });

    builder.addCase(accountSetup.rejected, (state, action) => {
      state.loading = false;
      state.accountSetupSuccess = false;
      httpError(action.payload);
    });
  }
});

export const { logout, login } = userSlice.actions
export default userSlice.reducer