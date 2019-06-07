<template>
    <div class="star" :class="'star-'+size">
        <span class="star-item" v-for="(sc,index) in starClasses" :key="index" :class="sc"></span>
    </div> 
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLAS_OFF = 'off'
export default {
   props:{
       score: Number,
       size: Number
   },
    computed:{
        starClasses(){
            // 获取分数
            const {score} = this 
            const starArr = []
            // 求得分数的整数位
            const scoreInterger =  Math.floor(score)
            // 把整数位记录下来
            for(let i=0;i < scoreInterger; i++){
                starArr.push(CLASS_ON)
            }
            // 如何小数位大于等于0.5，那么加入半个星星
            if(score*10 - scoreInterger*10 >=5){
                starArr.push(CLASS_HALF)
            }
            // 塞满五个
            while(starArr.length < 5){
                starArr.push(CLAS_OFF)
            }
            return starArr
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
