import { createAsyncThunk } from "@reduxjs/toolkit"
import { useGetUserCallback, useResendVerificationLinkCallback, useSignUpCallback } from "./hooks/useAuth"

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (args, { rejectWithValue }) => {
    try {
      const { handleGetUser } = useGetUserCallback();
      const data = await handleGetUser();
      return data;
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