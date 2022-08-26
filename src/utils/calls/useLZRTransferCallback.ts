import HttpClient from "../../utils/httpHelper";

export function useLZRTransferCallback() {
  const handleLZRTransfer = async (postData): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.post('/transactions/transfer', postData);
    return result.data;
  }
  return { handleLZRTransfer }
}