const myGranaryData = {
  miliNum: 0,
  miliInput: 0,
  miliOutput: 0
};

const homeIcon = {
  convertCenterList: [
    {
      icon: require("@/assets/giftIcon.png"),
      name: "兑换中心"
    },
    {
      icon: require("@/assets/callFriendIcon.png"),
      name: "呼朋唤友赢好礼",
      url: "https://zgcbma-uat.zgcbank.com/zgcthree/#/"
    }
  ],
  hotActivitiesData: [
    {
      id: 1,
      icon: require("@/assets/newPeopleBanner.png"),
      name: "新人米粒大派送",
      url: "https://zgcbma-uat.zgcbank.com/zgctwo/#/"
    },
    {
      id: 2,
      icon: require("@/assets/callFriendBanner.png"),
      name: "呼朋唤友赢好礼",
      url: "https://zgcbma-uat.zgcbank.com/zgcthree/#/"
    }
  ]
};

const iCanConver = {
  wxTickets: [
    {
      id: 1,
      icon: require("@/assets/wxTicketIcon.jpeg"),
      title: "微信立减券(2元)",
      miliNum: "2000",
      enough: 0,
      mili: "5米粒",
      price: "市场价 ¥ 0",
      converted: "已兑 5 件",
      isConvert: true,
      productNotice:
        "&lt;p&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(23,27,37);font-size:14px&quot;&gt;温馨提示：使用微信立减券的订单若发生&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(255,0,0);font-size:14px&quot;&gt;部分退款，按比例退还用户实际支付金额，剩余金额不支持退回，且微信立减券不支持退回微信卡包&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(23,27,37);font-size:14px&quot;&gt;。&lt;/span&gt;&lt;span style=&quot;;font-family:PingFangSC-Medium;color:rgb(23,27,37);font-size:14px&quot;&gt;&amp;nbsp;&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(23,27,37);font-size:14px&quot;&gt;详见&lt;/span&gt;&lt;span style=&quot;;font-family:PingFangSC-Medium;color:rgb(23,27,37);font-size:14px&quot;&gt;“&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(23,27,37);font-size:14px&quot;&gt;使用须知&lt;/span&gt;&lt;span style=&quot;;font-family:PingFangSC-Medium;color:rgb(23,27,37);font-size:14px&quot;&gt;”&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(23,27,37);font-size:14px&quot;&gt;，请谨慎操作。&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(23,27,37);font-size:16px&quot;&gt;商品详情&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;兑&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;换领取说明&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;点击下方【&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;立即兑换&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;】，根据相应米粒数进行兑换，成功后将立减券&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;分享到【微信】&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;-&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;【文件传输助手】&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;打开微信点击该立减券，进入界面点击&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;“&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;一键领取&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;”&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;领取成功后，可在微信点击【我】&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;-&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;【卡包】，在卡包界面点击【券和礼品卡】，查看已领取的立减券。&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;自领取之日起&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;有效期最长三个月&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;，实际以立减券上面的有效期为准，&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;请及时使用&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;。&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;使用须知&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;该立减券&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;仅支持在微信钱包&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(255,0,0);font-size:14px&quot;&gt;绑定北京中关村银行账户&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;进行消费支付时使用&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;，账户包括&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;借记卡和&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;II&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;类户&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;，消费金额需满&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;2.01&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元。&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;立减券需一次性使用完毕，不兑换、不找零，到期后自动失效，逾期未使用不再补发。不可撤销、不可转让、不可重复使用、不退现金。&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;享受微信立减券优惠的订单若发生退款，退还规则如下：&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;如发生部分退款&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;，则按比例退还用户实际支付金额，&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;因立减券已使用且不可拆分不找零，不支持退回客户微信卡包。&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;&lt;br/&gt;&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;如：订单总额为&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;200&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元，用户实际支付&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;100&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元，同时使用了面额&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;100&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元的微信立减券，当用户向商家申请部分退货并退款&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;50&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元时，按照支付比例，用户实际收到退款金额为&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;25&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元，剩余金额&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;25&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元不支持退回，且&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;100&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;元微信立减券不支持退回微信卡包。&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;如发生全额退款&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;，仅退客户实际订单支付的金额，立减券如在有效期内则退回给客户继续使用；&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;退回的立减券若已过有效期则无法使用，且不予补发。&lt;/span&gt;&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;当您的订单由于商户收取手续费，&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;导致非全额退款，微信立减券不支持退回微信卡包。&lt;/span&gt;&lt;/strong&gt;&lt;strong&gt;&lt;/strong&gt;&lt;/p&gt;&lt;p style=&quot;margin-top:7px;margin-bottom:7px;margin-top:auto;margin-bottom:auto;text-align:justify;text-justify:inter-ideograph&quot;&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;该立减券&lt;/span&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;color:rgb(237,125,49);font-size:14px&quot;&gt;支持微信收款的各类签约商户&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;，举个栗子：餐饮、购物、加油、打车、娱乐等场景；线上消费支付也适用于京东、天猫超市、盒马、每日优鲜等。&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;以下情形，不可使用立减券抵扣&lt;/span&gt;&lt;/strong&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;：社交支付&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;(&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;个人转账、红包等&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;)&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;、面对面支付&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;(&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;使用个人收款码支付&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;)&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;、合单支付&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;(&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;微信支付订单号为&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;&amp;nbsp;44&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;开头的订单&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;)&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;、理财、生活缴费及少数特定商户&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;(CoCo&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;奶茶、优衣库、星巴克、肯德基、必胜客、热风、太平鸟、孩子王、航联保险、华为商城、&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;Miss Sixty&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;、&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;Ochirly&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;、&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;&amp;nbsp;Apple &lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;商城、&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;Five Plus&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;、&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;711 &lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;便利店、零钱通、理财通等&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;)&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;、部分线下商户扫码后出现&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;“&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;向&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;**&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;转账&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;”&lt;/span&gt;&lt;span style=&quot;;font-family:宋体;font-size:14px&quot;&gt;是商户使用个人收款码进行的转账交易。&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;"
    }
  ],
  jdeTickets: [
    {
      id: 1,
      icon: require("@/assets/jdeTicket.jpeg"),
      title: "京东e卡(50元)",
      miliNum: "2000",
      enough: 0,
      mili: "5米粒",
      price: "市场价 ¥ 0",
      converted: "已兑 5 件",
      productNotice: {
        notice1: "温馨提示：使用微信立减券的订单若发生",
        notice2:
          "部分退款，按比例退还用户实际支付金额，剩余余额不支持退回，且微信立减券不支持退回微信卡包。",
        notice3: "详见“使用须知”，请谨慎操作。"
      }
    },
    {
      id: 2,
      icon: require("@/assets/jdeTickets.jpeg"),
      title: "京东e卡(100元)",
      miliNum: "2000",
      enough: 1,
      mili: "5米粒",
      price: "市场价 ¥ 0",
      converted: "已兑 5 件",
      productNotice: {
        notice1: "温馨提示：使用微信立减券的订单若发生",
        notice2:
          "部分退款，按比例退还用户实际支付金额，剩余余额不支持退回，且微信立减券不支持退回微信卡包。",
        notice3: "详见“使用须知”，请谨慎操作。"
      }
    }
  ],
  oilTickets: [
    {
      id: 1,
      icon: require("@/assets/oilTickets.jpeg"),
      title: "中石油加油卡(100元)",
      miliNum: "10000",
      enough: 1,
      mili: "5米粒",
      price: "市场价 ¥ 0",
      converted: "已兑 5 件",
      productNotice: {
        notice1: "温馨提示：使用微信立减券的订单若发生",
        notice2:
          "部分退款，按比例退还用户实际支付金额，剩余余额不支持退回，且微信立减券不支持退回微信卡包。",
        notice3: "详见“使用须知”，请谨慎操作。"
      }
    },
    {
      id: 2,
      icon: require("@/assets/oilTicket.jpeg"),
      title: "中石化加油卡(200元)",
      miliNum: "20000",
      enough: 0,
      mili: "5米粒",
      price: "市场价 ¥ 0",
      converted: "已兑 5 件",
      productNotice: {
        notice1: "温馨提示：使用微信立减券的订单若发生",
        notice2:
          "部分退款，按比例退还用户实际支付金额，剩余余额不支持退回，且微信立减券不支持退回微信卡包。",
        notice3: "详见“使用须知”，请谨慎操作。"
      }
    }
  ],
  workShare: []
};

const priceMiliDetail = {
  input: [
    {
      id: 1,
      title: "助力升级米粒奖励",
      date: 1652256242461,
      miliNum: "+62"
    },
    {
      id: 2,
      title: "创业升级米粒奖励",
      date: 1652256222461,
      miliNum: "+2"
    },
    {
      id: 3,
      title: "助力升级米粒奖励",
      date: 1622256222461,
      miliNum: "+2"
    },
    {
      id: 4,
      title: "创业升级米粒奖励",
      date: 1646102562000,
      miliNum: "+200"
    }
  ],
  output: [
    {
      id: 1,
      title: "积分兑换2元微信立减券",
      date: 1624924562000,
      miliNum: "-800"
    },
    {
      id: 2,
      title: "积分兑换京东e卡（5元）",
      date: 1624934562000,
      miliNum: "-2500"
    },
    {
      id: 3,
      title: "积分兑换2元微信立减券",
      date: 1624931562000,
      miliNum: "-200"
    },
    {
      id: 2,
      title: "积分兑换2元微信立减券",
      date: 1624934862000,
      miliNum: "-200"
    }
  ]
};

const orderData = {
  unused: [
    {
      id: 1,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",
      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",

      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",

      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",

      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",

      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",

      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",

      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      share: "分享到微信",
      shareTime: 0,
      isUsed: false
    }
  ],
  used: [
    {
      id: 1,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",
      share: "分享到微信",
      shareTime: 0,
      isUsed: true
    },
    {
      id: 2,
      time: "领取日期为 2022/05/11 10:42:14",
      orderCompletion: "订单完成",
      ticketImg: "",
      ticketName: "微信立减券(2元)",
      deadline: "到期/激活时间 2023-06-01 23:00:00",
      copyCDKEY: "复制兑换码链接",
      CDKEYUrl: "https:/sw.suhan.cn/wedswedr?s=w151",
      share: "分享到微信",
      shareTime: 0,
      isUsed: true
    }
  ]
};

const hotActivitiesData = [
  {
    icon: require("@/assets/newPeopleBanner.png"),
    name: "新人米粒大派送",
    url: "https://zgcbma.zgcbank.com/zgctwo/#/"
  },
  {
    icon: require("@/assets/callFriendBanner.png"),
    name: "呼朋唤友赢好礼",
    url: "https://zgcbma.zgcbank.com/zgcthree/#/"
  }
];

export {
  myGranaryData,
  homeIcon,
  iCanConver,
  priceMiliDetail,
  orderData,
  hotActivitiesData
};
