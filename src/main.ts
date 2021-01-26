import { createApp } from 'vue'
import App from './App.vue'

import VueBrickLayout from '../lib/main'

const app = createApp(App)
app.use(VueBrickLayout)
app.mount('#app')
