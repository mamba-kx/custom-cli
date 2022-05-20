<template>
  <div class="title">活动</div>
  <div class="homeWrapper">
    <div class="headSection">
      <div class="head">
        <div class="headerWrapper">
          <div class="headPart">
            <div class="headIcon"></div>
            <span class="notice">您还没有登录</span>
          </div>
          <p class="noticePart">请登录后查看米粒</p>
          <div class="myOptionsPart">
            <button class="mine" @click="myMili">我的米粒</button>
            <button class="mine" @click="myRights">我的权益</button>
          </div>
        </div>
      </div>
      <div class="convertCenter">
        <div class="convert" v-for="item in convertCenterList" :key="item.name">
          <img
            class="icon"
            @click="skipConvertCenter(item)"
            :src="item.icon"
            alt=""
          />
          <p @click="skipConvertCenter(item)" class="callFriendICon">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="contentSection">
      <div class="content">
        <div class="hotActivities">
          <span class="hotTitle">热门活动</span>
          <div class="more" @click="moreActivity">
            <span>更多精彩</span>
            <img src="@/assets/rightIcon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="allActivity">
      <ul class="bannerList">
        <li v-for="item in hotActivitiesData" :key="item.id">
          <img class="banner" :src="item.icon" @click="skipToH5(item)" alt="" />
          <p class="activityName">{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <div class="footer">
      <p>客服热线：400-010-8858</p>
      <p>(工作日9:00-18:00)</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    let data = reactive({
      convertCenterList: [
        {
          icon: require('@/assets/giftIcon.png'),
          name: '兑换中心'
        },
        {
          icon: require('@/assets/callFriendIcon.png'),
          name: '呼朋唤友赢好礼',
          url: 'https://zgcbma-uat.zgcbank.com/zgcthree/#/'
        }
      ],
      hotActivitiesData: [
        {
          id: 1,
          icon: require('@/assets/newPeopleBanner.png'),
          name: '新人米粒大派送',
          url: 'https://zgcbma.zgcbank.com/zgctwo/#/'
        },
        {
          id: 2,
          icon: require('@/assets/callFriendBanner.png'),
          name: '呼朋唤友赢好礼',
          url: 'https://zgcbma.zgcbank.com/zgcthree/#/'
        }
      ]
    });

    const router = useRouter();

    // 跳转更多精彩
    const moreActivity = () => {
      router.push('/moreActivity');
    };

    // 跳转兑换中心
    const skipConvertCenter = item => {
      if (item.name === '兑换中心') {
        router.push('/convertCenter');
      } else {
        window.location.href = item.url;
      }
    };

    // 跳转我的米粒
    const myMili = () => {
      router.push('/myGranary');
    };

    // 跳转我的权益
    const myRights = () => {
      router.push('/myRight');
    };

    return {
      ...toRefs(data),
      moreActivity,
      skipConvertCenter,
      myMili,
      myRights
    };
  }
};
</script>

<style lang='scss' scoped>
.title {
  width: 100%;
  line-height: $height;
  font-weight: 600;
  font-size: 38px;
  letter-spacing: 5px;
  background-color: #fff;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 99;
}
.homeWrapper {
  width: 100vw;
  background-color: #e5e5e5;
  position: relative;
  top: $height;

  .headSection {
    .head {
      width: 100%;
      height: 330px;
      background: url('@/assets/blueBg.png') no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: 100% 330px;
      background-color: #fff;
      .headerWrapper {
        .headPart {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          .headIcon {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            background: url('@/assets/headIcon.png') no-repeat;
            background-position: center;
            background-size: contain;
            display: flex;
            justify-content: space-between;
            margin-right: 10px;
          }
          .notice {
            color: #fff;
            font-weight: 600;
          }
        }
        .noticePart {
          color: #fff;
          text-align: center;
          font-size: 24px;
          font-weight: 600;

          margin: 20px 0;
        }
        .myOptionsPart {
          display: flex;
          width: 360px;
          justify-content: space-between;
          .mine {
            border-radius: 50px;
            outline: none;
            border: none;
            width: 160px;
            height: 50px;
            color: #325ae0;
            font-size: 30px;
            background: linear-gradient(180deg, #fefeff, #c4d2fb);
          }
        }
      }
    }
    .convertCenter {
      height: 220px;
      display: flex;
      background-color: #fff;
      .convert {
        width: 50%;
        text-align: center;
        .icon {
          width: 60px;
          height: 60px;
          margin: 60px auto 5px;
        }
        .callFriendICon {
          font-size: 24px;
        }
      }
    }
  }
  .contentSection {
    width: 100%;
    background-color: #fff;
    margin-top: 15px;
    .content {
      width: $width;
      margin: 0 auto;
      .hotActivities {
        padding: 25px 0;
        display: flex;
        justify-content: space-between;
        .hotTitle {
          font-size: 35px;
          font-weight: 800;
        }
        .more {
          display: flex;
          align-items: center;
          font-size: 30px;
          font-weight: 500;

          img {
            width: 20px;
            height: 30px;
            margin-left: 10px;
          }
        }
      }
    }
  }
  .allActivity {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #fff;
    .bannerList {
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
  }
  .footer {
    text-align: center;
    color: #a2a2a2;
    font-size: 24px;
    padding: 30px 0;
    background-color: #e5e5e5;
  }
}
</style>