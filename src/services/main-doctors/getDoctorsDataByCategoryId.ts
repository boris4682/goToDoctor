import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const getDoctorsDataByCategoryId = async (sectionId: string) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `doctors/getDoctorsDataByCategoryId?sectionId=${sectionId}`,
      // params: `sectionId=${sectionId}`,
    });

    const { data, status } = response;
    if (data) {
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
