import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 将全局变量挂载在  Vue 上
Vue.prototype.app1_tempUrl = 'www.prototype.com'

const app = new Vue({
    ...App
})
app.$mount()
