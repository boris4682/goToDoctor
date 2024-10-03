import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export interface IDoctor {
  id: number;
  name: string;
  detail_picture: string;
  detail_text: string;
  code: string;
  service_list: string[];
  doctor_specialization: string;
}

export const getDoctorsDataByCategoryId = async (
  sectionId: string | string[],
  clinicId: string | string[]
) => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `doctors/getDoctorsDataByCategoryId?sectionId=${sectionId}&clinicId=${clinicId}`,
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
