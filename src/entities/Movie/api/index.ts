import { instance } from '@/shared/api'
import type { AxiosResponse } from 'axios'
import type { IMoviesResponse, MovieGenres } from '../types'

interface IGetMoviesParams {
    id?: number,
    name?: string,
    genres?: MovieGenres
}

export const getMovies = (data: IGetMoviesParams = {}):Promise<AxiosResponse<IMoviesResponse>> => {
    return instance.get('/movies', { params: data })
}
