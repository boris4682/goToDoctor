import { ApiClient } from "../Client"; 
import { AxiosError } from "axios";

export const getPatientInfo = async (data: {
  token: string;
  patientId: string;
}) => {
  const formData = new FormData();

  formData.append("token", data.token);
  formData.append("patientId", data.patientId);

  try {
    const response = await ApiClient({
      method: "POST",
      url: "patients/getPatientInfo", 
      data: formData,
    });

    const { data: responseData, status } = response;

    if (status === 200) {
      return { data: responseData, status };
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    console.error(`Ошибка при запросе данных о пациенте: ${errorStatus}`);
    return { data: null, status: errorStatus };
  }
};
