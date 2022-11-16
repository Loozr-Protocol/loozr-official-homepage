import HttpClient from "../../../utils/httpHelper";

export function useGetNotificationsCallback() {
  const handleNotifications = async (currentPage: number): Promise<any> => {
    const httpClient = new HttpClient();
    const result = await httpClient.axiosInstance.get(`/notifications?page=${currentPage}`);
    return result.data;
  }
  return { handleNotifications }
}