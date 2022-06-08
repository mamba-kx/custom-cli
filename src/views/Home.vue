<template>
  <h1 @click="skipDemoPage">Home组件</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const skipDemoPage = () => {
      router.push("/demo");
    };
    return {
      skipDemoPage
    };
  }
});
</script>

<style lang="scss" scoped></style>
