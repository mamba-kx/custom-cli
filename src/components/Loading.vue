<template>
  <div class="loading">
    <van-loading size="24px" vertical>加载中...</van-loading>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  components: {},
  setup() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>