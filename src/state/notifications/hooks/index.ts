import HttpClient from "../../../utils/httpHelper";

export function useGetNotificationsCallback() {
  const handleNotifications = async (nextCursor: string): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/notifications?cursor=${nextCursor}`);
    return result.data;
  }
  return { handleNotifications }
}