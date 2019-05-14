<template>
    <div id="app">
        <router-view></router-view>
        <FooterGudie v-show="$route.meta.showFooter"></FooterGudie>
    </div>
</template>

<script>
import FooterGudie from './components/FooterGudie/FooterGudie.vue'
export default {
    components:{
        FooterGudie
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
