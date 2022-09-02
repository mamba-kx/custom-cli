<template>
  <div class="home">
    <van-button type="info" block @click="toDemo">首页按钮</van-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() { },
  mounted() { },
  methods: {
    toDemo() {
      this.$router.push('/demo');
    }
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.home {
  width: 100vw;
  height: $height;
  background: skyblue;
  @include top;
}
</style>