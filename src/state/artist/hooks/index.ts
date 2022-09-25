import HttpClient from "../../../utils/httpHelper";

export function useGetArtistCallback() {
  const handleGetArtists = async (): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get('/users/artists');
    return result.data;
  }
  return { handleGetArtists }
}

export function useGetArtistDetailsCallback() {
  const handleGetArtists = async (id: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/users/artists/${id}`);
    return result.data;
  }
  return { handleGetArtists }
}

export function useBuyArtistTokenCallback() {
  const handleBuyToken = async (id: number, amount: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post(`/transactions/buy-artist-coin/${id}`, { amount });
    return result.data;
  }
  return { handleBuyToken }
}

export function useSellArtistTokenCallback() {
  const handleSellToken = async (id: number, amount: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post(`/transactions/sell-artist-coin/${id}`, { amount });
    return result.data;
  }
  return { handleSellToken }
}