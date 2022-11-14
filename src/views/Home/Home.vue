<template>
  <h1 @click="skipToDemo">我是vite项目【Home组件】</h1>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const skipToDemo = () => {
  router.push("/demo");
};
</script>

<style lang="scss" scoped></style>
