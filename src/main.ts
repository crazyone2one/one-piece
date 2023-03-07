import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './routers'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import 'uno.css'
import i18n from './plugins/i18n'

const app = createApp(App)
app.use(router).use(i18n)
app.mount('#app')
