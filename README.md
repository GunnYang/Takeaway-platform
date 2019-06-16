### Takeaway-platform

------

> 这是一个基于Vue全家桶开发的仿外卖平台，动画部分主要是用Vue过渡&动画

> 如果你觉得这个Vue练手项目还不错，您可以右上角给个star支持下，十分感谢！



### 前言

----

之前花时间在Vue文档把 `Vue基础` + `Vue Cli` 看了一遍，再加上自己敲一些上面的案例，然而还是不太理解Vue的用法。所以在git上找一个硅谷外卖的项目，拿过来练练手。通过这次练习，我基本会使用了Vue全家桶(Api用的少)，在期间学习的时候，我大致了解了webpack，学习了mint-ui库以及better-scroll库。



### 前端技术栈

---

**Vue + Vue-router + Vue CLI + Vuex + axios + flex**



### 项目运行

------

```
# 克隆项目到本地
git clone https://github.com/GunnYang/Takeaway-platform.git

# 切换到项目所在文件夹
cd Takeaway-platform

# 安装依赖
npm install

# 本地开发，开启后台，浏览器访问 http://localhost:8080即可
npm start

# 构建生产
npm run build
```



### 目录结构

-----

<font size=1>

```│  .editorconfig
│  .gitignore
│  babel.config.js
│  package-lock.json
│  package.json
│  README.md
│  vue.config.js			//跨域
├─node_modules				//依赖包
├─public
│  │  favicon.ico
│  │  index.html			//入口html文件
│  │  manifest.json
│  │  reset.css				//初始化CSS
│  │  robots.txt
│  │  
│  └─img				//一些初始化vue图标
│      └─icons
│              android-chrome-192x192.png
│              
└─src
    │  App.vue				//入口
    │  main.js				//入口js
    ├─api				//ajax
    │      ajax.js
    │      index.js
    ├─common				//一些通用样式和资源
    │  ├─css
    │  │      reset.css
    │  ├─imgs
    │  │      loading.gif
    │  └─stylus
    │          mixins.styl
    ├─components			//组件
    │  ├─AlertTip
    │  │      AlertTip.vue  
    │  ├─CartControl
    │  │      CartControl.vue  
    │  ├─Food
    │  │      Food.vue   
    │  ├─FooterGudie
    │  │      FooterGudie.vue  
    │  ├─HeaderTop
    │  │      HeaderTop.vue  
    │  ├─ShopCart
    │  │      ShopCart.vue  
    │  ├─ShopHeader
    │  │      ShopHeader.vue  
    │  ├─ShopList
    │  │  │  ShopList.vue
    │  │  │  
    │  │  └─images
    │  │          shop_back.svg
    │  │          
    │  └─Star
    │      │  Star.vue
    │      │  
    │      └─images
    │              star24_half@2x.png    
    ├─filters				//时间过滤器
    │      index.js
    ├─mock					//模拟数据
    │      data.json
    │      mockServer.js   
    ├─pages					//页面
    │  ├─Home
    │  │  │  Home.vue
    │  │  │  
    │  │  └─images
    │  │          msite_back.svg       
    │  ├─Login
    │  │  │  Login.vue
    │  │  │  
    │  │  └─images
    │  │          captcha.svg        
    │  ├─Order
    │  │  │  Order.vue
    │  │  │  
    │  │  └─images
    │  │      └─order
    │  │              person.png           
    │  ├─Profile
    │  │      Profile.vue    
    │  ├─Search
    │  │      Search.vue    
    │  └─Shop
    │      │  Shop.vue
    │      │  
    │      ├─ShopGoods
    │      │      ShopGoods.vue
    │      │      
    │      ├─ShopInfo
    │      │      ShopInfo.vue
    │      │      
    │      └─ShopRatings
    │              ShopRatings.vue          
    ├─router				//vue路由
    │      index.js
    │      
    └─store					//vuex
            actions.js
            getters.js
            index.js
            mutation-types.js
            mutations.js
            state.js   
```

 <font>

### 技术总结

------

#### 1.跨域问题

可以使用Vue CLI的一个配置文件vue.config.js来配置跨域问题，其中有一个devServer.proxy可以解决前端和后端API服务器没有运行在同一个主机上的问题

```
  proxy: {
           // 匹配所有以 '/api'开头的请求路径
            '/api':{       
                target: 'http://localhost:4000',	// 代理目标的基础路径 
                ws: true,
                changeOrigin: true,					// 支持跨域
                pathRewrite: {					// 重写路径: 去掉路径中开头的'/api'
                   '^/api':''
                }
            }
        }
```

#### 2.路由懒加载和图片懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了

​	```	const Home =() => import('../pages/Home/Home.vue')```

当访问一个页面的时候，先把img元素或是其他元素的背景图片路径替换成一张大小为固定图片的路径（这样就只需请求一次），只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径，让图片显示出来。这就是图片懒加载。不仅可以减轻服务器的压力，而且可以让加载好的页面更快地呈现在用户面前（用户体验好）。

```
# 首先引入
import VueLazyload from 'vue-lazyload'

# 然后引入一个加载图片
import loading from './common/imgs/loading.gif'

# 在入口函数使用
Vue.use(VueLazyload, {
    loading
  })
  
# 在你需要图片懒加载的地方使用
<img v-lazy="需要加载的图片路径">
```

#### 3.使用mint-ui和better-scroll第三方库

​	[mint-ui](http://mint-ui.github.io/)是一个基于vue的移动端组件库，它里面有很多现成的UI框架。

```
# 首先下载mint-ui
npm install mint-ui --save

# 在入口JS引入和使用
import {Button} from 'mint-ui'
Vue.component(Button.name,Button)	//由于我用的只有按钮，所有只有button

#在babel.config.js配置它
plugins:[
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]

# 在组件里面使用mint-ui

```

​	[better-scroll](https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md)是一个重点解决移动端（已支持 PC）各种滚动场景需求的插件，它的核心是原理是：父容器为 wrapper，它会有**固定的高度**。 content是父容器的**第一个子元素**，它的高度会随着内容的大小而撑高。那么，当 content 的高度不超过父容器的高度，是不能滚动的，而它一旦超过了父容器的高度，我们就可以滚动内容区了。

为了更加直观，我们再来看一张图：

![滚动原理](D:\Takeaway-platform\public\img\1.png)

```
# 这是它的html结构
<div class="wrapper">
  <ul class="content">
    <li>...</li>
    <li>...</li>
    ...
  </ul>
  <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
</div>

# 使用
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper, {})
      })
    }
  }
```





