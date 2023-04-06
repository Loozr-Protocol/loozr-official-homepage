import HttpClient from '../../../utils/httpHelper';

export function useFollowCallback() {
  const handleFollow = async (userId: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post(`/users/add-follow/${userId}`);
    return result.data;
  }
  return { handleFollow }
}

export function useUnFollowCallback() { 
  const handleUnFollow = async (userId: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post(`/users/unfollow/${userId}`);
    return result.data;
  }
  return { handleUnFollow }
}