<template>
    <section class="msite">
        <HeaderTop :title="address.name">
            <router-link slot="left" class="header_search" to="/search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>

            <router-link slot="right" class="header_login" :to="userInfo._id ? '/userinfo' : '/login'"> 
                <span class="header_login_text" v-if="!userInfo._id">
                    登录|注册
                </span>
               <span class="header_login_text" v-else>
                   <i class="iconfont icon-yonghuming"></i>
               </span>
            </router-link>
        </HeaderTop>

        <!-- 首页导航轮播图 -->
        <nav class="msite_nav">
            <!-- 轮播图容器 -->
            <div class="swiper-container" v-if="categorys.length">
                <!-- 轮播的内容 -->
                <div class="swiper-wrapper">
                    <!-- 轮播的一页内容 -->
                    <div class="swiper-slide" v-for="(pages,index) in categorysArr" :key="index">
                        <a href="javascript:" class="link_to_food" v-for="(data,index) in pages" :key="index">
                            <div class="food_container">
                                <img :src=baseImageUrl+data.image_url>
                            </div>
                            <span>{{data.title}}</span>
                        </a>
                        
                    </div>
                    
                </div>
                <!-- 轮播图分页的小圆点 -->
                <div class="swiper-pagination"></div>
            </div>
            <img src="./images/msite_back.svg" alt="back" v-else>
        </nav>
        <!-- 首页的附近商家列表 -->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-dingdan"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <ShopList></ShopList>
        </div>
    </section>
    
</template>

<script>
// 引入轮播图样式
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import ShopList from '../../components/ShopList/ShopList.vue';
import {mapState} from 'vuex'
export default {
    data(){
        return {
            baseImageUrl: 'https://fuss10.elemecdn.com'
        }
    },
    computed:{
        ...mapState(['address','categorys','userInfo']),
        categorysArr(){
            // 先从当前组件中获取到所有食物的分类一维数组
            const {categorys} = this
            // 准备一个二维数组
            const arr =[]
            // 准备一个一页一位数组
            let minArr = []
            categorys.forEach(data => {
                // 满八个创建一个新的
                if(minArr.length === 8){
                    minArr = []
                }
                // 把满8的小数组放在大数组里面
                if(minArr.length === 0){
                    arr.push(minArr)
                }
                minArr.push(data)   
            });
            return arr
        },
    },
    mounted() {
        this.$store.dispatch('getCategorys')
        this.$store.dispatch('getShops')
    },
    watch:{
        // categorys数组中有数据了 但界面还没有异步更新
        categorys (value){
             // 在修改数据之后立即使用它，然后等待 DOM 更新。
            this.$nextTick(() => {
                    // 创建一个swiper的实例，实现轮播
                new Swiper ('.swiper-container',{
                    // 循环
                    loop:true,
                    // 分页器
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            })
        }
    },
    components:{
       HeaderTop,
       ShopList
    },
    
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
 .msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 16px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
</style>