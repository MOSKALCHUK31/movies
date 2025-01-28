<template>
    <AppLoader v-if="isLoading" :size="70" />
    <AppError v-else-if="!isLoading && isError" />
    <v-row v-else>
        <template v-if="filteredMovies.length">
            <v-col
                v-for="movie in filteredMovies"
                :key="movie.id"
                cols="6"
            >
                <MovieItem
                    :sessions="getMovieSessions(movie.id)"
                    :movie="movie"
                    @on-click="onSelect"
                />
            </v-col>
        </template>
        <template v-else>
            <v-col cols="12">
                <h4 class="text-h4 text-center font-weight-bold">List is empty</h4>
            </v-col>
        </template>
        <MovieModal
            :is-open="isOpen"
            :movie="selectedMovie"
            @on-close="onClose"
        />
    </v-row>
</template>

<script setup lang="ts">
import AppLoader from '@/shared/ui/AppLoader/AppLoader.vue'
import AppError from '@/shared/ui/AppError/AppError.vue'
import MovieItem from './MovieItem.vue'
import MovieModal from '@/features/MovieInfo'

import { useMoviesStore } from '../model/store.ts'
import { storeToRefs } from 'pinia'
import type { ISession } from '@/entities/Session'
import type { IMovie } from '@/entities/Movie'
import { ref } from 'vue'

const {
    sessions,
    filteredMovies,
    isLoading,
    isError
} = storeToRefs(useMoviesStore())

const isOpen = ref(false)
const selectedMovie = ref<IMovie | null>(null)

const onSelect = (data: IMovie): void => {
    selectedMovie.value = data
    isOpen.value = true
}

const onClose = () => {
    isOpen.value = false
    selectedMovie.value = null
}

const getMovieSessions = (movieId: number): ISession[] => {
    return sessions.value?.[movieId] || []
}
</script>
