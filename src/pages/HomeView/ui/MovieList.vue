<template>
    <v-card class="mx-4 my-2 pa-4">
        <v-row>
            <v-col
                v-for="movie in movies"
                :key="movie.id"
                cols="6"
            >
                <MovieItem
                    :sessions="getMovieSessions(movie.id)"
                    :movie="movie"
                />
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup lang="ts">
import MovieItem from './MovieItem.vue'
import { useHomeStore } from '../model/store.ts'
import { storeToRefs } from 'pinia'
import type {ISession} from '@/entities/Session';

const { sessions, movies } = storeToRefs(useHomeStore())

const getMovieSessions = (movieId: number): ISession[] => {
    return sessions.value?.[movieId] || []
}
</script>
