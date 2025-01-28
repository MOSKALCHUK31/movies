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
                />
            </v-col>
        </template>
        <template v-else>
            <v-col cols="12">
                <h4 class="text-h4 text-center font-weight-bold">List is empty</h4>
            </v-col>
        </template>
    </v-row>
</template>

<script setup lang="ts">
import AppLoader from '@/shared/ui/AppLoader/AppLoader.vue'
import AppError from '@/shared/ui/AppError/AppError.vue'
import MovieItem from './MovieItem.vue'
import { useHomeStore } from '@/entities/Movie/model/store.ts'
import { storeToRefs } from 'pinia'
import type { ISession } from '@/entities/Session'

const {
    sessions,
    filteredMovies,
    isLoading,
    isError
} = storeToRefs(useHomeStore())

const getMovieSessions = (movieId: number): ISession[] => {
    return sessions.value?.[movieId] || []
}
</script>
