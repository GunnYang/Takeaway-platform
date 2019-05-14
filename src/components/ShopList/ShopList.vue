<template>
    <div class="shop_container">
        <ul class="shop_list">
            <!-- 每一件商品 -->
            <li class="shop_li border-1px">
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/bread.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <!-- 派送 -->
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/fish.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/meat.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/rice.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/bread.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/fish.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/meat.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
                <a>
                    <div class="shop_left">
                        <img class="shop_img" src="./images/rice.jpg">
                    </div>
                    <div class="shop_right">
                        <!-- 食物的名字和标签 -->
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">食物的列表</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports">
                                    快
                                </li>
                                <li class="supports">
                                    准
                                </li>
                            </ul>
                        </section>
                        <!-- 评分和月售单数 -->
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star  :size="24"></Star>
                                <div class="rating_section">
                                    4.1
                                </div>
                                <div class="order_section">
                                    月售106单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">美团外送</span>
                            </section>
                        </section>
                        <!-- 配送费约¥3和配送起步价格 -->
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥3</span>
                            </p>
                        </section>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .shop_container
    margin-bottom 50px
    .shop_list
    .shop_li
      bottom-border-1px(#f1f1f1)
      width 100%
      >a
        clearFix()
        display block
        box-sizing border-box
        padding 15px 8px
        width 100%
        .shop_left
          float left
          box-sizing border-box
          width 23%
          height 75px
          padding-right 10px
          .shop_img
            display block
            width 100%
            height 100%
        .shop_right
          float right
          width 77%
          .shop_detail_header
            clearFix()
            width 100%
            .shop_title
              float left
              width 200px
              color #333
              font-size 18px
              line-height 18px
              font-weight 700
              &::before
                content 'Hot'
                display inline-block
                font-size 12px
                line-height 12px
                color #333
                background-color #ffd930
                padding 2px 2px
                border-radius 2px
                margin-right 5px
            .shop_detail_ul
              float right
              margin-top 3px
              .supports
                float left
                font-size 12px
                color #999
                border 1px solid #f1f1f1
                padding 0 2px
                border-radius 2px
          .shop_rating_order
            clearFix()
            width 100%
            margin-top 18px
            margin-bottom 8px
            .shop_rating_order_left
              float left
              color #ff9a0d
              .rating_section
                float left
                font-size 12px
                color #ff6000
                margin-left 4px
              .order_section
                float left
                font-size 12px
                color #666
                transform scale(.8)
            .shop_rating_order_right
              float right
              font-size 0
              .delivery_style
                transform-origin 35px 0
                transform scale(.7)
                display inline-block
                font-size 14px
                padding 1px
                border-radius 2px
              .delivery_left
                color #fff
                margin-right -10px
                background-color #02a774
                border 1px solid #02a774
              .delivery_right
                color #02a774
                border 1px solid #02a774
          .shop_distance
            clearFix()
            width 100%
            font-size 12px
            .shop_delivery_msg
              float left
              transform-origin 0
              transform scale(.9)
              color #666
            .segmentation
              color #ccc
</style>
