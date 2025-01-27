<template>
    <v-card>
        <v-img
            :src="movie.image"
            height="400"
        />
        <v-card-title class="text-center" v-html="movie.name"/>
        <v-card-text>
            <v-card>
                <v-list class="text-center">
                    <v-list-item
                        v-for="session in sessions"
                        :key="session.showdate"
                    >
                        <v-list-item-title class="text-bold">
                            {{ session.showdate }}
                        </v-list-item-title>
                        <v-btn-group class="py-3">
                            <v-btn
                                v-for="time in getTimeList(session.daytime)"
                                :key="time"
                                rounded="xl"
                                elevation="2"
                            >
                                {{ time }}
                            </v-btn>
                        </v-btn-group>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import type { IMovie } from '@/entities/Movie'
import type { ISession } from '@/entities/Session'

interface IMovieItemProps {
    movie: IMovie,
    sessions: ISession[] | null
}

defineProps<IMovieItemProps>()

const getTimeList = (movie: string): string[] => movie.split(';')
</script>
