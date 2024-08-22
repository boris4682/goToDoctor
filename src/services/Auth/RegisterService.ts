import { AxiosError } from 'axios'
import { ApiClient } from '../Client'

export interface IUserData {
  name?: string
  last_name?: string
  email?: string
  phone?: string
  personal_photo?: any
  password?: string
  code?: string
  registerToken?: string
  isRepeat?: string
  agree?: boolean
  login?: string
}

export const createUser = async (userData: IUserData) => {
  const formData = new FormData()
  for (var key in userData) {
    if (userData[key as keyof IUserData]) {
      if (key === 'personal_photo') {
        formData.append(key, userData[key], 'personal_photo.jpeg')
      } else {
        formData.append(key, userData[key as keyof IUserData])
      }
    }
  }
  try {
    const response = await ApiClient({
      method: 'POST',
      url: `user/register/createUser/`,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData
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
