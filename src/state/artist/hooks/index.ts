import HttpClient from "../../../utils/httpHelper";

export function useGetArtistCallback() {
  const handleGetArtists = async (): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/users/artists');
    return result.data;
  }
  return { handleGetArtists }
}