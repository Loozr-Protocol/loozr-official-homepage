import HttpClient from "../../../helpers/httpHelper";

export function useLoginCallback() {
  const handleLogin = async (postData: { email: string; password: string }): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/login', postData);
    return result.data;
  }
  return { handleLogin }
}

export function useGetUserCallback() {
  const handleGetUser = async (): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/users/');
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