import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const loginUser = async (userData: {
  login: string;
  password: string;
}) => {
  const formData = new FormData();
  for (var key in userData) {
    formData.append(
      key,
      userData[key as keyof { login: string; password: string }]
    );
  }
  try {
    const response = await ApiClient({
      method: "POST",
      url: `user/getAuthToken`,
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
