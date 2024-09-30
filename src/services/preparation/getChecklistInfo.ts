import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const getChecklistInfo = async (userData: {
  token: string;
  patientId: string;
  voteId: string;
}) => {
  const formData = new FormData();

  for (const key in userData) {
    formData.append(key, userData[key as keyof typeof userData]);
  }

  try {
    const response = await ApiClient({
      method: "POST",
      url: `preparation/getChecklistInfo`,
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
