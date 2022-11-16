import { UserJsonProps } from '../../../config/constants/models/user';
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
  const getSuggestedFollows = async (): Promise<UserJsonProps[]> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/users/suggested-follows');
    return result.data.results;
  }
  return { getSuggestedFollows }
}  

export function useSelectGenreCallback() {
  const handleSelectGenre = async (postData: { genres: any }): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/set-genre', { postData });
    return result.data;
  }
  return { handleSelectGenre }
}