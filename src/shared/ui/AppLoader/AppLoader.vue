<template>
    <div class="h-100 d-flex justify-center align-center">
        <v-progress-circular
            :size="size"
            :width="5"
            color="purple"
            indeterminate
        ></v-progress-circular>
    </div>
</template>

<script setup lang="ts">
interface ILoaderProps {
    size: number
}

defineProps<ILoaderProps>()
</script>
