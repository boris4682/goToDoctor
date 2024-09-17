import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const getDoctorTypes = async () => {
  try {
    const response = await ApiClient({
      method: "GET",
      url: "/service/getDoctorTypes",
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error("Ошибка при загрузке специализаций", axiosError);
    return { data: [], status: axiosError.response?.status || 500 };
  }
};
