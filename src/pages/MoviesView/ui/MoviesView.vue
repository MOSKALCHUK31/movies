<template>
    <div>
        <div class="mx-4 my-2 pa-4">
            <h4 class="font-weight-black text-h4">
                MOVIES LIST
            </h4>
            <v-divider />
            <MovieSearch />
            <MovieList />
        </div>
    </div>
</template>

<script setup lang="ts">
import MovieSearch from './MovieSearch.vue'
import MovieList from './MovieList.vue'
import { onMounted } from 'vue'
import { useMoviesStore } from '../model/store.ts'

const moviesStore = useMoviesStore()

onMounted(moviesStore.GET_MOVIES_AND_SESSIONS)
</script>
