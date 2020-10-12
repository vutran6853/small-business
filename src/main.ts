import { createApp } from 'vue'
import App from './App'
import router from './router/routers'

const app = createApp(App)
app.use(router)
app.mount('#app')
