import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
app.use(store)

// app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                refetchOnReconnect: 'always',                
            }
        }
    }
})

app.use(router)
app.mount('#app')
