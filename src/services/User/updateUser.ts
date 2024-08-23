import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const updateUser = async (userData: {
  // email: string;
  name: string;
  last_name: string;
  personal_photo: string;
  birthday: string;
  gender: string;
  second_name: string;
  personal_phone: string;
  // phone: string;
  // specialization: string;
  // city: string;
}) => {
  const formData = new FormData();

  for (var key in userData) {
    formData.append(
      key,
      userData[
        key as keyof {
          // email: string;
          name: string;
          last_name: string;
          personal_photo: string;
          birthday: string;
          gender: string;
          second_name: string;
          personal_phone: string;
          // phone: string;

          // specialization: string;
          // city: string;
        }
      ]
    );

    const token = localStorage.getItem("userData");

    if (token) {
      formData.append("token", JSON.parse(token).auth_token);
    }
  }

  try {
    const response = await ApiClient({
      method: "POST",
      url: `user/updateUser`,
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
