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
  const getSuggestedFollows = async (currentPage: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/users/suggested-follows?page=${currentPage}`);
    return result.data;
  }
  return { getSuggestedFollows }
}   
 
export function useSearchUserCallback() {
  const getSearchUser = async (data: any): Promise<UserJsonProps[]> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/search?query='+data);
    return result.data.results;
  }
  return { getSearchUser }
}    



export function useFollowerCallback() {
  const getFollower = async (data: any): Promise<UserJsonProps[]> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/users/followers/'+data);
    return result.data.results;
  }
  return { getFollower }
}   

export function useFollowingCallback() {
  const getFollowing = async (data: any): Promise<UserJsonProps[]> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/users/followings/'+data);
    return result.data.results;
  }
  return { getFollowing }
}   

export function useSelectGenreCallback() {
  const handleSelectGenre = async (postData: { genres: any }): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/users/set-genre', { postData });
    return result.data;
  }
  return { handleSelectGenre }
}