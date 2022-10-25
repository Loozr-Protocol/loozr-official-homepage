import HttpClient from "../../../utils/httpHelper";
import { HTTP_STATUS_CODES } from '../../../config/constants';

export function useAccountNameCheckCallback() {
  let isAccountAvailable = false;
  const nameCheckCallback = async (accountId: string): Promise<boolean> => {
    try {
      const httpClient = new HttpClient();
      await httpClient.axiosInstance.get(`/users/check-account-id/${accountId}`);
      isAccountAvailable = false;
    } catch (err: any) {
      if (err.response) {
        if (err.response.status === HTTP_STATUS_CODES.BAD_REQUEST) {
          isAccountAvailable = true;
        }
      }
    }

    return isAccountAvailable;
  }
  return { nameCheckCallback };

}