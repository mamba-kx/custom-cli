<template>
  <van-button type="success" block @click="skipHomePage">Demo组件</van-button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const skipHomePage = () => {
  router.push("/");
};

</script>

<style lang="scss" scoped>
</style>
