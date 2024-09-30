import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const addDeviceToken = async (token: string, platform: string) => {
  const formData = new FormData();

  formData.append("token", token);
  formData.append('platform', platform)

  try {
    const response = await ApiClient({
      method: "POST",
      url: `user/addDeviceToken`,
      data: formData,
    });

    const { data, status } = response;
    if (status === 200) {
      return { data, status };
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
