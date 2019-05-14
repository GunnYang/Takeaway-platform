<template>
    <section class="msite">
        <HeaderTop title="安阳工学院">
            <span slot="left" class="header_search">
                <i class="iconfont icon-sousuo"></i>
            </span>
            <span slot="right" class="header_login_text"> 
               登录|注册
            </span>
        </HeaderTop>

        <!-- 首页导航轮播图 -->
        <nav class="msite_nav">
            <!-- 轮播图容器 -->
            <div class="swiper-container">
                <!-- 轮播的内容 -->
                <div class="swiper-wrapper">
                    <!-- 轮播的一页内容 -->
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/1.png">
                            </div>
                            <span>豆类</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/2.png">
                            </div>
                            <span>蛋类</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/3.png">
                            </div>
                            <span>肉类</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/4.png">
                            </div>
                            <span>水果</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/5.png">
                            </div>
                            <span>香蕉</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/6.png">
                            </div>
                            <span>海鲜</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/7.png">
                            </div>
                            <span>圣女果</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/8.png">
                            </div>
                            <span>咖啡</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/9.png">
                            </div>
                            <span>果汁</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/10.png">
                            </div>
                            <span>葫芦</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/11.png">
                            </div>
                            <span>牛奶</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/12.png">
                            </div>
                            <span>咸蛋</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/13.png">
                            </div>
                            <span>肉脯</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/14.png">
                            </div>
                            <span>薯条</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/15.png">
                            </div>
                            <span>炸鸡</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/16.png">
                            </div>
                            <span>汉堡</span>
                        </a>
                    </div>
                </div>
                <!-- 轮播图分页的小圆点 -->
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!-- 首页的附近商家列表 -->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-dingdan"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <ShopList/>
        </div>
    </section>
    
</template>

<script>
// 引入轮播图样式
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import ShopList from '../../components/ShopList/ShopList.vue';
export default {
    mounted() {
        // 创建一个swiper的实例，实现轮播
        new Swiper ('.swiper-container',{
            // 循环
            loop:true,
            // 分页器
            pagination: {
                el: '.swiper-pagination',
            },

        })
    },
    components:{
       HeaderTop,
       ShopList
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite
    width 100%
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
    .header_login_text
        width 100%
        font-size 16px
        color #ffffff
        position absolute
        left 80%
        top 50%
        transform translateY(-50%)
    .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 45px
        height 200px
        background #ffffff
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
        background #ffffff
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