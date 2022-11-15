<template>
  <h1 @click="skipToHome">我是vite项目【Demo组件】</h1>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const skipToHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
