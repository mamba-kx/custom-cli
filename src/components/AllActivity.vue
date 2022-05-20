<template>
  <ul class="bannerList">
    <li v-for="item in hotActivitiesData" :key="item.id">
      <img class="banner" :src="item.icon" @click="skipToH5(item)" alt="" />
      <p class="activityName">{{ item.name }}</p>
    </li>
  </ul>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  components: {},
  setup() {
    let data = reactive({
      hotActivitiesData: [
        {
          icon: require('@/assets/newPeopleBanner.png'),
          name: '新人米粒大派送',
          url: 'https://zgcbma.zgcbank.com/zgctwo/#/'
        },
        {
          icon: require('@/assets/callFriendBanner.png'),
          name: '呼朋唤友赢好礼',
          url: 'https://zgcbma.zgcbank.com/zgcthree/#/'
        }
      ]
    });

    const skipToH5 = item => {
      window.location.href = item.url;
    };
    return {
      ...toRefs(data),
      skipToH5
    };
  }
};
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