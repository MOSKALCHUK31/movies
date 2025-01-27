import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getMovies } from '@/entities/Movie'
import { getSessions } from '@/entities/Session'
import type { IMovie } from '@/entities/Movie'
import type { IMovieSessions } from '@/entities/Session'

export const useHomeStore = defineStore('home-view-store', () => {
    const movies = ref<IMovie[]>([])
    const sessions = ref<IMovieSessions | null>(null)
    const isLoading = ref(false)
    const isError = ref(false)

    const SET_MOVIES = (data: IMovie[]): void => {
        movies.value = [...data]
    }

    const SET_SESSIONS = (data: IMovieSessions): void => {
        sessions.value = { ...data }
    }

    const GET_MOVIES_AND_SESSIONS = async (): Promise<void> => {
        try {
            isLoading.value = true
            const moviesPromise = getMovies()
            const sessionsPromise = getSessions()
            const [moviesResponse, sessionResponse] = await Promise.all([moviesPromise, sessionsPromise])

            SET_MOVIES(moviesResponse.data.data)
            SET_SESSIONS(sessionResponse.data.data)
        } catch(err) {
            isError.value = true
            console.error(err)
        } finally {
            isLoading.value = false
        }
    }

    return {
        movies,
        sessions,
        isLoading,
        isError,
        GET_MOVIES_AND_SESSIONS
    }
})
