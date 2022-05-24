<template>
  <ul class="wxTicketWrapper" v-if="tickets.length">
    <li v-for="item in tickets" :key="item.id">
      <div class="icon" @click="skipToProductDetail(item)">
        <img :src="item.icon" alt="" />
      </div>
      <p class="title">{{ item.title }}</p>
      <p class="miliBox">
        <span class="mili">{{ item.miliNum }}</span>
        <span>米粒</span>
      </p>
      <p class="enough" :class="{ repertoryEnough: item.enough }">
        {{ item.enough === 0 ? '库存紧张' : '库存充足' }}
      </p>
    </li>
  </ul>
  <div class="noProduct" v-else>该分类下暂无可兑换商品</div>
</template>

<script lang="ts">
import { reactive, toRefs, toRaw, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  components: {},
  props: ['tickets'],
  setup() {
    let data = reactive({
      loading: false
    });
    const router = useRouter();
    const skipToProductDetail = (item: any) => {
      let data = JSON.stringify(toRaw(item));
      router.push({ name: 'productsExchange', params: { data } });
    };
    return {
      ...toRefs(data),
      skipToProductDetail
    };
  }
});
</script>

<style lang='scss' scoped>
.wxTicketWrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  li {
    margin: 20px 15px;
    .icon {
      width: 200px;
      height: 220px;
      background-color: #f3f5f9;
      position: relative;
      img {
        width: 85%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .title {
      font-size: 26px;
    }
    .miliBox {
      font-size: 24px;
      .mili {
        color: #ee7f30;
        font-weight: 600;
      }
    }
    .enough {
      color: rgb(238, 64, 48);
      font-size: 24px;
      font-weight: 600;
    }
    .repertoryEnough {
      color: rgb(7, 187, 85);
    }
  }
}
.noProduct {
  text-align: center;
  color: #ccc;
  margin: 40px 0;
}
</style>