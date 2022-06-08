<template>
  <h1 @click="skipDemoPage">Home组件</h1>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useRouter } from "@/router/index";
// import { Route } from "vue-router";
export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    console.log(router);
    const skipDemoPage = () => {
      if (router) {
        // router.path = "demo";
      }
    };
    return {
      skipDemoPage
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
