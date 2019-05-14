/**
 * 路由模块 
 * */

import Vue from 'vue'
import VueRoter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

 Vue.use(VueRoter)

 export default new VueRoter({
    // 去掉地址中的#
    mode: 'history',
    // 引用路由
    routes:[
        {
            path: '/home',
            component:Home,
            meta:{
                showFooter: true
            }
        },
        {
            path: '/profile',
            component:Profile,
            meta:{
                showFooter: true
            }
        },
        {
            path: '/order',
            component:Order,
            meta:{
                showFooter: true
            }
        },
        {
            path: '/search',
            component:Search,
            meta:{
                showFooter: true
            }
        },
        {
            path: '',
            redirect: '/home',
            meta:{
                showFooter: true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                showFooter: false
            }
        }
    ]
})
