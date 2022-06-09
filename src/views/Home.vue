<template>
  <h1 @click="skipDemoPage">Home组件</h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
  name: "Home",
  setup(props, { root }) {
    console.log(root);
    const skipDemoPage = () => {
      root.$router.push("/demo");
    };
    return {
      skipDemoPage
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
