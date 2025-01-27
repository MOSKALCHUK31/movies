import { createRouter, createWebHistory } from 'vue-router'

export enum AppRoutes {
    HOME = 'home'
}

export const routePaths: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/'
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: routePaths.home,
            name: AppRoutes.HOME,
            component: () => import('@/pages/HomeView')
        }
    ]
})

export default router
