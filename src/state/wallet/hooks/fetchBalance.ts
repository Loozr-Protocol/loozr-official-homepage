import HttpClient from '../../../utils/httpHelper';

export function getLZRBalanceCallback() {
  const handleGetLZRBalanace = async (accountId: string): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/users/lzr-balance/${accountId}`);
    return result?.data;
  }
  return { handleGetLZRBalanace }
}
