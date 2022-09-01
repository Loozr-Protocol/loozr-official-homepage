import HttpClient from "../../../utils/httpHelper";

interface AccountUpdateProps {
  username: string;
  website?: string;
  bio?: string;
  country?: string;
}

export function useUpdateProfileCallback() {
  const handleUpdateProfile = async (postData: AccountUpdateProps): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.put('/users/', postData);
    return result.data;
  }
  return { handleUpdateProfile }
}

export function useGetSuggestedFollowsCallback() {
  const getSuggestedFollows = async (): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/users/suggested-follows');
    return result.data.results;
  }
  return { getSuggestedFollows }
}