<template>
    <div class="my-10">
        <v-form class="d-flex ga-4">
            <v-text-field
                label="Search by name"
                @update:model-value="onInput"
            />
            <v-select
                max-width="400"
                :items="genreOptions"
                label="Search by genre"
                @update:model-value="onSelect"
            />
        </v-form>
    </div>
</template>

<script setup lang="ts">
import { genreOptions } from '../lib'
import { MovieGenres } from '@/entities/Movie/types'
import { useHomeStore } from '@/entities/Movie/model/store.ts'
import { debounce } from '@/shared/lib/helpers.ts'

const homeStore = useHomeStore()

const onSelect = (value: MovieGenres): void => {
    homeStore.SET_SELECTED_GENRE(value)
}

const onInput = debounce((value: string) => {
    homeStore.SET_PROMPT(value)
})
</script>
