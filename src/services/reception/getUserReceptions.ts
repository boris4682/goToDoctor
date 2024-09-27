import { AxiosError } from "axios";
import { ApiClient } from "../Client";

interface IReceptionParams {
  token: string;
  patientId: string;
  complete: string;
}

export const getUserReceptions = async ({
  token,
  patientId,
  complete,
}: IReceptionParams) => {
  try {
    const response = await ApiClient({
      method: "POST",
      url: `receptions/getUserReceptions`,
      data: {
        token,
        patientId,
        complete,
      },
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
