<template>
  <ul class="bannerList">
    <li v-for="item in hotActivitiesData" :key="item.name">
      <img class="banner" :src="item.icon" @click="skipToH5(item)" alt="" />
      <p class="activityName">{{ item.name }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { hotActivitiesData } from '@/mock';

export default defineComponent({
  components: {},
  setup() {
    const skipToH5 = (item: any): void => {
      window.location.href = item.url;
    };

    return {
      hotActivitiesData,
      skipToH5
    };
  }
});
</script>

<style lang='scss' scoped>
.bannerList {
  position: absolute;
  top: $height;
  width: 92%;
  li {
    .banner {
      width: 100%;
      height: 300px;
      margin-bottom: 5px;
      border-radius: 10px;
    }
    .activityName {
      font-size: 28px;
      padding-bottom: 30px;
    }
  }
}
</style>