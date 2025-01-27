import { instance } from '@/shared/api'
import type { AxiosResponse } from 'axios'
import type { IMoviesResponse } from '../types'

export const getMovies = ():Promise<AxiosResponse<IMoviesResponse>> => instance.get('/movies')
