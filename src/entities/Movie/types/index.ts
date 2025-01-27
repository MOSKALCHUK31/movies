import type { IBaseApiFields } from '@/shared/api'

interface IMovie {
    additional: string,
    description: string,
    genre: number,
    id: number
    image: string
    name: string
}

interface IMoviesResponse extends IBaseApiFields {
    data: IMovie[]
}

export type { IMovie, IMoviesResponse }
