import { MovieGenres } from '@/entities/Movie/types'

export const genreOptions = [
    { title: 'All', value: null },
    ...Object.entries(MovieGenres)
        .filter(([key]) => isNaN(Number(key)))
        .map(([key, value]) => ({ title: key, value: value as number }))
]
