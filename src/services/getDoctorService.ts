import { AxiosError } from 'axios'
import { ApiClient } from './Client'

export const getDoctors = async () => {
  try {
    const response = await ApiClient({
      method: 'GET',
      url: `doctors/getDoctorsThree`,
    })

    const { data, status } = response
    if (status === 200) {
      return { data, status }
    } else {
      console.error(`Ошибка на сервере. Статус: ${status}`)
      return { data: null, status }
    }
  } catch (error) {
    const errorStatus = (error as AxiosError)?.response?.status || 500
    return { data: null, status: errorStatus }
  }
}
