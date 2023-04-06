import { createAsyncThunk } from "@reduxjs/toolkit";
import { jsonToUser } from "../../utils";
import { useGetSuggestedFollowsCallback } from "./hooks/useAccount";
import { useGetUserCallback, useResendVerificationLinkCallback, useSignUpCallback, useAccountSetupCallback } from "./hooks/useAuth"

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (userId: number, { rejectWithValue }) => {
    const { handleGetUser } = useGetUserCallback();
    try {
      const result = await handleGetUser(userId);
      const user = jsonToUser(result);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getIndividualProfile = createAsyncThunk(
  'user/getIndividualProfile',
  async (accountDomain: string, { rejectWithValue }) => {
    const { handleGetUser } = useGetUserCallback();
    try {
      const result = await handleGetUser(accountDomain);
      const user = jsonToUser(result);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
);

export const resendVerificationMail = createAsyncThunk('user/resendVerificationMail', async (email: string, { rejectWithValue }) => {
  try {
    const { handleResend } = useResendVerificationLinkCallback();
    const data = await handleResend(email);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const accountSetup = createAsyncThunk('user/accountSetup', async ({ account_id }: { account_id: string }, { rejectWithValue }) => {
  try {
    const { handleAccountSetup } = useAccountSetupCallback();
    const result = await handleAccountSetup(account_id);
    const user = jsonToUser(result);
    return user;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getSuggestedUsers = createAsyncThunk(
  'users/getSuggestedUsers',
  async (nextCursor: string = '', { rejectWithValue }) => {
    const { getSuggestedFollows } = useGetSuggestedFollowsCallback();
    try {
      const result = await getSuggestedFollows(nextCursor);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)