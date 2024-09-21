import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import SlotComp from './components/SlotComp.vue'

const app = createApp(App)
app.component('slot-comp', SlotComp)
createApp(App).mount('#app')
