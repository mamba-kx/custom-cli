<template>
  <div class="wrapper">
    <van-button type="info" block @click="skipDemoPage">首页按钮</van-button>
  </div>
</template>

<script lang="ts">
import { useRouter } from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const router = useRouter();

    const skipDemoPage = () => {
      router.push('/demo');
    };
    return {
      skipDemoPage
    };
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  height: $height;
  background: skyblue;

  .van-button {
    @include top;
  }
}
</style>
