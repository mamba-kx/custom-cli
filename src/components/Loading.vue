<template>
  <div class="loading">
    <van-loading size="24px" vertical>加载中...</van-loading>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    return {};
  }
});
</script>

<style lang='scss' scoped>
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>