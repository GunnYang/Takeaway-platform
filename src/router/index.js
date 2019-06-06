/**
 * 路由模块 
 * */

import Vue from 'vue'
import VueRoter from 'vue-router'

// import Home from '../pages/Home/Home.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'
// import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'

// import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
// import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
// import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'

// 路由懒加载
const Home =() => import('../pages/Home/Home.vue')
const Order =() => import('../pages/Order/Order.vue')
const Profile =() => import('../pages/Profile/Profile.vue')
const Search =() => import('../pages/Search/Search.vue')
const Login =() => import('../pages/Login/Login.vue')
const Shop =() => import('../pages/Shop/Shop.vue')

const ShopGoods =() => import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopInfo =() => import('../pages/Shop/ShopInfo/ShopInfo.vue')
const ShopRatings =() => import('../pages/Shop/ShopRatings/ShopRatings.vue')




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
        },
        {
            path:'/shop',
            component:Shop,
            children:[
                {
                    path:'/shop/goods',
                    component:ShopGoods,
                },
                {
                    path:'/shop/info',
                    component:ShopInfo,
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings,
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                }
            ]
        },
    ]
})
