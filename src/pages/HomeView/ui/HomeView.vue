<template>
    <AppLoader v-if="isLoading" :size="70" />
    <AppError v-else-if="!isLoading && isError" />
    <MovieList v-else />
</template>

<script setup lang="ts">
import AppLoader from '@/shared/ui/AppLoader/AppLoader.vue'
import AppError from '@/shared/ui/AppError/AppError.vue'
import MovieList from './MovieList.vue'
import { onMounted } from 'vue'
import { useHomeStore } from '../model/store.ts'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { isLoading, isError } = storeToRefs(homeStore)

onMounted(homeStore.GET_MOVIES_AND_SESSIONS)
</script>
