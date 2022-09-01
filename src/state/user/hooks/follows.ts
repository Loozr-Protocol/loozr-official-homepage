import useSWR from 'swr';
import HttpClient from '../../../utils/httpHelper';
import { useGetSuggestedFollowsCallback } from './useAccount';

const REFRESH_INTERVAL = 9000;

export const usePollSuggestedFollows = () => {
  const { getSuggestedFollows } = useGetSuggestedFollowsCallback();
  const { data, error } = useSWR(
    'getSuggestedFollows',
    async () => {
      const result = await getSuggestedFollows();

      return result;
    },
    {
      refreshInterval: REFRESH_INTERVAL,
    },
  )
  if (error) return null;
  return data;
}

export function useFollowCallback() {
  const handleFollow = async (userId: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post(`/users/add-follow/${userId}`);
    return result.data;
  }
  return { handleFollow }
}