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
      <van-sidebar>
        <van-sidebar-item title="商品详情" />
      </van-sidebar>
      <div v-html="unescape(productDetailData.productNotice)"></div>
    </div>
    <div class="footer">
      <span>您的米粒不足</span>
      <span @click="gotoActivity" class="gotoActivity">
        去参加活动赚取米粒 > >
      </span>
    </div>
  </div>
  <div class="convert">
    <div class="handleMili">
      <span class="num">数量</span>
      <div class="decrease">-</div>
      <input
        class="convertMili"
        v-model="miliNum"
        :disabled="productDetailData.isConvert"
      />
      <div class="add">+</div>
    </div>
    <div class="convertBtn">立即兑换</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import HeaderVue from '@/components/Header.vue';
import { unescape } from 'html-escaper';
import { iCanConver } from '@/mock/index';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: { HeaderVue },
  setup() {
    let productDetailData = iCanConver.wxTickets[0];
    let miliNum = ref(1);
    const router = useRouter();
    const gotoActivity = () => {
      router.push('/moreActivity');
    };
    return {
      productDetailData,
      unescape,
      miliNum,
      gotoActivity
    };
  }
});
</script>

<style lang='scss' scoped>
.content {
  position: relative;
  top: $height;
  height: 177vh;
  overflow: scroll;
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
  }
  .footer {
    margin: 0 auto;
    padding: 20px 0;
    height: 30px;
    display: flex;
    justify-content: space-between;
    background-color: rgb(243, 202, 209);
    span {
      margin: 0 20px;
      font-size: 26px;
    }
    .gotoActivity {
      color: #eb1717;
    }
  }
}
.convert {
  width: 100%;
  height: 150px;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  background-color: #fff;
  .handleMili {
    display: flex;
    margin-left: 30px;
    color: rgb(145, 136, 136);
    align-items: center;
    .num {
      font-size: 26px;
    }
    .decrease {
      width: 40px;
      height: 35px;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 35px;
      margin-left: 10px;
      font-size: 50px;
    }
    .convertMili {
      width: 50px;
      height: 35px;
      border: 1px solid #ccc;
      margin: 0 5px;
      text-align: center;
      line-height: 40px;
      font-size: 26px;
    }
    .add {
      width: 40px;
      height: 35px;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 35px;
    }
  }
  .convertBtn {
    width: 300px;
    height: 70px;
    border-radius: 50px;
    outline: none;
    background-color: rgb(126 112 112 / 22%);
    line-height: 80px;
    text-align: center;
    color: rgb(142, 135, 135);
    margin-right: 30px;
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