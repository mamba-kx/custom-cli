<template>
  <div class="wrapper">
    <van-button type="primary" block @click="skipDemoPage">Home组件</van-button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const skipDemoPage = () => {
  router.push("/demo");
};

</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: $height;
  @include top;
  background: skyblue;
}
</style>
