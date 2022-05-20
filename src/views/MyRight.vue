<template>
  <div class="wrap">
    <HeaderVue>订单列表</HeaderVue>
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab title="未使用">
        <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
          <div class="content" v-if="!loading">
            <div v-if="unused.length">
              <ul>
                <li class="unusedTicket" v-for="item in unused" :key="item.id">
                  <!-- 订单完成 -->
                  <p class="time">
                    <span>
                      {{ item.time }}
                    </span>
                    <span>
                      {{ item.orderCompletion }}
                    </span>
                  </p>
                  <!-- 未使用券 -->
                  <div class="detailTicket">
                    <div class="left"></div>
                    <div class="right">
                      <p>{{ item.ticketName }}</p>
                      <p class="deadline">{{ item.deadline }}</p>
                      <div class="shareBtnBox">
                        <span
                          class="shareBtn copyCDKEY"
                          @click="copyCDKEY(item.shareTime)"
                          :data-clipboard-text="item.CDKEYUrl"
                        >
                          {{ item.copyCDKEY }}
                        </span>
                        <span class="shareBtn" @click="share">
                          {{ item.share }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="shareTimes">
                    <span class="times">
                      分享/复制次数：{{ item.shareTime }}
                    </span>
                    <p class="markUsed">
                      <span class="markText">标记为已使用</span>
                      <van-switch
                        v-model="item.isUsed"
                        active-color="#ee0a24"
                        inactive-color="#dcdee0"
                      />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <p class="noData" v-else>暂无订单数据</p>
          </div>
        </van-list>
      </van-tab>
      <van-tab title="已使用">
        <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
          <div class="content" v-if="!loading">
            <div v-if="unused.length">
              <ul>
                <li class="unusedTicket" v-for="item in unused" :key="item.id">
                  <!-- 订单完成 -->
                  <p class="time">
                    <span>
                      {{ item.time }}
                    </span>
                    <span>
                      {{ item.orderCompletion }}
                    </span>
                  </p>
                  <!-- 未使用券 -->
                  <div class="detailTicket">
                    <div class="left"></div>
                    <div class="right">
                      <p>{{ item.ticketName }}</p>
                      <p class="deadline">{{ item.deadline }}</p>
                      <div class="shareBtnBox">
                        <span
                          class="shareBtn copyCDKEY"
                          @click="copyCDKEY(item.shareTime)"
                          :data-clipboard-text="item.CDKEYUrl"
                        >
                          {{ item.copyCDKEY }}
                        </span>
                        <span class="shareBtn" @click="share">
                          {{ item.share }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="shareTimes">
                    <span class="times">
                      分享/复制次数：{{ item.shareTime }}
                    </span>
                    <p class="markUsed">
                      <span class="markText">标记为已使用</span>
                      <van-switch
                        v-model="item.isUsed"
                        active-color="#ee0a24"
                        inactive-color="#dcdee0"
                      />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <p class="noData" v-else>暂无订单数据</p>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue';
import { ref, reactive, toRefs } from 'vue';
import Clipboard from 'clipboard';
import { Toast } from 'vant';
import debounce from '@/rpf/un/debounce';
export default {
  components: { HeaderVue },
  setup() {
    let copy = new Clipboard('.copyCDKEY');

    let loading = ref(false);
    let finished = ref(false);
    let orderData = reactive({
      unused: [],
      used: []
    });

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      orderData.unused = [
        {
          id: 1,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          CDKEYUrl: 'https:/sw.suhan.cn/wedswedr?s=w151',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        },
        {
          id: 2,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        },
        {
          id: 2,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        },
        {
          id: 2,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        },
        {
          id: 2,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        },
        {
          id: 2,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        },
        {
          id: 2,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        },
        {
          id: 2,
          time: '领取日期为 2022/05/11 10:42:14',
          orderCompletion: '订单完成',
          ticketImg: '',
          ticketName: '微信立减券(2元)',
          deadline: '到期/激活时间 2023-06-01 23:00:00',
          copyCDKEY: '复制兑换码链接',
          share: '分享到微信',
          shareTime: 0,
          isUsed: false
        }
      ];
      if (orderData.unused.length) {
        // 加载状态结束
        loading.value = false;
        finished.value = true;
      }
      // }, 1000);
    };

    const onClickTab = debounce(function () {
      finished.value = false;
      loading.value = false;
      onLoad();
    });

    const copyCDKEY = item => {
      copy.on('success', () => {
        Toast('复制成功');
        console.log(item);
        setTimeout(() => {
          orderData.unused = [
            {
              id: 1,
              time: '领取日期为 2022/05/11 10:42:14',
              orderCompletion: '订单完成',
              ticketImg: '',
              ticketName: '微信立减券(2元)',
              deadline: '到期/激活时间 2023-06-01 23:00:00',
              copyCDKEY: '复制兑换码链接',
              CDKEYUrl: 'https:/sw.suhan.cn/wedswedr?s=w151',
              share: '分享到微信',
              shareTime: item++,
              isUsed: false
            },
            {
              id: 2,
              time: '领取日期为 2022/05/11 10:42:14',
              orderCompletion: '订单完成',
              ticketImg: '',
              ticketName: '微信立减券(2元)',
              deadline: '到期/激活时间 2023-06-01 23:00:00',
              copyCDKEY: '复制兑换码链接',
              share: '分享到微信',
              shareTime: item++,
              isUsed: false
            }
          ];
        }, 500);
        // 释放内存
        copy.destroy();
      });
    };

    return {
      onLoad,
      loading,
      finished,
      ...toRefs(orderData),
      onClickTab,
      copyCDKEY
    };
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  height: 100vh;
  background-color: #e6e1e15c;
}
.content {
  overflow: scroll;
  .unusedTicket {
    width: 95%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 20px;
    margin-top: 20px;
    .time {
      padding: 15px 0;
      display: flex;
      width: 92%;
      margin: 0 auto;
      justify-content: space-between;
      font-size: 26px;
      color: rgb(142 136 136);
    }
    .detailTicket {
      width: 92%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 20px 0 40px;
      .left {
        width: 150px;
        height: 100px;
        background: url(@/assets/wxTicket.jpeg) no-repeat;
        background-position: center;
        background-size: contain;
        margin-right: 25px;
      }
      .right {
        .deadline {
          font-size: 26px;
          color: rgb(142 136 136);
          margin: 10px 0 5px 0;
        }
        .shareBtnBox {
          display: flex;
          .shareBtn {
            display: block;
            width: 200px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            border: 1px solid orange;
            font-size: 26px;
            border-radius: 50px;
            color: orange;
            background-color: #fff;
            margin-right: 20px;
          }
        }
      }
    }
    .shareTimes {
      width: 92%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      padding: 20px 0;
      border-top: 2px solid #f8f1f1;
      .times {
        color: orange;
      }
      .markUsed {
        display: flex;
        align-items: center;
        .markText {
          color: rgb(142 136 136);
        }
        ::v-deep .van-switch {
          margin-left: 10px;
        }
      }
    }
  }
  .noData {
    text-align: center;
    font-size: 35px;
    color: #ccc;
    margin: 40px 0;
  }
}
::v-deep .van-tabs{
  position: relative;
}
</style>