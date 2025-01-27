<template>
    <v-navigation-drawer :width="200">
        <v-list-item
            title="CINEMA"
            subtitle="Vuetify"
        />
        <v-divider />
        <v-list-item
            to="/"
            link
            title="Movies"
            prepend-icon="mdi-filmstrip"
        />
        <v-list-item
            to="/"
            link
            title="Sessions"
            prepend-icon="mdi-movie-open"
        />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
</script>
