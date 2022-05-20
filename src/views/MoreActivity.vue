<template>
  <Header>全部活动</Header>
  <div class="wrapper">
    <div class="allActivity">
      <Suspense>
        <template v-slot:default>
          <AllActivity />
        </template>
        <template v-slot:fallback>
          <p>加载中...</p>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
const Header = defineAsyncComponent(() => import('@/components/Header.vue'));
const AllActivity = defineAsyncComponent(() =>
  import('@/components/AllActivity.vue')
);

export default {
  components: { AllActivity, Header },
  setup() {
    const router = useRouter();
    const backHome = () => {
      router.push('/');
    };
    return {
      backHome
    };
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
  width: $width;
  height: 100vh;
  margin: 0 auto;
}
</style>