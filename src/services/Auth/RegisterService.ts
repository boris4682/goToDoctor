// RegisterService.ts
import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export interface IUserData {
  name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  personal_photo?: any;
  password?: string;
  code?: string;
  registerToken?: string;
  isRepeat?: string;
  agree?: boolean;
  login?: string;
  specialization?: number;
}

export const sendEmailCodeApi = async (email: string) => {
  try {
    const response = await ApiClient({
      method: "POST",
      url: "user/sendEmailCode",
      data: { email },
    });
    if (response.data && response.data.success === false) {
      return { data: response.data, status: 400 };
    }
    return response;
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};

export const createUser = async (userData: IUserData) => {
  const formData = new FormData();

  for (var key in userData) {
    if (
      userData[key as keyof IUserData] !== undefined &&
      userData[key as keyof IUserData] !== null &&
      userData[key as keyof IUserData] !== ""
    ) {
      if (key === "personal_photo") {
        formData.append(key, userData[key], "personal_photo.jpeg");
      } else {
        formData.append(key, userData[key as keyof IUserData]);
      }
    }
  }

  try {
    const response = await ApiClient({
      method: "POST",
      url: "user/addNewUser",
      data: formData,
    });

    if (response.data && response.data.success === false) {
      return { data: response.data, status: 400 };
    }

    const { data, status } = response;
    return { data, status };
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};

export const loginUser = async (userData: {
  login: string;
  password: string;
}) => {
  const formData = new FormData();
  for (var key in userData) {
    formData.append(
      key,
      userData[key as keyof { login: string; password: string }]
    );
  }
  try {
    const response = await ApiClient({
      method: "POST",
      url: `user/getAuthToken`,
      data: formData,
    });

    const { data, status } = response;
    if (status === 200) {
      localStorage.setItem("userData", JSON.stringify(data.user));
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
