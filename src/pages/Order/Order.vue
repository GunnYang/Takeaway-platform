<template>
    <section class="order">
        <HeaderTop title="订单列表"/>
        <section class="order-no-login">
            <img src="./images/order/person.png" alt="">
            <h3>登陆后查看外卖订单</h3>
            <button>立即登录</button>
        </section>
    </section>
   
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components:{
        HeaderTop
    }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl";
.order
    width 100%
    .order-no-login
        padding-top 140px
        width 60%
        margin 0 auto 
        text-align center
        >img 
            display block
            width 100%
            height 100%
        >h3 
            padding 10px 0
            font-size 17px
            color #6a6a6a
        >button 
            display inline-block
            background #02a774
            font-size 14px
            color #ffffff
            border 0
            outline none 
            border-radius 5px
            padding 10px 20px
</style>