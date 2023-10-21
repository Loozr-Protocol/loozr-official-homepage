import { number } from "yup";
import HttpClient from "../../../utils/httpHelper";

export function useLoginCallback() {
  const handleLogin = async (postData: { email: string; password: string }): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/login', postData);
    return result.data;
  }
  return { handleLogin }
}

export function useRequestPasswordResetCallback() {
  const handleRequestResetLink = async (postData: { email: string; }): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/password-reset', postData);
    return result.data;
  }
  return { handleRequestResetLink }
}

export function usePasswordResetCallback() {
  const handlePasswordReset = async (postData): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/password-reset-confirm', postData);
    return result.data;
  }
  return { handlePasswordReset }
}

export function useCheckPasswordResetDataCallback() {
  const checkDataValidity = async (id: string, token: string): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/users/password-reset-token-validity/${id}/${token}`);
    return result.data;
  }
  return { checkDataValidity }
}

export function useGetUserCallback() {
  const handleGetUser = async (userId: string | number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/users/${userId}`);
    return result.data;
  }
  return { handleGetUser }
}

export function useSignUpCallback() {
  const handleSignUp = async (postData: any): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/create-user', postData);
    return result.data;
  }
  return { handleSignUp }
}

export function useResendVerificationLinkCallback() {
  const handleResend = async (email: string): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/resend-link', { email });
    return result.data;
  }
  return { handleResend }
}

export function useAccountSetupCallback() {
  const handleAccountSetup = async (account_id: string): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/account-setup', { account_id });
    // const result = await httpClient.axiosInstance.post('/users/account-setup', { account_id });
    return result.data;
  }
  return { handleAccountSetup }
} 