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