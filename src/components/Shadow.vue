<template>
  <van-overlay :show="isShow">
    <div class="wrapper">
      <slot></slot>
    </div>
  </van-overlay>
</template>

<script lang="ts">
import { ref,defineComponent } from 'vue';
export default defineComponent({
  components: {},
  props: {
    isShow: Boolean
  },
  setup(props) {
    console.log(props);
    let isShow = ref(props.isShow);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      isShow
    };
  }
});
</script>

<style lang='scss' scoped>
.van-overlay {
  position: fixed;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>