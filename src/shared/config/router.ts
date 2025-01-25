import { createRouter, createWebHistory } from 'vue-router'
import { MoviesView } from '@/views/MoviesView'
import { SessionsView } from '@/views/SessionsView';

export enum AppRoutes {
    MOVIES = 'movies',
    SESSIONS = 'sessions'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MOVIES]: '/',
    [AppRoutes.SESSIONS]: '/sessions',
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: RoutePaths.movies,
            name: AppRoutes.MOVIES,
            component: MoviesView,
        },
        {
            path: RoutePaths.sessions,
            name: AppRoutes.SESSIONS,
            component: SessionsView,
        }
    ]
})

export default router
