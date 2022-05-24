<template>
  <HeaderVue>我的粮仓</HeaderVue>
  <div class="title">
    <p class="miliNum">
      <span class="num">{{ myGranaryData.miliNum }}</span>
      <span>-米粒</span>
    </p>
    <p class="overdue">
      <span @click="showRule">米粒永久有效</span>
    </p>
    <div class="useMiliDetail">
      <p>
        <span>累计收入</span>
        <span class="mili">{{ myGranaryData.miliInput }}</span>
      </p>
      <p>
        <span>累计支出</span>
        <span class="mili">{{ myGranaryData.miliOutput }}</span>
      </p>
    </div>
    <p class="notice">获取的米粒将于派发日12点前入仓</p>
  </div>
  <div class="content">
    <van-tabs>
      <van-tab title="全部">
        <Suspense>
          <template v-slot:default>
            <PriceMili :priceMiliDetail="allPriceMiliDetail"></PriceMili>
          </template>
          <template v-slot:fallback><LoadingVue /></template>
        </Suspense>
      </van-tab>
      <van-tab title="入仓">
        <Suspense>
          <template v-slot:default>
            <PriceMili :priceMiliDetail="inputMili"></PriceMili>
          </template>
          <template v-slot:fallback><LoadingVue /></template>
        </Suspense>
      </van-tab>
      <van-tab title="出仓">
        <Suspense>
          <template v-slot:default>
            <PriceMili :priceMiliDetail="outputMili"></PriceMili>
          </template>
          <template v-slot:fallback><LoadingVue /></template>
        </Suspense>
      </van-tab>
    </van-tabs>
  </div>

  <ShadowVue :isShow="isShowShadow">
    <div class="miliOverdueRule" @click="hiddenRule"></div>
  </ShadowVue>
</template>

<script lang="ts">
import ShadowVue from '@/components/Shadow.vue';
import HeaderVue from '@/components/Header.vue';
import LoadingVue from '@/components/Loading.vue';
import { priceMiliDetail, myGranaryData } from '@/mock/index';
import { IPriceMiliDetail } from '@/interface';
import {
  ref,
  reactive,
  defineAsyncComponent,
  computed,
  defineComponent,
  toRefs
} from 'vue';
const PriceMili = defineAsyncComponent(
  () => import('@/components/PriceMili.vue')
);
export default defineComponent({
  components: { HeaderVue, ShadowVue, PriceMili, LoadingVue },
  setup() {
    let isShowShadow = ref(false);
    let detailMili: IPriceMiliDetail = {
      input: [],
      output: []
    };
    let data = reactive({ detailMili });

    setTimeout(() => {
      data.detailMili = priceMiliDetail;
    }, 200);

    // 全部
    let allPriceMiliDetail = computed(() => {
      const { input, output } = priceMiliDetail;
      return input.concat(output).sort((a, b) => {
        return a.date - b.date;
      });
    });

    // 入仓
    let inputMili = computed(() => {
      const { input } = priceMiliDetail;
      return input.sort((a, b) => {
        return a.date - b.date;
      });
    });

    // 出仓
    let outputMili = computed(() => {
      const { output } = priceMiliDetail;
      return output.sort((a, b) => {
        return a.date - b.date;
      });
    });

    // 显示米粒失效规则
    const showRule = () => {
      isShowShadow.value = true;
    };

    // 关闭米粒失效规则
    const hiddenRule = () => {
      isShowShadow.value = false;
    };
    return {
      ...toRefs(data),
      isShowShadow,
      myGranaryData,
      showRule,
      hiddenRule,
      allPriceMiliDetail,
      inputMili,
      outputMili
    };
  }
});
</script>

<style lang='scss' scoped>
.wrapper {
  width: $width;
  margin: 0 auto;
}
.title {
  height: 310px;
  width: 100%;
  background: url('@/assets/myGranaryBg.png') no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: fixed;
  top: $height;
  z-index: 99;
  .miliNum {
    text-align: center;
    .num {
      font-size: 65px;
      margin-right: 10px;
    }
  }
  .overdue {
    opacity: 0.5;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin-right: 40px;
    margin-left: auto;
    width: 100%;
    font-size: 24px;
  }
  .useMiliDetail {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    .mili {
      font-size: 50px;
      margin-left: 15px;
    }
  }
  .notice {
    text-align: center;
    font-size: 24px;
    opacity: 0.5;
  }
}
.content {
  position: relative;
  top: 395px;
}

::v-deep .van-tabs__wrap {
  position: fixed;
  height: 60px;
  width: 100vw;
  z-index: 99;
}

::v-deep .van-tabs__content {
  position: relative;
  top: 80px;
}

.miliOverdueRule {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>