<template>
  <div class="demo">
    <van-button type="primary" block @click="toHome">测试按钮</van-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    toHome() {
      this.$router.push('/');
    }
  },
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>