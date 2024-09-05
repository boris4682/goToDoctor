import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export interface IClinic {
  name: string;
  id: string;
  clinic_rating: string;
}

export const getAllClinics = async (): Promise<{
  data: IClinic[] | null;
  status: number;
}> => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: `service/getAllClinics`,
    });

    const { data, status } = response;
    if (status === 200 && response !== null && response) {
      return { data, status: 200 };
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
