/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
//加载时间过滤器
import './filters'

import './mock/mockServer.js'   // 加载mockServer

// 注册全局组件mt-button    
Vue.component(Button.name,Button)
// 使用图片懒加载
Vue.use(VueLazyload, {
    loading
  })

new Vue({
    el:'#app',
    render:h => h(App),
    router,
    store,
})
