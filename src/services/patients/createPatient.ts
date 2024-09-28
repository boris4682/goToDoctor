import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const createPatient = async (
  userData: {
    gender: string;
    lastName: string;
    name: string;
    secondName: string;
    dateBirth: string;
    email: string;
    phone: string;
  },
  file: File | null
) => {
  const formData = new FormData();
  const token = localStorage.getItem("userData");

  if (token) {
    formData.append("token", JSON.parse(token).auth_token);
  }

  for (let key in userData) {
    if (key == 'token') continue;

    formData.append(
      key,
      userData[
        key as keyof {
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

  formData.append("photo", file ?? "");

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
export const getPatient = async (token: string, patientId: string) => {
  const formData = new FormData();
  formData.append("token", token);
  formData.append("patientId", patientId);

  try {
    const response = await ApiClient({
      method: "POST",
      url: `patients/getPatientInfo`,
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
export const updatePatient = async (
  patientId: string,
  userData: {
    token: string;
    gender: string;
    lastName: string;
    name: string;
    secondName: string;
    dateBirth: string;
    email: string;
    phone: string;
  },
  file: File | null
) => {
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

  formData.append("photo", file ?? "");
  formData.append("patientId", patientId);

  try {
    const response = await ApiClient({
      method: "POST",
      url: `patients/updatePatient`,
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
