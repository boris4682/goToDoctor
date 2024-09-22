import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export const sendEmailCode = async (email: string) => {
  try {
    const response = await ApiClient({
      method: "POST",
      url: "user/resetAuthSend",
      data: { email },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(
        `Ошибка при отправке кода: ${error.response.data.message}`
      );
    } else {
      throw new Error("Ошибка при отправке кода");
    }
  }
};

export const checkCode = async (code: string) => {
  try {
    const response = await ApiClient({
      method: "POST",
      url: "user/checkCode",
      data: { code },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(
        `Ошибка при проверке кода: ${error.response.data.message}`
      );
    } else {
      throw new Error("Ошибка при проверке кода");
    }
  }
};

export const changePassword = async (
  login: string,
  password: string,
  code: string
) => {
  try {
    const response = await ApiClient({
      method: "POST",
      url: "user/changePassword",
      data: { login, password, code },
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw new Error(
        `Ошибка при смене пароля: ${error.response.data.message}`
      );
    } else {
      throw new Error("Ошибка при смене пароля");
    }
  }
};
