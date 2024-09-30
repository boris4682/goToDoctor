import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const getAppointmentsForDoc = async (data: {
  token: string;
  month: string;
}) => {
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key as keyof { token: string; month: string }]);
  }

  try {
    const response = await ApiClient({
      method: "POST",
      url: `receptions/getAppointmentsForDoc`,
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
