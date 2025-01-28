<template>
    <v-dialog
        :model-value="isOpen"
        @update:model-value="onClose"
        width="auto"
    >
        <v-card
            max-width="800"
            title="Movie info"
        >
            <v-card-title v-html="movie?.name" />
            <v-card-subtitle>
                Жанр = {{ MovieGenres[movie?.genre || 0] }}
            </v-card-subtitle>
            <v-card-text v-html="movie?.description" />
            <template #actions>
                <v-btn
                    class="ms-auto"
                    text="CLOSE"
                    @click="onClose"
                />
            </template>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { type IMovie, MovieGenres } from '@/entities/Movie'

interface IMovieModalProps {
    isOpen: boolean,
    movie: IMovie | null
}

interface IMovieModalEmits {
    (e: 'on-close'): void
}

const emit = defineEmits<IMovieModalEmits>()
defineProps<IMovieModalProps>()

const onClose = (): void => {
    emit('on-close')
}
</script>
