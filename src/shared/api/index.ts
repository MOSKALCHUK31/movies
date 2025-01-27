import axios, { type AxiosInstance } from 'axios'

interface IBaseApiFields {
    error_code: number
    error_message: string
}

const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export { instance }
export type { IBaseApiFields }
