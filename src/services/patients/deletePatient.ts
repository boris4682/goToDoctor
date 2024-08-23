import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const deletePatient = async (token: string, patientId: string) => {
  const formData = new FormData();

  formData.append("token", token);
  formData.append("patientId", patientId);

  try {
    const response = await ApiClient({
      method: "POST",
      url: `patients/deletePatient`,
      data: formData,
    });

    const { status } = response;
    if (status === 200) {
      return { status };
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};
