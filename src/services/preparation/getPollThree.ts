import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export interface IPollTree {
  category_id: string;
  category_name: string;
  picture_url: string;
}

export const getPollThree = async () => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `preparation/getPollThree`,
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
