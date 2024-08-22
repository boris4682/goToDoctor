import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const createPatient = async (userData: {
  token: string;
  gender: string;
  lastName: string;
  name: string;
  secondName: string;
  dateBirth: string;
  email: string;
  phone: string;
}) => {
  const formData = new FormData();
  for (var key in userData) {
    formData.append(
      key,
      userData[
        key as keyof {
          token: string;
          gender: string;
          lastName: string;
          name: string;
          secondName: string;
          dateBirth: string;
          email: string;
          phone: string;
        }
      ]
    );
  }

  console.log(formData);

  try {
    const response = await ApiClient({
      method: "POST",
      url: `patients/createPatient`,
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
