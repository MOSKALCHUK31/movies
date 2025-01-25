import { createRouter, createWebHistory } from 'vue-router'
import { MoviesView } from '@/pages/MoviesView'
import { SessionsView } from '@/pages/SessionsView';

export enum AppRoutes {
    MOVIES = 'movies',
    SESSIONS = 'sessions'
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.MOVIES]: '/',
    [AppRoutes.SESSIONS]: '/sessions',
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: routePaths.movies,
            name: AppRoutes.MOVIES,
            component: MoviesView,
        },
        {
            path: routePaths.sessions,
            name: AppRoutes.SESSIONS,
            component: SessionsView,
        }
    ]
})

export default router
