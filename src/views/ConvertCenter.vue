<template>
  <HeaderVue>兑换中心</HeaderVue>
  <div class="wrapper">
    <div class="tab">
      <div class="tabBox">
        <span
          class="all"
          :class="{ heightLight: isSelected }"
          @click="iCanConvert"
        >
          我能兑换
        </span>
        <span class="all">全部</span>
      </div>
    </div>
    <van-divider />
    <Suspense>
      <template v-slot:default>
        <AllConver />
      </template>
      <template v-slot:fallback>
        <AllConver />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { ref, defineAsyncComponent, defineComponent } from 'vue';
import HeaderVue from '@/components/Header.vue';
const AllConver = defineAsyncComponent(
  () => import('@/components/AllConver.vue')
);

export default defineComponent({
  components: { HeaderVue, AllConver },
  setup() {
    const isSelected = ref(false);
    const iCanConvert = () => {
      isSelected.value = true;
    };
    return { isSelected, iCanConvert };
  }
});
</script>

<style lang='scss' scoped>
.wrapper {
  width: $width;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  top: $height;
  .tab {
    .tabBox {
      margin: 20px 0;
      text-align: right;
      .all {
        margin-left: 30px;
        color: #a2a2a2;
      }
      .heightlight {
        color: #000;
      }
    }
  }
}
</style>