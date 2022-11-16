import HttpClient from "../httpHelper";

export const getArtistCoinStat = async (id: number): Promise<any> => {
  const httpClient = new HttpClient();
  const result = await httpClient.axiosInstance.get(`/transactions/coin-stat/${id}`);
  return result.data;
}