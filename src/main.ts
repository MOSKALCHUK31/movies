import { createApp } from 'vue'
import App from '@/app/App.vue'
import router from '@/shared/config/router.ts'
import vuetify from '@/shared/config/vuetify.ts'
import pinia from '@/shared/config/pinia.ts'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
