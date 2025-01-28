import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getMovies } from '../api'
import { getSessions } from '@/entities/Session'
import type { IMovie } from '../types'
import type { IMovieSessions } from '@/entities/Session'
import { MovieGenres } from '../types'

export const useHomeStore = defineStore('home-view-store', () => {
    const movies = ref<IMovie[]>([])
    const sessions = ref<IMovieSessions | null>(null)
    const isLoading = ref(false)
    const isError = ref(false)
    const prompt = ref('')
    const selectedGenre = ref<MovieGenres | null>(null)

    const filteredMovies = computed<IMovie[]>(() => {
        const normalizedPrompt = prompt.value.trim().toLowerCase()
        const isPromptEmpty = !normalizedPrompt
        const isGenreSelected = selectedGenre.value !== null
        const selectedGenreValue = selectedGenre.value

        return movies.value.filter((item) => {
            const nameMatch = isPromptEmpty || item.name.toLocaleLowerCase().includes(normalizedPrompt)
            const genreMatch = !isGenreSelected || item.genre === selectedGenreValue
            return nameMatch && genreMatch
        })
    })

    const SET_MOVIES = (data: IMovie[]): void => {
        movies.value = [...data]
    }

    const SET_SESSIONS = (data: IMovieSessions): void => {
        sessions.value = { ...data }
    }

    const SET_PROMPT = (payload: string): void => {
        prompt.value = payload
    }

    const SET_SELECTED_GENRE = (payload: MovieGenres): void => {
        selectedGenre.value = payload
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
        prompt,
        selectedGenre,
        filteredMovies,
        SET_PROMPT,
        SET_SELECTED_GENRE,
        GET_MOVIES_AND_SESSIONS
    }
})
