import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const updateDoctorInfo = async (
  userData: {
    detailText: string;
  },
  photo: File
) => {
  const formData = new FormData();

  for (var key in userData) {
    formData.append(
      key,
      userData[
        key as keyof {
          detailText: string;
        }
      ]
    );

    const token = localStorage.getItem("userData");

    if (token) {
      formData.append("token", JSON.parse(token).auth_token);
    }
  }

  formData.append("photo", photo);

  try {
    const response = await ApiClient({
      method: "POST",
      url: `user/updateDoctorInfo`,
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
