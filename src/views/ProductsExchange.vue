<template>
  <HeaderVue>商品兑换</HeaderVue>
  <div class="content">
    <div
      class="ticket"
      :style="{ backgroundImage: 'url(' + productDetailData.icon + ')' }"
    ></div>
    <div class="mili">
      <p class="miliNum">
        <span>{{ productDetailData.mili }}</span>
        <span>{{ productDetailData.price }}</span>
      </p>
      <p class="converted">
        <span>{{ productDetailData.title }}</span>
        <span>{{ productDetailData.converted }}</span>
      </p>
    </div>
    <div class="productDetail">
      <van-sidebar v-model="active">
        <van-sidebar-item title="商品详情" />
      </van-sidebar>
      <div v-html="unescape(productDetailData.productNotice)"></div>
      <p class="title">商品详情</p>
      <p class="convertDeclare">兑换领取说明</p>
    </div>
  </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue';
import { unescape } from 'html-escaper';
import { wxTickets } from '@/mock/wxTickets';
export default {
  components: { HeaderVue },
  setup() {
    let productDetailData = wxTickets[0];
    return {
      productDetailData,
      unescape
    };
  },
};
</script>

<style lang='scss' scoped>
.content {
  position: relative;
  top: $height;
  .ticket {
    width: 100%;
    height: 500px;
    background-color: rgb(126 112 112 / 22%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 75% 60%;
  }
  .mili {
    height: 150px;
    .miliNum {
      margin: 20px;
      & > :first-child {
        color: rgb(240 115 62 / 97%);
        font-size: 40px;
        font-weight: 500;
        margin-right: 30px;
      }
      & > :last-child {
        color: gray;
        text-decoration: line-through;
      }
    }
    .converted {
      & > :first-child {
        font-size: 28px;
        margin-left: 20px;
      }
      & > :last-child {
        float: right;
        margin-right: 20px;
        color: gray;
        font-weight: 500;
        font-size: 33px;
      }
    }
  }
  .productDetail {
    width: 94%;
    margin: 0 auto;
    word-break: break-all;
    .productNotice {
      font-size: 29px;
      .notice2 {
        color: red;
      }
    }
    .title {
      font-size: 35px;
      font-weight: 600;
      margin: 30px 0;
    }
    .convertDeclare {
      color: gray;
    }
  }
}
::v-deep .van-sidebar {
  width: auto;
}
::v-deep .van-sidebar-item__text {
  font-size: 20px !important;
}
::v-deep .van-sidebar-item--select:before {
  background-color: blue !important;
}
</style>