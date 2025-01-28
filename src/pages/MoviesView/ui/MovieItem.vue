<template>
    <v-card hover @click="onSelect">
        <v-img
            :src="movie.image"
            height="400"
        />
        <v-card-title class="text-center text-h4 font-weight-black" v-html="movie.name"/>
        <v-card-text>
            <v-card>
                <v-list class="text-center">
                    <v-list-item
                        v-for="session in sessions"
                        :key="session.showdate"
                    >
                        <v-list-item-title class="text-h6">
                            {{ session.showdate }}
                        </v-list-item-title>
                        <div class="py-3 d-flex flex-wrap justify-center ga-1">
                            <v-btn
                                v-for="time in getTimeList(session.daytime)"
                                :key="time"
                                disabled
                                rounded="xl"
                                elevation="2"
                            >
                                {{ time }}
                            </v-btn>
                        </div>
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

interface IMovieItemEmits {
    (e: 'on-click', movie: IMovie): void
}

const emit = defineEmits<IMovieItemEmits>()
const props = defineProps<IMovieItemProps>()

const getTimeList = (movie: string): string[] => {
    return movie.split(';')
}

const onSelect = (): void => {
    emit('on-click', props.movie)
}
</script>
