<template>
  <div class="wrap">
    <HeaderVue>订单列表</HeaderVue>
    <div class="contentWrapper">
      <van-tabs>
        <van-tab title="未使用">
          <van-list>
            <div class="content">
              <div v-if="orderdataList.unused?.length">
                <ul>
                  <li
                    class="unusedTicket"
                    v-for="item in orderdataList.unused"
                    :key="item.id"
                  >
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
                            @click="copyCDKEY()"
                            :data-clipboard-text="item?.CDKEYUrl"
                          >
                            {{ item.copyCDKEY }}
                          </span>
                          <span class="shareBtn">
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
          <van-list>
            <div class="content">
              <div v-if="orderdataList.used?.length">
                <ul>
                  <li
                    class="unusedTicket"
                    v-for="item in orderdataList.used"
                    :key="item.id"
                  >
                    <!-- 订单完成 -->
                    <p class="time">
                      <span>
                        {{ item.time }}
                      </span>
                      <span>
                        {{ item.orderCompletion }}
                      </span>
                    </p>
                    <!-- 已使用券 -->
                    <div class="detailTicket">
                      <div class="left"></div>
                      <div class="right">
                        <p>{{ item.ticketName }}</p>
                        <p class="deadline">{{ item.deadline }}</p>
                        <div class="shareBtnBox">
                          <span
                            class="shareBtn copyCDKEY"
                            @click="copyCDKEY()"
                            :data-clipboard-text="item?.CDKEYUrl"
                          >
                            {{ item.copyCDKEY }}
                          </span>
                          <span class="shareBtn">
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
  </div>
</template>

<script lang="ts">
import HeaderVue from '@/components/Header.vue';
import { ref, defineComponent, reactive, toRefs } from 'vue';
import Clipboard from 'clipboard';
import { Toast } from 'vant';
import { orderData } from '@/mock';
import { IOrderdata } from '@/interface';
export default defineComponent({
  components: { HeaderVue },
  setup() {
    let copy = new Clipboard('.copyCDKEY');
    let loading = ref(false);
    let finished = ref(false);
    let orderdataList: IOrderdata = {
      unused: [],
      used: []
    };
    let data = reactive({ orderdataList });

    setTimeout(() => {
      data.orderdataList = orderData;
    }, 500);

    const copyCDKEY = () => {
      copy.on('success', () => {
        Toast('复制成功');
        // 释放内存
        copy.destroy();
      });
    };

    return {
      ...toRefs(data),
      loading,
      finished,
      copyCDKEY
    };
  }
});
</script>

<style lang='scss' scoped>
.wrap {
  height: 100vh;
  background-color: #e6e1e15c;
}
.contentWrapper {
  position: relative;
  top: $height;
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
}
</style>