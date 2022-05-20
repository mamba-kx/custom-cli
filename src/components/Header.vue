<template>
  <div class="header">
    <img
      class="leftIcon"
      @click="backHome"
      src="@/assets/leftIcon.png"
      alt=""
    />
    <div class="title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const backHome = () => {
      router.go('-1');
    };
    return {
      backHome
    };
  }
};
</script>

<style lang='scss' scoped>
.header {
  height: $height;
  text-align: center;
  position: fixed;
  width: 100vw;
  z-index: 99;
  top: 0;
  background-color: #fff;
  .leftIcon {
    width: 35px;
    position: absolute;
    z-index: 100;
    top: 25px;
    left: 25px;
  }
  .title {
    font-weight: 600;
    font-size: 34px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>