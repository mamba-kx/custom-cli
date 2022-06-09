<template>
  <h1 @click="skipHomePage">Demo组件</h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Demo",
  setup(props, { root }) {
    const skipHomePage = () => {
      root.$router.push("/");
    };
    return {
      skipHomePage
    };
  }
});
</script>

<style scoped></style>
