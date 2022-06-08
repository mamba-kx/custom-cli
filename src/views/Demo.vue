<template>
  <h1 @click="skipHomePage">Demo组件</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const skipHomePage = () => {
      router.push("/");
    };
    return {
      skipHomePage
    };
  }
});
</script>

<style lang="scss" scoped></style>
