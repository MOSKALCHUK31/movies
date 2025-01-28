import type { IBaseApiFields } from '@/shared/api'

interface IMovie {
    additional: string,
    description: string,
    genre: MovieGenres,
    id: number
    image: string
    name: string
}

interface IMoviesResponse extends IBaseApiFields {
    data: IMovie[]
}

enum MovieGenres {
    ACTION = 0,
    ADVENTURES = 1,
    COMEDY = 2,
    DRAMA = 3,
    HORROR = 4,
    WESTERNS = 5
}

export type { IMovie, IMoviesResponse }
export { MovieGenres }
