import { instance } from '@/shared/api'
import type { IBaseApiFields } from '@/shared/api'
import type { AxiosResponse } from 'axios'
import type { IMovieSessions } from '../types'

interface ResponseData extends IBaseApiFields {
    data: IMovieSessions
}

export const getSessions = ():Promise<AxiosResponse<ResponseData>> => {
    return instance.get('/movieShows')
}
