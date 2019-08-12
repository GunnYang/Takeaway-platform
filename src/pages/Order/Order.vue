<template>
  <section class="order">
    <HeaderTop title="订单列表" />
    <!-- 未登陆界面 -->
    <section class="order-no-login"
      v-if="!userInfo._id">
      <img src="./images/order/person.png"
        alt="">
      <h3>登陆后查看外卖订单</h3>
      <button @click="toLoging">立即登录</button>
    </section>
    <!-- 登陆过后但是没有买东西 -->
    <section v-if="userInfo._id"
      v-show="isShow"
      class="order-text">
      <span>你的订单空空如也！</span><br>
      <button @click="toHome">去首页逛逛吧！</button>
    </section>

    <!-- 登陆过后买了东西结账 -->
    <section v-if="userInfo._id"
      v-show="!isShow">
      <div class="list-content">
        <ul>
          <li class="food"
            v-for="(food, index) in cartFoods"
            :key="index">
            <span class="name">{{food.name}}</span>
            <div class="price">
              <span>￥{{food.price}}</span>
            </div>
            <div class="cartcontrol-wrapper">
              <CartControl :food="food" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  </section>

</template>

<script>
import BScroll from "better-scroll";
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import { mapState, mapGetters } from "vuex";
import CartControl from "../../components/CartControl/CartControl.vue";
export default {
  data: {
    return() {
      isShow: true;
    }
  },
  components: {
    HeaderTop,
    CartControl
  },
  methods: {
    toLoging() {
      this.$router.push("/login");
    },
    toHome() {
      this.$router.push("/home");
    },
    _initScroll() {
      new BScroll(".list-content", {
        click: true
      });
    }
  },

  mounted() {
    this.$store.dispatch("getShopGoods");
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  computed: {
    ...mapState(["userInfo", "cartFoods"]),
    ...mapGetters(["totalCount"]),

    isShow() {
      if (this.totalCount === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';

.order {
  width: 100%;

  .order-no-login {
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
    text-align: center;

    >img {
      display: block;
      width: 100%;
      height: 100%;
    }

    >h3 {
      padding: 10px 0;
      font-size: 17px;
      color: #6a6a6a;
    }

    >button {
      display: inline-block;
      background: #02a774;
      font-size: 14px;
      color: #ffffff;
      border: 0;
      outline: none;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }

  .order-text {
    text-align: center;
    padding-top: 240px;

    button {
      margin-top: 20px;
      border-radius: 5px;
      background-color: white;
      width: 50%;
      color: #333;
      padding: 10px 0;
      border: 1px solid #aaaaaa;
    }
  }
}

.list-content {
  padding: 45px 18px 0;
  background: #fff;

  .food {
    position: relative;
    padding: 12px 0;
    box-sizing: border-box;
    bottom-border-1px(rgba(7, 17, 27, 0.1));

    .name {
      line-height: 24px;
      font-size: 14px;
      color: rgb(7, 17, 27);
    }

    .price {
      position: absolute;
      right: 90px;
      bottom: 12px;
      line-height: 24px;
      font-size: 14px;
      font-weight: 700;
      color: rgb(240, 20, 20);
    }

    .cartcontrol-wrapper {
      position: absolute;
      right: 0;
      bottom: 6px;
    }
  }
}
</style>