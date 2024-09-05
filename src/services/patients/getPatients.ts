import { AxiosError } from "axios";
import { ApiClient } from "../Client";

export interface IPatient {
  patient_id: string;
  patient_gender: string;
  patient_user: string;
  patient_last_name: string;
  patient_u_name: string;
  patient_second_name: string;
  patient_date_birth: string;
  patient_email: string;
  patient_phone: string;
  photo: string;
}

export const getPatients = async (
  token: string
): Promise<{ data: IPatient[] | null; status: number }> => {
  const formData = new FormData();
  formData.append("token", token);

  try {
    const response = await ApiClient({
      method: "POST",
      url: `patients/getPatients`,
      data: formData,
    });

    const { data, status } = response;
    if (status === 200 && response !== null && response) {
      return { data, status: 200 };
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`);
      return { data: null, status };
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500;
    return { data: null, status: errorStatus };
  }
};

// export const getPatients = async (userData: { token: string }) => {
//   const formData = new FormData();
//   for (var key in userData) {
//     formData.append(
//       key,
//       userData[
//         key as keyof {
//           token: string;
//         }
//       ]
//     );
//   }

//   try {
//     const response = await ApiClient({
//       method: "POST",
//       url: `patients/getPatients`,
//       data: formData,
//     });

//     const { data, status } = response;
//     if (status === 200) {
//       return { data, status };
//     } else {
//       console.error(`Ошибка на сервере. Статус: ${status}`);
//       return { data: null, status };
//     }
//   } catch (error) {
//     const errorStatus = (error as AxiosError)?.response?.status || 500;
//     return { data: null, status: errorStatus };
//   }
// };
