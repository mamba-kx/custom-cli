<template>
  <van-tabs v-model:active="active">
    <van-tab title="微信立减券">
      <Suspense>
        <template v-slot：default>
          <AllTickets :tickets="iCanConver.wxTickets"></AllTickets>
        </template>
        <template v-slot:fallback>加载中...</template>
      </Suspense>
      <p class="promise">我们承诺：一旦缺货将会尽最大努力迅速补足。</p>
      <p class="notice">
        截至目前为止，微信立减券凡兑换过快导致缺货的，均已在七日内完成了补货。
      </p>
    </van-tab>
    <van-tab title="京东e卡">
      <Suspense>
        <template v-slot：default>
          <AllTickets :tickets="iCanConver.jdeTickets"></AllTickets>
        </template>
        <template v-slot:fallback>加载中...</template>
      </Suspense>
    </van-tab>
    <van-tab title="加油卡">
      <Suspense>
        <template v-slot：default>
          <AllTickets :tickets="iCanConver.oilTickets" />
        </template>
        <template v-slot:fallback>加载中...</template>
      </Suspense>
    </van-tab>
    <van-tab title="创业专享">
      <Suspense>
        <template v-slot：default>
          <AllTickets :tickets="iCanConver.workShare" />
        </template>
        <template v-slot:fallback>加载中...</template>
      </Suspense>
    </van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { reactive, toRefs, defineAsyncComponent, defineComponent } from 'vue';
import { iCanConver } from '@/mock/index';
import { Toast } from 'vant';
const AllTickets = defineAsyncComponent(
  () => import('@/components/AllTickets.vue')
);
export default defineComponent({
  components: { AllTickets },
  setup() {
    let data = reactive({
      active: 0,
      loading: false
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        data.loading = false;
      });
    };
    return { ...toRefs(data), onRefresh, iCanConver };
  }
});
</script>

<style lang='scss' scoped>
::v-deep .van-tab {
  flex: 1 !important;
}
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
.promise {
  text-align: center;
  color: red;
  font-size: 24px;
  margin: 15px;
  font-weight: 600;
}
.notice {
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 40px;
}
</style>