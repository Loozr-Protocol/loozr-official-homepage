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

export function useBecomeArtisteCallback() {
  const handleBecomeArtiste = async (data: any): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post(`/users/become-artist`, data);
    return result.data;
  }
  return { handleBecomeArtiste }
}

export function useArtisteSetupCallback() {
  const handleArtisteSetup = async ({account_id, founder_reward}: {account_id: string, founder_reward: number}): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post(`/users/artist-setup`, {creator_coin_id: account_id, founder_reward});
    return result.data;
  }
  return { handleArtisteSetup }
}

export function useGetArtistStatCallback() {
  const handleGetStat = async (id: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/transactions/coin-stat/${id}`);
    return result.data;
  }
  return { handleGetStat }
}

export function useGetArtistHodlersCallback() {
  const handleGetHodlers = async (id: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/transactions/coin-holders/${id}`);
    return result.data;
  }
  return { handleGetHodlers }
}

export function useGetHodlersBalanceCallback() {
  const handleGetHodlerBalance = async (id: number, accountId: string): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/transactions/coin-price/${id}/${accountId}`);
    return result.data;
  }
  return { handleGetHodlerBalance }
}