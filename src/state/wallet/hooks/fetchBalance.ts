import useSWR from 'swr'
import HttpClient from '../../../utils/httpHelper';

const REFRESH_BLOCK_INTERVAL = 12000

export function useGetLZRBalanceCallback() {
  const handleGetLZRBalanace = async (accountId: string): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/users/lzr-balance/${accountId}`);
    return result?.data;
  }
  return { handleGetLZRBalanace }
}

export const usePollLZRBalance = (accountId: string) => {
  const { handleGetLZRBalanace } = useGetLZRBalanceCallback();
  const { data, error } = useSWR(
    'getLZRBalance',
    async () => {
      const result = await handleGetLZRBalanace(accountId);

      return result;
    },
    {
      refreshInterval: REFRESH_BLOCK_INTERVAL,
    },
  )
  if (error) return null;
  return data;
}