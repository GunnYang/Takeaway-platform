<template>
    <section class="profile">
        <!-- 顶部 -->
        <HeaderTop title="我的"/>
        <!-- 登录注册部分 -->
        <section class="profile-number">
            <router-link :to="userInfo._id ? '/userinfo' : '/login'" class="profile_link">
                <div class="profile_image">
                    <i class="iconfont icon-yonghuming"></i>
                </div>
                <div class="user-info">
                    <p class="user-info-top" v-if="!userInfo.phone">{{ userInfo.name || '登录/注册'}}</p>
                    <p>
                        <span class="user-icon">
                            <i class="iconfont icon-msnui-tel icon-mobile"></i>
                        </span>
                        <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
                    </p>
                </div>
                <span class="arrow">
                    <i class="iconfont icon-previewright"></i>
                </span>
            </router-link>
        </section>
        <!-- 余额、优惠、积分部分 -->
        <section class="profile_info_data border-1px">
            <ul class="info_data_list">
                <a href="javascript:" class="info_data_link">
                    <span class="info_data_top"><span>0.00</span>元</span>
                    <span class="info_data_bottom">我的余额</span>
                </a>
                <a href="javascript:" class="info_data_link">
                    <span class="info_data_top"><span>0</span>个</span>
                    <span class="info_data_bottom">我的优惠券</span>
                </a>
                <a href="javascript:" class="info_data_link">
                    <span class="info_data_top"><span>0</span>分</span>
                    <span class="info_data_bottom">我的积分</span>
                </a>
            </ul>
        </section>
        <!-- 我的订单 -->
        <section class="profile_my_order border-1px">
            <a href="javascript:" class="my_order">
                <span>
                    <i class="iconfont icon-dingdan"></i>
                </span>
                <div class="my_order_div">
                    <span>我的订单</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-previewright"></i>
                    </span>
                </div>
                
            </a>
            <!-- 积分商城 -->
            <a href="javascript:" class="my_order">
                <span>
                    <i class="iconfont icon-jifen"></i>
                </span>
                <div class="my_order_div">
                    <span>积分商城</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-previewright"></i>
                    </span>
                </div>
            </a>
            <!-- 外卖会员卡 -->
            <a href="javascript:" class="my_order">
                <span>
                    <i class="iconfont icon-viptehuishiduan"></i>
                </span>
                <div class="my_order_div">
                    <span>外卖会员卡</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-previewright"></i>
                    </span>
                </div>
            </a>
            <!-- 服务中心 -->
            <a href="javascript:" class="my_order">
                <span>
                    <i class="iconfont icon-lianxikefu"></i>
                </span>
                <div class="my_order_div">
                    <span>服务中心</span>
                    <span class="my_order_icon">
                        <i class="iconfont icon-previewright"></i>
                    </span>
                </div>
            </a>
        </section>
        <!-- 退出登录 -->
        <section class="profile_my_order border-1px">
            <mt-button type="danger" style="width:100%" 
            @click="logout" v-if="userInfo._id"> 退出登录</mt-button>
        </section>
    </section>
   
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue';
import {mapState} from 'vuex'
import { MessageBox, Toast } from 'mint-ui'
export default {
    components:{
        HeaderTop
    },
    computed:{
        ...mapState(['userInfo'])
    },
    methods:{
        logout(){
            MessageBox.confirm('确定退出吗？').then(
                action => {
                    // 请求退出
                    this.$store.dispatch('logout')
                    Toast('退出成功')
                },
                action => {
                    console.log('取消登录') 
                }

            )
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl";
// @import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
.profile
    width 100%
    overflow hidden
    .profile-number
        margin-top 45.5px
        .profile_link
            clearFix()
            position relative
            display block
            background #02a774
            padding 20px 10px
            .profile_image
                float left
                width 60px
                height 60px
                border-radius 50%
                overflow hidden
                vertical-align top
                .icon-yonghuming
                    background #e4e4e4
                    font-size 62px
        .user-info
            float left
            margin-top 8px
            margin-left 15px
            p
                font-weight 700
                font-size 18px
                color #ffffff
                &.user-info-top
                    padding-bottom 8px
                .user-icon
                    display inline-block
                    margin-left -15px
                    margin-right 5px
                    width 20px
                    height 20px
                    .icon-mobile
                        font-size 24px
                        vertical-align text-top
                .icon-msnui-tel
                    font-size 20px  
                    color #fff
                    
        .arrow
            width 12px
            height 12px
            position absolute
            right 15px
            top 40%
            .icon-previewright
                color #ffffff
                font-size 15px
    .profile_info_data
        bottom-border-1px(#e4e4e4)
        width 100%
        background #fff
        overflow hidden
        .info_data_list
            clearFix()
            .info_data_link
                float left
                width 33%
                text-align center 
                border-right 1px solid #f1f1f1
                .info_data_top
                    display block
                    width 100%
                    font-size 14px
                    color #333
                    padding 15px 5px 10px
                    span   
                        display inline-block
                        font-size 30px
                        color #ff9900
                        font-weight 700
                        line-height 30px
                .info_data_bottom
                    display inline-block
                    font-size 14px
                    color #666
                    font-weight 400
                    padding-bottom  10px
            .info_data_link:nth-of-type(2)
                .info_data_top
                    span 
                        color #ff5f3e
            .info_data_link:nth-of-type(3)
                border 0
                .info_data_top
                    span 
                        color #6ac20b
    .profile_my_order
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #ffffff
        .my_order
            display flex
            align-items center
            padding-left 15px
            >span 
                display flex
                alig-items center
                width 20px
                height 20px
                >.iconfont
                    margin-left -10px
                    font-size 24px
                .icon-dingdan
                    color #02a774
                .icon-jifen 
                    color #ff5f3e
                .icon-viptehuishiduan
                    color #02a774
            .my_order_div
                width 100%
                border-bottom 1px solid #f1f1f1
                padding 18px 10px 18px 0
                font-size 18px
                color #333
                display flex
                justify-content space-between
                span 
                    display block
                .my_order_icon
                    width 10px
                    height 10px
                    .icon-previewright
                        color #bbbbbb
                        font-size 16px


            
</style>