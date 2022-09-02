<template>
  <van-button type="primary" block @click="skipHomePage">测试按钮</van-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from '@/router';

export default defineComponent({
  name: 'DemoPage',
  setup() {
    const router = useRouter()
    const skipHomePage = () => {
      router.push('/');
    };
    return {
      skipHomePage
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
