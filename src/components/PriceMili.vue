<template>
  <ul class="priceWrapper">
    <li class="price" v-for="item in priceMiliDetail" :key="item.id">
      <div class="left">
        <p class="title">{{ item.title }}</p>
        <p class="date">入仓时间 {{ useChangeTime(item.date) }}</p>
      </div>
      <div class="right" :class="{ outMiliColor: item.miliNum < 0 }">
        {{ item.miliNum }}
      </div>
    </li>
  </ul>
</template>

<script>
import useChangeTime from '@/hooks/useTimeChange';
import { reactive, toRefs } from 'vue';
export default {
  components: {},
  props: {
    priceMiliDetail: {
      type: Array
    }
  },
  setup(props) {
    console.log(props);
    return {
      props,
      useChangeTime
    };
  }
};
</script>

<style lang='scss' scoped>
.priceWrapper {
  /* height: 60vh; */
  overflow: scroll;
  .price {
    display: flex;
    align-items: center;
    padding: 20px 40px;
    justify-content: space-between;
    border-bottom: 1px solid #d1cdcd;
    .left {
      .date {
        font-size: 24px;
        color: #948d8d;
      }
      p {
        padding: 10px 0;
      }
    }
    .right {
      color: orange;
      font-weight: 600;
    }
    .outMiliColor{
      color: #948d8d;
    }
  }
}
</style>