import { createAsyncThunk } from "@reduxjs/toolkit"
import { useGetUserCallback, useResendVerificationLinkCallback, useSignUpCallback, useAccountSetupCallback } from "./hooks/useAuth"

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (userId: number, { rejectWithValue }) => {
    const { handleGetUser } = useGetUserCallback();
    try {
      const result = await handleGetUser(userId);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
export const signUp = createAsyncThunk(
  'user/signUp',
  async (postData: any, { rejectWithValue }) => {
    try {
      const { handleSignUp } = useSignUpCallback();
      const data = await handleSignUp(postData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const resendVerificationMail = createAsyncThunk('user/resendVerificationMail', async (email: string, { rejectWithValue }) => {
  try {
    const { handleResend } = useResendVerificationLinkCallback();
    const data = await handleResend(email);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const accountSetup = createAsyncThunk('user/accountSetup', async ({account_id}: {account_id: string}, { rejectWithValue }) => {
  try {
    const { handleAccountSetup } = useAccountSetupCallback();
    const data = await handleAccountSetup(account_id);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
})