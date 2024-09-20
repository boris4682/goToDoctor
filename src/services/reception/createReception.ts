import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface ICreateReceptionData {
  token: string;
  doctorId: string;
  patientId: string | null;
  date: string | null;
  service: string | null;
}

export const createReception = async (data: ICreateReceptionData) => {
  try {
    const response = await ApiClient({
      method: "POST",
      url: "receptions/createReception",
      data,
    });

    if (response.status === 200) {
      return { data: response.data, status: 200 };
    } else {
      return { data: response.data, status: response.status };
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
