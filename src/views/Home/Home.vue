<template>
  <div class="home">
    <van-button type="info" block @click="toDemo">首页按钮</van-button>
    {{ url }}
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: window.$CONFIG.baseUrl
    };
  },
  created() {},
  mounted() {},
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
</style>