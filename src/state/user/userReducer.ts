import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../../config/constants/types';
import { parseJwt } from '../../utils';
import { httpError } from '../../utils/httpHelper';
import { getUserDetails, signUp, resendVerificationMail, accountSetup, getIndividualProfile } from './userActions';

const jwtToken = localStorage.getItem('jwtToken')
  ? localStorage.getItem('jwtToken')
  : null;

let precachedUser = null;
if (jwtToken) {
  const userAccountId = localStorage.getItem('accountId')
    ? localStorage.getItem('accountId')
    : null;
  if (userAccountId) {
    precachedUser = { account_id: userAccountId, id: parseJwt(jwtToken)['id'] }
  }
}

const initialState: UserState = {
  userInfo: precachedUser,
  jwtToken,
  currentProfile: null,
  errorLoadingProfile: false,
  loading: false,
  success: false,
  signUpSuccess: false,
  verifySuccess: false,
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
    setCurrentUser: (state, action) => {
      state.currentProfile = action.payload;
    },
    login: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("accountId", state.userInfo.account_id);
    },
    updateProfile: (state, action) => {
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
      localStorage.setItem("accountId", state.userInfo.account_id);
    });

    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false;
      httpError(action.payload);
    });

    builder.addCase(getIndividualProfile.fulfilled, (state, action) => {
      state.errorLoadingProfile = false;
      state.currentProfile = action.payload;
    });

    builder.addCase(getIndividualProfile.rejected, (state, action) => {
      state.errorLoadingProfile = true;
      httpError(action.payload);
    });

    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.signUpSuccess = true;
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
      state.verifySuccess = true;
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

export const { logout, login, updateProfile } = userSlice.actions
export default userSlice.reducer